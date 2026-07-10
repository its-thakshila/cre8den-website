import { useNavigate } from "react-router-dom";
import { ArrowRight, Zap, Heart, Users, Star, Target, Eye } from "lucide-react";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { getFirstImageForFolder } from "@/lib/images";
import nodamicLogo from "@/assets/nodamic-logo.png";
export function AboutPage() {
  const navigate = useNavigate();
  function go(to: string) { navigate(to); window.scrollTo({ top: 0, behavior: "smooth" }); }

  const VALUES = [
    { icon: Zap, title: "Precision", body: "Every engraving and cut is produced with sub-millimeter accuracy using industrial-grade laser systems." },
    { icon: Heart, title: "Creativity", body: "We bring imagination to life - from a heartfelt gift to a complex engineering prototype." },
    { icon: Users, title: "Community", body: "We serve individuals, students, businesses, and creators across Sri Lanka and beyond." },
    { icon: Star, title: "Quality", body: "Professional finishing and attention to detail on every single piece we produce." },
  ];

  return (
    <main>
      <section className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-14 lg:py-20">
          <p className="text-xs font-medium tracking-widest text-primary uppercase mb-3">About Us</p>
          <h1 className="text-3xl lg:text-5xl font-light text-foreground leading-tight max-w-2xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Turning imagination<br /><span className="font-semibold">into <em className="not-italic text-primary">reality</em>.</span>
          </h1>
        </div>
      </section>

      <section className="bg-background">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-xs font-medium tracking-widest text-primary uppercase mb-3">Our Story</p>
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-5 leading-snug" style={{ fontFamily: "'Outfit', sans-serif" }}>We believe every product tells a story.</h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>Cre8Den was born from a simple conviction: that precision technology and human creativity can combine to produce something truly meaningful. Founded in Angunawala, Peradeniya, we started as a small laser studio serving local customers with personalized gifts and engravings.</p>
              <p>Today, we serve thousands of customers - from individuals looking for a heartfelt birthday gift, to engineering students building robotics prototypes, to corporations ordering bulk branded awards. Every piece carries the same commitment to quality and attention to detail.</p>
              <p>Our mission: <strong className="text-foreground font-medium">turn imagination into reality.</strong> Whether it's a single engraved keepsake or 500 laser-cut components, we treat every order as an opportunity to create something extraordinary.</p>
            </div>
            <button onClick={() => go("/order")} className="mt-8 inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-6 py-3 rounded-md hover:bg-accent transition-colors group">
              Start a Custom Order <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden bg-[#F0EDE8] aspect-square">
              <img src={getFirstImageForFolder('/images/about', 'https://images.unsplash.com/photo-1736967225486-d3c9298b8a5e?w=800&h=800&fit=crop&auto=format')} alt="Cre8Den laser-engraved gift box" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white border border-border rounded-xl px-5 py-4 shadow-md hidden lg:block">
              <p className="text-2xl font-bold text-foreground" style={{ fontFamily: "'Outfit', sans-serif" }}>5,000+</p>
              <p className="text-xs text-muted-foreground">Orders completed</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-background border border-border rounded-2xl p-8">
            <div className="w-10 h-10 rounded-lg bg-[#FFF0F1] flex items-center justify-center mb-5"><Target size={18} className="text-primary" /></div>
            <p className="text-xs font-medium tracking-widest text-primary uppercase mb-3">Our Mission</p>
            <h3 className="text-xl font-semibold text-foreground mb-4 leading-snug" style={{ fontFamily: "'Outfit', sans-serif" }}>High-quality laser solutions for everyone.</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">To provide high-quality laser engraving and cutting solutions that help individuals, students, businesses, and creators express their ideas through beautifully crafted personalized products.</p>
          </div>
          <div className="bg-background border border-border rounded-2xl p-8">
            <div className="w-10 h-10 rounded-lg bg-[#FFF0F1] flex items-center justify-center mb-5"><Eye size={18} className="text-primary" /></div>
            <p className="text-xs font-medium tracking-widest text-primary uppercase mb-3">Our Vision</p>
            <h3 className="text-xl font-semibold text-foreground mb-4 leading-snug" style={{ fontFamily: "'Outfit', sans-serif" }}>Sri Lanka's leading creative fabrication studio.</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">To become one of Sri Lanka's leading creative fabrication studios by transforming ideas into meaningful products through innovation, precision, and exceptional craftsmanship.</p>
          </div>
        </div>
      </section>

      <section className="bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <p className="text-xs font-medium tracking-widest text-primary uppercase mb-2">What We Stand For</p>
            <h2 className="text-2xl font-semibold text-foreground" style={{ fontFamily: "'Outfit', sans-serif" }}>Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VALUES.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white border border-border rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#FFF0F1] flex items-center justify-center mx-auto mb-4"><Icon size={20} className="text-primary" /></div>
                <h3 className="text-base font-semibold text-foreground mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0F0C0C] text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-medium tracking-widest text-primary uppercase mb-3">Part of a Bigger Family</p>
            <h2 className="text-2xl lg:text-3xl font-semibold leading-snug mb-5" style={{ fontFamily: "'Outfit', sans-serif" }}>Cre8Den is a proud member<br />of the Nodamic brand family.</h2>
            <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-md">Nodamic is a forward-thinking technology and creative brand group based in Sri Lanka. As part of this family, Cre8Den benefits from shared innovation, resources, and a commitment to excellence across every product we make.</p>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-10 w-full max-w-xs flex flex-col items-center gap-4">
              <ImageWithFallback src={nodamicLogo} alt="Nodamic parent brand" className="w-48 h-auto object-contain" />
              <p className="text-xs text-white/40 tracking-wide">Parent Brand</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background border-t border-border">
        <div className="max-w-xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>Ready to create something?</h2>
          <p className="text-sm text-muted-foreground mb-7">Tell us your idea and we'll bring it to life with precision and care.</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button onClick={() => go("/order")} className="inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-6 py-3 rounded-md hover:bg-accent transition-colors group">Place a Custom Order <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" /></button>
            <button onClick={() => go("/contact")} className="inline-flex items-center gap-2 border border-border text-sm font-medium text-foreground px-6 py-3 rounded-md hover:border-foreground transition-colors">Get in Touch</button>
          </div>
        </div>
      </section>
    </main>
  );
}

