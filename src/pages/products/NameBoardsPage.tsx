import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductSlider } from "@/components/ProductSlider";
import { OrderModal } from "@/components/OrderModal";
import { ProductReviews } from "@/components/ProductReviews";
import { NAME_BOARD_SIZES, NAME_BOARD_TYPES, NAME_BOARD_SLIDES } from "@/constants/products";

export function NameBoardsPage() {
  const [size, setSize] = useState(NAME_BOARD_SIZES[0]);
  const [typeId, setTypeId] = useState(NAME_BOARD_TYPES[0].id);
  const [qty, setQty] = useState(1);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const selectedType = NAME_BOARD_TYPES.find((t) => t.id === typeId)!;
  const unitPrice    = selectedType.price;
  const totalPrice   = unitPrice * qty;

  function buildMsg(name: string, email: string) {
    return [
      `*New Order - Name Boards*`, "",
      `*Name:* ${name}`, `*Email:* ${email}`, "",
      "*Order Details:*",
      `*Size:* ${size}`,
      `*Type:* ${selectedType.label}`,
      `*Quantity:* ${qty}`,
      `*Unit Price:* LKR ${unitPrice}`,
      `*Total:* LKR ${totalPrice}`,
      "", "_Our agent will contact you to collect the text or design to be engraved on the name board._",
    ].join("\n");
  }

  return (
    <main>
      <section className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-2 text-xs text-muted-foreground">
          <button onClick={() => { navigate("/services"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="hover:text-primary transition-colors">Services</button>
          <span>/</span><span className="text-foreground font-medium">Name Boards</span>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ProductSlider slides={NAME_BOARD_SLIDES} />
          <div>
            <h1 className="text-2xl lg:text-3xl font-semibold text-foreground leading-snug mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>Name Boards</h1>
            <p className="text-sm text-muted-foreground mb-5">Professional, clearly legible, and custom-crafted directional or educational signs designed to guide and impress.</p>
            <div className="flex items-baseline gap-2 my-4">
              <span className="text-2xl font-bold text-primary" style={{ fontFamily: "'Outfit', sans-serif" }}>LKR {unitPrice.toLocaleString()}</span>
              <span className="text-xs text-muted-foreground">per piece</span>
            </div>
            <div className="h-px bg-border mb-6" />
            <div className="space-y-6 mb-7">
              <div>
                <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Size</p>
                <div className="flex flex-wrap gap-2">
                  {NAME_BOARD_SIZES.map((s) => (
                    <button key={s} type="button" onClick={() => setSize(s)}
                      className={`text-xs px-3.5 py-1.5 rounded-full border transition-all ${size === s ? "bg-primary text-white border-primary" : "bg-background border-border text-muted-foreground hover:border-primary/30"}`}>{s}</button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Type</p>
                <div className="space-y-2">
                  {NAME_BOARD_TYPES.map((t) => (
                    <button key={t.id} type="button" onClick={() => setTypeId(t.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border text-left transition-all ${typeId === t.id ? "border-primary bg-[#FFF0F1]" : "border-border bg-background hover:border-primary/30"}`}>
                      <span className={`text-sm font-medium ${typeId === t.id ? "text-primary" : "text-foreground"}`}>{t.label}</span>
                      <span className={`text-sm font-semibold flex-shrink-0 ml-3 ${typeId === t.id ? "text-primary" : "text-muted-foreground"}`}>LKR {t.price}</span>
                    </button>
                  ))}
                </div>
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
                <span className="truncate pr-2">{selectedType.label}</span>
                <span className="flex-shrink-0">LKR {unitPrice.toLocaleString()} × {qty}</span>
              </div>
              <div className="flex justify-between font-semibold text-foreground text-base pt-1.5 border-t border-border">
                <span>Total</span>
                <span className="text-primary" style={{ fontFamily: "'Outfit', sans-serif" }}>LKR {totalPrice.toLocaleString()}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={() => setModal(true)} className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-white text-sm font-semibold py-3.5 rounded-md hover:bg-accent transition-colors">Place Order</button>
              <button onClick={() => setModal(true)} className="flex-1 inline-flex items-center justify-center gap-2 border border-border text-sm font-medium text-foreground py-3.5 rounded-md hover:border-primary hover:text-primary transition-colors">Ask / Customise</button>
            </div>
            <p className="text-[10px] text-muted-foreground text-center mt-3">You'll be directed to WhatsApp - our agent will collect your text or design details.</p>
          </div>
        </div>
      </section>

      <ProductReviews productName="Name Boards" />

      {modal && (
        <OrderModal
          title="Your Details"
          subtitle="Name Boards"
          orderRows={[
            { label: "Size", value: size },
            { label: "Type", value: selectedType.label },
            { label: "Quantity", value: qty.toString() },
            { label: "Total", value: `LKR ${totalPrice.toLocaleString()}`, isBold: true },
          ]}
          onClose={() => setModal(false)}
          buildWhatsAppMsg={buildMsg}
        />
      )}
    </main>
  );
}


