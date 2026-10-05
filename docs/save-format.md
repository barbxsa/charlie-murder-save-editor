# `game.sav` format

Charlie Murder (Steam/PC) is an FNA/.NET game. Its save is written with
`System.IO.BinaryWriter`, so:

- integers and floats are **little-endian** (`int32`, `float32`, `int64`);
- `bool` is one byte;
- `string` is a 7-bit encoded length followed by UTF-8 bytes.

There is **no checksum, compression or encryption**. The only checks the game
makes on load are the header value and two text markers (`sanestats`, `sane`).

Location: `%APPDATA%\CharlieMurder\game.sav` (the game also writes
`scores.sav`, `config.ini` and `controls.ini` there).

## Top level

| Type | Field | Notes |
| --- | --- | --- |
| int32 | version | always `5143132` (`0x4E7A5C`); other values trigger "save version mismatch" |
| string | profile name | Steam persona name |
| RosterChar × 20 | roster | see below |
| int64 × 5 | scores | brains, damage, food, hocked, looted |
| … | achievements | one record per achievement (variable) |
| string | `"sane"` | end marker |

## Roster

20 slots = 4 bands × 5 characters. Slot index = `character + band * 5`, with
characters in this order: **Charlie, Lester, Tommy, Rex, Kelly**.

### RosterChar

| Type | Field |
| --- | --- |
| InvLoot × 101 | inventory |
| CharStats | stats |
| float32 | hp |
| string | `"sanestats"` marker |
| bool × 32 | level-up unlocks |
| int32 | skill points |
| int32 + string × n | flags |
| int32 + string × n | completed maps |
| int32 | level points |
| int32 | followers |
| float32 | cash |
| int32 + (int32 id, bool read) × n | e-mails |

### CharStats

| Type | Field |
| --- | --- |
| bool × 7 | tattoos |
| int32 × 6 | special move slots |
| int32 × 9 | magic |
| int32 × 6 | stats: 0 Strength, 1 Defense, 2 Speed, 3 Anar-Chi, 4–5 unused |
| int32 × 4 | equipped clothing (inventory slot, `-1` = none) |
| bool × 4 | clothing visibility |
| (bool, int32) × 100 | relic slots |

### InvLoot

Starts with an `int32` type:

| Type | Meaning | Payload |
| --- | --- | --- |
| 0 | empty | — |
| 1 | clothing | `Clothes` master + `ClothesAttribs` |
| 2 | food | `int32 count` + `Food` |
| 3 | relic | `int32 count`, `int32 relic id` |
| 4 | misc item | `int32 count`, `int32 def id`, `int32 flags` |

**Clothes (master):** `int32 type` (0 shirt, 1 head, 2 gloves), `bool altImg`,
`int32 layerCount`, then per layer `string name` + 12 × `float32`
(rgba, max rgba, min rgba); then `string name`, `int32 level`, `int32 yOffset`.

**ClothesAttribs:** `string name`, `int32 strength`, `int32 speed`,
`int32 defense`, `int32 anarchi`, `int32 level`, `int32 rarity` (0–4),
4 × (`int32 type`, `int32 power`) special bonuses, `float32 price`.

**Food:** `string name`, `int32 level`, `int32 image`, `int32 eatenImage`,
`int32 type`, `int32 strength`, `int32 speed`, `int32 defense`,
`int32 anarchi`, `string description`, `int32 hp`, `int32 mp`,
`float32 price`, `int32 flags`.

## Special bonus types

Index into the game's bonus name table (`i_*` strings in the localization):

| # | Bonus | # | Bonus | # | Bonus |
| --- | --- | --- | --- | --- | --- |
| 0 | Strength | 13 | Acid Resist | 26 | Req. Anar-Chi |
| 1 | Defense | 14 | Leech | 27 | Rapid Jabs! |
| 2 | Speed | 15 | Knockback | 28 | Block to Cooldown |
| 3 | Anar-Chi | 16 | Cooldown | 29 | Shockwave Slams! |
| 4 | HP | 17 | Wounding | 30 | Shockwave Falldown |
| 5 | Cooldown | 18 | Stun | 31 | Shockwave Counter! |
| 6 | Fire | 19 | Crit | 32 | Stasis |
| 7 | Thunder | 20 | Frost | 33 | Wave Uppercut |
| 8 | Poison | 21 | Dark Fire | 34 | Wave Kick |
| 9 | Acid | 22 | Food Power | 35 | Blink |
| 10 | Fire Resist | 23 | Req. Strength | 36 | Bruiser |
| 11 | Thunder Resist | 24 | Req. Speed | | |
| 12 | Poison Resist | 25 | Req. Defense | | |

A slot with power `0` is inactive.

## How the editor writes

The parser records the byte offset of every editable number. Saving copies the
original bytes and overwrites only those offsets, so the file keeps its size and
everything the editor doesn't understand (achievements, relics, e-mails,
layer colors) is preserved exactly. Text fields such as item names are
length-prefixed and are therefore read-only in the editor.
