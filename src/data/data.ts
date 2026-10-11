/*
    Cr0xly

    Unlike previous React labs where we only used one interface and an array of
    objects, this project uses additional data for character creation, including
    playable classes, races and specializations.

    Class information also includes colors and icons that will be used when
    displaying character cards.

    Keeping everything here allows React components to access the same data
    without having to define it separately in multiple files.
*/

// this interface defines the structure of a World of Warcraft character object
export interface WoWCharacter {
    id: number
    name: string
    characterClass: string
    race: string
    specialization: string
    level: number
}

// this interface defines the structure of a character's class object
export interface WoWClass {
    name: string
    color: string
    icon: string
}

// this array contains the available classes in World of Warcraft, along with their associated colors and icons
export const classes: WoWClass[] = [
    { name: "Warrior", color: "#C79C6E", icon: "/images/classes/warrior.gif" },
    { name: "Paladin", color: "#F58CBA", icon: "/images/classes/paladin.gif" },
    { name: "Hunter", color: "#ABD473", icon: "/images/classes/hunter.gif" },
    { name: "Rogue", color: "#FFF569", icon: "/images/classes/rogue.gif" },
    { name: "Priest", color: "#FFFFFF", icon: "/images/classes/priest.gif" },
    { name: "Shaman", color: "#0070DE", icon: "/images/classes/shaman.gif" },
    { name: "Mage", color: "#69CCF0", icon: "/images/classes/mage.gif" },
    { name: "Warlock", color: "#9482C9", icon: "/images/classes/warlock.gif" },
    { name: "Druid", color: "#FF7D0A", icon: "/images/classes/druid.gif" }
]

// this array contains the available races in World of Warcraft
export const races: string[] = [
    "Human",
    "Dwarf",
    "Night Elf",
    "Gnome",
    "Orc",
    "Undead",
    "Tauren",
    "Troll"
]

// this object pairs each playable race with its portrait image
export const raceImages: Record<string, string> = {
    Human: "/images/races/Humans.gif",
    Dwarf: "/images/races/Dwarves.gif",
    "Night Elf": "/images/races/Night_Elves.gif",
    Gnome: "/images/races/Gnomes.gif",
    Orc: "/images/races/Orcs.gif",
    Undead: "/images/races/Undead.gif",
    Tauren: "/images/races/Tauren.gif",
    Troll: "/images/races/Trolls.gif"
}

// this object maps each class to its available specializations
// ***Record<string, string[]> is a TypeScript utility type that represents an object with string keys and values of type string[]***
export const specializations: Record<string, string[]> = {
    Warrior: ["Arms", "Fury", "Protection"],
    Paladin: ["Holy", "Protection", "Retribution"],
    Hunter: ["Beast Mastery", "Marksmanship", "Survival"],
    Rogue: ["Assassination", "Combat", "Subtlety"],
    Priest: ["Discipline", "Holy", "Shadow"],
    Shaman: ["Elemental", "Enhancement", "Restoration"],
    Mage: ["Arcane", "Fire", "Frost"],
    Warlock: ["Affliction", "Demonology", "Destruction"],
    Druid: ["Balance", "Feral Combat", "Restoration"]
}

// pre-generated characters used to populate the roster when the application starts
export const initialCharacters: WoWCharacter[] = [
    {
        id: 1,
        name: "Croxly",
        characterClass: "Warlock",
        race: "Undead",
        specialization: "Affliction",
        level: 60
    },
    {
        id: 2,
        name: "Dawnshield",
        characterClass: "Paladin",
        race: "Human",
        specialization: "Holy",
        level: 60
    },
    {
        id: 3,
        name: "Spellweaver",
        characterClass: "Mage",
        race: "Gnome",
        specialization: "Frost",
        level: 54
    },
    {
        id: 4,
        name: "Shadowstep",
        characterClass: "Rogue",
        race: "Night Elf",
        specialization: "Combat",
        level: 48
    },
    {
        id: 5,
        name: "Ironhide",
        characterClass: "Warrior",
        race: "Orc",
        specialization: "Fury",
        level: 45
    },
    {
        id: 6,
        name: "Moonwhisper",
        characterClass: "Druid",
        race: "Tauren",
        specialization: "Restoration",
        level: 42
    }
]
