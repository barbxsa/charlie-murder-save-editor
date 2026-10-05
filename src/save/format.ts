/**
 * Reader/writer for Charlie Murder's `game.sav` (Steam/PC, FNA build).
 *
 * The file is written by .NET's BinaryWriter: little-endian numbers and
 * strings prefixed by a 7-bit encoded length. There is no checksum or
 * encryption. See docs/save-format.md for the full layout.
 *
 * Editing strategy: every editable value is recorded together with its byte
 * offset, and `buildSave` patches those offsets in a copy of the original
 * bytes. Nothing else in the file is re-serialized, so unknown or unedited
 * data is always preserved exactly.
 */

export const SAVE_MAGIC = 5143132;
export const ROSTER_SIZE = 20;
export const INVENTORY_SIZE = 101;
export const CHARACTERS_PER_BAND = 5;
export const SPECIAL_SLOTS = 4;
export const SPECIAL_TYPE_COUNT = 37;

/** Character order inside each band, from the game's character select screen. */
export const CHARACTER_NAMES = ["Charlie", "Lester", "Tommy", "Rex", "Kelly"] as const;

export type FieldKind = "i32" | "f32";

/** An editable number stored at a fixed offset in the file. */
export interface Field {
  readonly offset: number;
  readonly kind: FieldKind;
  readonly original: number;
  value: number;
}

export interface SpecialBonus {
  type: Field;
  power: Field;
}

export interface ClothingItem {
  kind: "clothing";
  slot: number;
  /** 0 = shirt, 1 = head, 2 = gloves. */
  clothingType: number;
  layers: string[];
  name: string;
  strength: Field;
  speed: Field;
  defense: Field;
  anarchi: Field;
  level: Field;
  rarity: Field;
  specials: SpecialBonus[];
  price: Field;
}

export interface FoodItem {
  kind: "food";
  slot: number;
  name: string;
  count: Field;
  level: Field;
  strength: Field;
  speed: Field;
  defense: Field;
  anarchi: Field;
  hp: Field;
  mp: Field;
  price: Field;
}

export interface RelicItem {
  kind: "relic";
  slot: number;
  count: Field;
  relicId: number;
}

export interface MiscItem {
  kind: "misc";
  slot: number;
  count: Field;
  defId: number;
}

export type InventoryItem = ClothingItem | FoodItem | RelicItem | MiscItem;

export interface RosterCharacter {
  index: number;
  name: string;
  band: number;
  items: InventoryItem[];
  /** Strength, Defense, Speed, Anar-Chi (level-up order used by the game). */
  stats: [Field, Field, Field, Field];
  /** Inventory slot of each equipped clothing piece, -1 when empty. */
  equipped: number[];
  hp: Field;
  skillPoints: Field;
  levelPoints: Field;
  followers: Field;
  cash: Field;
  flags: string[];
  completedMaps: string[];
  /** True when the slot has any progress (used to hide untouched slots). */
  hasProgress: boolean;
}

export interface SaveFile {
  bytes: Uint8Array;
  profileName: string;
  roster: RosterCharacter[];
  fields: Field[];
}

export class SaveFormatError extends Error {
  constructor(
    readonly code:
      | "bad_magic"
      | "truncated"
      | "unknown_item"
      | "bad_marker"
      | "bad_footer",
    readonly details: Record<string, string | number> = {},
  ) {
    super(code);
    this.name = "SaveFormatError";
  }
}

const decoder = new TextDecoder();

class Reader {
  private readonly view: DataView;
  pos = 0;
  constructor(readonly bytes: Uint8Array) {
    this.view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  }
  need(n: number): void {
    if (this.pos + n > this.bytes.length) throw new SaveFormatError("truncated", { offset: this.pos });
  }
  skip(n: number): void {
    this.need(n);
    this.pos += n;
  }
  u8(): number {
    this.need(1);
    return this.bytes[this.pos++];
  }
  i32(): number {
    this.need(4);
    const v = this.view.getInt32(this.pos, true);
    this.pos += 4;
    return v;
  }
  f32(): number {
    this.need(4);
    const v = this.view.getFloat32(this.pos, true);
    this.pos += 4;
    return v;
  }
  string(): string {
    let len = 0;
    let shift = 0;
    let byte: number;
    do {
      byte = this.u8();
      len |= (byte & 0x7f) << shift;
      shift += 7;
    } while (byte & 0x80);
    this.need(len);
    const s = decoder.decode(this.bytes.subarray(this.pos, this.pos + len));
    this.pos += len;
    return s;
  }
}

export function parseSave(input: ArrayBuffer | Uint8Array): SaveFile {
  const bytes = input instanceof Uint8Array ? input.slice() : new Uint8Array(input.slice(0));
  const r = new Reader(bytes);
  const fields: Field[] = [];
  const field = (kind: FieldKind): Field => {
    const offset = r.pos;
    const v = kind === "f32" ? r.f32() : r.i32();
    const f: Field = { offset, kind, original: v, value: v };
    fields.push(f);
    return f;
  };
  const i32 = () => field("i32");
  const f32 = () => field("f32");

  const magic = r.i32();
  if (magic !== SAVE_MAGIC) throw new SaveFormatError("bad_magic", { found: magic });
  const profileName = r.string();

  const roster: RosterCharacter[] = [];
  for (let index = 0; index < ROSTER_SIZE; index++) {
    const items: InventoryItem[] = [];
    for (let slot = 0; slot < INVENTORY_SIZE; slot++) {
      const type = r.i32();
      switch (type) {
        case 0:
          break;
        case 1: {
          // Clothes.WriteMaster
          const clothingType = r.i32();
          r.u8(); // altImg
          const layerCount = r.i32();
          const layers: string[] = [];
          for (let l = 0; l < layerCount; l++) {
            layers.push(r.string());
            r.skip(12 * 4); // rgba, max rgba, min rgba
          }
          r.string(); // master name
          r.i32(); // master level
          r.i32(); // yOffset
          // ClothesAttribs.Write
          const name = r.string();
          const item: ClothingItem = {
            kind: "clothing",
            slot,
            clothingType,
            layers,
            name,
            strength: i32(),
            speed: i32(),
            defense: i32(),
            anarchi: i32(),
            level: i32(),
            rarity: i32(),
            specials: [],
            price: undefined as unknown as Field,
          };
          for (let s = 0; s < SPECIAL_SLOTS; s++) item.specials.push({ type: i32(), power: i32() });
          item.price = f32();
          items.push(item);
          break;
        }
        case 2: {
          const count = i32();
          const name = r.string();
          const level = i32();
          r.i32(); // image
          r.i32(); // eaten image
          r.i32(); // food type
          const strength = i32();
          const speed = i32();
          const defense = i32();
          const anarchi = i32();
          r.string(); // description
          const hp = i32();
          const mp = i32();
          const price = f32();
          r.i32(); // flags
          items.push({ kind: "food", slot, name, count, level, strength, speed, defense, anarchi, hp, mp, price });
          break;
        }
        case 3: {
          const count = i32();
          items.push({ kind: "relic", slot, count, relicId: r.i32() });
          break;
        }
        case 4: {
          const count = i32();
          const defId = r.i32();
          r.i32(); // flags
          items.push({ kind: "misc", slot, count, defId });
          break;
        }
        default:
          throw new SaveFormatError("unknown_item", { type, offset: r.pos - 4 });
      }
    }

    // CharStats
    r.skip(7); // tattoos
    r.skip(6 * 4); // special move slots
    r.skip(9 * 4); // magic
    const stats = [i32(), i32(), i32(), i32()] as [Field, Field, Field, Field];
    r.skip(2 * 4); // unused stat entries
    const equipped = [r.i32(), r.i32(), r.i32(), r.i32()];
    r.skip(4); // clothes visibility
    r.skip(100 * 5); // relic slots (bool + int)

    const hp = f32();
    const marker = r.string();
    if (marker !== "sanestats") throw new SaveFormatError("bad_marker", { character: index + 1, offset: r.pos });

    // PlayerLevUp
    r.skip(32);
    const skillPoints = i32();

    const flags: string[] = [];
    for (let n = r.i32(), i = 0; i < n; i++) flags.push(r.string());
    const completedMaps: string[] = [];
    for (let n = r.i32(), i = 0; i < n; i++) completedMaps.push(r.string());

    const levelPoints = i32();
    const followers = i32();
    const cash = f32();

    // PlayerEmail: count + (id, read) pairs
    r.skip(r.i32() * 5);

    const hasProgress =
      flags.length > 0 ||
      completedMaps.length > 0 ||
      stats.some((s) => s.value > 0) ||
      cash.value > 0 ||
      items.length > 1;

    roster.push({
      index,
      name: CHARACTER_NAMES[index % CHARACTERS_PER_BAND],
      band: Math.floor(index / CHARACTERS_PER_BAND) + 1,
      items,
      stats,
      equipped,
      hp,
      skillPoints,
      levelPoints,
      followers,
      cash,
      flags,
      completedMaps,
      hasProgress,
    });
  }

  // Five int64 scores follow, then achievements, then the "sane" footer.
  r.skip(5 * 8);
  const n = bytes.length;
  if (n < 5 || bytes[n - 5] !== 4 || decoder.decode(bytes.subarray(n - 4)) !== "sane") {
    throw new SaveFormatError("bad_footer");
  }

  return { bytes, profileName, roster, fields };
}

/** Returns a new file with every changed field written back. */
export function buildSave(save: SaveFile): { bytes: Uint8Array; changes: number } {
  const out = save.bytes.slice();
  const view = new DataView(out.buffer);
  let changes = 0;
  for (const f of save.fields) {
    if (f.value === f.original) continue;
    if (f.kind === "f32") view.setFloat32(f.offset, f.value, true);
    else view.setInt32(f.offset, f.value | 0, true);
    changes++;
  }
  return { bytes: out, changes };
}

export const isChanged = (f: Field) => f.value !== f.original;

export function itemFields(item: InventoryItem): Field[] {
  switch (item.kind) {
    case "clothing":
      return [
        item.strength,
        item.speed,
        item.defense,
        item.anarchi,
        item.level,
        item.rarity,
        item.price,
        ...item.specials.flatMap((s) => [s.type, s.power]),
      ];
    case "food":
      return [item.count, item.level, item.strength, item.speed, item.defense, item.anarchi, item.hp, item.mp, item.price];
    default:
      return [item.count];
  }
}

export function characterFields(c: RosterCharacter): Field[] {
  return [...c.stats, c.cash, c.followers, c.levelPoints, c.skillPoints, ...c.items.flatMap(itemFields)];
}

/** Clamp and normalize a value before it is stored in a field. */
export function coerce(f: Field, raw: number, min = 0, max = 2147483647): number {
  if (!Number.isFinite(raw)) return f.original;
  if (f.kind === "i32") return Math.max(min, Math.min(max, Math.round(raw)));
  const v = Math.fround(Math.max(min, Math.min(max, raw)));
  return Math.abs(v - f.original) < 0.005 ? f.original : v;
}
