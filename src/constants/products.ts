import { Zap, Gift, User, Scissors, Cpu, Leaf } from "lucide-react";
import type { KeyTagConfig } from "@/types";

export const WA_NUMBER = "94764304439";

export const SVC_OPTIONS = [
  { icon: Zap,      label: "Laser Engraving",           desc: "Engrave names, logos, or artwork on any material" },
  { icon: Gift,     label: "Personalized Gift",          desc: "Customize a gift for any special occasion" },
  { icon: User,     label: "Personal Customization",     desc: "Personalize your own items & belongings" },
  { icon: Scissors, label: "Laser Cutting",              desc: "Precision cuts for prototypes, signage & décor" },
  { icon: Cpu,      label: "Robot Chassis",              desc: "Custom chassis for engineers & students" },
];

export const MATERIALS_LIST = [
  "Wood (oak, walnut, birch)", "MDF", "Plywood", "Acrylic (clear)", "Acrylic (frosted)",
  "Acrylic (mirrored)", "Leather", "Cardboard", "Paper", "Metal", "Glass", "Other / Not sure",
];

export const QUANTITIES = ["1", "2–5", "6–10", "11–25", "26–50", "51–100", "100+"];
export const TIMELINES  = ["Standard (3–5 working days)", "Rush (1–2 working days)", "I'm flexible"];

export const FAQ_DATA = [
  { q: "How long does an order take?",          a: "Standard orders are completed in 3–5 working days. Rush orders (1–2 days) are available on request." },
  { q: "Can I bring my own item to engrave?",   a: "Absolutely. You can bring any compatible item to our studio. Contact us first to confirm the material is compatible." },
  { q: "What file formats do you accept?",      a: "We accept AI, SVG, PDF, DXF, PNG, and JPG. For best results, provide vector files (AI, SVG, or DXF)." },
  { q: "Do you offer bulk / corporate orders?", a: "Yes! We offer discounts and dedicated support for bulk orders of 10+ pieces. Contact us for a custom quote." },
  { q: "Is a deposit required?",                a: "For custom orders, we typically require 50% upfront before production begins. Full payment on delivery." },
  { q: "Do you ship islandwide?",               a: "Yes. We ship across Sri Lanka via courier. For Peradeniya and nearby areas, in-person pickup is also available." },
];

// ─── Key Tag product configs ───────────────────────────────────────────────────
export const ACRYLIC_KEYTAG_CONFIG: KeyTagConfig = {
  type: "acrylic",
  title: "Acrylic Key Tags",
  subtitle: "Custom Acrylic Key Tags",
  fullDesc: "Carry a sleek, modern touch of personalization wherever you go. Crafted from high-grade, durable acrylic, these key tags offer a striking, high-contrast look that catches the eye. We can laser-engrave absolutely anything you desire - whether it's a name, a minimalist logo, or a significant date. Choose a clean single-sided etching or maximize your personalization with a double-sided design. Precision-cut and scratch-resistant, it is a lightweight, pocket-sized accessory built to stay sharp and never fade over time.",
  highlights: [
    { title: "Sleek & Durable", body: "Premium acrylic finish that resists daily wear and tear, keeping your key tag looking pristine for years." },
    { title: "100% Tailored to You", body: "Completely customizable on one or both sides with any text, name, logo, or graphic you desire." },
  ],
  slides: [
    { src: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&h=720&fit=crop&auto=format", alt: "Custom engraved key tags" },
    { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=720&fit=crop&auto=format", alt: "Laser engraving process" },
    { src: "https://images.unsplash.com/photo-1738162837619-5d0b158abcec?w=900&h=720&fit=crop&auto=format", alt: "Precision laser close-up" },
    { src: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=900&h=720&fit=crop&auto=format", alt: "Finished engraved accessory" },
  ],
};

export const WOODEN_KEYTAG_CONFIG: KeyTagConfig = {
  type: "wooden",
  title: "Wooden Key Tags",
  subtitle: "Custom Wooden Key Tags",
  fullDesc: "Add a warm, natural aesthetic to your everyday essentials. Made from premium quality wood, these key tags offer a rustic yet sophisticated charm that feels great in the hand. Every piece can be custom laser-engraved with your choice of text, names, or custom designs on either one or both sides. The deep, dark laser etching burns beautifully into the wood grain, creating a permanent, organic look that won't wear away - making it the perfect timeless keepsake or thoughtful little gift.",
  highlights: [
    { title: "Natural Elegance", body: "High-quality wooden texture that brings a classic, premium feel - warm to the touch and beautiful to look at." },
    { title: "Versatile Engraving", body: "Available in single or double-sided options to fit your exact style, with any name, design, or text." },
  ],
  slides: [
    { src: "https://images.unsplash.com/photo-1736967225486-d3c9298b8a5e?w=900&h=720&fit=crop&auto=format", alt: "Laser-engraved wooden item" },
    { src: "https://images.unsplash.com/photo-1632424014490-766d1664a5a3?w=900&h=720&fit=crop&auto=format", alt: "Laser-cut wooden design" },
    { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=720&fit=crop&auto=format", alt: "Laser engraving process" },
    { src: "https://images.unsplash.com/photo-1738162837619-5d0b158abcec?w=900&h=720&fit=crop&auto=format", alt: "Precision laser close-up" },
  ],
};

// ─── Acrylic Photo product constants ──────────────────────────────────────────
export const ACRYLIC_SLIDES = [
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=720&fit=crop&auto=format", alt: "Laser engraving precision process" },
  { src: "https://images.unsplash.com/photo-1738162837619-5d0b158abcec?w=900&h=720&fit=crop&auto=format", alt: "Close-up laser engraving on acrylic" },
  { src: "https://images.unsplash.com/photo-1615378809683-6737a9e362f2?w=900&h=720&fit=crop&auto=format", alt: "Precision laser machine at work" },
  { src: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=900&h=720&fit=crop&auto=format", alt: "Elegant desk display" },
];

export const ACRYLIC_HIGHLIGHTS = [
  { title: "Dual-Sided Customization", body: "Showcase a beautifully detailed, high-contrast portrait on the front, complemented by a clean, custom-etched text dedication on the back." },
  { title: "Premium Black & Grey Aesthetic", body: "A minimalist, contemporary look that captures fine details and brings a luxury feel to any home or office space." },
  { title: "Exceptional Longevity", body: "Precision laser-engraved into scratch-resistant, high-grade acrylic that will never fade, peel, or yellow over time." },
  { title: "Desk-Friendly Design", body: "Compact, sturdy, and perfectly weighted to stand as a premium accent on any flat surface." },
];

export const ACRYLIC_PRICES: Record<string, number> = {
  "single-nobox": 900,
  "dual-nobox":   1000,
  "single-box":   1400,
  "dual-box":     1500,
};

// ─── Name Boards constants ─────────────────────────────────────────────────────
export const NAME_BOARD_SIZES  = ["10 × 4 inch"];
export const NAME_BOARD_TYPES  = [
  { id: "stencil", label: "Black Acrylic + White Stencil Painting", price: 800  },
  { id: "letters", label: "Black Acrylic + White Acrylic Letters",  price: 1200 },
];
export const NAME_BOARD_SLIDES = [
  { src: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=900&h=720&fit=crop&auto=format", alt: "Custom engraved name board" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=720&fit=crop&auto=format", alt: "Laser engraving process" },
  { src: "https://images.unsplash.com/photo-1738162837619-5d0b158abcec?w=900&h=720&fit=crop&auto=format", alt: "Precision laser close-up" },
];

// ─── Robot Chassis constants ───────────────────────────────────────────────────
export const ROBOT_SLIDES = [
  { src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&h=720&fit=crop&auto=format", alt: "Robot chassis prototype" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=720&fit=crop&auto=format", alt: "Laser cutting process" },
  { src: "https://images.unsplash.com/photo-1738162837619-5d0b158abcec?w=900&h=720&fit=crop&auto=format", alt: "Precision laser close-up" },
];

export const PERSONALIZE_SLIDES = [
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=720&fit=crop&auto=format", alt: "Laser engraving process" },
  { src: "https://images.unsplash.com/photo-1738162837619-5d0b158abcec?w=900&h=720&fit=crop&auto=format", alt: "Precision laser close-up" },
];

export const PERSONALIZE_ITEMS = [
  { id: "diaries",   name: "Diaries & Journals",  desc: "Make your personal reflections unique with custom-engraved premium covers tailored to your individual style.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=900&h=720&fit=crop&auto=format" },
  { id: "wallets",   name: "Wallets & Bags",       desc: "Add an exclusive touch of sophistication to your everyday leather accessories with custom laser-engraved names or emblems.", img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=900&h=720&fit=crop&auto=format" },
  { id: "notebooks", name: "Note Books",           desc: "Stand out in meetings or class with a personalized note book featuring custom-etched texturing.", img: "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?w=900&h=720&fit=crop&auto=format" },
  { id: "belts",     name: "Belts",                desc: "Make a distinct style statement with a personalized name or unique design precisely laser-engraved onto your leather belt.", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900&h=720&fit=crop&auto=format" },
];

