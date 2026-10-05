import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { buildSave, coerce, parseSave, SaveFormatError, type ClothingItem, type FoodItem } from "../src/save/format";
import { bandIndex, writeSave } from "./helpers/writer";

const sample = () =>
  writeSave("tester", {
    0: {
      stats: [10, 20, 30, 40],
      equipped: [1, 0, -1, -1],
      cash: 1234.5,
      followers: 99,
      levelPoints: 3,
      flags: ["1_street"],
      emails: 2,
      items: [
        { kind: "relic", slot: 0, relicId: 25 },
        { kind: "clothing", slot: 1, clothingType: 1, name: "Devil Horns", layers: ["hat_horns", "hat_kellyhair"], strength: 5, defense: 7, rarity: 2, specials: [[6, 12]], price: 99.95 },
        { kind: "food", slot: 2, name: "Bananabar", count: 3, strength: 1 },
        { kind: "misc", slot: 3, defId: 7 },
      ],
    },
    [bandIndex(1, 1)]: { items: [{ kind: "clothing", slot: 0, clothingType: 0, name: "Lester's T-Shirt — ação ñ" }], maps: ["1_bar0"] },
  });

describe("parseSave", () => {
  it("reads the header, roster and items", () => {
    const save = parseSave(sample());
    expect(save.profileName).toBe("tester");
    expect(save.roster).toHaveLength(20);
    const charlie = save.roster[0];
    expect(charlie.name).toBe("Charlie");
    expect(charlie.band).toBe(1);
    expect(charlie.stats.map((s) => s.value)).toEqual([10, 20, 30, 40]);
    expect(charlie.cash.value).toBeCloseTo(1234.5);
    expect(charlie.equipped).toEqual([1, 0, -1, -1]);
    expect(charlie.items.map((i) => i.kind)).toEqual(["relic", "clothing", "food", "misc"]);
    const horns = charlie.items[1] as ClothingItem;
    expect(horns.name).toBe("Devil Horns");
    expect(horns.layers).toEqual(["hat_horns", "hat_kellyhair"]);
    expect(horns.specials[0].type.value).toBe(6);
    expect(horns.specials[0].power.value).toBe(12);
    expect((charlie.items[2] as FoodItem).count.value).toBe(3);
  });

  it("maps roster slots to characters and bands", () => {
    const save = parseSave(sample());
    expect(save.roster.slice(0, 5).map((c) => c.name)).toEqual(["Charlie", "Lester", "Tommy", "Rex", "Kelly"]);
    expect(save.roster[7].band).toBe(2);
    expect(save.roster[1].items[0]).toMatchObject({ name: "Lester's T-Shirt — ação ñ" });
    expect(save.roster.filter((c) => c.hasProgress).map((c) => c.index)).toEqual([0, 1]);
  });

  it("rejects files that are not a game.sav", () => {
    expect(() => parseSave(new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]))).toThrow(SaveFormatError);
    const bytes = sample();
    expect(() => parseSave(bytes.slice(0, bytes.length - 2))).toThrowError(/bad_footer|truncated/);
    expect(() => parseSave(bytes.slice(0, 500))).toThrowError("truncated");
  });
});

describe("buildSave", () => {
  it("returns identical bytes when nothing changed", () => {
    const bytes = sample();
    const out = buildSave(parseSave(bytes));
    expect(out.changes).toBe(0);
    expect(out.bytes).toEqual(bytes);
  });

  it("writes edits back and keeps the file size", () => {
    const bytes = sample();
    const save = parseSave(bytes);
    const horns = save.roster[0].items[1] as ClothingItem;
    horns.strength.value = 9999;
    horns.specials[1].type.value = 19;
    horns.specials[1].power.value = 50;
    horns.price.value = Math.fround(12.5);
    save.roster[0].cash.value = Math.fround(5000);
    save.roster[1].stats[2].value = 77;

    const out = buildSave(save);
    expect(out.changes).toBe(6);
    expect(out.bytes.length).toBe(bytes.length);

    const again = parseSave(out.bytes);
    const horns2 = again.roster[0].items[1] as ClothingItem;
    expect(horns2.strength.value).toBe(9999);
    expect(horns2.specials[1].type.value).toBe(19);
    expect(horns2.specials[1].power.value).toBe(50);
    expect(horns2.price.value).toBe(12.5);
    expect(again.roster[0].cash.value).toBe(5000);
    expect(again.roster[1].stats[2].value).toBe(77);
    expect(horns2.name).toBe("Devil Horns");
  });
});

describe("coerce", () => {
  it("rounds and clamps integers", () => {
    const f = { offset: 0, kind: "i32" as const, original: 5, value: 5 };
    expect(coerce(f, 12.6)).toBe(13);
    expect(coerce(f, -3)).toBe(0);
    expect(coerce(f, 9, 0, 4)).toBe(4);
    expect(coerce(f, Number.NaN)).toBe(5);
  });
  it("keeps floats at float32 precision", () => {
    const f = { offset: 0, kind: "f32" as const, original: Math.fround(1.1), value: Math.fround(1.1) };
    expect(coerce(f, 1.1)).toBe(f.original);
    expect(coerce(f, 2.25)).toBe(2.25);
  });
});

// Optional: run against your own save without committing it.
//   CM_SAVE="C:/Users/you/AppData/Roaming/CharlieMurder/game.sav" npm test
const real = process.env.CM_SAVE;
describe.skipIf(!real || !existsSync(real))("real save (CM_SAVE)", () => {
  it("round-trips byte for byte", () => {
    const bytes = new Uint8Array(readFileSync(real!));
    expect(buildSave(parseSave(bytes)).bytes).toEqual(bytes);
  });
});
