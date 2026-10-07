/**
 * Builds synthetic game.sav files that follow the same layout the game writes
 * (see docs/save-format.md). Tests use these instead of real saves, which
 * contain the player's Steam name.
 */
import { CHARACTERS_PER_BAND, INVENTORY_SIZE, ROSTER_SIZE, SAVE_MAGIC } from "../../src/save/format";

class Writer {
  private chunks: number[] = [];
  u8(v: number) { this.chunks.push(v & 0xff); return this; }
  bool(v: boolean) { return this.u8(v ? 1 : 0); }
  i32(v: number) { const b = new DataView(new ArrayBuffer(4)); b.setInt32(0, v, true); for (let i = 0; i < 4; i++) this.u8(b.getUint8(i)); return this; }
  f32(v: number) { const b = new DataView(new ArrayBuffer(4)); b.setFloat32(0, v, true); for (let i = 0; i < 4; i++) this.u8(b.getUint8(i)); return this; }
  i64(v: number) { const b = new DataView(new ArrayBuffer(8)); b.setBigInt64(0, BigInt(v), true); for (let i = 0; i < 8; i++) this.u8(b.getUint8(i)); return this; }
  str(s: string) {
    const bytes = new TextEncoder().encode(s);
    let n = bytes.length;
    do { let b = n & 0x7f; n >>>= 7; if (n) b |= 0x80; this.u8(b); } while (n);
    bytes.forEach((b) => this.u8(b));
    return this;
  }
  bytes() { return new Uint8Array(this.chunks); }
}

export interface ClothingSpec {
  kind: "clothing"; slot: number; clothingType: number; name: string; layers?: string[];
  strength?: number; speed?: number; defense?: number; anarchi?: number; level?: number; rarity?: number;
  specials?: [number, number][]; price?: number;
}
export interface FoodSpec { kind: "food"; slot: number; name: string; count?: number; strength?: number; hp?: number; price?: number }
export interface RelicSpec { kind: "relic"; slot: number; count?: number; relicId: number }
export interface MiscSpec { kind: "misc"; slot: number; count?: number; defId: number }
export type ItemSpec = ClothingSpec | FoodSpec | RelicSpec | MiscSpec;

export interface CharSpec {
  items?: ItemSpec[]; stats?: [number, number, number, number]; equipped?: [number, number, number, number];
  cash?: number; followers?: number; tattoos?: boolean[]; unlocks?: number[]; levelPoints?: number; skillPoints?: number; flags?: string[]; maps?: string[]; emails?: number;
}

export function writeSave(profile: string, chars: Record<number, CharSpec> = {}, achievementBytes = 64): Uint8Array {
  const w = new Writer();
  w.i32(SAVE_MAGIC).str(profile);
  for (let r = 0; r < ROSTER_SIZE; r++) {
    const c = chars[r] ?? {};
    const bySlot = new Map((c.items ?? []).map((i) => [i.slot, i]));
    for (let s = 0; s < INVENTORY_SIZE; s++) {
      const it = bySlot.get(s);
      if (!it) { w.i32(0); continue; }
      if (it.kind === "clothing") {
        const layers = it.layers ?? ["layer_a"];
        w.i32(1).i32(it.clothingType).bool(false).i32(layers.length);
        for (const l of layers) { w.str(l); for (let k = 0; k < 12; k++) w.f32(1); }
        w.str(it.name).i32(it.level ?? 1).i32(0);
        w.str(it.name).i32(it.strength ?? 0).i32(it.speed ?? 0).i32(it.defense ?? 0).i32(it.anarchi ?? 0).i32(it.level ?? 1).i32(it.rarity ?? 0);
        const sp = it.specials ?? [];
        for (let k = 0; k < 4; k++) w.i32(sp[k]?.[0] ?? 0).i32(sp[k]?.[1] ?? 0);
        w.f32(it.price ?? 1);
      } else if (it.kind === "food") {
        w.i32(2).i32(it.count ?? 1).str(it.name).i32(1).i32(0).i32(0).i32(0)
          .i32(it.strength ?? 0).i32(0).i32(0).i32(0).str("").i32(it.hp ?? 0).i32(0).f32(it.price ?? 1).i32(0);
      } else if (it.kind === "relic") {
        w.i32(3).i32(it.count ?? 1).i32(it.relicId);
      } else {
        w.i32(4).i32(it.count ?? 1).i32(it.defId).i32(0);
      }
    }
    // Fresh-character defaults as the game writes them (CharStats.ClearTattoos).
    const tat = c.tattoos ?? [];
    for (let k = 0; k < 7; k++) w.bool(Boolean(tat[k]));
    [0, -1, -1, -1, 0, 8].forEach((v) => w.i32(v));
    const magic = [0, -1, -1, -1, -1, -1, -1, -1, 8];
    tat.forEach((on, k) => {
      if (on) magic[magic.indexOf(-1)] = k + 1;
    });
    magic.forEach((v) => w.i32(v));
    const st = c.stats ?? [0, 0, 0, 0];
    st.forEach((v) => w.i32(v)); w.i32(0).i32(0);
    (c.equipped ?? [-1, -1, -1, -1]).forEach((v) => w.i32(v));
    for (let k = 0; k < 4; k++) w.bool(true);
    for (let k = 0; k < 100; k++) w.bool(false).i32(0);
    w.f32(300).str("sanestats");
    for (let k = 0; k < 32; k++) w.bool((c.unlocks ?? [3]).includes(k));
    w.i32(c.skillPoints ?? 0);
    const flags = c.flags ?? []; w.i32(flags.length); flags.forEach((f) => w.str(f));
    const maps = c.maps ?? []; w.i32(maps.length); maps.forEach((f) => w.str(f));
    w.i32(c.levelPoints ?? 0).i32(c.followers ?? 0).f32(c.cash ?? 0);
    w.i32(c.emails ?? 0); for (let k = 0; k < (c.emails ?? 0); k++) w.i32(k).bool(true);
  }
  for (let k = 0; k < 5; k++) w.i64(1000 + k);
  for (let k = 0; k < achievementBytes; k++) w.bool(k % 3 === 0);
  w.str("sane");
  return w.bytes();
}

export const bandIndex = (band: number, character: number) => (band - 1) * CHARACTERS_PER_BAND + character;
