import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Zap, Star, Check } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { ServicesList } from "@/components/ServicesList";
import { FeedbackSection } from "@/components/FeedbackSection";
import { useApprovedTestimonials } from "@/hooks/useApprovedTestimonials";
import { GIFTS_DATA } from "@/constants/gifts";

export function HomePage() {
  const [activeTesti, setActiveTesti] = useState(0);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [testiKey, setTestiKey] = useState(0);
  const { items: TESTI, loading: testiLoading } = useApprovedTestimonials();
  const navigate = useNavigate();
  function go(to: string) { navigate(to); window.scrollTo({ top: 0, behavior: "smooth" }); }

  useEffect(() => {
    if (testiLoading || TESTI.length <= 1) return;
    const id = setInterval(() => { setActiveTesti((i) => (i + 1) % TESTI.length); }, 4000);
    return () => clearInterval(id);
  }, [testiLoading, TESTI.length, testiKey]);

  function goToTesti(i: number) { setActiveTesti(i); setTestiKey((k) => k + 1); }

  return (
    <main>
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-14 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden bg-[#F0EDE8] aspect-square max-w-md mx-auto lg:mx-0">
              <img src="https://images.unsplash.com/photo-1736967225486-d3c9298b8a5e?w=800&h=800&fit=crop&auto=format" alt="Laser-engraved wooden keepsake box" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-medium tracking-widest text-primary uppercase mb-5">Where Imagination Becomes Reality</p>
            <h1 className="text-4xl lg:text-5xl font-light text-foreground leading-tight mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Dream It Big.{" "}<span className="font-semibold">We Make It <em className="not-italic text-primary">Real.</em></span>
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md mb-8">
              CRE8DEN is a creative technology studio specializing in precision laser engraving, laser cutting, and custom fabrication. We transform ordinary objects into meaningful, personalized creations.
            </p>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => go("/order")} className="inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-6 py-3 rounded-md hover:bg-accent transition-colors group">
                Custom Order <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button onClick={() => go("/services")} className="inline-flex items-center gap-2 border border-border text-sm font-medium text-foreground px-6 py-3 rounded-md hover:border-foreground transition-colors">
                Our Services
              </button>
            </div>
            <div className="mt-10 pt-8 border-t border-border flex gap-8">
              {[["5,000+", "Orders completed"], ["60+", "Materials"], ["4.9 ★", "Customer rating"]].map(([n, l]) => (
                <div key={l}><p className="text-lg font-semibold text-foreground" style={{ fontFamily: "'Outfit', sans-serif" }}>{n}</p><p className="text-xs text-muted-foreground mt-0.5">{l}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-medium tracking-widest text-primary uppercase mb-2">What We Do</p>
              <h2 className="text-2xl font-semibold text-foreground" style={{ fontFamily: "'Outfit', sans-serif" }}>Our Services</h2>
            </div>
            <button onClick={() => go("/services")} className="hidden md:flex items-center gap-1 text-sm text-primary font-medium hover:gap-2 transition-all">
              Full details <ArrowRight size={13} />
            </button>
          </div>
          <ServicesList />
        </div>
      </section>

      {/* Gift Collection */}
      <section className="bg-white border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-medium tracking-widest text-primary uppercase mb-2">Gift Collection</p>
              <h2 className="text-2xl font-semibold text-foreground" style={{ fontFamily: "'Outfit', sans-serif" }}>Crafted for moments worth remembering.</h2>
            </div>
            <button onClick={() => go("/gifts")} className="hidden md:flex items-center gap-1 text-sm text-primary font-medium hover:gap-2 transition-all">View all <ArrowRight size={13} /></button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {GIFTS_DATA.filter((g) => !g.comingSoon || g.name === "Leaf Art").slice(0, 4).map((g) => <ProductCard key={g.id} gift={g} />)}
          </div>
        </div>
      </section>

      {/* Signature product feature */}
      <section className="bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden bg-[#F0EDE8] aspect-square max-w-md mx-auto lg:mx-0">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop&auto=format" alt="Acrylic engraved photo by CRE8DEN" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FFF0F1] text-primary text-[10px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5">
              <Zap size={11} /> Signature Product
            </div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground leading-snug mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>Acrylic Engraved Photo -<br />Memories in Crystal Clarity.</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-md">Your most cherished memory preserved in premium crystal-clear acrylic using precision laser engraving. A stunning, modern keepsake that captures every detail - perfect for gifting or display.</p>
            <ul className="space-y-2 mb-7">
              {["Weddings, anniversaries & birthdays", "Corporate gifts & awards", "Custom portraits & family photos", "Desk display or wall-mounted"].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-foreground"><Check size={14} className="text-primary flex-shrink-0" />{item}</li>
              ))}
            </ul>
            <button onClick={() => go("/order")} className="inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-6 py-3 rounded-md hover:bg-accent transition-colors group">
              Order Yours <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials + CTA */}
      <section className="bg-white border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-stretch">
          
          {/* Left: Testimonial Box */}
          <div className="bg-background border border-border rounded-2xl p-8 flex flex-col h-full">
            <p className="text-xs font-medium tracking-widest text-primary uppercase mb-8">What Customers Say</p>
            {testiLoading ? (
              <div className="flex-1 flex flex-col justify-center animate-pulse mb-8">
                <div className="flex gap-0.5 mb-4">{Array(5).fill(0).map((_, i) => <div key={i} className="w-3.5 h-3.5 rounded-sm bg-muted" />)}</div>
                <div className="h-4 bg-muted rounded w-full mb-3" /><div className="h-4 bg-muted rounded w-5/6 mb-5" /><div className="h-3 bg-muted rounded w-32 mt-auto" />
              </div>
            ) : (
              <div className="flex-1 flex flex-col justify-center mb-8">
                <div className="mb-5 flex flex-col items-start gap-3">
                  <div className="flex gap-1">
                    {Array(TESTI[Math.min(activeTesti, TESTI.length - 1)].stars).fill(0).map((_, i) => (
                      <Star key={i} size={15} className="fill-primary text-primary" />
                    ))}
                  </div>
                  {TESTI[Math.min(activeTesti, TESTI.length - 1)].product && 
                   TESTI[Math.min(activeTesti, TESTI.length - 1)].product !== "Whole Site / General" && (
                    <span className="text-[10px] font-medium uppercase tracking-wider text-primary bg-[#FFF0F1] px-2.5 py-1 rounded-md w-fit">
                      {TESTI[Math.min(activeTesti, TESTI.length - 1)].product}
                    </span>
                  )}
                </div>
                <p className="text-base text-foreground leading-relaxed mb-6 italic">"{TESTI[Math.min(activeTesti, TESTI.length - 1)].text}"</p>
                <div className="mt-auto">
                  <p className="text-sm font-semibold text-foreground">- {TESTI[Math.min(activeTesti, TESTI.length - 1)].name}</p>
                </div>
              </div>
            )}
            {!testiLoading && (
              <div className="flex gap-1.5 mt-auto">
                {TESTI.map((_, i) => (
                  <button key={i} onClick={() => goToTesti(i)}
                    className={`h-1.5 rounded-full transition-all duration-200 ${i === activeTesti ? "bg-primary w-6" : "bg-border w-3.5 hover:bg-muted-foreground"}`} />
                ))}
              </div>
            )}
          </div>

          {/* Right: CTA Box */}
          <div className="bg-[#0F0C0C] text-white rounded-2xl p-8 flex flex-col h-full">
            <p className="text-xs font-medium tracking-widest text-primary uppercase mb-8">Something Special</p>
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-2xl lg:text-3xl font-semibold leading-snug mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>We're bringing your<br />ideas to life.</h2>
              <p className="text-sm text-white/60 leading-relaxed mb-8">Tell us what you're imagining and we'll create something just for you - no idea is too big or too personal.</p>
              <div>
                <button onClick={() => go("/order")} className="inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-6 py-3 rounded-md hover:bg-accent transition-colors group">
                  Get a Free Quote <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-xs text-white/50">
              <div><p className="text-white/30 mb-1.5 uppercase tracking-wider text-[10px]">Call Us</p><p>+94 76 430 4439</p><p>+94 70 335 5548</p></div>
              <div><p className="text-white/30 mb-1.5 uppercase tracking-wider text-[10px]">Email</p><p>cre8den@gmail.com</p></div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-background border-t border-border">
        <div className="max-w-xl mx-auto px-6 py-14 text-center">
          <h2 className="text-xl font-semibold text-foreground mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>Stay in the Loop</h2>
          <p className="text-sm text-muted-foreground mb-6">New gift ideas, exclusive offers, and inspiration - delivered to your inbox.</p>
          {subscribed ? (
            <div className="flex items-center justify-center gap-2 text-sm text-primary font-medium"><Check size={15} /> You're subscribed - thank you!</div>
          ) : (
            <form onSubmit={async (e) => { 
              e.preventDefault(); 
              
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailRegex.test(email)) {
                alert("Please enter a valid email address.");
                return;
              }

              if (email) {
                try {
                  const btn = (e.target as any).querySelector('button');
                  if (btn) btn.disabled = true;
                  
                  await fetch(import.meta.env.VITE_SHEET_API_URL ?? "", {
                    method: "POST",
                    mode: "no-cors",
                    headers: { "Content-Type": "text/plain" },
                    body: JSON.stringify({ action: "newsletter", email: email.trim() })
                  });
                  setSubscribed(true);
                } catch {
                  alert("Something went wrong. Please try again.");
                  const btn = (e.target as any).querySelector('button');
                  if (btn) btn.disabled = false;
                }
              } 
            }} className="flex flex-col sm:flex-row gap-2.5 max-w-sm mx-auto">
              <input type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required
                className="flex-1 bg-white border border-border rounded-md px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors placeholder:text-muted-foreground" />
              <button type="submit" className="bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-md hover:bg-accent transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed">Subscribe</button>
            </form>
          )}
        </div>
      </section>

      <FeedbackSection />
    </main>
  );
}

