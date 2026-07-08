import { useState, useEffect, useCallback } from "react";
import type { Testimonial } from "@/types";

// ─── Google Sheets live testimonials ─────────────────────────────────────────
// Setup:
//   1. Add a column called "Approved" to your feedback Google Sheet
//   2. Type "Yes" for any review you want shown publicly
//   3. File → Share → Publish to web → Sheet1 → CSV → Publish
//   4. Set VITE_SHEET_CSV_URL in .env.local
//
// Expected column order from Apps Script:
//   0: Timestamp | 1: Name | 2: Product | 3: Rating | 4: Message | 5: Approved

const SHEET_CSV_URL = import.meta.env.VITE_SHEET_CSV_URL ?? "";

const FALLBACK_TESTIMONIALS: Testimonial[] = [
  { name: "Kavindra P.", stars: 5, text: "The keepsake box was absolutely stunning. The engraving precision was beyond what I expected for the price." },
  { name: "Malini S.",   stars: 5, text: "Ordered 50 acrylic awards for our corporate event. Every one was perfect and delivered ahead of schedule." },
  { name: "Rajan M.",    stars: 5, text: "The wedding gift set had every guest asking about it. CRE8DEN made something truly one of a kind for us." },
];

function parseCSV(raw: string): string[][] {
  return raw.trim().split("\n").map((row) => {
    const cols: string[] = [];
    let cur = "", inQuote = false;
    for (let i = 0; i < row.length; i++) {
      const ch = row[i];
      if (ch === '"') { inQuote = !inQuote; }
      else if (ch === "," && !inQuote) { cols.push(cur.trim()); cur = ""; }
      else { cur += ch; }
    }
    cols.push(cur.trim());
    return cols;
  });
}

export function useApprovedTestimonials() {
  const [items, setItems] = useState<Testimonial[]>(FALLBACK_TESTIMONIALS);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    if (!SHEET_CSV_URL || SHEET_CSV_URL.startsWith("YOUR_")) { setLoading(false); return; }
    try {
      const res = await fetch(SHEET_CSV_URL, { cache: "no-store" });
      const csv = await res.text();
      const rows = parseCSV(csv).slice(1);
      const approved = rows
        .filter((cols) => cols[5]?.toLowerCase().trim() === "yes" && cols[4]?.trim())
        .map((cols) => ({
          name:  cols[1]?.trim() || "Anonymous",
          stars: Math.min(5, Math.max(1, parseInt(cols[3]) || 5)),
          text:  cols[4]?.trim(),
        }));
      if (approved.length > 0) setItems(approved);
    } catch { /* silently use fallback */ }
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  return { items, loading };
}
