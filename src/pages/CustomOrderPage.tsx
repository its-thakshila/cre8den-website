import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Check, Upload } from "lucide-react";
import ReactGA from "react-ga4";
import { openOrderWhatsApp } from "@/lib/whatsapp";
import { SVC_OPTIONS, MATERIALS_LIST, QUANTITIES, TIMELINES } from "@/constants/products";
import type { OrderStep } from "@/types";

export function CustomOrderPage() {
  const [step, setStep] = useState<OrderStep>(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ 
    service: "", material: "", quantity: "1", timeline: "Standard (3–5 working days)", 
    name: "", email: "", phone: "", description: "",
    itemType: "", dimensions: "", recipient: "" 
  });
  const navigate = useNavigate();
  function upd(f: keyof typeof form, v: string) { setForm((s) => ({ ...s, [f]: v })); }
  function canProceed() {
    if (step === 1) return form.service !== "";
    if (step === 2) {
      if (form.service === "Personal Customization" && !form.itemType) return false;
      if (form.service !== "Engraved Leaf Art" && form.service !== "Personalized Gift" && !form.material) return false;
      return true;
    }
    if (step === 3) return form.description.length > 5;
    return form.name !== "" && form.email !== "";
  }
  const STEP_LABELS = ["Service", "Material & Qty", "Design Details", "Contact"];

  if (submitted) return (
    <main className="min-h-[70vh] flex items-center justify-center bg-background px-6">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 rounded-full bg-[#FFF0F1] flex items-center justify-center mx-auto mb-6"><Check size={28} className="text-primary" /></div>
        <h2 className="text-2xl font-semibold text-foreground mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>Opening WhatsApp…</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">Your order details have been formatted. WhatsApp should open with a pre-filled message - just hit <strong className="text-foreground">Send</strong>.</p>
        <p className="text-sm text-muted-foreground mb-8">If it didn't open automatically, tap the button below.</p>
        <div className="bg-white border border-border rounded-xl p-5 text-left mb-6 space-y-2 text-sm">
          {[
            ["Service", form.service],
            form.itemType && ["Item", form.itemType],
            form.recipient && ["Recipient", form.recipient],
            form.dimensions && ["Dimensions", form.dimensions],
            form.material && ["Material", form.material],
            ["Quantity", form.quantity], 
            ["Timeline", form.timeline]
          ].filter(Boolean).map((arr) => {
            if (!arr) return null;
            const [k, v] = arr;
            return <div key={k as string} className="flex justify-between gap-4"><span className="text-muted-foreground">{k}</span><span className="font-medium text-foreground text-right">{v as string}</span></div>;
          })}
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={() => openOrderWhatsApp(form)}
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3 rounded-md hover:bg-[#1ebe5c] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Open WhatsApp
          </button>
          <button onClick={() => { navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="inline-flex items-center justify-center gap-2 border border-border text-sm font-medium text-foreground px-6 py-3 rounded-md hover:border-foreground transition-colors">
            Back to Home
          </button>
        </div>
      </div>
    </main>
  );

  return (
    <main>
      <section className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <p className="text-xs font-medium tracking-widest text-primary uppercase mb-2">Custom Order</p>
          <h1 className="text-3xl lg:text-4xl font-light text-foreground leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>Tell us your idea. <span className="font-semibold">We'll make it real.</span></h1>
        </div>
      </section>
      <section className="bg-background">
        <div className="max-w-3xl mx-auto px-6 py-12">
          {/* Stepper */}
          <div className="flex items-center gap-0 mb-10">
            {STEP_LABELS.map((label, i) => {
              const n = (i + 1) as OrderStep;
              const done = step > n; const active = step === n;
              return (
                <div key={n} className="flex items-center flex-1 last:flex-none">
                  <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${done || active ? "bg-primary text-white" : "bg-white border-2 border-border text-muted-foreground"}`}>
                      {done ? <Check size={14} /> : n}
                    </div>
                    <span className={`text-[10px] font-medium whitespace-nowrap ${active ? "text-primary" : "text-muted-foreground"}`}>{label}</span>
                  </div>
                  {i < STEP_LABELS.length - 1 && <div className={`flex-1 h-px mx-2 mb-4 transition-colors ${step > n ? "bg-primary" : "bg-border"}`} />}
                </div>
              );
            })}
          </div>

          <form onSubmit={(e) => { e.preventDefault(); if (canProceed()) { ReactGA.event({ category: "Lead", action: "Custom Order Submit", label: form.service }); openOrderWhatsApp(form); setSubmitted(true); } }}>
            {step === 1 && (
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>What service do you need?</h2>
                <p className="text-sm text-muted-foreground mb-6">Select the service that best matches your project.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SVC_OPTIONS.map(({ icon: Icon, label, desc }) => (
                    <button type="button" key={label} onClick={() => upd("service", label)}
                      className={`flex items-start gap-4 p-4 rounded-xl border text-left transition-all ${form.service === label ? "border-primary bg-[#FFF0F1]" : "border-border bg-white hover:border-primary/30"}`}>
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${form.service === label ? "bg-primary" : "bg-[#FFF0F1]"}`}>
                        <Icon size={16} className={form.service === label ? "text-white" : "text-primary"} />
                      </div>
                      <div className="flex-1"><p className="text-sm font-semibold text-foreground mb-0.5">{label}</p><p className="text-xs text-muted-foreground">{desc}</p></div>
                      {form.service === label && <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-7">
                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {form.service === "Robot Chassis" ? "Chassis Specifications" : 
                     form.service === "Personalized Gift" ? "Gift Details" : 
                     form.service === "Personal Customization" ? "Item Details" : 
                     form.service === "Engraved Leaf Art" ? "Order Details" : 
                     "Material & Details"}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-6">Tell us a bit more about your requirements.</p>
                  
                  {form.service === "Personal Customization" && (
                    <div className="mb-6">
                      <label className="text-xs font-semibold text-foreground uppercase tracking-wider block mb-2">What item are you bringing? *</label>
                      <input type="text" placeholder="e.g. Leather Wallet, Metal Flask" value={form.itemType} onChange={(e) => upd("itemType", e.target.value)}
                        className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground outline-none focus:border-primary transition-colors" />
                    </div>
                  )}

                  {form.service === "Personalized Gift" && (
                    <div className="mb-6">
                      <label className="text-xs font-semibold text-foreground uppercase tracking-wider block mb-2">Recipient / Occasion</label>
                      <input type="text" placeholder="e.g. Wedding Anniversary, Birthday Gift" value={form.recipient} onChange={(e) => upd("recipient", e.target.value)}
                        className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground outline-none focus:border-primary transition-colors" />
                    </div>
                  )}

                  {(form.service === "Laser Cutting" || form.service === "Robot Chassis") && (
                    <div className="mb-6">
                      <label className="text-xs font-semibold text-foreground uppercase tracking-wider block mb-2">Estimated Dimensions (L × W)</label>
                      <input type="text" placeholder="e.g. 20cm x 15cm" value={form.dimensions} onChange={(e) => upd("dimensions", e.target.value)}
                        className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground outline-none focus:border-primary transition-colors" />
                    </div>
                  )}

                  {form.service !== "Engraved Leaf Art" && form.service !== "Personalized Gift" && (
                    <div className="mb-6">
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Material {form.service === "Personal Customization" ? "of the item" : ""}</p>
                      <div className="flex flex-wrap gap-2">
                        {MATERIALS_LIST.map((m) => (
                          <button type="button" key={m} onClick={() => upd("material", m)}
                            className={`text-sm px-3.5 py-1.5 rounded-full border transition-all ${form.material === m ? "bg-primary text-white border-primary" : "bg-white border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"}`}>{m}</button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Quantity</p>
                  <div className="flex flex-wrap gap-2">
                    {QUANTITIES.map((q) => (
                      <button type="button" key={q} onClick={() => upd("quantity", q)}
                        className={`text-sm px-4 py-2 rounded-lg border transition-all ${form.quantity === q ? "bg-primary text-white border-primary" : "bg-white border-border text-muted-foreground hover:border-primary/30"}`}>{q}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Timeline</p>
                  <div className="flex flex-wrap gap-2">
                    {TIMELINES.map((t) => (
                      <button type="button" key={t} onClick={() => upd("timeline", t)}
                        className={`text-sm px-4 py-2 rounded-lg border transition-all ${form.timeline === t ? "bg-primary text-white border-primary" : "bg-white border-border text-muted-foreground hover:border-primary/30"}`}>{t}</button>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {form.service === "Robot Chassis" ? "Project Details" : 
                     form.service === "Personalized Gift" ? "Gift Design" : 
                     "Describe your design"}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-6">
                    {form.service === "Robot Chassis" ? "Tell us about motor mounts, sensor cutouts, etc." : 
                     "Tell us what you'd like engraved or cut. The more detail, the better."}
                  </p>
                </div>
                <div>
                  <label className="text-xs font-semibold text-foreground uppercase tracking-wider block mb-2">Description *</label>
                  <textarea rows={5} placeholder="e.g. 'Engrave our names...' or 'Need specific cutouts for NEMA 17 motors.'" value={form.description} onChange={(e) => upd("description", e.target.value)} required
                    className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors resize-none" />
                </div>
              </div>
            )}
            {step === 4 && (
              <div className="space-y-5">
                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>Your contact details</h2>
                  <p className="text-sm text-muted-foreground mb-6">We'll send your quote to these details.</p>
                </div>
                <div className="bg-white border border-border rounded-xl p-4 text-sm space-y-2">
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Order Summary</p>
                  {[
                    ["Service", form.service],
                    form.itemType && ["Item", form.itemType],
                    form.recipient && ["Recipient", form.recipient],
                    form.dimensions && ["Dimensions", form.dimensions],
                    form.material && ["Material", form.material],
                    ["Quantity", form.quantity], 
                    ["Timeline", form.timeline]
                  ].filter(Boolean).map((arr) => {
                    if (!arr) return null;
                    const [k, v] = arr;
                    return <div key={k as string} className="flex justify-between gap-4"><span className="text-muted-foreground">{k}</span><span className="font-medium text-foreground text-right">{v as string}</span></div>;
                  })}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-foreground uppercase tracking-wider block mb-1.5">Full Name *</label>
                    <input type="text" placeholder="Kavindra Perera" value={form.name} onChange={(e) => upd("name", e.target.value)} required
                      className="w-full bg-white border border-border rounded-lg px-4 py-2.5 text-sm placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-foreground uppercase tracking-wider block mb-1.5">Email Address *</label>
                    <input type="email" placeholder="your@email.com" value={form.email} onChange={(e) => upd("email", e.target.value)} required
                      className="w-full bg-white border border-border rounded-lg px-4 py-2.5 text-sm placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-foreground uppercase tracking-wider block mb-1.5">Phone Number</label>
                  <input type="tel" placeholder="+94 7X XXX XXXX" value={form.phone} onChange={(e) => upd("phone", e.target.value)}
                    className="w-full bg-white border border-border rounded-lg px-4 py-2.5 text-sm placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors" />
                </div>
              </div>
            )}

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              {step > 1 ? <button type="button" onClick={() => setStep((s) => (s - 1) as OrderStep)} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">← Back</button> : <div />}
              {step < 4 ? (
                <button type="button" onClick={() => { if (canProceed()) setStep((s) => (s + 1) as OrderStep); }} disabled={!canProceed()}
                  className="inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-6 py-3 rounded-md hover:bg-accent transition-colors disabled:opacity-40 disabled:cursor-not-allowed group">
                  Continue <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              ) : (
                <button type="submit" disabled={!canProceed()}
                  className="inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-6 py-3 rounded-md hover:bg-accent transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
                  Submit Order <Check size={14} />
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
      <section className="bg-white border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[["Free Quote", "We'll send a detailed quote within 24 hours - no obligation."], ["Proof Before Production", "Approve a digital proof before we start cutting or engraving."], ["Satisfaction Guaranteed", "If it's not right, we'll fix it. Every single time."]].map(([t, b]) => (
            <div key={t} className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-[#FFF0F1] flex items-center justify-center mb-3"><Check size={14} className="text-primary" /></div>
              <p className="text-sm font-semibold text-foreground mb-1">{t}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

