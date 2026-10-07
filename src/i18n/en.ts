/**
 * English strings (default locale). Other locales must provide the same keys;
 * the `Messages` type enforces that at compile time.
 *
 * Bonus and stat names come from the game's own localization files, so they
 * match what players see in-game.
 */
export const en = {
  meta: {
    title: "Charlie Murder Save Editor",
    language: "Language",
  },
  header: {
    lede: "Open your Charlie Murder game.sav (Steam/PC), tweak clothing stats, special bonuses, food and character sheets, then download a file ready to drop back into the game folder.",
    formatOk: "Format recognized",
    profile: "Profile",
  },
  start: {
    drop: "Drop game.sav here",
    or: "or click to choose the file",
    copy: "Copy",
    copied: "Copied",
    steps: [
      ["Close the game", "Charlie Murder writes the save when it exits. Editing while it runs means your changes get overwritten."],
      ["Back up your save", "Copy game.sav somewhere safe before replacing it. That is your way back if anything goes wrong."],
      ["Open and edit it here", "Paste the path above into the File Explorer address bar to find the folder. The file is read only in your browser; nothing is uploaded."],
      ["Download and replace", "Download the edited game.sav and put it in place of the original."],
      ["Watch out for Steam Cloud", "If Steam asks which version to keep, choose the local one. To be safe, turn off Steam Cloud for the game under Properties > General."],
    ],
  },
  errors: {
    title: "Couldn't open this file.",
    hint: "Make sure you picked game.sav (not scores.sav or config.ini).",
    bad_magic: "This doesn't look like a Charlie Murder game.sav (unexpected header).",
    truncated: "The file ended earlier than expected (offset {offset}).",
    unknown_item: "Unknown item type ({type}) at offset {offset}.",
    bad_marker: "Character {character} doesn't match the expected layout. The save may come from another version of the game.",
    bad_footer: "The end-of-file marker is missing. The save may be corrupted.",
    unexpected: "Unexpected error: {message}",
    verify: "The generated file failed the safety check: {message}",
  },
  roster: {
    label: "Characters",
    band: "Band {n}",
    summary: "{clothes} · ${cash}",
    clothes: { one: "1 clothing item", other: "{n} clothing items" },
    changed: "Has changes",
    showAll: "Show slots without progress",
  },
  sheet: {
    band: "Band {n}",
    slot: "slot {n} of 20",
    baseStats: "Base stats",
    progress: "Progress",
    cash: "Cash",
    followers: "Followers",
    levelPoints: "Level points",
    levelPointsHint: "To spend on stats",
    skillPoints: "Skill points",
  },
  items: {
    clothes: "Clothes",
    food: "Food",
    other: "Other",
    count: { one: "1 item", other: "{n} items" },
    noClothes: "This character has no clothes in the inventory.",
    equipped: "Equipped",
    foodTag: "Food",
    level: "Level",
    rarity: "Rarity 0–4",
    price: "Price",
    quantity: "Quantity",
    hp: "HP",
    mp: "Magic",
    specials: "Special bonuses",
    specialsHint: "value 0 turns it off",
    bonusType: "Bonus {n} type",
    bonusValue: "Bonus {n} value",
    boost: "Max out",
    undo: "Undo",
    relics: { one: "1 relic", other: "{n} relics" },
    misc: { one: "1 misc item", other: "{n} misc items" },
    otherNote: "You can change how many of each one the character carries.",
    relicsTitle: "Relics",
    miscTitle: "Misc items",
    unknownRelic: "Unknown relic #{id}",
    unknownMisc: "Unknown item #{id}",
    clothingTypes: ["Shirt", "Head", "Gloves", "Accessory"],
  },
  stats: {
    strength: "Strength",
    defense: "Defense",
    speed: "Speed",
    anarchi: "Anar-Chi",
  },
  specials: [
    "Strength", "Defense", "Speed", "Anar-Chi", "HP", "Cooldown", "Fire", "Thunder", "Poison", "Acid",
    "Fire Resist", "Thunder Resist", "Poison Resist", "Acid Resist", "Leech", "Knockback", "Cooldown (2)",
    "Wounding", "Stun", "Crit", "Frost", "Dark Fire", "Food Power", "Req. Strength", "Req. Speed",
    "Req. Defense", "Req. Anar-Chi", "Rapid Jabs!", "Block to Cooldown", "Shockwave Slams!",
    "Shockwave Falldown", "Shockwave Counter!", "Stasis", "Wave Uppercut", "Wave Kick", "Blink", "Bruiser",
  ],
  bar: {
    none: "No changes yet. Changed fields are highlighted.",
    some: { one: "1 value changed. Close the game before replacing the file.", other: "{n} values changed. Close the game before replacing the file." },
    boosted: "Maxed out: Strength, Defense and Anar-Chi at 9999, Speed 300 and rarity 4. Very high speed can make the character hard to control.",
    saved: { one: "Downloaded game.sav with 1 change. Replace the original while the game is closed.", other: "Downloaded game.sav with {n} changes. Replace the original while the game is closed." },
    savedBackup: { one: "Downloaded game.sav (1 change) and the backup game.sav.bak. Replace the original while the game is closed.", other: "Downloaded game.sav ({n} changes) and the backup game.sav.bak. Replace the original while the game is closed." },
    discard: "Discard changes",
    openOther: "Open another save",
    confirmOther: "Discard and open another?",
    download: "Review and download",
  },
  skills: {
    tattoos: "Tattoos & magic",
    tattoosHint: "Each tattoo teaches a spell. The first spell is always known.",
    tattoo: "Tattoo {n}",
    baseSpell: "Always known: {name}",
    unlocks: "Level-up skills",
    unlocksHint: "Skills bought in the skill tree. The game unlocks them in order; skipping steps works, but turning off Backpack or Relic slots can hide items over the new limit.",
    count: "{on} of {total}",
    all: "Turn all on",
    none: "Turn all off",
  },
  review: {
    title: "Review your changes",
    intro: "This is everything that will be written to the new game.sav. Nothing else in the file changes.",
    total: { one: "1 change", other: "{n} changes" },
    character: "{name} · Band {band}",
    sheet: "Character sheet",
    bonus: "Bonus {n}",
    off: "off",
    on: "on",
    backup: "Also download the original as game.sav.bak",
    backupHint: "Keep it somewhere safe. To restore it, rename it back to game.sav.",
    confirm: "Download",
    back: "Keep editing",
    blocked: "If the browser asked to allow multiple downloads, allow it to get the backup too.",
  },
  footer: {
    madeBy: "Made by {author}",
    disclaimer: "Fan-made tool. Not affiliated with or endorsed by Ska Studios or Microsoft.",
    source: "Source code on GitHub",
  },
} as const;

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly Widen<U>[]
    : { readonly [K in keyof T]: Widen<T[K]> };

export type Messages = Widen<typeof en>;
