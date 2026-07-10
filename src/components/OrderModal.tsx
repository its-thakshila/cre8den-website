import { useState } from "react";
import { X } from "lucide-react";
import ReactGA from "react-ga4";
import { WA_NUMBER } from "@/constants/products";

interface OrderRow { label: string; value: string; isBold?: boolean; }
interface Props {
  title: string;
  subtitle?: string;
  orderRows: OrderRow[];
  onClose: () => void;
  buildWhatsAppMsg: (name: string, email: string) => string;
  extraField?: React.ReactNode;
}

export function OrderModal({ title, subtitle, orderRows, onClose, buildWhatsAppMsg, extraField }: Props) {
  const [stage, setStage] = useState<"form" | "summary">("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (name && email) setStage("summary");
  }

  function sendWhatsApp() {
    ReactGA.event({ category: "Lead", action: "WhatsApp Open", label: subtitle || title });
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(buildWhatsAppMsg(name, email))}`, "_blank");
  }

  const WaIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="p-6">
          {stage === "form" ? (
            <>
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h3 className="text-lg font-semibold text-foreground" style={{ fontFamily: "'Outfit', sans-serif" }}>{title}</h3>
                  {subtitle && <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>}
                </div>
                <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors self-start mt-1"><X size={18} /></button>
              </div>
              {orderRows.length > 0 && (
                <div className="bg-background rounded-xl p-4 text-xs mb-5 space-y-1.5">
                  {orderRows.map(({ label, value, isBold }) => (
                    <div key={label} className={`flex justify-between gap-4 ${isBold ? "pt-1 border-t border-border font-semibold text-foreground" : "text-muted-foreground"}`}>
                      <span>{label}</span><span className={isBold ? "text-primary" : ""}>{value}</span>
                    </div>
                  ))}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                {extraField}
                <div>
                  <label className="text-xs font-semibold text-foreground uppercase tracking-wider block mb-1.5">Full Name *</label>
                  <input type="text" placeholder="Your full name" value={name} onChange={(e) => setName(e.target.value)} required
                    className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-foreground uppercase tracking-wider block mb-1.5">Email Address *</label>
                  <input type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required
                    className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors" />
                </div>
                <button type="submit" className="w-full bg-primary text-white text-sm font-semibold py-3 rounded-lg hover:bg-accent transition-colors">Continue</button>
              </form>
            </>
          ) : (
            <>
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h3 className="text-lg font-semibold text-foreground" style={{ fontFamily: "'Outfit', sans-serif" }}>Order Summary</h3>
                  {subtitle && <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>}
                </div>
                <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors self-start mt-1"><X size={18} /></button>
              </div>
              <div className="bg-background rounded-xl p-4 text-sm space-y-2 mb-5">
                {[{ label: "Name", value: name }, { label: "Email", value: email }, ...orderRows].map(({ label, value, isBold }) => (
                  <div key={label} className={`flex justify-between gap-4 ${isBold ? "pt-2 border-t border-border font-semibold" : ""}`}>
                    <span className={isBold ? "text-foreground" : "text-muted-foreground flex-shrink-0"}>{label}</span>
                    <span className={`text-right ${isBold ? "text-primary" : "text-foreground"}`}>{value}</span>
                  </div>
                ))}
              </div>
              <div className="bg-background border border-border rounded-xl p-3.5 text-xs text-muted-foreground leading-relaxed mb-5">
                <strong className="text-foreground block mb-1">What happens next?</strong>
                You'll be directed to our WhatsApp. Once your message is sent, one of our agents will reply to collect your design details and complete your order.
              </div>
              <div className="flex gap-3">
                <button onClick={() => setStage("form")} className="flex-1 border border-border text-sm font-medium text-foreground py-3 rounded-lg hover:border-foreground transition-colors">← Edit</button>
                <button onClick={sendWhatsApp} className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-semibold py-3 rounded-lg hover:bg-[#1ebe5c] transition-colors">
                  <WaIcon /> Open WhatsApp
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
