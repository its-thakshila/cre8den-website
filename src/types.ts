// ─── Shared types ─────────────────────────────────────────────────────────────
export type Page =
  | "home" | "about" | "gifts" | "services" | "order" | "contact"
  | "product-acrylic-photo" | "product-acrylic-keytag" | "product-wooden-keytag"
  | "product-personalize" | "product-name-boards" | "product-robot-chassis";

export type OrderStep = 1 | 2 | 3 | 4;
export type GiftCat = "All" | "Acrylic" | "Wood" | "Key Tags" | "Notebooks" | "Art & Photo";

export interface Testimonial {
  name: string;
  product?: string;
  stars: number;
  text: string;
}

export interface KeyTagConfig {
  type: "acrylic" | "wooden";
  title: string;
  subtitle: string;
  fullDesc: string;
  highlights: { title: string; body: string }[];
  slides: { src: string; alt: string }[];
}
