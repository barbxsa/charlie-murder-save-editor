import { describe, expect, it } from "vitest";
import { MESSAGES, plural, setLocale, type Locale } from "../src/i18n";
import { parseSave, type ClothingItem } from "../src/save/format";
import { collectChanges } from "../src/ui/changes";
import { writeSave } from "./helpers/writer";

describe("plural", () => {
  const cases: [Locale, number, string][] = [
    ["en", 0, "0 items"],
    ["en", 1, "1 item"],
    ["en", 2, "2 items"],
    ["pt-BR", 0, "0 roupas"],
    ["pt-BR", 1, "1 roupa"],
    ["pt-BR", 4, "4 roupas"],
    ["es", 1, "1 prenda"],
    ["es", 5, "5 prendas"],
  ];
  it.each(cases)("%s %i", (locale, n, expected) => {
    setLocale(locale);
    const p = locale === "en" ? MESSAGES.en.items.count : MESSAGES[locale].roster.clothes;
    expect(plural(p, n)).toBe(expected);
  });
});

describe("collectChanges", () => {
  it("lists only edited values, grouped by character and item", () => {
    const save = parseSave(
      writeSave("t", {
        0: {
          stats: [1, 2, 3, 4],
          items: [{ kind: "clothing", slot: 0, clothingType: 0, name: "War Gear", specials: [[7, 1]] }],
        },
      }),
    );
    const gear = save.roster[0].items[0] as ClothingItem;
    gear.strength.value = 4321;
    gear.specials[0].type.value = 14;
    gear.specials[0].power.value = 50;
    gear.specials[1].power.value = 5;
    save.roster[0].stats[2].value = 99;

    const out = collectChanges(save, MESSAGES.en, "en");
    expect(out).toHaveLength(1);
    expect(out[0].character.name).toBe("Charlie");
    expect(out[0].groups.map((g) => g.title)).toEqual(["Character sheet", "War Gear"]);
    expect(out[0].groups[0].lines).toEqual([{ label: "Speed", from: "3", to: "99" }]);
    expect(out[0].groups[1].lines).toEqual([
      { label: "Strength", from: "0", to: "4,321" },
      { label: "Bonus 1", from: "Thunder 1", to: "Leech 50" },
      { label: "Bonus 2", from: "off", to: "Strength 5" },
    ]);
  });
});

describe("relic and misc item names", () => {
  it("covers every id the game defines, in every locale", async () => {
    const { ITEM_TEXT } = await import("../src/data/items");
    for (const loc of Object.values(ITEM_TEXT)) {
      expect(loc.relics).toHaveLength(55);
      expect(loc.misc).toHaveLength(22);
      expect(loc.relics.every((r) => r.name.length > 0)).toBe(true);
    }
    expect(ITEM_TEXT.en.relics[41].name).toBe("Anarchy Pin");
    expect(ITEM_TEXT.en.misc[19]).toEqual({ name: "Mimic Blood", effect: "Swap stats with equipped clothes" });
  });
});
