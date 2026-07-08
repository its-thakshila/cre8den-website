import { useState } from "react";
import { Star, Shield, Check, MessageSquare } from "lucide-react";

const SHEET_API_URL = import.meta.env.VITE_SHEET_API_URL ?? "";
const STAR_LABELS   = ["", "Poor", "Fair", "Good", "Great", "Excellent"];

const PRODUCTS = [
  "Whole Site / General",
  "Acrylic Engraved Photo",
  "Key Tags",
  "Robot Chassis",
  "Name Boards",
  "Engraved Notebooks",
  "Diaries & Journals",
  "Wallets & Bags",
  "Other"
];

export function FeedbackSection() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState("");
  const [product, setProduct] = useState(PRODUCTS[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!rating || !message.trim()) return;
    setStatus("sending");
    try {
      const payload = {
        action: "feedback",
        name: name.trim() || "Anonymous",
        product: product,
        rating: `${rating} / 5 stars`,
        message: message.trim()
      };

      const res = await fetch(SHEET_API_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(payload)
      });
      
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-white border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left: heading */}
          <div>
            <p className="text-xs font-medium tracking-widest text-primary uppercase mb-3">Customer Feedback</p>
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground leading-snug mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
              How was your<br />experience with us?
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-sm">
              Your feedback helps us improve. Whether you loved your order or have a suggestion - we'd love to hear it.
            </p>
            <div className="flex flex-col gap-4">
              {([
                [MessageSquare, "Your voice shapes our future products"],
                [Star,          "Helps us maintain high standards"],
                [Shield,        "Feedback is kept strictly secure"],
              ] as const).map(([Icon, label]) => (
                <div key={label} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-lg bg-[#FFF0F1] flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-primary" />
                  </div>
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-background border border-border rounded-2xl p-7 flex flex-col justify-center min-h-[400px]">
            {status === "done" ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-[#FFF0F1] flex items-center justify-center mx-auto mb-4">
                  <Check size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>Thank you!</h3>
                <p className="text-sm text-muted-foreground">Your feedback has been recorded. We truly appreciate it.</p>
                <button onClick={() => { setStatus("idle"); setRating(0); setName(""); setMessage(""); }}
                  className="mt-5 text-xs font-medium text-primary hover:text-accent transition-colors">
                  Leave another review
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Star rating */}
                <div>
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Your Rating *</p>
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button key={s} type="button"
                        onMouseEnter={() => setHoverRating(s)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => setRating(s)}
                        className="transition-transform hover:scale-110"
                        aria-label={`${s} star`}
                      >
                        <Star size={28} className={`transition-colors ${s <= (hoverRating || rating) ? "fill-primary text-primary" : "fill-none text-border"}`} />
                      </button>
                    ))}
                    {(hoverRating || rating) > 0 && (
                      <span className="ml-2 text-sm font-medium text-primary">{STAR_LABELS[hoverRating || rating]}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-foreground uppercase tracking-wider block mb-1.5">Your Name <span className="text-muted-foreground font-normal normal-case">(optional)</span></label>
                    <input type="text" placeholder="e.g. Kavindra P." value={name} onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white border border-border rounded-lg px-4 py-2.5 text-sm placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-foreground uppercase tracking-wider block mb-1.5">Product <span className="text-muted-foreground font-normal normal-case">(optional)</span></label>
                    <select value={product} onChange={(e) => setProduct(e.target.value)}
                      className="w-full bg-white border border-border rounded-lg px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors appearance-none">
                      {PRODUCTS.map(p => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-foreground uppercase tracking-wider block mb-1.5">Your Feedback *</label>
                  <textarea rows={4} placeholder="Tell us about your experience - what you loved, or how we can improve…" value={message} onChange={(e) => setMessage(e.target.value)} required
                    className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors resize-none" />
                </div>

                {status === "error" && (
                  <p className="text-xs text-destructive">Something went wrong. Please try again or email us directly.</p>
                )}

                <button type="submit" disabled={!rating || !message.trim() || status === "sending"}
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white text-sm font-medium py-3 rounded-lg hover:bg-accent transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
                  {status === "sending" ? "Submitting…" : "Submit Feedback"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

