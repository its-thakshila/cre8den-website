import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { GIFTS_DATA, GIFT_CATS } from "@/constants/gifts";
import type { GiftCat } from "@/types";

export function GiftsPage() {
  const [cat, setCat] = useState<GiftCat>("All");
  const filtered = [...GIFTS_DATA]
    .filter((g) => cat === "All" || g.cat === cat)
    .sort((a, b) => (a.comingSoon === b.comingSoon ? 0 : a.comingSoon ? 1 : -1));
  const navigate = useNavigate();
  function go(to: string) { navigate(to); window.scrollTo({ top: 0, behavior: "smooth" }); }

  return (
    <main>
      <section className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <p className="text-xs font-medium tracking-widest text-primary uppercase mb-2">Products & Gifts</p>
          <h1 className="text-3xl lg:text-4xl font-light text-foreground leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Crafted for moments <span className="font-semibold">worth remembering.</span>
          </h1>
        </div>
      </section>

      {/* Category filter */}
      <section className="bg-background border-b border-border sticky top-16 z-30">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-2 overflow-x-auto">
          {GIFT_CATS.map((c) => (
            <button key={c} onClick={() => setCat(c)}
              className={`whitespace-nowrap text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-150 flex-shrink-0 ${cat === c ? "bg-primary text-white" : "bg-white border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"}`}>
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-background">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <p className="text-xs text-muted-foreground mb-6">{filtered.length} product{filtered.length !== 1 ? "s" : ""}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filtered.map((g) => <ProductCard key={g.id} gift={g} />)}
          </div>
          <div className="mt-14 bg-[#0F0C0C] text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-medium tracking-widest text-primary uppercase mb-2">Don't see what you need?</p>
              <h3 className="text-xl font-semibold" style={{ fontFamily: "'Outfit', sans-serif" }}>We make anything custom.</h3>
              <p className="text-sm text-white/60 mt-1">Bring your item, your design, or just an idea - we'll create it.</p>
            </div>
            <button onClick={() => go("/order")} className="flex-shrink-0 inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-6 py-3 rounded-md hover:bg-accent transition-colors group">
              Place a Custom Order <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

