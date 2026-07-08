import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { OrderModal } from "@/components/OrderModal";
import { ProductSlider } from "@/components/ProductSlider";
import { ProductReviews } from "@/components/ProductReviews";
import { PERSONALIZE_ITEMS, PERSONALIZE_SLIDES } from "@/constants/products";

export function PersonalizePage() {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  
  const item = PERSONALIZE_ITEMS.find((i) => i.id === id);
  const itemName = item ? item.name : "Belongings";
  const itemDesc = item ? item.desc : "Turn your everyday essentials into a reflection of your unique style. Using high-precision laser engraving, we can etch any name, custom design, initials, or meaningful date directly onto your belongings with flawless detail.";
  const itemImg = item ? item.img : "https://images.unsplash.com/photo-1627123424574-724758594e93?w=900&h=680&fit=crop&auto=format";
  
  const itemSlides = [
    { src: itemImg, alt: `Personalised ${itemName}` },
    ...PERSONALIZE_SLIDES
  ];

  function buildMsg(name: string, email: string) {
    return [
      `*Personalise Belongings Enquiry - CRE8DEN*`, "",
      `*Name:* ${name}`, `*Email:* ${email}`,
      `*Item Type:* ${itemName}`, "",
      "_Pricing depends on artwork and size. Our agent will provide a quote and guide you through the customisation process._",
    ].join("\n");
  }

  return (
    <main>
      <section className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-2 text-xs text-muted-foreground">
          <button onClick={() => { navigate("/services"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="hover:text-primary transition-colors">Services</button>
          <span>/</span><span className="text-foreground font-medium">Personalize {itemName}</span>
        </div>
      </section>

      <section className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-medium tracking-widest text-primary uppercase mb-3">Service</p>
            <h1 className="text-3xl lg:text-4xl font-light text-foreground leading-tight mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>Personalize <span className="font-semibold">{itemName}</span></h1>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{itemDesc}</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">Built to last and crafted with a high-end, sophisticated finish - the perfect way to elevate your daily style or create a truly memorable gift for someone special.</p>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => setModal(true)} className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-6 py-3 rounded-md hover:bg-accent transition-colors group">Get a Quote <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" /></button>
              <button onClick={() => setModal(true)} className="inline-flex items-center gap-2 border border-border text-sm font-medium text-foreground px-6 py-3 rounded-md hover:border-primary hover:text-primary transition-colors">Ask / Customise</button>
            </div>
            <p className="text-[10px] text-muted-foreground mt-3">Pricing depends on artwork and size. Our agent will provide a personalised quote.</p>
          </div>
          <div className="lg:order-1">
            <ProductSlider folderPath={`/images/services/${item?.id || "diaries"}`} slides={itemSlides} fallbackAlt={`Personalised ${itemName}`} />
          </div>
        </div>
      </section>

      <ProductReviews productName={itemName} />

      {modal && (
        <OrderModal
          title="Request a Quote"
          orderRows={[]}
          onClose={() => setModal(false)}
          buildWhatsAppMsg={buildMsg}
          extraField={
            <div>
              <label className="text-xs font-semibold text-foreground uppercase tracking-wider block mb-1.5">Item Type</label>
              <div className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground flex items-center justify-between">
                <span>{itemName}</span>
              </div>
            </div>
          }
        />
      )}
    </main>
  );
}


