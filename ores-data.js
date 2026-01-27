console.log("ores-data.js loaded");


 const ores = [
   {
  name: "Stone",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 0,
  maxDepth: 1000,
  health: 10
},
{
  name: "Basalt",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 1000,
  maxDepth: 2000,
  health: 18
},
{
  name: "Limestone",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 2000,
  maxDepth: 3000,
  health: 20
},
{
  name: "Gneiss",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 3000,
  maxDepth: 4000,
  health: 24
},
{
  name: "Tuff",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 4000,
  maxDepth: 5000,
  health: 30
},
{
  name: "Marble",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 5000,
  maxDepth: 6000,
  health: 34
},
{
  name: "Obsidian",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 6000,
  maxDepth: 7000,
  health: 52
},
{
  name: "Peridotite",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 7000,
  maxDepth: 8000,
  health: 65
},
{
  name: "Magma",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 8000,
  maxDepth: 9000,
  health: 84
},
{
  name: "Lava",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 8000,
  maxDepth: 9000,
  health: 78
},
{
  name: "Voidstone",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 9000,
  maxDepth: Infinity,
  health: 120
},
{
  name: "Dirt",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 0,
  maxDepth: 3000,
  health: 5
},
{
  name: "Diorite",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 0,
  maxDepth: 2000,
  health: 8
},
{
  name: "Granite",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 0,
  maxDepth: 2000,
  health: 8
},
{
  name: "Andesite",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 0,
  maxDepth: 2000,
  health: 8
},
{
  name: "Chalk",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 2000,
  maxDepth: 3000,
  health: 4
},
{
  name: "Calcite",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 2000,
  maxDepth: 3000,
  health: 8
},
{
  name: "Dolostone",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 2000,
  maxDepth: 3000,
  health: 8
},
{
  name: "Quartzite",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 3000,
  maxDepth: 4000,
  health: 26
},
{
  name: "Schist",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 3000,
  maxDepth: 4000,
  health: 22
},
{
  name: "Migmatite",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 3000,
  maxDepth: 4000,
  health: 22
},
{
  name: "Bentonite",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 4000,
  maxDepth: 5000,
  health: 8
},
{
  name: "Illite",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 4000,
  maxDepth: 5000,
  health: 5
},
{
  name: "Kaolinite",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 4000,
  maxDepth: 5000,
  health: 8
},
{
  name: "Talc",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 5000,
  maxDepth: 6000,
  health: 4
},
{
  name: "Albite",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 5000,
  maxDepth: 6000,
  health: 8
},
{
  name: "Gypsum",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 5000,
  maxDepth: 6000,
  health: 6
},
{
  name: "Scoria",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 6000,
  maxDepth: 7000,
  health: 36
},
{
  name: "Pumice",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 6000,
  maxDepth: 7000,
  health: 32
},
{
  name: "Tachylite",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 6000,
  maxDepth: 7000,
  health: 45
},
{
  name: "Dunite",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 7000,
  maxDepth: 8000,
  health: 60
},
{
  name: "Harzburgite",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 7000,
  maxDepth: 8000,
  health: 72
},
{
  name: "Lherzolite",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 7000,
  maxDepth: 8000,
  health: 70
},
{
  name: "Rhyolite",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 8000,
  maxDepth: 9000,
  health: 72
},
{
  name: "Felsite",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 8000,
  maxDepth: 9000,
  health: 66
},
{
  name: "Komatiite",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 8000,
  maxDepth: 9000,
  health: 78
},
{
  name: "Abyssalite",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 9000,
  maxDepth: Infinity,
  health: 112
},
{
  name: "Cosmic Slag",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 9000,
  maxDepth: Infinity,
  health: 108
},
{
  name: "Nullite",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 9000,
  maxDepth: Infinity,
  health: 118
},
{
  name: "Shardite",
  rarity: "1/1",
  group: "Common",
  value: "$0.003",
  minDepth: 3000,
  maxDepth: 4000,
  health: 25
},
{
  name: "Coal",
  rarity: "1/100",
  group: "Common",
  value: "$0.022",
  minDepth: 0,
  maxDepth: Infinity,
  health: 12
},
{
  name: "Halite",
  rarity: "1/120",
  group: "Common",
  value: "$0.027",
  minDepth: 2000,
  maxDepth: 3000,
  health: 12
}, 
{
  name: "Silicon",
  rarity: "1/150",
  group: "Common",
  value: "$0.033",
  minDepth: 4000,
  maxDepth: 7000,
  health: 16
},
{
  name: "Voidrinite",
  rarity: "1/175",
  group: "Common",
  value: "$0.039",
  minDepth: 9000,
  maxDepth: Infinity,
  health: 92
},
{
  name: "Iron",
  rarity: "1/200",
  group: "Common",
  value: "$0.044",
  minDepth: 0,
  maxDepth: 6000,
  health: 20
},
{
  name: "Copper",
  rarity: "1/200",
  group: "Common",
  value: "$0.044",
  minDepth: 0,
  maxDepth: 2000,
  health: 18
},
{
  name: "Tin",
  rarity: "1/250",
  group: "Common",
  value: "$0.056",
  minDepth: 0,
  maxDepth: 1000,
  health: 18
},
{
  name: "Zinc",
  rarity: "1/250",
  group: "Common",
  value: "$0.056",
  minDepth: 1000,
  maxDepth: 2000,
  health: 18
},
{
  name: "Hexite",
  rarity: "1/275",
  group: "Common",
  value: "$0.061",
  minDepth: 2000,
  maxDepth: 3000,
  health: 26
},
{
  name: "Spikilite",
  rarity: "1/300",
  group: "Common",
  value: "$0.067",
  minDepth: 9000,
  maxDepth: Infinity,
  health: 95
},
{
  name: "Iridium",
  rarity: "1/300",
  group: "Common",
  value: "$0.067",
  minDepth: 5000,
  maxDepth: 6000,
  health: 24
},
{
  name: "Nickel",
  rarity: "1/300",
  group: "Common",
  value: "$0.067",
  minDepth: 2000,
  maxDepth: 4000,
  health: 24
},
{
  name: "Aluminium",
  rarity: "1/300",
  group: "Common",
  value: "$0.067",
  minDepth: 0,
  maxDepth: 1000,
  health: 16
},
{
  name: "Mercury",
  rarity: "1/300",
  group: "Common",
  value: "$0.067",
  minDepth: 7000,
  maxDepth: 9000,
  health: 24
},
{
  name: "Darkmatter",
  rarity: "1/350",
  group: "Common",
  value: "$0.078",
  minDepth: 9000,
  maxDepth: Infinity,
  health: 98
},
{
  name: "Sodium",
  rarity: "1/400",
  group: "Common",
  value: "$0.089",
  minDepth: 2000,
  maxDepth: 5000,
  health: 8
},
{
  name: "Potassium",
  rarity: "1/400",
  group: "Common",
  value: "$0.089",
  minDepth: 1000,
  maxDepth: 2000,
  health: 8
},
{
  name: "Sulfur",
  rarity: "1/400",
  group: "Common",
  value: "$0.089",
  minDepth: 8000,
  maxDepth: 9000,
  health: 12
},
{
  name: "Manganese",
  rarity: "1/400",
  group: "Common",
  value: "$0.089",
  minDepth: 6000,
  maxDepth: 7000,
  health: 24
},
{
  name: "Cadmium",
  rarity: "1/425",
  group: "Common",
  value: "$0.094",
  minDepth: 7000,
  maxDepth: 9000,
  health: 18
},
{
  name: "Gallium",
  rarity: "1/500",
  group: "Common",
  value: "$0.111",
  minDepth: 3000,
  maxDepth: 4000,
  health: 16
},
{
  name: "Lacrimium",
  rarity: "1/500",
  group: "Common",
  value: "$0.111",
  minDepth: 9000,
  maxDepth: Infinity,
  health: 85
},
{
  name: "Calcium",
  rarity: "1/500",
  group: "Common",
  value: "$0.111",
  minDepth: 6000,
  maxDepth: 9000,
  health: 8
},
{
  name: "Magnesium",
  rarity: "1/550",
  group: "Common",
  value: "$0.122",
  minDepth: 5000,
  maxDepth: 9000,
  health: 18
},
{
  name: "Niobium",
  rarity: "1/600",
  group: "Common",
  value: "$0.133",
  minDepth: 4000,
  maxDepth: 7000,
  health: 42
},
{
  name: "Lead",
  rarity: "1/600",
  group: "Common",
  value: "$0.133",
  minDepth: 0,
  maxDepth: 6000,
  health: 28
},
{
  name: "Lanthanum",
  rarity: "1/625",
  group: "Common",
  value: "$0.139",
  minDepth: 7000,
  maxDepth: 8000,
  health: 30
},
{
  name: "Cerium",
  rarity: "1/700",
  group: "Common",
  value: "$0.156",
  minDepth: 7000,
  maxDepth: 8000,
  health: 30
},
{
  name: "Fluorine",
  rarity: "1/800",
  group: "Common",
  value: "$0.178",
  minDepth: 6000,
  maxDepth: 7000,
  health: 24
},
    {
  name: "Silver",
  rarity: "1/1,000",
  group: "Uncommon",
  value: "$0.267",
  minDepth: 0,
  maxDepth: 1000,
  health: 28
},
{
  name: "Lithium",
  rarity: "1/1,050",
  group: "Uncommon",
  value: "$0.28",
  minDepth: 1000,
  maxDepth: 4000,
  health: 28
},
{
  name: "Kyanite",
  rarity: "1/1,100",
  group: "Uncommon",
  value: "$0.293",
  minDepth: 4000,
  maxDepth: 5000,
  health: 30
},
{
  name: "Strontium",
  rarity: "1/1,200",
  group: "Uncommon",
  value: "$0.32",
  minDepth: 7000,
  maxDepth: 8000,
  health: 28
},
{
  name: "Cobalt",
  rarity: "1/1,250",
  group: "Uncommon",
  value: "$0.333",
  minDepth: 1000,
  maxDepth: 2000,
  health: 24
},
{
  name: "Topaz",
  rarity: "1/1,250",
  group: "Uncommon",
  value: "$0.333",
  minDepth: 2000,
  maxDepth: 5000,
  health: 32
},
{
  name: "Titanium",
  rarity: "1/1,275",
  group: "Uncommon",
  value: "$0.34",
  minDepth: 0,
  maxDepth: 1000,
  health: 52
},
{
  name: "Tungsten",
  rarity: "1/1,300",
  group: "Uncommon",
  value: "$0.347",
  minDepth: 0,
  maxDepth: 1000,
  health: 52
},
{
  name: "Bismuth",
  rarity: "1/1,350",
  group: "Uncommon",
  value: "$0.36",
  minDepth: 5000,
  maxDepth: 6000,
  health: 22
},
{
  name: "Gold",
  rarity: "1/1,500",
  group: "Uncommon",
  value: "$0.4",
  minDepth: 0,
  maxDepth: 6000,
  health: 34
},
{
  name: "Platinium",
  rarity: "1/1,750",
  group: "Uncommon",
  value: "$0.467",
  minDepth: 1000,
  maxDepth: 3000,
  health: 34
},
{
  name: "Boron",
  rarity: "1/1,800",
  group: "Uncommon",
  value: "$0.48",
  minDepth: 3000,
  maxDepth: 4000,
  health: 62
},
{
  name: "Thulium",
  rarity: "1/2,250",
  group: "Uncommon",
  value: "$0.6",
  minDepth: 8000,
  maxDepth: 9000,
  health: 84
},
{
  name: "Neon",
  rarity: "1/2,400",
  group: "Uncommon",
  value: "$0.64",
  minDepth: 6000,
  maxDepth: 7000,
  health: 14
},
{
  name: "Vanadium",
  rarity: "1/2,500",
  group: "Uncommon",
  value: "$0.667",
  minDepth: 6000,
  maxDepth: 7000,
  health: 34
},
{
  name: "Zirconium",
  rarity: "1/2,750",
  group: "Uncommon",
  value: "$0.733",
  minDepth: 4000,
  maxDepth: 5000,
  health: 38
},
{
  name: "Molybdenum",
  rarity: "1/2,900",
  group: "Uncommon",
  value: "$0.733",
  minDepth: 8000,
  maxDepth: 9000,
  health: 52
},
{
  name: "Amethyst",
  rarity: "1/3,250",
  group: "Uncommon",
  value: "$0.867",
  minDepth: 0,
  maxDepth: 2000,
  health: 38
},
{
  name: "Lapis Lazuli",
  rarity: "1/3,750",
  group: "Uncommon",
  value: "$1",
  minDepth: 5000,
  maxDepth: 6000,
  health: 36
},
{
  name: "Neutron",
  rarity: "1/4,250",
  group: "Uncommon",
  value: "$1.133",
  minDepth: 9000,
  maxDepth: Infinity,
  health: 80
},
{
  name: "Atlasium",
  rarity: "1/4,500",
  group: "Uncommon",
  value: "$1.2",
  minDepth: 9000,
  maxDepth: Infinity,
  health: 74
},
{
  name: "Plasma",
  rarity: "1/5,000",
  group: "Uncommon",
  value: "$1.333",
  minDepth: 9000,
  maxDepth: Infinity,
  health: 95
},
{
  name: "Antimony",
  rarity: "1/5,750",
  group: "Uncommon",
  value: "$1.533",
  minDepth: 4000,
  maxDepth: 5000,
  health: 26
},
{
  name: "Amber",
  rarity: "1/6,000",
  group: "Uncommon",
  value: "$1.6",
  minDepth: 2000,
  maxDepth: 3000,
  health: 26
},
{
  name: "Olivine",
  rarity: "1/6,500",
  group: "Uncommon",
  value: "$1.733",
  minDepth: 7000,
  maxDepth: 8000,
  health: 38
},
{
  name: "Beryllium",
  rarity: "1/7,000",
  group: "Uncommon",
  value: "$1.867",
  minDepth: 6000,
  maxDepth: 9000,
  health: 38
},
{
  name: "Sapphire",
  rarity: "1/8,000",
  group: "Rare",
  value: "$2.667",
  minDepth: 3000,
  maxDepth: 6000,
  health: 42
},
{
  name: "Praseodymium",
  rarity: "1/8,000",
  group: "Rare",
  value: "$2.667",
  minDepth: 8000,
  maxDepth: 9000,
  health: 14
},
{
  name: "Phosphorus",
  rarity: "1/8,500",
  group: "Rare",
  value: "$2.833",
  minDepth: 7000,
  maxDepth: 8000,
  health: 4
},
{
  name: "Tellurium",
  rarity: "1/8,500",
  group: "Rare",
  value: "$2.833",
  minDepth: 6000,
  maxDepth: 7000,
  health: 42
},
{
  name: "Ruby",
  rarity: "1/9,500",
  group: "Rare",
  value: "$3.167",
  minDepth: 1000,
  maxDepth: 3000,
  health: 44
},
{
  name: "Uranium",
  rarity: "1/10,000",
  group: "Rare",
  value: "$3.333",
  minDepth: 2000,
  maxDepth: 4000,
  health: 48
},
{
  name: "Emerald",
  rarity: "1/10,500",
  group: "Rare",
  value: "$3.5",
  minDepth: 0,
  maxDepth: 2000,
  health: 46
},
{
  name: "Tantalum",
  rarity: "1/10,500",
  group: "Rare",
  value: "$3.5",
  minDepth: 6000,
  maxDepth: 7000,
  health: 32
},
{
  name: "Palladium",
  rarity: "1/11,000",
  group: "Rare",
  value: "$3.667",
  minDepth: 0,
  maxDepth: 2000,
  health: 48
},
{
  name: "Diamond",
  rarity: "1/12,500",
  group: "Rare",
  value: "$4.167",
  minDepth: 0,
  maxDepth: 9000,
  health: 96
},
{
  name: "Cinnabar",
  rarity: "1/13,500",
  group: "Rare",
  value: "$4.5",
  minDepth: 4000,
  maxDepth: 5000,
  health: 18
},
{
  name: "Thorium",
  rarity: "1/15,000",
  group: "Rare",
  value: "$5",
  minDepth: 3000,
  maxDepth: 4000,
  health: 58
},
{
  name: "Photon",
  rarity: "1/16,000",
  group: "Rare",
  value: "$5.333",
  minDepth: 9000,
  maxDepth: Infinity,
  health: 76
},
{
  name: "Reflectite",
  rarity: "1/17,500",
  group: "Rare",
  value: "$5.833",
  minDepth: 9000,
  maxDepth: Infinity,
  health: 72
},
{
  name: "Bromine",
  rarity: "1/19,000",
  group: "Rare",
  value: "$6.333",
  minDepth: 5000,
  maxDepth: 6000,
  health: 35
},
{
  name: "Terbium",
  rarity: "1/21,500",
  group: "Rare",
  value: "$7.167",
  minDepth: 8000,
  maxDepth: 9000,
  health: 92
},
{
  name: "Indium",
  rarity: "1/27,500",
  group: "Rare",
  value: "$9.167",
  minDepth: 7000,
  maxDepth: 8000,
  health: 16
},
{
  name: "Osmium",
  rarity: "1/30,000",
  group: "Epic",
  value: "$13.333",
  minDepth: 0,
  maxDepth: 3000,
  health: 64
},
{
  name: "Rubidium",
  rarity: "1/32,500",
  group: "Epic",
  value: "$14.444",
  minDepth: 0,
  maxDepth: 1000,
  health: 42
},
{
  name: "Lutetium",
  rarity: "1/35,000",
  group: "Epic",
  value: "$15.556",
  minDepth: 5000,
  maxDepth: 6000,
  health: 28
},
{
  name: "Yttrium",
  rarity: "1/40,000",
  group: "Epic",
  value: "$17.778",
  minDepth: 4000,
  maxDepth: 5000,
  health: 22
},
{
  name: "Antimatter",
  rarity: "1/45,000",
  group: "Epic",
  value: "$20",
  minDepth: 9000,
  maxDepth: Infinity,
  health: 90
},
{
  name: "Barium",
  rarity: "1/50,000",
  group: "Epic",
  value: "$22.222",
  minDepth: 3000,
  maxDepth: 4000,
  health: 32
},
{
  name: "Chromium",
  rarity: "1/60,000",
  group: "Epic",
  value: "$26.667",
  minDepth: 7000,
  maxDepth: 9000,
  health: 72
},
{
  name: "Samarium",
  rarity: "1/67,500",
  group: "Epic",
  value: "$30",
  minDepth: 7000,
  maxDepth: 8000,
  health: 34
},
{
  name: "Erbium",
  rarity: "1/70,000",
  group: "Epic",
  value: "$31.111",
  minDepth: 6000,
  maxDepth: 7000,
  health: 30
},
{
  name: "Cesium",
  rarity: "1/120,000",
  group: "Legendary",
  value: "$66.667",
  minDepth: 0,
  maxDepth: 1000,
  health: 34
},
{
  name: "Elektralite",
  rarity: "1/160,000",
  group: "Legendary",
  value: "$88.889",
  minDepth: 1000,
  maxDepth: 2000,
  health: 68
},
{
  name: "Neodymium",
  rarity: "1/200,000",
  group: "Legendary",
  value: "$111.111",
  minDepth: 4000,
  maxDepth: 5000,
  health: 66
},
{
  name: "Inkium",
  rarity: "1/220,000",
  group: "Legendary",
  value: "$122.222",
  minDepth: 9000,
  maxDepth: Infinity,
  health: 70
},
{
  name: "Hafnium",
  rarity: "1/250,000",
  group: "Legendary",
  value: "$138.889",
  minDepth: 7000,
  maxDepth: 9000,
  health: 26
},
{
  name: "Dysprosium",
  rarity: "1/285,000",
  group: "Legendary",
  value: "$158.333",
  minDepth: 5000,
  maxDepth: 6000,
  health: 44
},
{
  name: "Scandium",
  rarity: "1/300,000",
  group: "Legendary",
  value: "$166.667",
  minDepth: 2000,
  maxDepth: 4000,
  health: 42
},
{
  name: "Europium",
  rarity: "1/350,000",
  group: "Legendary",
  value: "$194.444",
  minDepth: 6000,
  maxDepth: 7000,
  health: 25
},
{
  name: "Thallium",
  rarity: "1/400,000",
  group: "Legendary",
  value: "$222.222",
  minDepth: 7000,
  maxDepth: 8000,
  health: 16
},
{
  name: "Rhodium",
  rarity: "1/500,000",
  group: "Mythic",
  value: "$333.333",
  minDepth: 0,
  maxDepth: 1000,
  health: 36
},
{
  name: "Krypton",
  rarity: "1/520,000",
  group: "Mythic",
  value: "$346.667",
  minDepth: 5000,
  maxDepth: 6000,
  health: 70
},
{
  name: "Opal",
  rarity: "1/550,000",
  group: "Mythic",
  value: "$366.667",
  minDepth: 8000,
  maxDepth: 9000,
  health: 68
},
{
  name: "Luminatite",
  rarity: "1/580,000",
  group: "Mythic",
  value: "$386.667",
  minDepth: 9000,
  maxDepth: Infinity,
  health: 80
},
{
  name: "Holmium",
  rarity: "1/625,000",
  group: "Mythic",
  value: "$416.667",
  minDepth: 2000,
  maxDepth: 3000,
  health: 30
},
{
  name: "Gadolinium",
  rarity: "1/650,000",
  group: "Mythic",
  value: "$433.333",
  minDepth: 4000,
  maxDepth: 5000,
  health: 100
},
{
  name: "Ytterbium",
  rarity: "1/725,000",
  group: "Mythic",
  value: "$483.333",
  minDepth: 3000,
  maxDepth: 4000,
  health: 32
},
{
  name: "Ruthenium",
  rarity: "1/800,000",
  group: "Mythic",
  value: "$533.333",
  minDepth: 6000,
  maxDepth: 9000,
  health: 40
},
{
  name: "Rhenium",
  rarity: "1/900,000",
  group: "Mythic",
  value: "$600",
  minDepth: 1000,
  maxDepth: 2000,
  health: 42
},
{
  name: "Infinium",
  rarity: "1/1,250,000",
  group: "Godly",
  value: "$877.193",
  minDepth: 0,
  maxDepth: 1000,
  health: 100
},
{
  name: "Crystalline",
  rarity: "1/1,750,000",
  group: "Godly",
  value: "$1,227.07",
  minDepth: 7000,
  maxDepth: 8000,
  health: 100
},
{
  name: "Ordovium",
  rarity: "1/2,000,000",
  group: "Godly",
  value: "$1,403.509",
  minDepth: 9000,
  maxDepth: Infinity,
  health: 100
},
{
  name: "Polonium",
  rarity: "1/2,500,000",
  group: "Godly",
  value: "$1,754.386",
  minDepth: 2000,
  maxDepth: 3000,
  health: 100
},
{
  name: "Radium",
  rarity: "1/3,000,000",
  group: "Godly",
  value: "$2,105.263",
  minDepth: 5000,
  maxDepth: 7000,
  health: 100
},
{
  name: "Helium",
  rarity: "1/3,500,000",
  group: "Godly",
  value: "$2,456.14",
  minDepth: 3000,
  maxDepth: 4000,
  health: 100
},
{
  name: "Tritium",
  rarity: "1/4,000,000",
  group: "Godly",
  value: "$2,807.018",
  minDepth: 1000,
  maxDepth: 2000,
  health: 100
},
{
  name: "NGC 1512",
  rarity: "1/5,000,000",
  group: "Godly",
  value: "$3,508.772",
  minDepth: 4000,
  maxDepth: 5000,
  health: 100
},
{
  name: "Bloodmantle",
  rarity: "1/6,666,666",
  group: "Godly",
  value: "$4,678.362",
  minDepth: 6000,
  maxDepth: 7000,
  health: 100
},
{
  name: "Hellfire Column",
  rarity: "1/8,000,000",
  group: "Godly",
  value: "$5,614.035",
  minDepth: 8000,
  maxDepth: 9000,
  health: 100
},
{
  name: "Francium",
  rarity: "1/9,000,000",
  group: "Godly",
  value: "$6,315.789",
  minDepth: 4000,
  maxDepth: 5000,
  health: 100
},
{
  name: "Promethium",
  rarity: "1/10,000,000",
  group: "Surreal",
  value: "$7,407.407",
  minDepth: 4000,
  maxDepth: 5000,
  health: 100
},
{
  name: "Scarlet Lunaris",
  rarity: "1/12,500,000",
  group: "Surreal",
  value: "$9,259.259",
  minDepth: 6000,
  maxDepth: 7000,
  health: 100
},
{
  name: "Quark-Gluon-Plasma",
  rarity: "1/15,000,000",
  group: "Surreal",
  value: "$11,111.111",
  minDepth: 9000,
  maxDepth: Infinity,
  health: 100
},
{
  name: "Technetium",
  rarity: "1/17,500,000",
  group: "Surreal",
  value: "$12,962.963",
  minDepth: 2000,
  maxDepth: 4000,
  health: 100
},
{
  name: "Aquanilyx",
  rarity: "1/20,000,000",
  group: "Surreal",
  value: "$14,814.815",
  minDepth: 0,
  maxDepth: 1000,
  health: 100
},
{
  name: "Astatine",
  rarity: "1/25,000,000",
  group: "Surreal",
  value: "$18,518.519",
  minDepth: 7000,
  maxDepth: 9000,
  health: 100
},
{
  name: "Zeus",
  rarity: "1/50,000,000",
  group: "Divine",
  value: "$39,215.686",
  minDepth: 4000,
  maxDepth: 5000,
  health: 100
},
{
  name: "Prometheus",
  rarity: "1/60,000,000",
  group: "Divine",
  value: "$47,058.824",
  minDepth: 8000,
  maxDepth: 9000,
  health: 100
},
{
  name: "Singularity",
  rarity: "1/65,000,000",
  group: "Divine",
  value: "$50,980.392",
  minDepth: 6000,
  maxDepth: 7000,
  health: 100
},
{
  name: "Illisium",
  rarity: "1/75,000,000",
  group: "Divine",
  value: "$58,823.529",
  minDepth: 9000,
  maxDepth: Infinity,
  health: 100
},
{
  name: "Aether",
  rarity: "1/80,000,000",
  group: "Divine",
  value: "$62,745.098",
  minDepth: 5000,
  maxDepth: 6000,
  health: 100
},
{
  name: "Haoshoku",
  rarity: "1/90,000,000",
  group: "Divine",
  value: "$70,588.235",
  minDepth: 0,
  maxDepth: 4000,
  health: 100
},
{
  name: "Oganesson",
  rarity: "1/250,000,000",
  group: "Immortal",
  value: "$208,333.333",
  minDepth: 1000,
  maxDepth: Infinity,
  health: 100
},
{
  name: "Palette O' Stars",
  rarity: "1/275,000,000",
  group: "Immortal",
  value: "$229,166.667",
  minDepth: 5000,
  maxDepth: 6000,
  health: 100
},
{
  name: "Zodiac",
  rarity: "1/500,000,000",
  group: "Immortal",
  value: "$416,666.667",
  minDepth: 0,
  maxDepth: 1000,
  health: 100
},
{
  name: "OJ 287-Ω17",
  rarity: "1/750,000,000",
  group: "Immortal",
  value: "$625,000",
  minDepth: 6000,
  maxDepth: 7000,
  health: 100
},
{
  name: "ERROR-0xFC201A7B",
  rarity: "1/1,000,000,000",
  group: "Eternal",
  value: "$888,888.889",
  minDepth: 0,
  maxDepth: 9000,
  health: 100
},
{
  name: "Quasaranthic-α",
  rarity: "1/1,750,000,000",
  group: "Eternal",
  value: "$1,555,555.556",
  minDepth: 9000,
  maxDepth: Infinity,
  health: 100
},
{
  name: "Emphralim",
  rarity: "1/2,000,000,000",
  group: "Eternal",
  value: "$1,777,777.778",
  minDepth: 7000,
  maxDepth: 8000,
  health: 100
}

  ];
