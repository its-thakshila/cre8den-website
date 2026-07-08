import { useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { Cre8denMark } from "./Cre8denMark";
import { ImageWithFallback } from "./ImageWithFallback";
import nodamicLogo from "@/assets/nodamic-logo.png";

const NAV_LINKS = [
  { label: "Home",     to: "/" },
  { label: "About",    to: "/about" },
  { label: "Gifts",    to: "/gifts" },
  { label: "Services", to: "/services" },
  { label: "Contact",  to: "/contact" },
];

export function Footer() {
  const navigate = useNavigate();
  function go(to: string) { navigate(to); window.scrollTo({ top: 0, behavior: "smooth" }); }

  return (
    <footer className="bg-[#0F0C0C] text-white">
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Cre8denMark className="h-5" theme="white" />
            <p className="text-[10px] text-white/30 uppercase tracking-widest mt-1 mb-4">Where Imagination Becomes Reality</p>
            <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-xs">A creative technology studio for precision laser engraving, cutting, and custom fabrication. Based in Peradeniya, Sri Lanka.</p>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="text-[10px] text-white/30 uppercase tracking-wider">Part of</span>
              <ImageWithFallback src={nodamicLogo} alt="Nodamic" className="h-4 w-auto object-contain" style={{ filter: "brightness(0) invert(1)", opacity: 0.8 } as React.CSSProperties} />
            </div>
            <div className="flex gap-2.5">
              <a href="https://instagram.com/cre8den" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-white/10 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors"><Instagram size={14} /></a>
              <a href="https://www.facebook.com/share/14hj1i2Tcd3/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-white/10 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors"><Facebook size={14} /></a>
            </div>
          </div>
          <div>
            <p className="text-[10px] font-semibold text-white/30 uppercase tracking-widest mb-5">Quick Links</p>
            {NAV_LINKS.map(({ label, to }) => (
              <button key={to} onClick={() => go(to)} className="block text-sm text-white/50 hover:text-white transition-colors mb-2.5 text-left">{label}</button>
            ))}
          </div>
          <div>
            <p className="text-[10px] font-semibold text-white/30 uppercase tracking-widest mb-5">Services</p>
            {[
              { label: "Laser Engraving", to: "/services", hash: "laser" },
              { label: "Personalized Gifts", to: "/gifts" },
              { label: "Personal Customization", to: "/services", hash: "personalize" },
              { label: "Laser Cutting", to: "/services", hash: "laser" },
              { label: "Robot Chassis", to: "/services/robot-chassis" },
            ].map((s) => (
              <button key={s.label} onClick={() => {
                navigate(s.to);
                if (s.hash) {
                  setTimeout(() => {
                    const el = document.getElementById(s.hash!);
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.scrollY - 60;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    } else {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }, 100);
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }} className="block text-sm text-white/50 hover:text-white transition-colors mb-2.5 text-left">{s.label}</button>
            ))}
          </div>
          <div>
            <p className="text-[10px] font-semibold text-white/30 uppercase tracking-widest mb-5">Contact Us</p>
            <div className="space-y-3.5">
              <a href="tel:+94764304439" className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors"><Phone size={13} className="text-primary flex-shrink-0" />+94 76 430 4439</a>
              <a href="tel:+94703355548" className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors"><Phone size={13} className="text-primary flex-shrink-0" />+94 70 335 5548</a>
              <a href="mailto:cre8den@gmail.com" className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors"><Mail size={13} className="text-primary flex-shrink-0" />cre8den@gmail.com</a>
              <p className="flex items-start gap-3 text-sm text-white/50"><MapPin size={13} className="text-primary flex-shrink-0 mt-0.5" />1st Floor, Angunawala,<br />Peradeniya, Sri Lanka</p>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/30">
          <p>© 2026 Cre8Den. All rights reserved.</p>
          <p>Dream it big. We make it real.</p>
          <div className="flex gap-5">
            <button onClick={() => go("/privacy")} className="hover:text-white/60 transition-colors">Privacy</button>
            <button onClick={() => go("/terms")} className="hover:text-white/60 transition-colors">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
