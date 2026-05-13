import kitchen from "@/assets/cat-kitchen.jpg";
import bedroom from "@/assets/cat-bedroom.jpg";
import living from "@/assets/cat-living.jpg";
import office from "@/assets/cat-office.jpg";
import custom from "@/assets/cat-custom.jpg";

export type Category = "kitchen" | "bedroom" | "living" | "office" | "custom";

export type Product = {
  id: string;
  name: { sq: string; en: string; it: string };
  category: Category;
  material: string;
  price: number;
  image: string;
  description: { sq: string; en: string; it: string };
};

export const products: Product[] = [
  {
    id: "milano-sofa",
    name: { sq: "Divani Milano", en: "Milano Sofa", it: "Divano Milano" },
    category: "living",
    material: "Linen / Oak",
    price: 1890,
    image: living,
    description: {
      sq: "Divan i butë me linja të rrjedhshme, prodhuar me tapiceri prej liri natyror.",
      en: "Soft sofa with flowing lines, upholstered in natural linen.",
      it: "Divano morbido dalle linee fluide, rivestito in lino naturale.",
    },
  },
  {
    id: "verona-kitchen",
    name: { sq: "Kuzhina Verona", en: "Verona Kitchen", it: "Cucina Verona" },
    category: "kitchen",
    material: "Oak / Marble",
    price: 6400,
    image: kitchen,
    description: {
      sq: "Kuzhinë moderne me ishull mermeri dhe finitura lisi.",
      en: "Modern kitchen with marble island and oak finishes.",
      it: "Cucina moderna con isola in marmo e finiture in rovere.",
    },
  },
  {
    id: "como-bedroom",
    name: { sq: "Dhoma Gjumi Como", en: "Como Bedroom", it: "Camera Como" },
    category: "bedroom",
    material: "Walnut / Linen",
    price: 2750,
    image: bedroom,
    description: {
      sq: "Set komplet dhome gjumi me krevat dhe komo prej arrës italiane.",
      en: "Complete bedroom set with bed and nightstands in Italian walnut.",
      it: "Set camera completo con letto e comodini in noce italiano.",
    },
  },
  {
    id: "torino-desk",
    name: { sq: "Tavolinë Zyre Torino", en: "Torino Desk", it: "Scrivania Torino" },
    category: "office",
    material: "Oak / Leather",
    price: 1450,
    image: office,
    description: {
      sq: "Tavolinë ekzekutive me detaje lëkure dhe sirtarë të integruar.",
      en: "Executive desk with leather details and integrated drawers.",
      it: "Scrivania executive con dettagli in pelle e cassetti integrati.",
    },
  },
  {
    id: "custom-wardrobe",
    name: { sq: "Garderobë me Porosi", en: "Custom Wardrobe", it: "Armadio su Misura" },
    category: "custom",
    material: "Made to order",
    price: 0,
    image: custom,
    description: {
      sq: "Garderobë e prodhuar me porosi sipas dimensioneve të hapësirës suaj.",
      en: "Wardrobe crafted to the exact dimensions of your space.",
      it: "Armadio realizzato sulle esatte dimensioni del tuo spazio.",
    },
  },
  {
    id: "siena-dining",
    name: { sq: "Tavolinë Drekë Siena", en: "Siena Dining Table", it: "Tavolo Siena" },
    category: "living",
    material: "Solid Oak",
    price: 1290,
    image: living,
    description: {
      sq: "Tavolinë druri masiv për 8 persona, finitur natyrale.",
      en: "Solid oak dining table for 8, natural finish.",
      it: "Tavolo da pranzo per 8 in rovere massello, finitura naturale.",
    },
  },
];
