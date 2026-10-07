/**
 * Spell (magic) and level-up skill names, generated from Charlie Murder's own
 * localization and game code:
 * - spells[rosterSlot][magicId] comes from Magic.charSpellCatalog;
 *   tattoo k unlocks magic id k + 1, magic 0 is always known.
 * - unlocks[character][slot] follows PlayerLevUp.GetIdxFromUnlock and the
 *   skill e-mails in EmailBank (slots 0 and 1 are unused by the game).
 */
import type { Locale } from "../i18n";

export interface SkillText {
  name: string;
  desc: string;
}

export const SKILL_TEXT: Record<Locale, { spells: SkillText[][]; unlocks: (SkillText | null)[][] }> = {
 "en": {
  "spells": [
   [
    {
     "name": "Vocal Blast",
     "desc": "Unleash a cone of vocal pain."
    },
    {
     "name": "Poison Vocals",
     "desc": "Unleash a poisonous vocal blast."
    },
    {
     "name": "Shield of Scream",
     "desc": "Buff everyone's defense for a bit."
    },
    {
     "name": "Heal Aura",
     "desc": "Recover everyone's health for a bit."
    },
    {
     "name": "Mind Slaver",
     "desc": "Enslave a baddie to fight as your minion."
    },
    {
     "name": "Cyclone",
     "desc": "Whip weapons+gibs into a cyclone of pain!!!1"
    },
    {
     "name": "Gun Bag",
     "desc": "Summon a magic bag full of guns."
    },
    {
     "name": "Poison Cyclone",
     "desc": "Whip weapons+gibs into a cyclone of poison!"
    }
   ],
   [
    {
     "name": "Burning Riff",
     "desc": "Fire off an incindiary lick."
    },
    {
     "name": "Electric Riff",
     "desc": "Blast an arc of electricity."
    },
    {
     "name": "Underling",
     "desc": "Summon a minion from the netherlands."
    },
    {
     "name": "Bane Rub",
     "desc": "Murder death kill a low level enemy."
    },
    {
     "name": "Imps",
     "desc": "Summon a trio of netherlands Imps."
    },
    {
     "name": "Shock Rune",
     "desc": "Create a shocking rune trap."
    },
    {
     "name": "Goliath",
     "desc": "Summon a Goliath from the netherlands."
    },
    {
     "name": "Meteor",
     "desc": "Summon an earth scorching meteor."
    }
   ],
   [
    {
     "name": "Bass Buzzsaw",
     "desc": "Fire off a nasty buzzsaw."
    },
    {
     "name": "Acid Buzzsaw",
     "desc": "Fire off an acid-coated buzzsaw."
    },
    {
     "name": "Shield of Scream",
     "desc": "Buff everyone's defense for a bit."
    },
    {
     "name": "Epic Quake",
     "desc": "Fling enemies around in a crushing quake."
    },
    {
     "name": "Quicken",
     "desc": "Boost everyone's speed for a bit."
    },
    {
     "name": "Acid Rain",
     "desc": "Create a cloud of skin-melting rain."
    },
    {
     "name": "Sawrmada",
     "desc": "Fire off an array of buzzsaws."
    },
    {
     "name": "Acid Storm",
     "desc": "Create a tempest of acid and lightning."
    }
   ],
   [
    {
     "name": "Garbage Barrage",
     "desc": "Blast out a bunch of damaging garbage."
    },
    {
     "name": "S.H.A.R.P.S.",
     "desc": "Semi Harmful Array of Random Pointy Stuff."
    },
    {
     "name": "Brutal Buff",
     "desc": "Boost everyone's strength for a bit."
    },
    {
     "name": "Heal",
     "desc": "Recover your health for a bit."
    },
    {
     "name": "Hardware Get",
     "desc": "Spew a bunch of usable weapons."
    },
    {
     "name": "Gun Show",
     "desc": "Spew a bunch of usable guns."
    },
    {
     "name": "Sploder Mark",
     "desc": "Explode the nearest enemy."
    },
    {
     "name": "Enhulken",
     "desc": "Become a massive uncontrollable monster."
    }
   ],
   [
    {
     "name": "Siren Smash",
     "desc": "Unleash a cone of vocal pain."
    },
    {
     "name": "Safety Shield",
     "desc": "Surround yourself with a shield of pins."
    },
    {
     "name": "Evil Eye",
     "desc": "Freeze and damage a low level enemy."
    },
    {
     "name": "Iron Maiden",
     "desc": "Enemies' attacks damage themselves."
    },
    {
     "name": "Mindbork",
     "desc": "Enemies trip around, taking damage."
    },
    {
     "name": "Echo",
     "desc": "Gives your next magic no cooldown."
    },
    {
     "name": "Group Echo",
     "desc": "Give everyone a cooldown-free Anar-chi."
    },
    {
     "name": "Flash Freeze",
     "desc": "Freeze and damage a group of enemies."
    }
   ],
   [
    {
     "name": "Frozen Vocals",
     "desc": "Unleash an icy vocal blast."
    },
    {
     "name": "Poison Vocals",
     "desc": "Unleash a poisonous vocal blast."
    },
    {
     "name": "Underling",
     "desc": "Summon a minion from the netherlands."
    },
    {
     "name": "Bane Rub",
     "desc": "Murder death kill a low level enemy."
    },
    {
     "name": "Shock Rune",
     "desc": "Create a shocking rune trap."
    },
    {
     "name": "Imps",
     "desc": "Summon a trio of netherlands Imps."
    },
    {
     "name": "Goliath",
     "desc": "Summon a Goliath from the netherlands."
    },
    {
     "name": "Meteor",
     "desc": "Summon an earth scorching meteor."
    }
   ],
   [
    {
     "name": "Icy Riff",
     "desc": "Fire off a frozen chord."
    },
    {
     "name": "Electric Riff",
     "desc": "Blast an arc of electricity."
    },
    {
     "name": "Shield of Scream",
     "desc": "Buff everyone's defense for a bit."
    },
    {
     "name": "Epic Quake",
     "desc": "Fling enemies around in a crushing quake."
    },
    {
     "name": "Quicken",
     "desc": "Boost everyone's speed for a bit."
    },
    {
     "name": "Acid Rain",
     "desc": "Create a cloud of skin-melting rain."
    },
    {
     "name": "Sawrmada",
     "desc": "Fire off an array of buzzsaws."
    },
    {
     "name": "Acid Storm",
     "desc": "Create a tempest of acid and lightning."
    }
   ],
   [
    {
     "name": "Bass Buzzsaw",
     "desc": "Fire off a nasty buzzsaw."
    },
    {
     "name": "Icy Riff",
     "desc": "Fire off a frozen chord."
    },
    {
     "name": "Brutal Buff",
     "desc": "Boost everyone's strength for a bit."
    },
    {
     "name": "Heal",
     "desc": "Recover your health for a bit."
    },
    {
     "name": "Mindbork",
     "desc": "Enemies trip around, taking damage."
    },
    {
     "name": "Echo",
     "desc": "Gives your next magic no cooldown."
    },
    {
     "name": "Group Echo",
     "desc": "Give everyone a cooldown-free Anar-chi."
    },
    {
     "name": "Comet",
     "desc": "Summon an icy doom comet."
    }
   ],
   [
    {
     "name": "Garbage Barrage",
     "desc": "Blast out a bunch of damaging garbage."
    },
    {
     "name": "S.H.A.R.P.S.",
     "desc": "Semi Harmful Array of Random Pointy Stuff."
    },
    {
     "name": "Evil Eye",
     "desc": "Freeze and damage a low level enemy."
    },
    {
     "name": "Iron Maiden",
     "desc": "Enemies' attacks damage themselves."
    },
    {
     "name": "Bane Rub",
     "desc": "Murder death kill a low level enemy."
    },
    {
     "name": "Heal Aura",
     "desc": "Recover everyone's health for a bit."
    },
    {
     "name": "Blight Blizzard",
     "desc": "Create a damaging icy storm."
    },
    {
     "name": "Flash Freeze",
     "desc": "Freeze and damage a group of enemies."
    }
   ],
   [
    {
     "name": "Siren Smash",
     "desc": "Unleash a cone of vocal pain."
    },
    {
     "name": "Safety Shield",
     "desc": "Surround yourself with a shield of pins."
    },
    {
     "name": "Shield of Scream",
     "desc": "Buff everyone's defense for a bit."
    },
    {
     "name": "Heal Aura",
     "desc": "Recover everyone's health for a bit."
    },
    {
     "name": "Mind Slaver",
     "desc": "Enslave a baddie to fight as your minion."
    },
    {
     "name": "Cyclone",
     "desc": "Whip weapons+gibs into a cyclone of pain!!!1"
    },
    {
     "name": "Gun Bag",
     "desc": "Summon a magic bag full of guns."
    },
    {
     "name": "Poison Cyclone",
     "desc": "Whip weapons+gibs into a cyclone of poison!"
    }
   ],
   [
    {
     "name": "Draining Vocals",
     "desc": "Leech enemy health with a vocal blast."
    },
    {
     "name": "Frozen Vocals",
     "desc": "Unleash an icy vocal blast."
    },
    {
     "name": "Safety Shield",
     "desc": "Surround yourself with a shield of pins."
    },
    {
     "name": "Bane Rub",
     "desc": "Murder death kill a low level enemy."
    },
    {
     "name": "Mindbork",
     "desc": "Enemies trip around, taking damage."
    },
    {
     "name": "Echo",
     "desc": "Gives your next magic no cooldown."
    },
    {
     "name": "Group Echo",
     "desc": "Give everyone a cooldown-free Anar-chi."
    },
    {
     "name": "Meteor",
     "desc": "Summon an earth scorching meteor."
    }
   ],
   [
    {
     "name": "Icy Riff",
     "desc": "Fire off a frozen chord."
    },
    {
     "name": "Electric Riff",
     "desc": "Blast an arc of electricity."
    },
    {
     "name": "Brutal Buff",
     "desc": "Boost everyone's strength for a bit."
    },
    {
     "name": "Echo",
     "desc": "Gives your next magic no cooldown."
    },
    {
     "name": "Quicken",
     "desc": "Boost everyone's speed for a bit."
    },
    {
     "name": "Sploder Mark",
     "desc": "Explode the nearest enemy."
    },
    {
     "name": "Group Echo",
     "desc": "Give everyone a cooldown-free Anar-chi."
    },
    {
     "name": "Comet",
     "desc": "Summon an icy doom comet."
    }
   ],
   [
    {
     "name": "Burning Riff",
     "desc": "Fire off an incindiary lick."
    },
    {
     "name": "Sawrmada",
     "desc": "Fire off an array of buzzsaws."
    },
    {
     "name": "Brutal Buff",
     "desc": "Boost everyone's strength for a bit."
    },
    {
     "name": "Heal",
     "desc": "Recover your health for a bit."
    },
    {
     "name": "Flame Rune",
     "desc": "Create a fire rune trap."
    },
    {
     "name": "Gun Bag",
     "desc": "Summon a magic bag full of guns."
    },
    {
     "name": "Mind Slaver",
     "desc": "Enslave a baddie to fight as your minion."
    },
    {
     "name": "Flash Freeze",
     "desc": "Freeze and damage a group of enemies."
    }
   ],
   [
    {
     "name": "Bass Buzzsaw",
     "desc": "Fire off a nasty buzzsaw."
    },
    {
     "name": "Acid Buzzsaw",
     "desc": "Fire off an acid-coated buzzsaw."
    },
    {
     "name": "Underling",
     "desc": "Summon a minion from the netherlands."
    },
    {
     "name": "Iron Maiden",
     "desc": "Enemies' attacks damage themselves."
    },
    {
     "name": "Brutal Buff",
     "desc": "Boost everyone's strength for a bit."
    },
    {
     "name": "Imps",
     "desc": "Summon a trio of netherlands Imps."
    },
    {
     "name": "Goliath",
     "desc": "Summon a Goliath from the netherlands."
    },
    {
     "name": "Acid Storm",
     "desc": "Create a tempest of acid and lightning."
    }
   ],
   [
    {
     "name": "Siren Smash",
     "desc": "Unleash a cone of vocal pain."
    },
    {
     "name": "Draining Vocals",
     "desc": "Leech enemy health with a vocal blast."
    },
    {
     "name": "Heal",
     "desc": "Recover your health for a bit."
    },
    {
     "name": "Poison Vocals",
     "desc": "Unleash a poisonous vocal blast."
    },
    {
     "name": "Quicken",
     "desc": "Boost everyone's speed for a bit."
    },
    {
     "name": "Heal Aura",
     "desc": "Recover everyone's health for a bit."
    },
    {
     "name": "Epic Quake",
     "desc": "Fling enemies around in a crushing quake."
    },
    {
     "name": "Blight Blizzard",
     "desc": "Create a damaging icy storm."
    }
   ],
   [
    {
     "name": "Draining Vocals",
     "desc": "Leech enemy health with a vocal blast."
    },
    {
     "name": "Blazing Vocals",
     "desc": "Unleash a fiery vocal blast."
    },
    {
     "name": "Heal",
     "desc": "Recover your health for a bit."
    },
    {
     "name": "Bane Rub",
     "desc": "Murder death kill a low level enemy."
    },
    {
     "name": "Quicken",
     "desc": "Boost everyone's speed for a bit."
    },
    {
     "name": "Heal Aura",
     "desc": "Recover everyone's health for a bit."
    },
    {
     "name": "Group Echo",
     "desc": "Give everyone a cooldown-free Anar-chi."
    },
    {
     "name": "Comet",
     "desc": "Summon an icy doom comet."
    }
   ],
   [
    {
     "name": "Icy Riff",
     "desc": "Fire off a frozen chord."
    },
    {
     "name": "Burning Riff",
     "desc": "Fire off an incindiary lick."
    },
    {
     "name": "Hardware Bag",
     "desc": "Summon a magic bag full of hardware."
    },
    {
     "name": "Epic Quake",
     "desc": "Fling enemies around in a crushing quake."
    },
    {
     "name": "Mind Slaver",
     "desc": "Enslave a baddie to fight as your minion."
    },
    {
     "name": "Acid Rain",
     "desc": "Create a cloud of skin-melting rain."
    },
    {
     "name": "Gun Bag",
     "desc": "Summon a magic bag full of guns."
    },
    {
     "name": "Acid Storm",
     "desc": "Create a tempest of acid and lightning."
    }
   ],
   [
    {
     "name": "Icy Riff",
     "desc": "Fire off a frozen chord."
    },
    {
     "name": "Electric Riff",
     "desc": "Blast an arc of electricity."
    },
    {
     "name": "Brutal Buff",
     "desc": "Boost everyone's strength for a bit."
    },
    {
     "name": "Heal",
     "desc": "Recover your health for a bit."
    },
    {
     "name": "Mindbork",
     "desc": "Enemies trip around, taking damage."
    },
    {
     "name": "Sploder Mark",
     "desc": "Explode the nearest enemy."
    },
    {
     "name": "Group Echo",
     "desc": "Give everyone a cooldown-free Anar-chi."
    },
    {
     "name": "Flash Freeze",
     "desc": "Freeze and damage a group of enemies."
    }
   ],
   [
    {
     "name": "Bass Buzzsaw",
     "desc": "Fire off a nasty buzzsaw."
    },
    {
     "name": "Sawrmada",
     "desc": "Fire off an array of buzzsaws."
    },
    {
     "name": "Evil Eye",
     "desc": "Freeze and damage a low level enemy."
    },
    {
     "name": "Iron Maiden",
     "desc": "Enemies' attacks damage themselves."
    },
    {
     "name": "Bane Rub",
     "desc": "Murder death kill a low level enemy."
    },
    {
     "name": "Echo",
     "desc": "Gives your next magic no cooldown."
    },
    {
     "name": "Flash Freeze",
     "desc": "Freeze and damage a group of enemies."
    },
    {
     "name": "Poison Cyclone",
     "desc": "Whip weapons+gibs into a cyclone of poison!"
    }
   ],
   [
    {
     "name": "Siren Smash",
     "desc": "Unleash a cone of vocal pain."
    },
    {
     "name": "Blazing Vocals",
     "desc": "Unleash a fiery vocal blast."
    },
    {
     "name": "Frozen Vocals",
     "desc": "Unleash an icy vocal blast."
    },
    {
     "name": "Heal Aura",
     "desc": "Recover everyone's health for a bit."
    },
    {
     "name": "Quicken",
     "desc": "Boost everyone's speed for a bit."
    },
    {
     "name": "Cyclone",
     "desc": "Whip weapons+gibs into a cyclone of pain!!!1"
    },
    {
     "name": "Blight Blizzard",
     "desc": "Create a damaging icy storm."
    },
    {
     "name": "Meteor",
     "desc": "Summon an earth scorching meteor."
    }
   ]
  ],
  "unlocks": [
   [
    null,
    null,
    {
     "name": "Cranium Stomp",
     "desc": "Press X over weakened enemies to demolish their skulls."
    },
    {
     "name": "Dual Wielding",
     "desc": "Wield two one handed weapons at once."
    },
    {
     "name": "Mosh Team",
     "desc": "Team up with a friend to rampage, mosh style. Get a 20 hit combo, hold LTRT and hope for the best!"
    },
    {
     "name": "Counter",
     "desc": "Block with LT just in time, then press X to unleash some Anar-chi!"
    },
    {
     "name": "Backpack I",
     "desc": "Hold 60 inventory items."
    },
    {
     "name": "Chucker I",
     "desc": "Increase thrown weapon damage by 50%."
    },
    {
     "name": "Relic I",
     "desc": "Activate 3 relics at once."
    },
    {
     "name": "Akimbo Guns",
     "desc": "Wield two pistols at once."
    },
    {
     "name": "Backpack II",
     "desc": "Hold 70 inventory items."
    },
    {
     "name": "Assassin I",
     "desc": "Increase firearm weapon damage by 25%."
    },
    {
     "name": "Relic II",
     "desc": "Activate 4 relics at once."
    },
    {
     "name": "Heart Rip I",
     "desc": "Press B while holding weakened enemies to devour their hearts."
    },
    {
     "name": "Relic III",
     "desc": "Activate 5 relics at once."
    },
    {
     "name": "Backpack III",
     "desc": "Hold 80 inventory items."
    },
    {
     "name": "Sprinter I",
     "desc": "Increase sprint speed by 25%"
    },
    {
     "name": "Relic IV",
     "desc": "Activate 6 relics at once."
    },
    {
     "name": "Backpack IV",
     "desc": "Hold 90 inventory items."
    },
    {
     "name": "Relic V",
     "desc": "Activate 7 relics at once."
    },
    {
     "name": "Relic Ultimate",
     "desc": "Activate infinite relics at once."
    },
    {
     "name": "Chucker II",
     "desc": "Increase thrown weapon damage by 75%."
    },
    {
     "name": "Chucker III",
     "desc": "Increase thrown weapon damage by 100%."
    },
    {
     "name": "Assassin II",
     "desc": "Increase firearm weapon damage by 50%."
    },
    {
     "name": "Assassin III",
     "desc": "Increase firearm weapon damage by 75%."
    },
    {
     "name": "Sprinter II",
     "desc": "Increase sprint speed by 30%"
    },
    {
     "name": "Sprinter III",
     "desc": "Increase sprint speed by 35%."
    },
    {
     "name": "Heart Rip II",
     "desc": "Press B while holding weakened enemies to devour their hearts, gaining 4% of your health."
    },
    {
     "name": "Heart Rip III",
     "desc": "Press B while holding weakened enemies to devour their hearts, gaining 8% of your health."
    },
    {
     "name": "Overdrive I",
     "desc": "Hold Y to launch a powerful overdrive technique."
    },
    {
     "name": "Overdrive II",
     "desc": "Hold Y to launch a powerful overdrive technique, dealing an extra 5% damage."
    },
    {
     "name": "Overdrive III",
     "desc": "Hold Y to launch a powerful overdrive technique, dealing an extra 10% damage."
    }
   ],
   [
    null,
    null,
    {
     "name": "Cranium Stomp",
     "desc": "Press X over weakened enemies to demolish their skulls."
    },
    {
     "name": "Soul Steal",
     "desc": "Stand over weakened enemies and press Y to absorb their soul, recovering HP and reducing cooldown."
    },
    {
     "name": "Stygian Beast",
     "desc": "Team up with a friend to become a ferocious netherlands beast and his rider. Get a 20 hit combo, hold LTRT, and hope for the best!"
    },
    {
     "name": "Counter",
     "desc": "Block with LT just in time, then press X to unleash some Anar-chi!"
    },
    {
     "name": "Backpack I",
     "desc": "Hold 60 inventory items."
    },
    {
     "name": "Slasher I",
     "desc": "Increase bladed weapon damage by 25%."
    },
    {
     "name": "Relic I",
     "desc": "Activate 3 relics at once."
    },
    {
     "name": "Soul Charge",
     "desc": "Hold Y while performing a Soul Steal to maximize soul stealing."
    },
    {
     "name": "Backpack II",
     "desc": "Hold 70 inventory items."
    },
    {
     "name": "Surgical I",
     "desc": "Increase critical hit chance by 10%."
    },
    {
     "name": "Relic II",
     "desc": "Activate 4 relics at once."
    },
    {
     "name": "Heart Rip I",
     "desc": "Press B while holding weakened enemies to devour their hearts."
    },
    {
     "name": "Relic III",
     "desc": "Activate 5 relics at once."
    },
    {
     "name": "Backpack III",
     "desc": "Hold 80 inventory items."
    },
    {
     "name": "Massacre I",
     "desc": "Increase chainsaw weapon damage by 25%."
    },
    {
     "name": "Relic IV",
     "desc": "Activate 6 relics at once."
    },
    {
     "name": "Backpack IV",
     "desc": "Hold 90 inventory items."
    },
    {
     "name": "Relic V",
     "desc": "Activate 7 relics at once."
    },
    {
     "name": "Relic Ultimate",
     "desc": "Activate infinite relics at once."
    },
    {
     "name": "Slasher II",
     "desc": "Increase bladed weapon damage by 50%."
    },
    {
     "name": "Slasher III",
     "desc": "Increase bladed weapon damage by 75%."
    },
    {
     "name": "Surgical II",
     "desc": "Increase critical hit chance by 20%."
    },
    {
     "name": "Surgical III",
     "desc": "Increase critical hit chance by 30%."
    },
    {
     "name": "Massacre II",
     "desc": "Increase chainsaw weapon damage by 50%."
    },
    {
     "name": "Massacre III",
     "desc": "Increase chainsaw weapon damage by 75%."
    },
    {
     "name": "Heart Rip II",
     "desc": "Press B while holding weakened enemies to devour their hearts, gaining 4% of your health."
    },
    {
     "name": "Heart Rip III",
     "desc": "Press B while holding weakened enemies to devour their hearts, gaining 8% of your health."
    },
    {
     "name": "Overdrive I",
     "desc": "Hold Y to launch a powerful overdrive technique."
    },
    {
     "name": "Overdrive II",
     "desc": "Hold Y to launch a powerful overdrive technique, dealing an extra 5% damage."
    },
    {
     "name": "Overdrive III",
     "desc": "Hold Y to launch a powerful overdrive technique, dealing an extra 10% damage."
    }
   ],
   [
    null,
    null,
    {
     "name": "Cranium Stomp",
     "desc": "Press X over weakened enemies to demolish their skulls."
    },
    {
     "name": "Health Totem",
     "desc": "Turn discarded heads into healing totems. Pick up a head, then press Y to plant."
    },
    {
     "name": "GerudoMech",
     "desc": "Team up with a friend to form a massive Mech. Get a 20 hit combo, hold LTRT, and hope for the best!"
    },
    {
     "name": "Counter",
     "desc": "Block with LT just in time, then press X to unleash some Anar-chi!"
    },
    {
     "name": "Backpack I",
     "desc": "Hold 60 inventory items."
    },
    {
     "name": "Massacre I",
     "desc": "Increase chainsaw weapon damage by 25%."
    },
    {
     "name": "Relic I",
     "desc": "Activate 3 relics at once."
    },
    {
     "name": "Laser Brain Totem",
     "desc": "Turn discarded brains into laser turret totems. Pick up a brain, then press Y to plant."
    },
    {
     "name": "Backpack II",
     "desc": "Hold 70 inventory items."
    },
    {
     "name": "Messy Blood I",
     "desc": "10% chance to explode weakened enemies."
    },
    {
     "name": "Relic II",
     "desc": "Activate 4 relics at once."
    },
    {
     "name": "Heart Rip I",
     "desc": "Press B while holding weakened enemies to devour their hearts."
    },
    {
     "name": "Relic III",
     "desc": "Activate 5 relics at once."
    },
    {
     "name": "Backpack III",
     "desc": "Hold 80 inventory items."
    },
    {
     "name": "Bludgeoneer I",
     "desc": "Increase bludgeon weapon damage by 25%."
    },
    {
     "name": "Relic IV",
     "desc": "Activate 6 relics at once."
    },
    {
     "name": "Backpack IV",
     "desc": "Hold 90 inventory items."
    },
    {
     "name": "Relic V",
     "desc": "Activate 7 relics at once."
    },
    {
     "name": "Relic Ultimate",
     "desc": "Activate infinite relics at once."
    },
    {
     "name": "Massacre II",
     "desc": "Increase chainsaw weapon damage by 50%."
    },
    {
     "name": "Massacre III",
     "desc": "Increase chainsaw weapon damage by 75%."
    },
    {
     "name": "Messy Blood II",
     "desc": "20% chance to explode weakened enemies."
    },
    {
     "name": "Messy Blood III",
     "desc": "30% chance to explode weakened enemies."
    },
    {
     "name": "Bludgeoneer II",
     "desc": "Increase bludgeon weapon damage by 50%."
    },
    {
     "name": "Bludgeoneer III",
     "desc": "Increase bludgeon weapon damage by 75%."
    },
    {
     "name": "Heart Rip II",
     "desc": "Press B while holding weakened enemies to devour their hearts, gaining 4% of your health."
    },
    {
     "name": "Heart Rip III",
     "desc": "Press B while holding weakened enemies to devour their hearts, gaining 8% of your health."
    },
    {
     "name": "Overdrive I",
     "desc": "Hold Y to launch a powerful overdrive technique."
    },
    {
     "name": "Overdrive II",
     "desc": "Hold Y to launch a powerful overdrive technique, dealing an extra 5% damage."
    },
    {
     "name": "Overdrive III",
     "desc": "Hold Y to launch a powerful overdrive technique, dealing an extra 10% damage."
    }
   ],
   [
    null,
    null,
    {
     "name": "Cranium Stomp",
     "desc": "Press X over weakened enemies to demolish their skulls."
    },
    {
     "name": "Massive Lift",
     "desc": "Lift and throw giant objects with X."
    },
    {
     "name": "Free Ride Combo",
     "desc": "Team up with a friend for a piggyback rampage! Get a 20 hit combo, hold LTRT, and hope for the best!"
    },
    {
     "name": "Counter",
     "desc": "Block with LT just in time, then press X to unleash some Anar-chi!"
    },
    {
     "name": "Backpack I",
     "desc": "Hold 60 inventory items."
    },
    {
     "name": "Bludgeoneer I",
     "desc": "Increase bludgeon weapon damage by 25%."
    },
    {
     "name": "Relic I",
     "desc": "Activate 3 relics at once."
    },
    {
     "name": "Slammer",
     "desc": "Grab enemies with B, then hold X for a charged body slam."
    },
    {
     "name": "Backpack II",
     "desc": "Hold 70 inventory items."
    },
    {
     "name": "Mauler I",
     "desc": "Increase two handed weapon damage by 25%."
    },
    {
     "name": "Relic II",
     "desc": "Activate 4 relics at once."
    },
    {
     "name": "Heart Rip I",
     "desc": "Press B while holding weakened enemies to devour their hearts."
    },
    {
     "name": "Relic III",
     "desc": "Activate 5 relics at once."
    },
    {
     "name": "Backpack III",
     "desc": "Hold 80 inventory items."
    },
    {
     "name": "Parry I",
     "desc": "Increase block damage absorbed by 50%"
    },
    {
     "name": "Relic IV",
     "desc": "Activate 6 relics at once."
    },
    {
     "name": "Backpack IV",
     "desc": "Hold 90 inventory items."
    },
    {
     "name": "Relic V",
     "desc": "Activate 7 relics at once."
    },
    {
     "name": "Relic Ultimate",
     "desc": "Activate infinite relics at once."
    },
    {
     "name": "Bludgeoneer II",
     "desc": "Increase bludgeon weapon damage by 50%."
    },
    {
     "name": "Bludgeoneer III",
     "desc": "Increase bludgeon weapon damage by 75%."
    },
    {
     "name": "Mauler II",
     "desc": "Increase two handed weapon damage by 50%."
    },
    {
     "name": "Mauler III",
     "desc": "Increase two handed weapon damage by 75%."
    },
    {
     "name": "Parry II",
     "desc": "Increase block damage absorbed by 75%"
    },
    {
     "name": "Parry III",
     "desc": "Increase block damage absorbed by 100%"
    },
    {
     "name": "Heart Rip II",
     "desc": "Press B while holding weakened enemies to devour their hearts, gaining 4% of your health."
    },
    {
     "name": "Heart Rip III",
     "desc": "Press B while holding weakened enemies to devour their hearts, gaining 8% of your health."
    },
    {
     "name": "Overdrive I",
     "desc": "Hold Y to launch a powerful overdrive technique."
    },
    {
     "name": "Overdrive II",
     "desc": "Hold Y to launch a powerful overdrive technique, dealing an extra 5% damage."
    },
    {
     "name": "Overdrive III",
     "desc": "Hold Y to launch a powerful overdrive technique, dealing an extra 10% damage."
    }
   ],
   [
    null,
    null,
    {
     "name": "Cranium Stomp",
     "desc": "Press X over weakened enemies to demolish their skulls."
    },
    {
     "name": "Roll Judo",
     "desc": "Tap left or right while holding LT to roll dodge."
    },
    {
     "name": "Mosh Team",
     "desc": "Team up with a friend to rampage, mosh style. Get a 20 hit combo, hold LTRT and hope for the best!"
    },
    {
     "name": "Counter",
     "desc": "Block with LT just in time, then press X to unleash some Anar-chi!"
    },
    {
     "name": "Backpack I",
     "desc": "Hold 60 inventory items."
    },
    {
     "name": "Sprinter I",
     "desc": "Increase sprint speed by 25%"
    },
    {
     "name": "Relic I",
     "desc": "Activate 3 relics at once."
    },
    {
     "name": "Escape Judo",
     "desc": "Press A while being grabbed to escape."
    },
    {
     "name": "Backpack II",
     "desc": "Hold 70 inventory items."
    },
    {
     "name": "Parry I",
     "desc": "Increase block damage absorbed by 50%"
    },
    {
     "name": "Relic II",
     "desc": "Activate 4 relics at once."
    },
    {
     "name": "Heart Rip I",
     "desc": "Press B while holding weakened enemies to devour their hearts."
    },
    {
     "name": "Relic III",
     "desc": "Activate 5 relics at once."
    },
    {
     "name": "Backpack III",
     "desc": "Hold 80 inventory items."
    },
    {
     "name": "Surgical I",
     "desc": "Increase critical hit chance by 10%."
    },
    {
     "name": "Relic IV",
     "desc": "Activate 6 relics at once."
    },
    {
     "name": "Backpack IV",
     "desc": "Hold 90 inventory items."
    },
    {
     "name": "Relic V",
     "desc": "Activate 7 relics at once."
    },
    {
     "name": "Relic Ultimate",
     "desc": "Activate infinite relics at once."
    },
    {
     "name": "Sprinter II",
     "desc": "Increase sprint speed by 30%"
    },
    {
     "name": "Sprinter III",
     "desc": "Increase sprint speed by 35%."
    },
    {
     "name": "Parry II",
     "desc": "Increase block damage absorbed by 75%"
    },
    {
     "name": "Parry III",
     "desc": "Increase block damage absorbed by 100%"
    },
    {
     "name": "Surgical II",
     "desc": "Increase critical hit chance by 20%."
    },
    {
     "name": "Surgical III",
     "desc": "Increase critical hit chance by 30%."
    },
    {
     "name": "Heart Rip II",
     "desc": "Press B while holding weakened enemies to devour their hearts, gaining 4% of your health."
    },
    {
     "name": "Heart Rip III",
     "desc": "Press B while holding weakened enemies to devour their hearts, gaining 8% of your health."
    },
    {
     "name": "Overdrive I",
     "desc": "Hold Y to launch a powerful overdrive technique."
    },
    {
     "name": "Overdrive II",
     "desc": "Hold Y to launch a powerful overdrive technique, dealing an extra 5% damage."
    },
    {
     "name": "Overdrive III",
     "desc": "Hold Y to launch a powerful overdrive technique, dealing an extra 10% damage."
    }
   ]
  ]
 },
 "es": {
  "spells": [
   [
    {
     "name": "Explosión vocal",
     "desc": "Desata un cono de dolor vocal."
    },
    {
     "name": "Voz envenenada",
     "desc": "Desata una explosión vocal venenosa."
    },
    {
     "name": "Escudo de grito",
     "desc": "Aumenta la defensa de todo el mundo un rato."
    },
    {
     "name": "Aura sanadora",
     "desc": "Recupera la salud de todos durante un rato."
    },
    {
     "name": "Esclavizador de mentes",
     "desc": "Esclaviza a un malo para que luche como tu secuaz."
    },
    {
     "name": "Ciclón",
     "desc": "¡Mezcla armas y sangre en un ciclón de dolor!"
    },
    {
     "name": "Bolsa de armas",
     "desc": "Invoca una bolsa mágica repleta de armas."
    },
    {
     "name": "Ciclón venenoso",
     "desc": "¡Mezcla armas y sangre en un ciclón de veneno!"
    }
   ],
   [
    {
     "name": "Riff ardiente",
     "desc": "Lanza un punteo incendiario."
    },
    {
     "name": "Riff eléctrico",
     "desc": "Lanza un arco de electricidad."
    },
    {
     "name": "Subordinado",
     "desc": "Invoca a un secuaz del Más Allá."
    },
    {
     "name": "Frote maldito",
     "desc": "Asesina a un enemigo de nivel bajo."
    },
    {
     "name": "Diablillos",
     "desc": "Invoca un trío de diablillos del Más Allá."
    },
    {
     "name": "Runa de choque",
     "desc": "Crea una trampa rúnica que golpea."
    },
    {
     "name": "Goliat",
     "desc": "Invoca un goliat del Más Allá."
    },
    {
     "name": "Meteorito",
     "desc": "Invoca un meteorito que quema la tierra."
    }
   ],
   [
    {
     "name": "Hoja de sierra de bajo",
     "desc": "Lanza una temible hoja de sierra."
    },
    {
     "name": "Hoja de sierra ácida",
     "desc": "Lanza una hoja de sierra recubierta de ácido."
    },
    {
     "name": "Escudo de grito",
     "desc": "Aumenta la defensa de todo el mundo un rato."
    },
    {
     "name": "Terremoto épico",
     "desc": "Lanza enemigos por todas partes con un terremoto."
    },
    {
     "name": "Acelerar",
     "desc": "Aumenta la velocidad de todo el mundo un rato."
    },
    {
     "name": "Lluvia ácida",
     "desc": "Crea una nube de lluvia que derrite la piel."
    },
    {
     "name": "Sierrarmada",
     "desc": "Dispara un grupo de hojas de sierra."
    },
    {
     "name": "Tormenta ácida",
     "desc": "Crea una tempestad de ácido y rayos."
    }
   ],
   [
    {
     "name": "Bombardeo de basura",
     "desc": "Lanza un montón de basura dañina."
    },
    {
     "name": "CORTA",
     "desc": "Cosas Oscuras y Raras Taladrantes al Azar."
    },
    {
     "name": "Aumento brutal",
     "desc": "Mejora la fuerza de todos un tiempo."
    },
    {
     "name": "Curar",
     "desc": "Recupera salud durante un rato."
    },
    {
     "name": "Pilla material",
     "desc": "Escupe unas cuantas armas que se pueden usar."
    },
    {
     "name": "Exhibición de armas",
     "desc": "Escupe unas cuantas armas de fuego que se pueden usar."
    },
    {
     "name": "Marca de explotador",
     "desc": "Hace explotar al enemigo más cercano."
    },
    {
     "name": "Enhulkación",
     "desc": "Conviértete en un enorme monstruo incontrolable."
    }
   ],
   [
    {
     "name": "Golpe de sirena",
     "desc": "Desata un cono de dolor vocal."
    },
    {
     "name": "Escudo de seguridad",
     "desc": "Rodéate de un escudo de púas."
    },
    {
     "name": "Mal de ojo",
     "desc": "Congela y hiere a un enemigo de nivel bajo."
    },
    {
     "name": "Doncella de hierro",
     "desc": "Los ataques enemigos infligen daño a quien los lanza."
    },
    {
     "name": "Ida de olla",
     "desc": "Los enemigos flipan y reciben daño."
    },
    {
     "name": "Eco",
     "desc": "Hace que tu siguiente magia no tenga enfriamiento."
    },
    {
     "name": "Eco de grupo",
     "desc": "Dale a cualquiera una Anar-ki-a sin enfriamiento."
    },
    {
     "name": "Rayo helado",
     "desc": "Hiela y hiere a un grupo de enemigos."
    }
   ],
   [
    {
     "name": "Voz helada",
     "desc": "Desata una explosión vocal helada."
    },
    {
     "name": "Voz envenenada",
     "desc": "Desata una explosión vocal venenosa."
    },
    {
     "name": "Subordinado",
     "desc": "Invoca a un secuaz del Más Allá."
    },
    {
     "name": "Frote maldito",
     "desc": "Asesina a un enemigo de nivel bajo."
    },
    {
     "name": "Runa de choque",
     "desc": "Crea una trampa rúnica que golpea."
    },
    {
     "name": "Diablillos",
     "desc": "Invoca un trío de diablillos del Más Allá."
    },
    {
     "name": "Goliat",
     "desc": "Invoca un goliat del Más Allá."
    },
    {
     "name": "Meteorito",
     "desc": "Invoca un meteorito que quema la tierra."
    }
   ],
   [
    {
     "name": "Riff helado",
     "desc": "Lanza un acorde helado."
    },
    {
     "name": "Riff eléctrico",
     "desc": "Lanza un arco de electricidad."
    },
    {
     "name": "Escudo de grito",
     "desc": "Aumenta la defensa de todo el mundo un rato."
    },
    {
     "name": "Terremoto épico",
     "desc": "Lanza enemigos por todas partes con un terremoto."
    },
    {
     "name": "Acelerar",
     "desc": "Aumenta la velocidad de todo el mundo un rato."
    },
    {
     "name": "Lluvia ácida",
     "desc": "Crea una nube de lluvia que derrite la piel."
    },
    {
     "name": "Sierrarmada",
     "desc": "Dispara un grupo de hojas de sierra."
    },
    {
     "name": "Tormenta ácida",
     "desc": "Crea una tempestad de ácido y rayos."
    }
   ],
   [
    {
     "name": "Hoja de sierra de bajo",
     "desc": "Lanza una temible hoja de sierra."
    },
    {
     "name": "Riff helado",
     "desc": "Lanza un acorde helado."
    },
    {
     "name": "Aumento brutal",
     "desc": "Mejora la fuerza de todos un tiempo."
    },
    {
     "name": "Curar",
     "desc": "Recupera salud durante un rato."
    },
    {
     "name": "Ida de olla",
     "desc": "Los enemigos flipan y reciben daño."
    },
    {
     "name": "Eco",
     "desc": "Hace que tu siguiente magia no tenga enfriamiento."
    },
    {
     "name": "Eco de grupo",
     "desc": "Dale a cualquiera una Anar-ki-a sin enfriamiento."
    },
    {
     "name": "Cometa",
     "desc": "Invoca un cometa helado maldito."
    }
   ],
   [
    {
     "name": "Bombardeo de basura",
     "desc": "Lanza un montón de basura dañina."
    },
    {
     "name": "CORTA",
     "desc": "Cosas Oscuras y Raras Taladrantes al Azar."
    },
    {
     "name": "Mal de ojo",
     "desc": "Congela y hiere a un enemigo de nivel bajo."
    },
    {
     "name": "Doncella de hierro",
     "desc": "Los ataques enemigos infligen daño a quien los lanza."
    },
    {
     "name": "Frote maldito",
     "desc": "Asesina a un enemigo de nivel bajo."
    },
    {
     "name": "Aura sanadora",
     "desc": "Recupera la salud de todos durante un rato."
    },
    {
     "name": "Tormenta maldita",
     "desc": "Crea una tormenta de hielo dañina."
    },
    {
     "name": "Rayo helado",
     "desc": "Hiela y hiere a un grupo de enemigos."
    }
   ],
   [
    {
     "name": "Golpe de sirena",
     "desc": "Desata un cono de dolor vocal."
    },
    {
     "name": "Escudo de seguridad",
     "desc": "Rodéate de un escudo de púas."
    },
    {
     "name": "Escudo de grito",
     "desc": "Aumenta la defensa de todo el mundo un rato."
    },
    {
     "name": "Aura sanadora",
     "desc": "Recupera la salud de todos durante un rato."
    },
    {
     "name": "Esclavizador de mentes",
     "desc": "Esclaviza a un malo para que luche como tu secuaz."
    },
    {
     "name": "Ciclón",
     "desc": "¡Mezcla armas y sangre en un ciclón de dolor!"
    },
    {
     "name": "Bolsa de armas",
     "desc": "Invoca una bolsa mágica repleta de armas."
    },
    {
     "name": "Ciclón venenoso",
     "desc": "¡Mezcla armas y sangre en un ciclón de veneno!"
    }
   ],
   [
    {
     "name": "Voz drenadora",
     "desc": "Absorbe salud de los enemigos con una explosión vocal."
    },
    {
     "name": "Voz helada",
     "desc": "Desata una explosión vocal helada."
    },
    {
     "name": "Escudo de seguridad",
     "desc": "Rodéate de un escudo de púas."
    },
    {
     "name": "Frote maldito",
     "desc": "Asesina a un enemigo de nivel bajo."
    },
    {
     "name": "Ida de olla",
     "desc": "Los enemigos flipan y reciben daño."
    },
    {
     "name": "Eco",
     "desc": "Hace que tu siguiente magia no tenga enfriamiento."
    },
    {
     "name": "Eco de grupo",
     "desc": "Dale a cualquiera una Anar-ki-a sin enfriamiento."
    },
    {
     "name": "Meteorito",
     "desc": "Invoca un meteorito que quema la tierra."
    }
   ],
   [
    {
     "name": "Riff helado",
     "desc": "Lanza un acorde helado."
    },
    {
     "name": "Riff eléctrico",
     "desc": "Lanza un arco de electricidad."
    },
    {
     "name": "Aumento brutal",
     "desc": "Mejora la fuerza de todos un tiempo."
    },
    {
     "name": "Eco",
     "desc": "Hace que tu siguiente magia no tenga enfriamiento."
    },
    {
     "name": "Acelerar",
     "desc": "Aumenta la velocidad de todo el mundo un rato."
    },
    {
     "name": "Marca de explotador",
     "desc": "Hace explotar al enemigo más cercano."
    },
    {
     "name": "Eco de grupo",
     "desc": "Dale a cualquiera una Anar-ki-a sin enfriamiento."
    },
    {
     "name": "Cometa",
     "desc": "Invoca un cometa helado maldito."
    }
   ],
   [
    {
     "name": "Riff ardiente",
     "desc": "Lanza un punteo incendiario."
    },
    {
     "name": "Sierrarmada",
     "desc": "Dispara un grupo de hojas de sierra."
    },
    {
     "name": "Aumento brutal",
     "desc": "Mejora la fuerza de todos un tiempo."
    },
    {
     "name": "Curar",
     "desc": "Recupera salud durante un rato."
    },
    {
     "name": "Runa flamígera",
     "desc": "Crea una trampa rúnica de fuego."
    },
    {
     "name": "Bolsa de armas",
     "desc": "Invoca una bolsa mágica repleta de armas."
    },
    {
     "name": "Esclavizador de mentes",
     "desc": "Esclaviza a un malo para que luche como tu secuaz."
    },
    {
     "name": "Rayo helado",
     "desc": "Hiela y hiere a un grupo de enemigos."
    }
   ],
   [
    {
     "name": "Hoja de sierra de bajo",
     "desc": "Lanza una temible hoja de sierra."
    },
    {
     "name": "Hoja de sierra ácida",
     "desc": "Lanza una hoja de sierra recubierta de ácido."
    },
    {
     "name": "Subordinado",
     "desc": "Invoca a un secuaz del Más Allá."
    },
    {
     "name": "Doncella de hierro",
     "desc": "Los ataques enemigos infligen daño a quien los lanza."
    },
    {
     "name": "Aumento brutal",
     "desc": "Mejora la fuerza de todos un tiempo."
    },
    {
     "name": "Diablillos",
     "desc": "Invoca un trío de diablillos del Más Allá."
    },
    {
     "name": "Goliat",
     "desc": "Invoca un goliat del Más Allá."
    },
    {
     "name": "Tormenta ácida",
     "desc": "Crea una tempestad de ácido y rayos."
    }
   ],
   [
    {
     "name": "Golpe de sirena",
     "desc": "Desata un cono de dolor vocal."
    },
    {
     "name": "Voz drenadora",
     "desc": "Absorbe salud de los enemigos con una explosión vocal."
    },
    {
     "name": "Curar",
     "desc": "Recupera salud durante un rato."
    },
    {
     "name": "Voz envenenada",
     "desc": "Desata una explosión vocal venenosa."
    },
    {
     "name": "Acelerar",
     "desc": "Aumenta la velocidad de todo el mundo un rato."
    },
    {
     "name": "Aura sanadora",
     "desc": "Recupera la salud de todos durante un rato."
    },
    {
     "name": "Terremoto épico",
     "desc": "Lanza enemigos por todas partes con un terremoto."
    },
    {
     "name": "Tormenta maldita",
     "desc": "Crea una tormenta de hielo dañina."
    }
   ],
   [
    {
     "name": "Voz drenadora",
     "desc": "Absorbe salud de los enemigos con una explosión vocal."
    },
    {
     "name": "Voz ardiente",
     "desc": "Desata una ardiente explosión vocal."
    },
    {
     "name": "Curar",
     "desc": "Recupera salud durante un rato."
    },
    {
     "name": "Frote maldito",
     "desc": "Asesina a un enemigo de nivel bajo."
    },
    {
     "name": "Acelerar",
     "desc": "Aumenta la velocidad de todo el mundo un rato."
    },
    {
     "name": "Aura sanadora",
     "desc": "Recupera la salud de todos durante un rato."
    },
    {
     "name": "Eco de grupo",
     "desc": "Dale a cualquiera una Anar-ki-a sin enfriamiento."
    },
    {
     "name": "Cometa",
     "desc": "Invoca un cometa helado maldito."
    }
   ],
   [
    {
     "name": "Riff helado",
     "desc": "Lanza un acorde helado."
    },
    {
     "name": "Riff ardiente",
     "desc": "Lanza un punteo incendiario."
    },
    {
     "name": "Bolsa de material",
     "desc": "Invoca una bolsa mágica llena de materiales."
    },
    {
     "name": "Terremoto épico",
     "desc": "Lanza enemigos por todas partes con un terremoto."
    },
    {
     "name": "Esclavizador de mentes",
     "desc": "Esclaviza a un malo para que luche como tu secuaz."
    },
    {
     "name": "Lluvia ácida",
     "desc": "Crea una nube de lluvia que derrite la piel."
    },
    {
     "name": "Bolsa de armas",
     "desc": "Invoca una bolsa mágica repleta de armas."
    },
    {
     "name": "Tormenta ácida",
     "desc": "Crea una tempestad de ácido y rayos."
    }
   ],
   [
    {
     "name": "Riff helado",
     "desc": "Lanza un acorde helado."
    },
    {
     "name": "Riff eléctrico",
     "desc": "Lanza un arco de electricidad."
    },
    {
     "name": "Aumento brutal",
     "desc": "Mejora la fuerza de todos un tiempo."
    },
    {
     "name": "Curar",
     "desc": "Recupera salud durante un rato."
    },
    {
     "name": "Ida de olla",
     "desc": "Los enemigos flipan y reciben daño."
    },
    {
     "name": "Marca de explotador",
     "desc": "Hace explotar al enemigo más cercano."
    },
    {
     "name": "Eco de grupo",
     "desc": "Dale a cualquiera una Anar-ki-a sin enfriamiento."
    },
    {
     "name": "Rayo helado",
     "desc": "Hiela y hiere a un grupo de enemigos."
    }
   ],
   [
    {
     "name": "Hoja de sierra de bajo",
     "desc": "Lanza una temible hoja de sierra."
    },
    {
     "name": "Sierrarmada",
     "desc": "Dispara un grupo de hojas de sierra."
    },
    {
     "name": "Mal de ojo",
     "desc": "Congela y hiere a un enemigo de nivel bajo."
    },
    {
     "name": "Doncella de hierro",
     "desc": "Los ataques enemigos infligen daño a quien los lanza."
    },
    {
     "name": "Frote maldito",
     "desc": "Asesina a un enemigo de nivel bajo."
    },
    {
     "name": "Eco",
     "desc": "Hace que tu siguiente magia no tenga enfriamiento."
    },
    {
     "name": "Rayo helado",
     "desc": "Hiela y hiere a un grupo de enemigos."
    },
    {
     "name": "Ciclón venenoso",
     "desc": "¡Mezcla armas y sangre en un ciclón de veneno!"
    }
   ],
   [
    {
     "name": "Golpe de sirena",
     "desc": "Desata un cono de dolor vocal."
    },
    {
     "name": "Voz ardiente",
     "desc": "Desata una ardiente explosión vocal."
    },
    {
     "name": "Voz helada",
     "desc": "Desata una explosión vocal helada."
    },
    {
     "name": "Aura sanadora",
     "desc": "Recupera la salud de todos durante un rato."
    },
    {
     "name": "Acelerar",
     "desc": "Aumenta la velocidad de todo el mundo un rato."
    },
    {
     "name": "Ciclón",
     "desc": "¡Mezcla armas y sangre en un ciclón de dolor!"
    },
    {
     "name": "Tormenta maldita",
     "desc": "Crea una tormenta de hielo dañina."
    },
    {
     "name": "Meteorito",
     "desc": "Invoca un meteorito que quema la tierra."
    }
   ]
  ],
  "unlocks": [
   [
    null,
    null,
    {
     "name": "Pisotón de cráneo",
     "desc": "Pulsa X sobre enemigos debilitados para aplastar sus cráneos."
    },
    {
     "name": "A dos manos",
     "desc": "Utiliza dos armas de una mano a la vez."
    },
    {
     "name": "Concierto en equipo",
     "desc": "Forma equipo con un amigo para liarla, estilo concierto. Logra una combinación de 20 golpes, mantén pulsado LTRT y espera lo mejor."
    },
    {
     "name": "Contraatacar",
     "desc": "Bloquea con LT en el momento preciso y luego pulsa X para desatar un poco de Anar-ki-a."
    },
    {
     "name": "Mochila I",
     "desc": "Con capacidad para 60 objetos del inventario."
    },
    {
     "name": "Aguililla I",
     "desc": "Aumenta el daño de arma arrojadiza un 50%."
    },
    {
     "name": "Reliquia I",
     "desc": "Activa 3 reliquias a la vez."
    },
    {
     "name": "Armas a dos bandas",
     "desc": "Dispara dos pistolas a la vez."
    },
    {
     "name": "Mochila II",
     "desc": "Con capacidad para 70 objetos de inventario."
    },
    {
     "name": "Asesino I",
     "desc": "Aumenta el daño de arma de fuego un 25%."
    },
    {
     "name": "Reliquia II",
     "desc": "Activa 4 reliquias a la vez."
    },
    {
     "name": "Corazón arrancado I",
     "desc": "Pulsa B mientras sostienes a enemigos debilitados para devorar sus corazones."
    },
    {
     "name": "Reliquia III",
     "desc": "Activa 5 reliquias a la vez."
    },
    {
     "name": "Mochila III",
     "desc": "Con capacidad para 80 objetos de inventario."
    },
    {
     "name": "Esprínter I",
     "desc": "Aumenta la velocidad de esprín un 25%."
    },
    {
     "name": "Reliquia IV",
     "desc": "Activa 6 reliquias a la vez."
    },
    {
     "name": "Mochila IV",
     "desc": "Con capacidad para 90 objetos del inventario."
    },
    {
     "name": "Reliquia V",
     "desc": "Activa 7 reliquias a la vez."
    },
    {
     "name": "Reliquia definitiva",
     "desc": "Activa infinitas reliquias a la vez."
    },
    {
     "name": "Aguililla II",
     "desc": "Aumenta el daño de arma arrojadiza un 75%."
    },
    {
     "name": "Aguililla III",
     "desc": "Aumenta el daño de arma arrojadiza un 100%."
    },
    {
     "name": "Asesino II",
     "desc": "Aumenta el daño de arma de fuego un 50%."
    },
    {
     "name": "Asesino III",
     "desc": "Aumenta el daño de arma de fuego un 75%."
    },
    {
     "name": "Esprínter II",
     "desc": "Aumenta la velocidad de esprín un 30%."
    },
    {
     "name": "Esprínter III",
     "desc": "Aumenta la velocidad de esprín un 35%."
    },
    {
     "name": "Corazón arrancado II",
     "desc": "Pulsa B mientras sostienes a enemigos debilitados para devorar sus corazones y recuperar el 4% de tu salud."
    },
    {
     "name": "Corazón arrancado III",
     "desc": "Pulsa B mientras sostienes a enemigos debilitados para devorar sus corazones y recuperar un 8% de salud."
    },
    {
     "name": "Control I",
     "desc": "Mantén pulsado Y para lanzar una poderosa técnica de control."
    },
    {
     "name": "Control II",
     "desc": "Mantén pulsado Y para lanzar una poderosa técnica de control, infligiendo un 5% de daño adicional."
    },
    {
     "name": "Control III",
     "desc": "Mantén pulsado Y para lanzar una poderosa técnica de control, infligiendo un 10% de daño adicional."
    }
   ],
   [
    null,
    null,
    {
     "name": "Pisotón de cráneo",
     "desc": "Pulsa X sobre enemigos debilitados para aplastar sus cráneos."
    },
    {
     "name": "Robo de alma",
     "desc": "Sitúate sobre enemigos debilitados y pulsa Y para absorber sus almas, recuperar PS y reducir el enfriamiento."
    },
    {
     "name": "Bestia estigia",
     "desc": "Forma equipo con un amigo para convertirte en una feroz bestia del Más Allá y su jinete. Logra una combinación de 20 golpes, mantén pulsado LTRT y espera lo mejor."
    },
    {
     "name": "Contraatacar",
     "desc": "Bloquea con LT en el momento preciso y luego pulsa X para desatar un poco de Anar-ki-a."
    },
    {
     "name": "Mochila I",
     "desc": "Con capacidad para 60 objetos del inventario."
    },
    {
     "name": "Cortador I",
     "desc": "Aumenta el daño de arma de hoja un 25%."
    },
    {
     "name": "Reliquia I",
     "desc": "Activa 3 reliquias a la vez."
    },
    {
     "name": "Carga de alma",
     "desc": "Mantén pulsado Y mientras haces un robo de alma para maximizar el robo de alma."
    },
    {
     "name": "Mochila II",
     "desc": "Con capacidad para 70 objetos de inventario."
    },
    {
     "name": "Quirúrgico I",
     "desc": "Aumenta la posibilidad de golpe crítico un 10%."
    },
    {
     "name": "Reliquia II",
     "desc": "Activa 4 reliquias a la vez."
    },
    {
     "name": "Corazón arrancado I",
     "desc": "Pulsa B mientras sostienes a enemigos debilitados para devorar sus corazones."
    },
    {
     "name": "Reliquia III",
     "desc": "Activa 5 reliquias a la vez."
    },
    {
     "name": "Mochila III",
     "desc": "Con capacidad para 80 objetos de inventario."
    },
    {
     "name": "Masacre I",
     "desc": "Aumenta el daño del arma sierra mecánica un 25%."
    },
    {
     "name": "Reliquia IV",
     "desc": "Activa 6 reliquias a la vez."
    },
    {
     "name": "Mochila IV",
     "desc": "Con capacidad para 90 objetos del inventario."
    },
    {
     "name": "Reliquia V",
     "desc": "Activa 7 reliquias a la vez."
    },
    {
     "name": "Reliquia definitiva",
     "desc": "Activa infinitas reliquias a la vez."
    },
    {
     "name": "Cortante II",
     "desc": "Aumenta el daño de arma de hoja un 50%."
    },
    {
     "name": "Cortante III",
     "desc": "Aumenta el daño de arma de hoja un 75%."
    },
    {
     "name": "Quirúrgico II",
     "desc": "Aumenta la posibilidad de golpe crítico un 20%."
    },
    {
     "name": "Quirúrgico III",
     "desc": "Aumenta la posibilidad de golpe crítico un 30%."
    },
    {
     "name": "Masacre II",
     "desc": "Aumenta el daño del arma sierra mecánica un 50%."
    },
    {
     "name": "Masacre III",
     "desc": "Aumenta el daño del arma sierra mecánica un 75%."
    },
    {
     "name": "Corazón arrancado II",
     "desc": "Pulsa B mientras sostienes a enemigos debilitados para devorar sus corazones y recuperar el 4% de tu salud."
    },
    {
     "name": "Corazón arrancado III",
     "desc": "Pulsa B mientras sostienes a enemigos debilitados para devorar sus corazones y recuperar un 8% de salud."
    },
    {
     "name": "Control I",
     "desc": "Mantén pulsado Y para lanzar una poderosa técnica de control."
    },
    {
     "name": "Control II",
     "desc": "Mantén pulsado Y para lanzar una poderosa técnica de control, infligiendo un 5% de daño adicional."
    },
    {
     "name": "Control III",
     "desc": "Mantén pulsado Y para lanzar una poderosa técnica de control, infligiendo un 10% de daño adicional."
    }
   ],
   [
    null,
    null,
    {
     "name": "Pisotón de cráneo",
     "desc": "Pulsa X sobre enemigos debilitados para aplastar sus cráneos."
    },
    {
     "name": "Tótem de salud",
     "desc": "Convierte las cabezas desechadas en tótems curativos. Coge una cabeza y luego pulsa Y para colocarla."
    },
    {
     "name": "Robogerudo",
     "desc": "Forma equipo con un amigo para crear un robot gigante. Logra una combinación de 20 golpes, mantén pulsado LTRT y espera lo mejor."
    },
    {
     "name": "Contraatacar",
     "desc": "Bloquea con LT en el momento preciso y luego pulsa X para desatar un poco de Anar-ki-a."
    },
    {
     "name": "Mochila I",
     "desc": "Con capacidad para 60 objetos del inventario."
    },
    {
     "name": "Masacre I",
     "desc": "Aumenta el daño del arma sierra mecánica un 25%."
    },
    {
     "name": "Reliquia I",
     "desc": "Activa 3 reliquias a la vez."
    },
    {
     "name": "Tótem de láser cerebral",
     "desc": "Convierte los cerebros desechados en torretas tótems láser. Coge un cerebro y pulsa Y para colocarlo."
    },
    {
     "name": "Mochila II",
     "desc": "Con capacidad para 70 objetos de inventario."
    },
    {
     "name": "Sangre pringosa I",
     "desc": "10% de posibilidades de hacer explotar a los enemigos debilitados."
    },
    {
     "name": "Reliquia II",
     "desc": "Activa 4 reliquias a la vez."
    },
    {
     "name": "Corazón arrancado I",
     "desc": "Pulsa B mientras sostienes a enemigos debilitados para devorar sus corazones."
    },
    {
     "name": "Reliquia III",
     "desc": "Activa 5 reliquias a la vez."
    },
    {
     "name": "Mochila III",
     "desc": "Con capacidad para 80 objetos de inventario."
    },
    {
     "name": "Contusionador I",
     "desc": "Aumenta el daño de arma contundente un 25%."
    },
    {
     "name": "Reliquia IV",
     "desc": "Activa 6 reliquias a la vez."
    },
    {
     "name": "Mochila IV",
     "desc": "Con capacidad para 90 objetos del inventario."
    },
    {
     "name": "Reliquia V",
     "desc": "Activa 7 reliquias a la vez."
    },
    {
     "name": "Reliquia definitiva",
     "desc": "Activa infinitas reliquias a la vez."
    },
    {
     "name": "Masacre II",
     "desc": "Aumenta el daño del arma sierra mecánica un 50%."
    },
    {
     "name": "Masacre III",
     "desc": "Aumenta el daño del arma sierra mecánica un 75%."
    },
    {
     "name": "Sangre pringosa II",
     "desc": "20% de posibilidades de hacer explotar a los enemigos debilitados."
    },
    {
     "name": "Sangre pringosa III",
     "desc": "30% de posibilidades de hacer explotar a los enemigos debilitados."
    },
    {
     "name": "Contusionador II",
     "desc": "Aumenta el daño de arma contundente un 50%."
    },
    {
     "name": "Contusionador III",
     "desc": "Aumenta el daño de arma contundente un 75%."
    },
    {
     "name": "Corazón arrancado II",
     "desc": "Pulsa B mientras sostienes a enemigos debilitados para devorar sus corazones y recuperar el 4% de tu salud."
    },
    {
     "name": "Corazón arrancado III",
     "desc": "Pulsa B mientras sostienes a enemigos debilitados para devorar sus corazones y recuperar un 8% de salud."
    },
    {
     "name": "Control I",
     "desc": "Mantén pulsado Y para lanzar una poderosa técnica de control."
    },
    {
     "name": "Control II",
     "desc": "Mantén pulsado Y para lanzar una poderosa técnica de control, infligiendo un 5% de daño adicional."
    },
    {
     "name": "Control III",
     "desc": "Mantén pulsado Y para lanzar una poderosa técnica de control, infligiendo un 10% de daño adicional."
    }
   ],
   [
    null,
    null,
    {
     "name": "Pisotón de cráneo",
     "desc": "Pulsa X sobre enemigos debilitados para aplastar sus cráneos."
    },
    {
     "name": "Levantamiento masivo",
     "desc": "Levanta y lanza objetos gigantes con X."
    },
    {
     "name": "Combinación viaje gratis",
     "desc": "Forma equipo con un amigo para desatar el caos a caballito. Logra una combinación de 20 golpes, mantén pulsado LTRT y espera lo mejor."
    },
    {
     "name": "Contraatacar",
     "desc": "Bloquea con LT en el momento preciso y luego pulsa X para desatar un poco de Anar-ki-a."
    },
    {
     "name": "Mochila I",
     "desc": "Con capacidad para 60 objetos del inventario."
    },
    {
     "name": "Contusionador I",
     "desc": "Aumenta el daño de arma contundente un 25%."
    },
    {
     "name": "Reliquia I",
     "desc": "Activa 3 reliquias a la vez."
    },
    {
     "name": "A trompazos",
     "desc": "Coge enemigos con B y luego mantén pulsadoX para realizar un ataque de trompazo corporal."
    },
    {
     "name": "Mochila II",
     "desc": "Con capacidad para 70 objetos de inventario."
    },
    {
     "name": "Peleón I",
     "desc": "Aumenta el daño de armas a dos manos un 25%."
    },
    {
     "name": "Reliquia II",
     "desc": "Activa 4 reliquias a la vez."
    },
    {
     "name": "Corazón arrancado I",
     "desc": "Pulsa B mientras sostienes a enemigos debilitados para devorar sus corazones."
    },
    {
     "name": "Reliquia III",
     "desc": "Activa 5 reliquias a la vez."
    },
    {
     "name": "Mochila III",
     "desc": "Con capacidad para 80 objetos de inventario."
    },
    {
     "name": "Eludir I",
     "desc": "Aumenta el daño absorbido por un bloqueo un 50%."
    },
    {
     "name": "Reliquia IV",
     "desc": "Activa 6 reliquias a la vez."
    },
    {
     "name": "Mochila IV",
     "desc": "Con capacidad para 90 objetos del inventario."
    },
    {
     "name": "Reliquia V",
     "desc": "Activa 7 reliquias a la vez."
    },
    {
     "name": "Reliquia definitiva",
     "desc": "Activa infinitas reliquias a la vez."
    },
    {
     "name": "Contusionador II",
     "desc": "Aumenta el daño de arma contundente un 50%."
    },
    {
     "name": "Contusionador III",
     "desc": "Aumenta el daño de arma contundente un 75%."
    },
    {
     "name": "Peleón II",
     "desc": "Aumenta el daño de armas a dos manos un 50%."
    },
    {
     "name": "Peleón III",
     "desc": "Aumenta el daño de armas a dos manos un 75%."
    },
    {
     "name": "Eludir II",
     "desc": "Aumenta el daño absorbido por un bloqueo un 75%."
    },
    {
     "name": "Eludir III",
     "desc": "Aumenta el daño absorbido por un bloqueo un 100%."
    },
    {
     "name": "Corazón arrancado II",
     "desc": "Pulsa B mientras sostienes a enemigos debilitados para devorar sus corazones y recuperar el 4% de tu salud."
    },
    {
     "name": "Corazón arrancado III",
     "desc": "Pulsa B mientras sostienes a enemigos debilitados para devorar sus corazones y recuperar un 8% de salud."
    },
    {
     "name": "Control I",
     "desc": "Mantén pulsado Y para lanzar una poderosa técnica de control."
    },
    {
     "name": "Control II",
     "desc": "Mantén pulsado Y para lanzar una poderosa técnica de control, infligiendo un 5% de daño adicional."
    },
    {
     "name": "Control III",
     "desc": "Mantén pulsado Y para lanzar una poderosa técnica de control, infligiendo un 10% de daño adicional."
    }
   ],
   [
    null,
    null,
    {
     "name": "Pisotón de cráneo",
     "desc": "Pulsa X sobre enemigos debilitados para aplastar sus cráneos."
    },
    {
     "name": "Voltereta de judo",
     "desc": "Toca izquierda o derecha mientras mantienes LT para esquivar con una voltereta."
    },
    {
     "name": "Concierto en equipo",
     "desc": "Forma equipo con un amigo para liarla, estilo concierto. Logra una combinación de 20 golpes, mantén pulsado LTRT y espera lo mejor."
    },
    {
     "name": "Contraatacar",
     "desc": "Bloquea con LT en el momento preciso y luego pulsa X para desatar un poco de Anar-ki-a."
    },
    {
     "name": "Mochila I",
     "desc": "Con capacidad para 60 objetos del inventario."
    },
    {
     "name": "Esprínter I",
     "desc": "Aumenta la velocidad de esprín un 25%."
    },
    {
     "name": "Reliquia I",
     "desc": "Activa 3 reliquias a la vez."
    },
    {
     "name": "Escape de judo",
     "desc": "Pulsa A mientras te agarran para escapar."
    },
    {
     "name": "Mochila II",
     "desc": "Con capacidad para 70 objetos de inventario."
    },
    {
     "name": "Eludir I",
     "desc": "Aumenta el daño absorbido por un bloqueo un 50%."
    },
    {
     "name": "Reliquia II",
     "desc": "Activa 4 reliquias a la vez."
    },
    {
     "name": "Corazón arrancado I",
     "desc": "Pulsa B mientras sostienes a enemigos debilitados para devorar sus corazones."
    },
    {
     "name": "Reliquia III",
     "desc": "Activa 5 reliquias a la vez."
    },
    {
     "name": "Mochila III",
     "desc": "Con capacidad para 80 objetos de inventario."
    },
    {
     "name": "Quirúrgico I",
     "desc": "Aumenta la posibilidad de golpe crítico un 10%."
    },
    {
     "name": "Reliquia IV",
     "desc": "Activa 6 reliquias a la vez."
    },
    {
     "name": "Mochila IV",
     "desc": "Con capacidad para 90 objetos del inventario."
    },
    {
     "name": "Reliquia V",
     "desc": "Activa 7 reliquias a la vez."
    },
    {
     "name": "Reliquia definitiva",
     "desc": "Activa infinitas reliquias a la vez."
    },
    {
     "name": "Esprínter II",
     "desc": "Aumenta la velocidad de esprín un 30%."
    },
    {
     "name": "Esprínter III",
     "desc": "Aumenta la velocidad de esprín un 35%."
    },
    {
     "name": "Eludir II",
     "desc": "Aumenta el daño absorbido por un bloqueo un 75%."
    },
    {
     "name": "Eludir III",
     "desc": "Aumenta el daño absorbido por un bloqueo un 100%."
    },
    {
     "name": "Quirúrgico II",
     "desc": "Aumenta la posibilidad de golpe crítico un 20%."
    },
    {
     "name": "Quirúrgico III",
     "desc": "Aumenta la posibilidad de golpe crítico un 30%."
    },
    {
     "name": "Corazón arrancado II",
     "desc": "Pulsa B mientras sostienes a enemigos debilitados para devorar sus corazones y recuperar el 4% de tu salud."
    },
    {
     "name": "Corazón arrancado III",
     "desc": "Pulsa B mientras sostienes a enemigos debilitados para devorar sus corazones y recuperar un 8% de salud."
    },
    {
     "name": "Control I",
     "desc": "Mantén pulsado Y para lanzar una poderosa técnica de control."
    },
    {
     "name": "Control II",
     "desc": "Mantén pulsado Y para lanzar una poderosa técnica de control, infligiendo un 5% de daño adicional."
    },
    {
     "name": "Control III",
     "desc": "Mantén pulsado Y para lanzar una poderosa técnica de control, infligiendo un 10% de daño adicional."
    }
   ]
  ]
 },
 "pt-BR": {
  "spells": [
   [
    {
     "name": "Explosão vocal",
     "desc": "Libere um cone de dor vocal."
    },
    {
     "name": "Vocais Veneno",
     "desc": "Libere uma explosão de vocal venenoso."
    },
    {
     "name": "Escudo do Grito",
     "desc": "Aumente a defesa de todos por um período."
    },
    {
     "name": "Aura de cura",
     "desc": "Recupere a saúde de todos por um período."
    },
    {
     "name": "Dominador de mentes",
     "desc": "Escravize um bad-boy para lutar como seu funcionário."
    },
    {
     "name": "Ciclone",
     "desc": "Junte armas e órgãos em um ciclone de dor!!!"
    },
    {
     "name": "Saco de armas",
     "desc": "Invoque um saco mágico cheio de armas."
    },
    {
     "name": "Ciclone Veneno",
     "desc": "Junte armas e órgãos em um ciclone de veneno!"
    }
   ],
   [
    {
     "name": "Riff incandescente",
     "desc": "Dispare um lick incendiário."
    },
    {
     "name": "Riff elétrico",
     "desc": "Dispare um arco de eletricidade."
    },
    {
     "name": "Subordinado",
     "desc": "Invoque um trabalhador dos Países Baixos."
    },
    {
     "name": "Massagem de Bane",
     "desc": "Assassine um inimigo de baixo nível."
    },
    {
     "name": "Diabretes",
     "desc": "Invoque um trio de diabretes dos Países Baixos."
    },
    {
     "name": "Runa de choque",
     "desc": "Crie uma armadilha de runas de choque."
    },
    {
     "name": "Golias",
     "desc": "Invoque um Golias dos Países Baixos."
    },
    {
     "name": "Meteoro",
     "desc": "Invoque um meteoro que chamusca a terra."
    }
   ],
   [
    {
     "name": "Serra do baixo",
     "desc": "Dispare uma serra temível."
    },
    {
     "name": "Serra ácida",
     "desc": "Dispare uma serra revestida com ácido."
    },
    {
     "name": "Escudo do Grito",
     "desc": "Aumente a defesa de todos por um período."
    },
    {
     "name": "Terremoto Épico",
     "desc": "Sacuda os inimigos com um terremoto devastador."
    },
    {
     "name": "Rapidez",
     "desc": "Aumente a velocidade de todos por um período."
    },
    {
     "name": "Chuva ácida",
     "desc": "Crie uma nuvem de chuva que derrete a pele."
    },
    {
     "name": "Sawrmada",
     "desc": "Dispare uma sequência de serras."
    },
    {
     "name": "Tempestade ácida",
     "desc": "Crie uma tempestade de ácido e relâmpagos."
    }
   ],
   [
    {
     "name": "Barreira de Lixo",
     "desc": "Exploda um monte de lixo destruidor."
    },
    {
     "name": "S.H.A.R.P.S.",
     "desc": "Semi Horroroso Arsenal de Restos de Pontas Soltas."
    },
    {
     "name": "Feitiço brutal",
     "desc": "Aumente a força de todos por um período."
    },
    {
     "name": "Curar",
     "desc": "Recupere sua saúde por um período."
    },
    {
     "name": "Ferramenteiro",
     "desc": "Mostre algumas armas utilizáveis."
    },
    {
     "name": "Show de Armas",
     "desc": "Mostre algumas armas utilizáveis."
    },
    {
     "name": "Marcador Explosivo",
     "desc": "Exploda o inimigo mais próximo."
    },
    {
     "name": "Enhulken",
     "desc": "Torne-se um monstro incontrolável."
    }
   ],
   [
    {
     "name": "Que pena, senhor.",
     "desc": "Libere um cone de dor vocal."
    },
    {
     "name": "Escudo de Segurança",
     "desc": "Envolva-se em um escudo de alfinetes."
    },
    {
     "name": "Olho maléfico",
     "desc": "Congele e cause danos em um inimigo de baixo nível."
    },
    {
     "name": "Donzela de Ferro",
     "desc": "Ataque dos inimigos causam danos a eles."
    },
    {
     "name": "Mindbork",
     "desc": "Os inimigos tropeçam e sofrem danos."
    },
    {
     "name": "Eco",
     "desc": "Não dê tempo de recarga à sua próxima mágica."
    },
    {
     "name": "Eco de grupo",
     "desc": "Dê a todos um Anar-chi sem tempo de recarga."
    },
    {
     "name": "Congelamento rápido",
     "desc": "Congele e cause danos em um grupo de inimigos."
    }
   ],
   [
    {
     "name": "Vocal congelado",
     "desc": "Libere uma explosão de vocal gelado."
    },
    {
     "name": "Vocais Veneno",
     "desc": "Libere uma explosão de vocal venenoso."
    },
    {
     "name": "Subordinado",
     "desc": "Invoque um trabalhador dos Países Baixos."
    },
    {
     "name": "Massagem de Bane",
     "desc": "Assassine um inimigo de baixo nível."
    },
    {
     "name": "Runa de choque",
     "desc": "Crie uma armadilha de runas de choque."
    },
    {
     "name": "Diabretes",
     "desc": "Invoque um trio de diabretes dos Países Baixos."
    },
    {
     "name": "Golias",
     "desc": "Invoque um Golias dos Países Baixos."
    },
    {
     "name": "Meteoro",
     "desc": "Invoque um meteoro que chamusca a terra."
    }
   ],
   [
    {
     "name": "Riff gelado",
     "desc": "Dispare um acorde congelado."
    },
    {
     "name": "Riff elétrico",
     "desc": "Dispare um arco de eletricidade."
    },
    {
     "name": "Escudo do Grito",
     "desc": "Aumente a defesa de todos por um período."
    },
    {
     "name": "Terremoto Épico",
     "desc": "Sacuda os inimigos com um terremoto devastador."
    },
    {
     "name": "Rapidez",
     "desc": "Aumente a velocidade de todos por um período."
    },
    {
     "name": "Chuva ácida",
     "desc": "Crie uma nuvem de chuva que derrete a pele."
    },
    {
     "name": "Sawrmada",
     "desc": "Dispare uma sequência de serras."
    },
    {
     "name": "Tempestade ácida",
     "desc": "Crie uma tempestade de ácido e relâmpagos."
    }
   ],
   [
    {
     "name": "Serra do baixo",
     "desc": "Dispare uma serra temível."
    },
    {
     "name": "Riff gelado",
     "desc": "Dispare um acorde congelado."
    },
    {
     "name": "Feitiço brutal",
     "desc": "Aumente a força de todos por um período."
    },
    {
     "name": "Curar",
     "desc": "Recupere sua saúde por um período."
    },
    {
     "name": "Mindbork",
     "desc": "Os inimigos tropeçam e sofrem danos."
    },
    {
     "name": "Eco",
     "desc": "Não dê tempo de recarga à sua próxima mágica."
    },
    {
     "name": "Eco de grupo",
     "desc": "Dê a todos um Anar-chi sem tempo de recarga."
    },
    {
     "name": "Cometa",
     "desc": "Invoque um cometa de devastação de gelo."
    }
   ],
   [
    {
     "name": "Barreira de Lixo",
     "desc": "Exploda um monte de lixo destruidor."
    },
    {
     "name": "S.H.A.R.P.S.",
     "desc": "Semi Horroroso Arsenal de Restos de Pontas Soltas."
    },
    {
     "name": "Olho maléfico",
     "desc": "Congele e cause danos em um inimigo de baixo nível."
    },
    {
     "name": "Donzela de Ferro",
     "desc": "Ataque dos inimigos causam danos a eles."
    },
    {
     "name": "Massagem de Bane",
     "desc": "Assassine um inimigo de baixo nível."
    },
    {
     "name": "Aura de cura",
     "desc": "Recupere a saúde de todos por um período."
    },
    {
     "name": "Nevasca devastadora",
     "desc": "Crie uma tempestade de neve devastadora."
    },
    {
     "name": "Congelamento rápido",
     "desc": "Congele e cause danos em um grupo de inimigos."
    }
   ],
   [
    {
     "name": "Que pena, senhor.",
     "desc": "Libere um cone de dor vocal."
    },
    {
     "name": "Escudo de Segurança",
     "desc": "Envolva-se em um escudo de alfinetes."
    },
    {
     "name": "Escudo do Grito",
     "desc": "Aumente a defesa de todos por um período."
    },
    {
     "name": "Aura de cura",
     "desc": "Recupere a saúde de todos por um período."
    },
    {
     "name": "Dominador de mentes",
     "desc": "Escravize um bad-boy para lutar como seu funcionário."
    },
    {
     "name": "Ciclone",
     "desc": "Junte armas e órgãos em um ciclone de dor!!!"
    },
    {
     "name": "Saco de armas",
     "desc": "Invoque um saco mágico cheio de armas."
    },
    {
     "name": "Ciclone Veneno",
     "desc": "Junte armas e órgãos em um ciclone de veneno!"
    }
   ],
   [
    {
     "name": "Vocal sugador",
     "desc": "Sugue a saúde do inimigo com uma explosão de vocal."
    },
    {
     "name": "Vocal congelado",
     "desc": "Libere uma explosão de vocal gelado."
    },
    {
     "name": "Escudo de Segurança",
     "desc": "Envolva-se em um escudo de alfinetes."
    },
    {
     "name": "Massagem de Bane",
     "desc": "Assassine um inimigo de baixo nível."
    },
    {
     "name": "Mindbork",
     "desc": "Os inimigos tropeçam e sofrem danos."
    },
    {
     "name": "Eco",
     "desc": "Não dê tempo de recarga à sua próxima mágica."
    },
    {
     "name": "Eco de grupo",
     "desc": "Dê a todos um Anar-chi sem tempo de recarga."
    },
    {
     "name": "Meteoro",
     "desc": "Invoque um meteoro que chamusca a terra."
    }
   ],
   [
    {
     "name": "Riff gelado",
     "desc": "Dispare um acorde congelado."
    },
    {
     "name": "Riff elétrico",
     "desc": "Dispare um arco de eletricidade."
    },
    {
     "name": "Feitiço brutal",
     "desc": "Aumente a força de todos por um período."
    },
    {
     "name": "Eco",
     "desc": "Não dê tempo de recarga à sua próxima mágica."
    },
    {
     "name": "Rapidez",
     "desc": "Aumente a velocidade de todos por um período."
    },
    {
     "name": "Marcador Explosivo",
     "desc": "Exploda o inimigo mais próximo."
    },
    {
     "name": "Eco de grupo",
     "desc": "Dê a todos um Anar-chi sem tempo de recarga."
    },
    {
     "name": "Cometa",
     "desc": "Invoque um cometa de devastação de gelo."
    }
   ],
   [
    {
     "name": "Riff incandescente",
     "desc": "Dispare um lick incendiário."
    },
    {
     "name": "Sawrmada",
     "desc": "Dispare uma sequência de serras."
    },
    {
     "name": "Feitiço brutal",
     "desc": "Aumente a força de todos por um período."
    },
    {
     "name": "Curar",
     "desc": "Recupere sua saúde por um período."
    },
    {
     "name": "Runas em chamas",
     "desc": "Crie uma armadilha de runas em chamas."
    },
    {
     "name": "Saco de armas",
     "desc": "Invoque um saco mágico cheio de armas."
    },
    {
     "name": "Dominador de mentes",
     "desc": "Escravize um bad-boy para lutar como seu funcionário."
    },
    {
     "name": "Congelamento rápido",
     "desc": "Congele e cause danos em um grupo de inimigos."
    }
   ],
   [
    {
     "name": "Serra do baixo",
     "desc": "Dispare uma serra temível."
    },
    {
     "name": "Serra ácida",
     "desc": "Dispare uma serra revestida com ácido."
    },
    {
     "name": "Subordinado",
     "desc": "Invoque um trabalhador dos Países Baixos."
    },
    {
     "name": "Donzela de Ferro",
     "desc": "Ataque dos inimigos causam danos a eles."
    },
    {
     "name": "Feitiço brutal",
     "desc": "Aumente a força de todos por um período."
    },
    {
     "name": "Diabretes",
     "desc": "Invoque um trio de diabretes dos Países Baixos."
    },
    {
     "name": "Golias",
     "desc": "Invoque um Golias dos Países Baixos."
    },
    {
     "name": "Tempestade ácida",
     "desc": "Crie uma tempestade de ácido e relâmpagos."
    }
   ],
   [
    {
     "name": "Que pena, senhor.",
     "desc": "Libere um cone de dor vocal."
    },
    {
     "name": "Vocal sugador",
     "desc": "Sugue a saúde do inimigo com uma explosão de vocal."
    },
    {
     "name": "Curar",
     "desc": "Recupere sua saúde por um período."
    },
    {
     "name": "Vocais Veneno",
     "desc": "Libere uma explosão de vocal venenoso."
    },
    {
     "name": "Rapidez",
     "desc": "Aumente a velocidade de todos por um período."
    },
    {
     "name": "Aura de cura",
     "desc": "Recupere a saúde de todos por um período."
    },
    {
     "name": "Terremoto Épico",
     "desc": "Sacuda os inimigos com um terremoto devastador."
    },
    {
     "name": "Nevasca devastadora",
     "desc": "Crie uma tempestade de neve devastadora."
    }
   ],
   [
    {
     "name": "Vocal sugador",
     "desc": "Sugue a saúde do inimigo com uma explosão de vocal."
    },
    {
     "name": "Vocais rasgantes",
     "desc": "Libere uma explosão de vocal abrasador."
    },
    {
     "name": "Curar",
     "desc": "Recupere sua saúde por um período."
    },
    {
     "name": "Massagem de Bane",
     "desc": "Assassine um inimigo de baixo nível."
    },
    {
     "name": "Rapidez",
     "desc": "Aumente a velocidade de todos por um período."
    },
    {
     "name": "Aura de cura",
     "desc": "Recupere a saúde de todos por um período."
    },
    {
     "name": "Eco de grupo",
     "desc": "Dê a todos um Anar-chi sem tempo de recarga."
    },
    {
     "name": "Cometa",
     "desc": "Invoque um cometa de devastação de gelo."
    }
   ],
   [
    {
     "name": "Riff gelado",
     "desc": "Dispare um acorde congelado."
    },
    {
     "name": "Riff incandescente",
     "desc": "Dispare um lick incendiário."
    },
    {
     "name": "Saco de ferramentas",
     "desc": "Invoque um saco mágico cheio de ferramentas."
    },
    {
     "name": "Terremoto Épico",
     "desc": "Sacuda os inimigos com um terremoto devastador."
    },
    {
     "name": "Dominador de mentes",
     "desc": "Escravize um bad-boy para lutar como seu funcionário."
    },
    {
     "name": "Chuva ácida",
     "desc": "Crie uma nuvem de chuva que derrete a pele."
    },
    {
     "name": "Saco de armas",
     "desc": "Invoque um saco mágico cheio de armas."
    },
    {
     "name": "Tempestade ácida",
     "desc": "Crie uma tempestade de ácido e relâmpagos."
    }
   ],
   [
    {
     "name": "Riff gelado",
     "desc": "Dispare um acorde congelado."
    },
    {
     "name": "Riff elétrico",
     "desc": "Dispare um arco de eletricidade."
    },
    {
     "name": "Feitiço brutal",
     "desc": "Aumente a força de todos por um período."
    },
    {
     "name": "Curar",
     "desc": "Recupere sua saúde por um período."
    },
    {
     "name": "Mindbork",
     "desc": "Os inimigos tropeçam e sofrem danos."
    },
    {
     "name": "Marcador Explosivo",
     "desc": "Exploda o inimigo mais próximo."
    },
    {
     "name": "Eco de grupo",
     "desc": "Dê a todos um Anar-chi sem tempo de recarga."
    },
    {
     "name": "Congelamento rápido",
     "desc": "Congele e cause danos em um grupo de inimigos."
    }
   ],
   [
    {
     "name": "Serra do baixo",
     "desc": "Dispare uma serra temível."
    },
    {
     "name": "Sawrmada",
     "desc": "Dispare uma sequência de serras."
    },
    {
     "name": "Olho maléfico",
     "desc": "Congele e cause danos em um inimigo de baixo nível."
    },
    {
     "name": "Donzela de Ferro",
     "desc": "Ataque dos inimigos causam danos a eles."
    },
    {
     "name": "Massagem de Bane",
     "desc": "Assassine um inimigo de baixo nível."
    },
    {
     "name": "Eco",
     "desc": "Não dê tempo de recarga à sua próxima mágica."
    },
    {
     "name": "Congelamento rápido",
     "desc": "Congele e cause danos em um grupo de inimigos."
    },
    {
     "name": "Ciclone Veneno",
     "desc": "Junte armas e órgãos em um ciclone de veneno!"
    }
   ],
   [
    {
     "name": "Que pena, senhor.",
     "desc": "Libere um cone de dor vocal."
    },
    {
     "name": "Vocais rasgantes",
     "desc": "Libere uma explosão de vocal abrasador."
    },
    {
     "name": "Vocal congelado",
     "desc": "Libere uma explosão de vocal gelado."
    },
    {
     "name": "Aura de cura",
     "desc": "Recupere a saúde de todos por um período."
    },
    {
     "name": "Rapidez",
     "desc": "Aumente a velocidade de todos por um período."
    },
    {
     "name": "Ciclone",
     "desc": "Junte armas e órgãos em um ciclone de dor!!!"
    },
    {
     "name": "Nevasca devastadora",
     "desc": "Crie uma tempestade de neve devastadora."
    },
    {
     "name": "Meteoro",
     "desc": "Invoque um meteoro que chamusca a terra."
    }
   ]
  ],
  "unlocks": [
   [
    null,
    null,
    {
     "name": "Pisoteamento de crânio",
     "desc": "Pressione X em inimigos enfraquecidos para demolir seus crânios."
    },
    {
     "name": "Empunhadura Dupla",
     "desc": "Empunhe duas armas de mão de uma vez."
    },
    {
     "name": "Equipe Mosh",
     "desc": "Chame um amigo para bagunçar estilo mosh. Pegue um combinado de 20 golpes, segure LTRT e torça para dar certo!"
    },
    {
     "name": "Revide",
     "desc": "Bloqueie com LT na hora certa, depois pressione X para liberar Anar-chi!"
    },
    {
     "name": "Mochila  I",
     "desc": "Guarde 60 itens no depósito.."
    },
    {
     "name": "Lançador I",
     "desc": "Aumente os danos da arma atirada em 50%."
    },
    {
     "name": "Relíquia I",
     "desc": "Ative 3 relíquias de uma vez."
    },
    {
     "name": "Armas Akimbo",
     "desc": "Empunhe duas pistolas de uma vez."
    },
    {
     "name": "Mochila II",
     "desc": "Guarde 70 itens no depósito."
    },
    {
     "name": "Assassino I",
     "desc": "Aumente os danos da arma de fogo em 25%."
    },
    {
     "name": "Relíquia II",
     "desc": "Ative 4 relíquias de uma vez."
    },
    {
     "name": "Destroça corações I",
     "desc": "Pressione B ao controlar inimigos enfraquecidos para devorar seus corações."
    },
    {
     "name": "Relíquia III",
     "desc": "Ative 5 relíquias de uma vez."
    },
    {
     "name": "Mochila III",
     "desc": "Guarde 80 itens no depósito."
    },
    {
     "name": "Corrida I",
     "desc": "Aumente a velocidade da corrida em 25%"
    },
    {
     "name": "Relíquia IV",
     "desc": "Ative 6 relíquias de uma vez."
    },
    {
     "name": "Mochila IV",
     "desc": "Guarde 90 itens no depósito."
    },
    {
     "name": "Relíquia V",
     "desc": "Ative 7 relíquias de uma vez."
    },
    {
     "name": "Relíquia Definitiva",
     "desc": "Ative relíquias infinitas de uma vez."
    },
    {
     "name": "Lançador II",
     "desc": "Aumente os danos da arma atirada em 75%."
    },
    {
     "name": "Lançador III",
     "desc": "Aumente os danos da arma atirada em 100%."
    },
    {
     "name": "Assassino II",
     "desc": "Aumente os danos da arma de fogo em 50%."
    },
    {
     "name": "Assassino III",
     "desc": "Aumente os danos da arma de fogo em 75%."
    },
    {
     "name": "Corrida II",
     "desc": "Aumente a velocidade da corrida em 30%"
    },
    {
     "name": "Corrida III",
     "desc": "Aumente a velocidade da corrida em 35%."
    },
    {
     "name": "Destroça corações II",
     "desc": "Pressione B ao controlar inimigos enfraquecidos para devorar seus corações, ganhando 4% da sua saúde."
    },
    {
     "name": "Destroça corações III",
     "desc": "Pressione B ao controlar inimigos enfraquecidos para devorar seus corações, ganhando 8% da sua saúde."
    },
    {
     "name": "Sobrecarga I",
     "desc": "Segure Y para lançar uma técnica poderosa de sobrecarga."
    },
    {
     "name": "Sobrecarga II",
     "desc": "Segure Y para lançar uma técnica poderosa de sobrecarga, causando 5% mais danos."
    },
    {
     "name": "Sobrecarga III",
     "desc": "Segure Y para lançar uma técnica poderosa de sobrecarga, causando 10% mais danos."
    }
   ],
   [
    null,
    null,
    {
     "name": "Pisoteamento de crânio",
     "desc": "Pressione X em inimigos enfraquecidos para demolir seus crânios."
    },
    {
     "name": "Roubo de Alma",
     "desc": "Suba em inimigos enfraquecidos e aperte Y para absorver suas almas, recuperando HP e reduzindo o tempo de recarga."
    },
    {
     "name": "Besta Stygian",
     "desc": "Chame um amigo para se transformar em uma besta dos Países Baixos com cavaleiro. Pegue um combinado de 20 golpes, segure LTRT e torça para dar certo!"
    },
    {
     "name": "Revide",
     "desc": "Bloqueie com LT na hora certa, depois pressione X para liberar Anar-chi!"
    },
    {
     "name": "Mochila  I",
     "desc": "Guarde 60 itens no depósito.."
    },
    {
     "name": "Cortante I",
     "desc": "Aumente os danos da arma de lâmina em 25%."
    },
    {
     "name": "Relíquia I",
     "desc": "Ative 3 relíquias de uma vez."
    },
    {
     "name": "Carga de Alma",
     "desc": "Segure Y ao fazer Roubo de Alma para maximizar o roubo da ama."
    },
    {
     "name": "Mochila II",
     "desc": "Guarde 70 itens no depósito."
    },
    {
     "name": "Cirúrgico I",
     "desc": "Aumente a chance de golpe crítico em 10%."
    },
    {
     "name": "Relíquia II",
     "desc": "Ative 4 relíquias de uma vez."
    },
    {
     "name": "Destroça corações I",
     "desc": "Pressione B ao controlar inimigos enfraquecidos para devorar seus corações."
    },
    {
     "name": "Relíquia III",
     "desc": "Ative 5 relíquias de uma vez."
    },
    {
     "name": "Mochila III",
     "desc": "Guarde 80 itens no depósito."
    },
    {
     "name": "Massacre I",
     "desc": "Aumente os danos da motosserra em 25%."
    },
    {
     "name": "Relíquia IV",
     "desc": "Ative 6 relíquias de uma vez."
    },
    {
     "name": "Mochila IV",
     "desc": "Guarde 90 itens no depósito."
    },
    {
     "name": "Relíquia V",
     "desc": "Ative 7 relíquias de uma vez."
    },
    {
     "name": "Relíquia Definitiva",
     "desc": "Ative relíquias infinitas de uma vez."
    },
    {
     "name": "Cortante II",
     "desc": "Aumente os danos da arma de lâmina em 50%."
    },
    {
     "name": "Cortante III",
     "desc": "Aumente os danos da arma de lâmina em 75%."
    },
    {
     "name": "Cirúrgico II",
     "desc": "Aumente a chance de golpe crítico em 20%."
    },
    {
     "name": "Cirúrgico III",
     "desc": "Aumente a chance de golpe crítico em 30%."
    },
    {
     "name": "Massacre II",
     "desc": "Aumente os danos da motosserra em 50%."
    },
    {
     "name": "Massacre III",
     "desc": "Aumente os danos da motosserra em 75%."
    },
    {
     "name": "Destroça corações II",
     "desc": "Pressione B ao controlar inimigos enfraquecidos para devorar seus corações, ganhando 4% da sua saúde."
    },
    {
     "name": "Destroça corações III",
     "desc": "Pressione B ao controlar inimigos enfraquecidos para devorar seus corações, ganhando 8% da sua saúde."
    },
    {
     "name": "Sobrecarga I",
     "desc": "Segure Y para lançar uma técnica poderosa de sobrecarga."
    },
    {
     "name": "Sobrecarga II",
     "desc": "Segure Y para lançar uma técnica poderosa de sobrecarga, causando 5% mais danos."
    },
    {
     "name": "Sobrecarga III",
     "desc": "Segure Y para lançar uma técnica poderosa de sobrecarga, causando 10% mais danos."
    }
   ],
   [
    null,
    null,
    {
     "name": "Pisoteamento de crânio",
     "desc": "Pressione X em inimigos enfraquecidos para demolir seus crânios."
    },
    {
     "name": "Totem de saúde",
     "desc": "Transforme cérebros descartados em totens de cura. Pegue uma cabeça e pressione Y para plantar."
    },
    {
     "name": "GerudoMech",
     "desc": "Chame um amigo para formar um autômato gigante. Pegue um combinado de 20 golpes, segure LTRT e torça para dar certo!"
    },
    {
     "name": "Revide",
     "desc": "Bloqueie com LT na hora certa, depois pressione X para liberar Anar-chi!"
    },
    {
     "name": "Mochila  I",
     "desc": "Guarde 60 itens no depósito.."
    },
    {
     "name": "Massacre I",
     "desc": "Aumente os danos da motosserra em 25%."
    },
    {
     "name": "Relíquia I",
     "desc": "Ative 3 relíquias de uma vez."
    },
    {
     "name": "Totem de cérebro laser",
     "desc": "Transforme cérebros descartados em totens de torres laser. Pegue um cérebro e pressione Y para plantar."
    },
    {
     "name": "Mochila II",
     "desc": "Guarde 70 itens no depósito."
    },
    {
     "name": "Sangue nojento I",
     "desc": "10% de chance de explodir inimigos enfraquecidos."
    },
    {
     "name": "Relíquia II",
     "desc": "Ative 4 relíquias de uma vez."
    },
    {
     "name": "Destroça corações I",
     "desc": "Pressione B ao controlar inimigos enfraquecidos para devorar seus corações."
    },
    {
     "name": "Relíquia III",
     "desc": "Ative 5 relíquias de uma vez."
    },
    {
     "name": "Mochila III",
     "desc": "Guarde 80 itens no depósito."
    },
    {
     "name": "Ponta de lança I",
     "desc": "Aumente os danos da lança em 25%."
    },
    {
     "name": "Relíquia IV",
     "desc": "Ative 6 relíquias de uma vez."
    },
    {
     "name": "Mochila IV",
     "desc": "Guarde 90 itens no depósito."
    },
    {
     "name": "Relíquia V",
     "desc": "Ative 7 relíquias de uma vez."
    },
    {
     "name": "Relíquia Definitiva",
     "desc": "Ative relíquias infinitas de uma vez."
    },
    {
     "name": "Massacre II",
     "desc": "Aumente os danos da motosserra em 50%."
    },
    {
     "name": "Massacre III",
     "desc": "Aumente os danos da motosserra em 75%."
    },
    {
     "name": "Sangue nojento II",
     "desc": "20% de chance de explodir inimigos enfraquecidos."
    },
    {
     "name": "Sangue nojento III",
     "desc": "30% de chance de explodir inimigos enfraquecidos."
    },
    {
     "name": "Ponta de lança II",
     "desc": "Aumente os danos da lança em 50%."
    },
    {
     "name": "Ponta de lança III",
     "desc": "Aumente os danos da lança em 75%."
    },
    {
     "name": "Destroça corações II",
     "desc": "Pressione B ao controlar inimigos enfraquecidos para devorar seus corações, ganhando 4% da sua saúde."
    },
    {
     "name": "Destroça corações III",
     "desc": "Pressione B ao controlar inimigos enfraquecidos para devorar seus corações, ganhando 8% da sua saúde."
    },
    {
     "name": "Sobrecarga I",
     "desc": "Segure Y para lançar uma técnica poderosa de sobrecarga."
    },
    {
     "name": "Sobrecarga II",
     "desc": "Segure Y para lançar uma técnica poderosa de sobrecarga, causando 5% mais danos."
    },
    {
     "name": "Sobrecarga III",
     "desc": "Segure Y para lançar uma técnica poderosa de sobrecarga, causando 10% mais danos."
    }
   ],
   [
    null,
    null,
    {
     "name": "Pisoteamento de crânio",
     "desc": "Pressione X em inimigos enfraquecidos para demolir seus crânios."
    },
    {
     "name": "Elevador imenso",
     "desc": "Levante e atire objetos gigantes com X."
    },
    {
     "name": "Combinado Free Ride",
     "desc": "Chame um amigo para brincar de cavalinho! Pegue um combinado de 20 golpes, segure LTRT e torça para dar certo!"
    },
    {
     "name": "Revide",
     "desc": "Bloqueie com LT na hora certa, depois pressione X para liberar Anar-chi!"
    },
    {
     "name": "Mochila  I",
     "desc": "Guarde 60 itens no depósito.."
    },
    {
     "name": "Ponta de lança I",
     "desc": "Aumente os danos da lança em 25%."
    },
    {
     "name": "Relíquia I",
     "desc": "Ative 3 relíquias de uma vez."
    },
    {
     "name": "Prensa",
     "desc": "Pegue inimigos com B, depois segure X para um body slam energizado."
    },
    {
     "name": "Mochila II",
     "desc": "Guarde 70 itens no depósito."
    },
    {
     "name": "Marreteiro I",
     "desc": "Aumente os danos de armas de duas mãos em 25%."
    },
    {
     "name": "Relíquia II",
     "desc": "Ative 4 relíquias de uma vez."
    },
    {
     "name": "Destroça corações I",
     "desc": "Pressione B ao controlar inimigos enfraquecidos para devorar seus corações."
    },
    {
     "name": "Relíquia III",
     "desc": "Ative 5 relíquias de uma vez."
    },
    {
     "name": "Mochila III",
     "desc": "Guarde 80 itens no depósito."
    },
    {
     "name": "Esquiva I",
     "desc": "Aumente o dano em bloco absorvido em 50%"
    },
    {
     "name": "Relíquia IV",
     "desc": "Ative 6 relíquias de uma vez."
    },
    {
     "name": "Mochila IV",
     "desc": "Guarde 90 itens no depósito."
    },
    {
     "name": "Relíquia V",
     "desc": "Ative 7 relíquias de uma vez."
    },
    {
     "name": "Relíquia Definitiva",
     "desc": "Ative relíquias infinitas de uma vez."
    },
    {
     "name": "Ponta de lança II",
     "desc": "Aumente os danos da lança em 50%."
    },
    {
     "name": "Ponta de lança III",
     "desc": "Aumente os danos da lança em 75%."
    },
    {
     "name": "Marreteiro II",
     "desc": "Aumente os danos de armas de duas mãos em 50%."
    },
    {
     "name": "Marreteiro III",
     "desc": "Aumente os danos de armas de duas mãos em 75%."
    },
    {
     "name": "Esquiva II",
     "desc": "Aumente o dano em bloco absorvido em 75%"
    },
    {
     "name": "Esquiva III",
     "desc": "Aumente o dano em bloco absorvido em 100%"
    },
    {
     "name": "Destroça corações II",
     "desc": "Pressione B ao controlar inimigos enfraquecidos para devorar seus corações, ganhando 4% da sua saúde."
    },
    {
     "name": "Destroça corações III",
     "desc": "Pressione B ao controlar inimigos enfraquecidos para devorar seus corações, ganhando 8% da sua saúde."
    },
    {
     "name": "Sobrecarga I",
     "desc": "Segure Y para lançar uma técnica poderosa de sobrecarga."
    },
    {
     "name": "Sobrecarga II",
     "desc": "Segure Y para lançar uma técnica poderosa de sobrecarga, causando 5% mais danos."
    },
    {
     "name": "Sobrecarga III",
     "desc": "Segure Y para lançar uma técnica poderosa de sobrecarga, causando 10% mais danos."
    }
   ],
   [
    null,
    null,
    {
     "name": "Pisoteamento de crânio",
     "desc": "Pressione X em inimigos enfraquecidos para demolir seus crânios."
    },
    {
     "name": "Rolamento de judô",
     "desc": "Toque à esquerda ou direita ao segurar LT para fazer rolamento de esquiva."
    },
    {
     "name": "Equipe Mosh",
     "desc": "Chame um amigo para bagunçar estilo mosh. Pegue um combinado de 20 golpes, segure LTRT e torça para dar certo!"
    },
    {
     "name": "Revide",
     "desc": "Bloqueie com LT na hora certa, depois pressione X para liberar Anar-chi!"
    },
    {
     "name": "Mochila  I",
     "desc": "Guarde 60 itens no depósito.."
    },
    {
     "name": "Corrida I",
     "desc": "Aumente a velocidade da corrida em 25%"
    },
    {
     "name": "Relíquia I",
     "desc": "Ative 3 relíquias de uma vez."
    },
    {
     "name": "Fuga judô",
     "desc": "Pressione A ao ser agarrado para fugir."
    },
    {
     "name": "Mochila II",
     "desc": "Guarde 70 itens no depósito."
    },
    {
     "name": "Esquiva I",
     "desc": "Aumente o dano em bloco absorvido em 50%"
    },
    {
     "name": "Relíquia II",
     "desc": "Ative 4 relíquias de uma vez."
    },
    {
     "name": "Destroça corações I",
     "desc": "Pressione B ao controlar inimigos enfraquecidos para devorar seus corações."
    },
    {
     "name": "Relíquia III",
     "desc": "Ative 5 relíquias de uma vez."
    },
    {
     "name": "Mochila III",
     "desc": "Guarde 80 itens no depósito."
    },
    {
     "name": "Cirúrgico I",
     "desc": "Aumente a chance de golpe crítico em 10%."
    },
    {
     "name": "Relíquia IV",
     "desc": "Ative 6 relíquias de uma vez."
    },
    {
     "name": "Mochila IV",
     "desc": "Guarde 90 itens no depósito."
    },
    {
     "name": "Relíquia V",
     "desc": "Ative 7 relíquias de uma vez."
    },
    {
     "name": "Relíquia Definitiva",
     "desc": "Ative relíquias infinitas de uma vez."
    },
    {
     "name": "Corrida II",
     "desc": "Aumente a velocidade da corrida em 30%"
    },
    {
     "name": "Corrida III",
     "desc": "Aumente a velocidade da corrida em 35%."
    },
    {
     "name": "Esquiva II",
     "desc": "Aumente o dano em bloco absorvido em 75%"
    },
    {
     "name": "Esquiva III",
     "desc": "Aumente o dano em bloco absorvido em 100%"
    },
    {
     "name": "Cirúrgico II",
     "desc": "Aumente a chance de golpe crítico em 20%."
    },
    {
     "name": "Cirúrgico III",
     "desc": "Aumente a chance de golpe crítico em 30%."
    },
    {
     "name": "Destroça corações II",
     "desc": "Pressione B ao controlar inimigos enfraquecidos para devorar seus corações, ganhando 4% da sua saúde."
    },
    {
     "name": "Destroça corações III",
     "desc": "Pressione B ao controlar inimigos enfraquecidos para devorar seus corações, ganhando 8% da sua saúde."
    },
    {
     "name": "Sobrecarga I",
     "desc": "Segure Y para lançar uma técnica poderosa de sobrecarga."
    },
    {
     "name": "Sobrecarga II",
     "desc": "Segure Y para lançar uma técnica poderosa de sobrecarga, causando 5% mais danos."
    },
    {
     "name": "Sobrecarga III",
     "desc": "Segure Y para lançar uma técnica poderosa de sobrecarga, causando 10% mais danos."
    }
   ]
  ]
 }
};
