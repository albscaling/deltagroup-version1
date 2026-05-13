// Furniture taxonomy. Albanian-first; English & Italian mapped for i18n.
export type Category = {
  slug: string;
  sq: string;
  en: string;
  it: string;
};

export const categories: Category[] = [
  { slug: "tables-workspaces", sq: "Tavolina & Hapësira Pune", en: "Tables & Workspaces", it: "Tavoli & Postazioni" },
  { slug: "seating", sq: "Ulëse & Kolltukë", en: "Seating Solutions", it: "Sedute" },
  { slug: "food-storage", sq: "Ruajtje & Përgatitje Ushqimi", en: "Food Storage & Preparation", it: "Conservazione & Preparazione Cibo" },
  { slug: "adjustable", sq: "Mobilje të Rregullueshme", en: "Adjustable / Utility Furniture", it: "Mobili Regolabili" },
  { slug: "ironing-laundry", sq: "Hekurosje & Lavanderi", en: "Ironing & Laundry", it: "Stiro & Lavanderia" },
  { slug: "kitchen-dining", sq: "Kuzhinë & Ngrënie", en: "Kitchen & Dining", it: "Cucina & Pranzo" },
  { slug: "folding", sq: "Mobilje të Palosshme", en: "Folding & Space-Saving Solutions", it: "Mobili Salvaspazio" },
  { slug: "home-decor", sq: "Dekor Shtëpie", en: "Home Decor & Furnishings", it: "Decor & Arredamento" },
  { slug: "multi-use", sq: "Artikuj Shumëfunksionalë", en: "Multi-Use & Portable Items", it: "Articoli Multiuso" },
  { slug: "outdoor", sq: "Kopsht & Ambient i Jashtëm", en: "Outdoor & Garden", it: "Esterno & Giardino" },
  { slug: "relaxation", sq: "Relaks & Komfort", en: "Relaxation & Comfort", it: "Relax & Comfort" },
  { slug: "shelving", sq: "Rafte & Ekspozim", en: "Shelving & Display", it: "Scaffalature & Esposizione" },
  { slug: "special", sq: "Artikuj Speciale", en: "Special Items / Miscellaneous", it: "Articoli Speciali" },
  { slug: "storage", sq: "Ruajtje & Organizim", en: "Storage & Organization", it: "Storage & Organizzazione" },
  { slug: "bathroom", sq: "Banjo & Higjienë", en: "Bathroom & Hygiene", it: "Bagno & Igiene" },
];

// Backwards-compat exports (older code may still import these)
export const roomCategories = categories.map((c) => ({ ...c, sub: [] as Category[] }));
export type RoomCategory = (typeof roomCategories)[number];
export type SubCategory = Category;
