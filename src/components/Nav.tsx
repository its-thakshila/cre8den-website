import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Cre8denMark } from "./Cre8denMark";

import nodamicLogo from "@/assets/nodamic-logo.png";

const NAV_LINKS = [
  { label: "Home",     to: "/" },
  { label: "About",    to: "/about" },
  { label: "Gifts",    to: "/gifts" },
  { label: "Services", to: "/services" },
  { label: "Contact",  to: "/contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  function isActive(path: string) {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  }

  function go(to: string) {
    navigate(to);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <div className="bg-[#0F0C0C] text-white/50 text-[10px] tracking-widest flex items-end justify-center gap-1 py-1.5 uppercase leading-none" style={{ fontFamily: "'Outfit', sans-serif" }}>
        <span className="-mb-[1px]">A</span>
        <img src={nodamicLogo} alt="Nodamic" className="h-[10px] w-auto object-contain opacity-90" style={{ filter: "brightness(0) invert(1)" }} />
        <span className="-mb-[1px]">BRAND</span>
      </div>
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
          <button onClick={() => go("/")} className="flex flex-col items-start justify-center flex-shrink-0 text-muted-foreground hover:text-primary transition-colors">
            <Cre8denMark className="h-6" />
            <svg viewBox="0 0 250 12" className="w-[66%] h-auto mt-[3px]" preserveAspectRatio="none">
              <text x="0" y="10" fontSize="10.5" fill="currentColor" fontWeight="500" letterSpacing="0.04em" textLength="250" lengthAdjust="spacing" style={{ fontFamily: "'Outfit', sans-serif", textTransform: "uppercase" }}>
                Where Imagination Becomes Reality
              </text>
            </svg>
          </button>
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map(({ label, to }) => {
              const active = isActive(to);
              return (
                <Link key={to} to={to}
                  className={`group relative text-sm font-medium transition-colors duration-200 py-1 ${
                    active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}>
                  {label}
                  <span className={`absolute left-0 -bottom-1 w-full h-[2px] bg-primary rounded-full transition-transform duration-300 origin-left ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-4">
            <button onClick={() => go("/order")} className="hidden lg:inline-flex items-center gap-1.5 bg-primary text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-accent transition-colors">
              Custom Order
            </button>
            <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border bg-white px-6 py-3 flex flex-col">
            {NAV_LINKS.map(({ label, to }) => {
              const active = isActive(to);
              return (
                <button key={to} onClick={() => go(to)}
                  className={`text-sm py-2.5 text-left border-b border-border last:border-0 transition-colors font-medium ${
                    active ? "text-primary" : "text-foreground hover:text-primary"
                  }`}>
                  {label}
                </button>
              );
            })}
          </div>
        )}
      </header>
    </>
  );
}
