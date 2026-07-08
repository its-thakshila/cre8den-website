import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { ProductSlider } from "@/components/ProductSlider";
import { OrderModal } from "@/components/OrderModal";
import { ProductReviews } from "@/components/ProductReviews";
import { ShareButton } from "@/components/ShareButton";
import type { KeyTagConfig } from "@/types";

interface Props { config: KeyTagConfig; }

export function KeyTagPage({ config }: Props) {
  const [isDual, setIsDual] = useState(false);
  const [qty, setQty] = useState(1);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const unitPrice  = isDual ? 150 : 100;
  const totalPrice = unitPrice * qty;

  function buildMsg(name: string, email: string) {
    return [
      `*NEW KEY TAG ORDER*`, "",
      `*Customer Details:*`,
      `• Name: ${name}`, `• Email: ${email}`, "",
      `*Order Details:*`,
      `• Type: ${config.title}`,
      `• Sides: ${isDual ? "Double Sided" : "One Side"}`,
      `• Quantity: ${qty}`,
      `• Unit Price: LKR ${unitPrice}`,
      `• Subtotal: LKR ${totalPrice}`, "",
      "_Our agent will contact you to collect the design or text to be engraved._",
    ].filter(Boolean).join("\n").trim();
  }

  return (
    <main>
      <section className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <button onClick={() => { navigate("/gifts"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="hover:text-primary transition-colors">Products & Gifts</button>
            <span>/</span><span className="text-foreground font-medium">{config.title}</span>
          </div>
          <ShareButton />
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ProductSlider folderPath={`/images/products/${config.id}`} slides={config.slides} fallbackAlt={config.title} />
          <div>
            <h1 className="text-2xl lg:text-3xl font-semibold text-foreground leading-snug mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>{config.subtitle}</h1>
            <div className="mb-4">
              <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Size</p>
              <div className="flex flex-wrap gap-2">
                <button className="text-xs px-3.5 py-1.5 rounded-full border bg-primary text-white border-primary">55 × 35 mm</button>
              </div>
            </div>
            <div className="flex items-baseline gap-2 my-4">
              <span className="text-2xl font-bold text-primary" style={{ fontFamily: "'Outfit', sans-serif" }}>LKR {unitPrice}</span>
              <span className="text-xs text-muted-foreground">per piece</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{config.fullDesc}</p>
            <div className="h-px bg-border mb-6" />
            <div className="space-y-5 mb-7">
              <div className="flex items-center justify-between">
                <div><p className="text-sm font-semibold text-foreground">Double Sided</p><p className="text-xs text-muted-foreground mt-0.5">Engrave both sides of the key tag</p></div>
                <button onClick={() => setIsDual(!isDual)} className={`relative w-11 h-6 rounded-full transition-colors duration-200 flex-shrink-0 ${isDual ? "bg-primary" : "bg-border"}`}>
                  <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${isDual ? "translate-x-5" : "translate-x-0"}`} />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div><p className="text-sm font-semibold text-foreground">Quantity</p><p className="text-xs text-muted-foreground mt-0.5">Minimum order: 1 piece</p></div>
                <div className="flex items-center gap-3 border border-border rounded-lg px-1">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors text-lg leading-none">−</button>
                  <span className="text-sm font-semibold text-foreground w-5 text-center">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors text-lg leading-none">+</button>
                </div>
              </div>
            </div>
            <div className="bg-background border border-border rounded-xl p-4 mb-6 text-sm">
              <div className="flex justify-between text-muted-foreground mb-1.5">
                <span>{isDual ? "Double sided" : "One side"}</span>
                <span>LKR {unitPrice} × {qty}</span>
              </div>
              <div className="flex justify-between font-semibold text-foreground text-base pt-1.5 border-t border-border">
                <span>Total</span>
                <span className="text-primary" style={{ fontFamily: "'Outfit', sans-serif" }}>LKR {totalPrice}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={() => setModal(true)} className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-white text-sm font-semibold py-3.5 rounded-md hover:bg-accent transition-colors">Place Order</button>
              <button onClick={() => setModal(true)} className="flex-1 inline-flex items-center justify-center gap-2 border border-border text-sm font-medium text-foreground py-3.5 rounded-md hover:border-primary hover:text-primary transition-colors">Ask / Customise</button>
            </div>
            <p className="text-[10px] text-muted-foreground text-center mt-3">You'll be directed to WhatsApp - our agent will collect your design details.</p>
          </div>
        </div>
      </section>

      <section className="bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <p className="text-xs font-medium tracking-widest text-primary uppercase mb-2">Product Highlights</p>
          <h2 className="text-2xl font-semibold text-foreground mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>What makes it special?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {config.highlights.map(({ title, body }) => (
              <div key={title} className="bg-white border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-lg bg-[#FFF0F1] flex items-center justify-center mb-4"><Check size={14} className="text-primary" /></div>
                <h3 className="text-sm font-semibold text-foreground mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductReviews productName="Key Tags" bgClassName="bg-white" />

      {modal && (
        <OrderModal
          title="Your Details"
          subtitle={config.title}
          orderRows={[
            { label: "Sides", value: isDual ? "Double Sided" : "One Side" },
            { label: "Quantity", value: qty.toString() },
            { label: "Total", value: `LKR ${totalPrice}`, isBold: true },
          ]}
          onClose={() => setModal(false)}
          buildWhatsAppMsg={buildMsg}
        />
      )}
    </main>
  );
}


