/**
 * Turns the edited fields of a save into a human-readable list, grouped by
 * character and item, for the review step before download.
 */
import { ITEM_TEXT } from "../data/items";
import type { Locale } from "../i18n";
import type { Messages } from "../i18n/en";
import { isChanged, type Field, type InventoryItem, type RosterCharacter, type SaveFile } from "../save/format";

export interface ChangeLine {
  label: string;
  from: string;
  to: string;
}

export interface ChangeGroup {
  /** Item name, or the "character sheet" label. */
  title: string;
  lines: ChangeLine[];
}

export interface CharacterChanges {
  character: RosterCharacter;
  groups: ChangeGroup[];
}

const num = (f: Field, v: number, locale: string) =>
  f.kind === "f32"
    ? new Intl.NumberFormat(locale, { maximumFractionDigits: 2 }).format(v)
    : new Intl.NumberFormat(locale).format(v);

function line(f: Field, label: string, locale: string): ChangeLine[] {
  return isChanged(f) ? [{ label, from: num(f, f.original, locale), to: num(f, f.value, locale) }] : [];
}

function itemLines(item: InventoryItem, t: Messages, locale: string): ChangeLine[] {
  const s = t.stats;
  switch (item.kind) {
    case "clothing": {
      const out = [
        ...line(item.strength, s.strength, locale),
        ...line(item.speed, s.speed, locale),
        ...line(item.defense, s.defense, locale),
        ...line(item.anarchi, s.anarchi, locale),
        ...line(item.level, t.items.level, locale),
        ...line(item.rarity, t.items.rarity, locale),
        ...line(item.price, t.items.price, locale),
      ];
      item.specials.forEach((sp, i) => {
        if (!isChanged(sp.type) && !isChanged(sp.power)) return;
        const describe = (type: number, power: number) =>
          power === 0 ? t.review.off : `${t.specials[type] ?? `#${type}`} ${new Intl.NumberFormat(locale).format(power)}`;
        out.push({
          label: t.review.bonus.replace("{n}", String(i + 1)),
          from: describe(sp.type.original, sp.power.original),
          to: describe(sp.type.value, sp.power.value),
        });
      });
      return out;
    }
    case "food":
      return [
        ...line(item.count, t.items.quantity, locale),
        ...line(item.level, t.items.level, locale),
        ...line(item.strength, s.strength, locale),
        ...line(item.speed, s.speed, locale),
        ...line(item.defense, s.defense, locale),
        ...line(item.anarchi, s.anarchi, locale),
        ...line(item.hp, t.items.hp, locale),
        ...line(item.mp, t.items.mp, locale),
        ...line(item.price, t.items.price, locale),
      ];
    default:
      return line(item.count, t.items.quantity, locale);
  }
}

export function itemName(item: InventoryItem, t: Messages, locale: Locale): string {
  switch (item.kind) {
    case "clothing":
    case "food":
      return item.name;
    case "relic":
      return ITEM_TEXT[locale].relics[item.relicId]?.name ?? t.items.unknownRelic.replace("{id}", String(item.relicId));
    case "misc":
      return ITEM_TEXT[locale].misc[item.defId]?.name ?? t.items.unknownMisc.replace("{id}", String(item.defId));
  }
}

export function collectChanges(save: SaveFile, t: Messages, locale: Locale): CharacterChanges[] {
  const result: CharacterChanges[] = [];
  for (const c of save.roster) {
    const groups: ChangeGroup[] = [];
    const sheet = [
      ...line(c.stats[0], t.stats.strength, locale),
      ...line(c.stats[1], t.stats.defense, locale),
      ...line(c.stats[2], t.stats.speed, locale),
      ...line(c.stats[3], t.stats.anarchi, locale),
      ...line(c.cash, t.sheet.cash, locale),
      ...line(c.followers, t.sheet.followers, locale),
      ...line(c.levelPoints, t.sheet.levelPoints, locale),
      ...line(c.skillPoints, t.sheet.skillPoints, locale),
    ];
    if (sheet.length) groups.push({ title: t.review.sheet, lines: sheet });
    for (const item of c.items) {
      const lines = itemLines(item, t, locale);
      if (lines.length) groups.push({ title: itemName(item, t, locale), lines });
    }
    if (groups.length) result.push({ character: c, groups });
  }
  return result;
}
