/**
 * Writes a fictional demo save (no real player data) to docs/demo/game.sav.
 * Used for README screenshots and for trying the editor without a real save:
 *   npx vite-node scripts/make-demo-save.ts
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { writeSave } from "../tests/helpers/writer";

const bytes = writeSave("demo-player", {
  0: {
    stats: [62, 48, 40, 55],
    equipped: [0, 1, 2, -1],
    cash: 1840.5,
    followers: 48210,
    levelPoints: 4,
    skillPoints: 1,
    flags: ["1_street", "1_bar0"],
    maps: ["1_street", "1_cem"],
    items: [
      { kind: "clothing", slot: 0, clothingType: 0, name: "War Gear", layers: ["clothes_undershirt", "clothes_jacket"], defense: 45, level: 10, rarity: 2, specials: [[7, 1], [10, 6], [25, 1], [20, 129]], price: 165.99 },
      { kind: "clothing", slot: 1, clothingType: 1, name: "Devil Horns", layers: ["hat_horns"], strength: 22, defense: 9, anarchi: 30, level: 7, rarity: 4, specials: [[9, 40], [14, 12], [11, 8], [1, 15]], price: 1270.95 },
      { kind: "clothing", slot: 2, clothingType: 2, name: "Red Biker Gloves", layers: ["gloves_fingerless"], strength: 35, speed: 4, level: 6, rarity: 3, specials: [[19, 18], [6, 25]], price: 448.95 },
      { kind: "clothing", slot: 3, clothingType: 2, name: "Rippers", layers: ["gloves_claw"], strength: 119, defense: 27, level: 15, rarity: 1, specials: [[2, 9], [19, 136]], price: 270.99 },
      { kind: "food", slot: 4, name: "Bananabar", count: 3, strength: 1, hp: 40, price: 15.99 },
      { kind: "relic", slot: 5, relicId: 25 },
      { kind: "relic", slot: 6, count: 2, relicId: 49 },
      { kind: "misc", slot: 7, defId: 4 },
    ],
  },
  1: { stats: [20, 12, 9, 14], cash: 120, flags: ["1_street"], items: [{ kind: "clothing", slot: 0, clothingType: 0, name: "Lester's T-Shirt", defense: 1 }] },
  4: { stats: [30, 25, 22, 18], cash: 640, flags: ["1_street"], items: [{ kind: "clothing", slot: 0, clothingType: 1, name: "Hockey Mask", defense: 3, anarchi: 12, rarity: 2, specials: [[13, 2]] }] },
});

mkdirSync("docs/demo", { recursive: true });
writeFileSync("docs/demo/game.sav", bytes);
console.log(`docs/demo/game.sav (${bytes.length} bytes)`);
