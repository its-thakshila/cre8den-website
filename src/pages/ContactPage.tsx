import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { FAQ_DATA } from "@/constants/products";
import { WA_NUMBER } from "@/constants/products";

export function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const navigate = useNavigate();
  function upd(f: keyof typeof form, v: string) { setForm((s) => ({ ...s, [f]: v })); }

  const CONTACT_CARDS = [
    { icon: Phone,  label: "Phone",         lines: ["+94 76 430 4439", "+94 70 335 5548"], href: "tel:+94764304439" },
    { icon: Mail,   label: "Email",          lines: ["cre8den@gmail.com"],                  href: "mailto:cre8den@gmail.com" },
    { icon: MapPin, label: "Location",       lines: ["1st Floor", "Angunawala, Peradeniya,", "Sri Lanka"], href: "https://maps.app.goo.gl/RptdTkzMF7wEq8uj9?g_st=ic" },
    { icon: Clock,  label: "Working Hours",  lines: ["Mon – Sat: 9 AM – 7 PM", "Sunday: 10 AM – 4 PM"] },
  ];

  return (
    <main>
      <section className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <p className="text-xs font-medium tracking-widest text-primary uppercase mb-2">Contact</p>
          <h1 className="text-3xl lg:text-4xl font-light text-foreground leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>We'd love to hear from you.</h1>
        </div>
      </section>

      <section className="bg-background">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CONTACT_CARDS.map(({ icon: Icon, label, lines, href }) => (
            <a key={label} href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel={href?.startsWith("http") ? "noopener noreferrer" : undefined} className="bg-white border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/20 transition-all group block">
              <div className="w-10 h-10 rounded-lg bg-[#FFF0F1] flex items-center justify-center mb-4"><Icon size={18} className="text-primary" /></div>
              <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">{label}</p>
              {lines.map((l) => <p key={l} className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{l}</p>)}
            </a>
          ))}
        </div>
      </section>

      <section className="bg-white border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-foreground mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>Send us a message</h2>
            <p className="text-sm text-muted-foreground mb-7">For custom orders, quotations, or general enquiries - we respond within 24 hours.</p>
            {sent ? (
              <div className="flex-1 flex flex-col items-center justify-center bg-background border border-border rounded-2xl p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center mx-auto mb-4">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>Opening WhatsApp…</h3>
                <p className="text-sm text-muted-foreground mb-5">Your message has been formatted. WhatsApp should open - just hit <strong className="text-foreground">Send</strong> to reach us directly.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button onClick={() => {
                    const msg = [
                      "*NEW ENQUIRY*", "",
                      "*Customer Details:*",
                      `• Name: ${form.name}`, `• Email: ${form.email}`,
                      form.phone ? `• Phone: ${form.phone}` : undefined, "",
                      "*Message Details:*",
                      form.subject ? `• Subject: ${form.subject}` : undefined, "",
                      form.message
                    ].filter(Boolean).join("\n").trim();
                    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
                  }} className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-[#1ebe5c] transition-colors">
                    Open WhatsApp
                  </button>
                  <button onClick={() => { navigate("/order"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className="inline-flex items-center justify-center gap-2 border border-border text-sm font-medium text-foreground px-5 py-2.5 rounded-md hover:border-foreground transition-colors">
                    Place a Custom Order <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-foreground uppercase tracking-wider block mb-1.5">Name *</label>
                      <input type="text" placeholder="Your full name" value={form.name} onChange={(e) => upd("name", e.target.value)} required className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-foreground uppercase tracking-wider block mb-1.5">Email *</label>
                      <input type="email" placeholder="your@email.com" value={form.email} onChange={(e) => upd("email", e.target.value)} required className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-foreground uppercase tracking-wider block mb-1.5">Phone</label>
                      <input type="tel" placeholder="+94 7X XXX XXXX" value={form.phone} onChange={(e) => upd("phone", e.target.value)} className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-foreground uppercase tracking-wider block mb-1.5">Subject</label>
                      <select value={form.subject} onChange={(e) => upd("subject", e.target.value)} className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors">
                        <option value="">Select a topic</option>
                        <option>Custom Order Enquiry</option>
                        <option>Pricing & Quote</option>
                        <option>Bulk / Corporate Order</option>
                        <option>Product Question</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-foreground uppercase tracking-wider block mb-1.5">Message *</label>
                    <textarea rows={5} placeholder="Describe what you need, or ask us anything…" value={form.message} onChange={(e) => upd("message", e.target.value)} required className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors resize-none" />
                  </div>
                </div>
                <button onClick={(e) => {
                  e.preventDefault();
                  if (form.name && form.email && form.message) {
                    const msg = [
                      "*NEW ENQUIRY*", "",
                      "*Customer Details:*",
                      `• Name: ${form.name}`, `• Email: ${form.email}`,
                      form.phone ? `• Phone: ${form.phone}` : undefined, "",
                      "*Message Details:*",
                      form.subject ? `• Subject: ${form.subject}` : undefined, "",
                      form.message
                    ].filter(Boolean).join("\n").trim();
                    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
                    setSent(true);
                  }
                }} className="mt-5 inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-6 py-3 rounded-md hover:bg-accent transition-colors group self-start">
                  Send Message <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </>
            )}
          </div>

          <div className="flex flex-col rounded-2xl overflow-hidden border border-border min-h-[400px]">
            <div className="flex-1">
              <iframe title="Cre8Den Studio Location"
                src="https://maps.google.com/maps?q=Cre8Den,+Angunawala,+Peradeniya,+Sri+Lanka&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" height="100%" style={{ border: 0, display: "block", minHeight: "340px" }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <div className="bg-[#0F0C0C] px-5 py-4 flex items-center justify-between gap-4 flex-shrink-0">
              <div>
                <p className="text-white text-sm font-semibold leading-snug">Cre8Den Studio</p>
                <p className="text-white/50 text-xs mt-0.5">1st Floor, Angunawala, Peradeniya, Sri Lanka</p>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0">
                <a href="https://instagram.com/cre8den" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors text-xs"><Instagram size={13} /> @cre8den</a>
                <span className="text-white/20 text-xs">·</span>
                <a href="https://www.facebook.com/share/14hj1i2Tcd3/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors text-xs"><Facebook size={13} /> Cre8Den</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <p className="text-xs font-medium tracking-widest text-primary uppercase mb-2">FAQ</p>
            <h2 className="text-2xl font-semibold text-foreground" style={{ fontFamily: "'Outfit', sans-serif" }}>Frequently Asked Questions</h2>
          </div>
          <div className="space-y-2">
            {FAQ_DATA.map(({ q, a }, i) => (
              <div key={i} className="bg-white border border-border rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left">
                  <span className="text-sm font-semibold text-foreground">{q}</span>
                  <span className={`text-muted-foreground transition-transform duration-200 flex-shrink-0 ml-3 text-xl ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && <div className="px-5 pb-4"><p className="text-sm text-muted-foreground leading-relaxed">{a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary">
        <div className="max-w-xl mx-auto px-6 py-14 text-center">
          <h2 className="text-2xl font-semibold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>Ready to create something?</h2>
          <p className="text-sm text-white/70 mb-7">Place a custom order and we'll bring your idea to life.</p>
          <button onClick={() => { navigate("/order"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 bg-white text-primary text-sm font-semibold px-6 py-3 rounded-md hover:bg-white/90 transition-colors group">
            Place a Custom Order <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </section>
    </main>
  );
}

