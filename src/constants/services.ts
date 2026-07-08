import { Scissors, User } from "lucide-react";

// ─── Services data ────────────────────────────────────────────────────────────
export const SERVICES_DATA = [
  {
    id: "personalize", icon: User, detailPage: "/services/personalize",
    title: "Personalize Belongings",
    tagline: "We engrave your personal items with custom designs.",
    desc: "Bring your own belongings and we'll engrave custom names, logos, quotes, or artwork - creating a truly unique item that reflects your personality. Any design, any material you provide.",
    subItems: [
      { id: "diaries",   folder: "/images/personalize/diaries", name: "Diaries & Journals", detailPage: "/services/personalize/diaries",   desc: "Custom names, dates, or artwork engraved on your diary or journal cover.", price: "Quote on request", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=600&fit=crop&auto=format" },
      { id: "wallets",   folder: "/images/personalize/wallets", name: "Wallets & Bags",      detailPage: "/services/personalize/wallets",   desc: "Monograms, initials, or logos permanently engraved on leather wallets and bags.", price: "Quote on request", img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=600&fit=crop&auto=format" },
      { id: "notebooks", folder: "/images/personalize/notebooks", name: "Note Books",          detailPage: "/services/personalize/notebooks", desc: "Personalise your notebook covers with names, patterns, or custom artwork.", price: "Quote on request", img: "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?w=600&h=600&fit=crop&auto=format" },
      { id: "belts",     folder: "/images/personalize/belts", name: "Belts",               detailPage: "/services/personalize/belts",     desc: "Unique patterns or text engraved on leather belts for a personalised touch.", price: "Quote on request", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop&auto=format" },
    ],
  },
  {
    id: "laser", icon: Scissors,
    title: "Laser Cutting & Engraving",
    tagline: "Precision cutting and engraving for your projects.",
    desc: "Industrial-grade laser cutting and engraving for prototypes, products, décor, and commercial applications. Any shape, any complexity - delivered with professional quality.",
    subItems: [
      { id: "chassis",    folder: "/images/laser/robot-chassis", name: "Robot Chassis",    detailPage: "/services/robot-chassis", desc: "Custom laser-cut chassis for engineering students, robotics clubs, and R&D projects.", price: "Quote on request", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=600&fit=crop&auto=format" },
      { id: "boxes",      folder: "/images/laser/cardboard-boxes", name: "Cardboard Boxes",  comingSoon: true, tag: "Coming Soon", desc: "Precision-cut custom cardboard boxes for packaging, gifting, and product display.", price: "-",    img: "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=600&h=600&fit=crop&auto=format" },
      { id: "souvenirs",  folder: "/images/laser/souvenirs", name: "Souvenirs",        comingSoon: true, tag: "Coming Soon", desc: "Uniquely engraved keepsakes and souvenirs crafted for events, tourism, and gifting.", price: "-",   img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&h=600&fit=crop&auto=format" },
      { id: "nameboards", folder: "/images/laser/name-boards", name: "Name Boards",      detailPage: "/services/name-boards", desc: "Professional, custom-crafted acrylic name boards for homes, offices, and businesses.", price: "LKR 800 – 1,200", img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&h=600&fit=crop&auto=format" },
    ],
  },
];


