import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SERVICES_DATA } from "@/constants/services";

export function ServicesList() {
  const [hovered, setHovered] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <div className="divide-y divide-border">
      {SERVICES_DATA.map((svc, i) => {
        const Icon = svc.icon;
        const isHovered = hovered === svc.id;
        return (
          <div
            key={svc.id}
            onMouseEnter={() => setHovered(svc.id)}
            onMouseLeave={() => setHovered(null)}
            className="group flex items-start gap-6 py-6 cursor-pointer transition-colors duration-150"
            onClick={() => {
              navigate("/services");
              setTimeout(() => {
                const el = document.getElementById(svc.id);
                if (el) {
                  const y = el.getBoundingClientRect().top + window.scrollY - 60; // offset for nav
                  window.scrollTo({ top: y, behavior: "smooth" });
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }, 100);
            }}
          >
            <span className={`text-sm font-mono flex-shrink-0 w-7 pt-0.5 transition-colors duration-150 ${isHovered ? "text-primary" : "text-border"}`} style={{ fontFamily: "'Outfit', sans-serif" }}>
              0{i + 1}
            </span>
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-150 ${isHovered ? "bg-primary" : "bg-[#FFF0F1]"}`}>
              <Icon size={17} className={isHovered ? "text-white" : "text-primary"} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className={`text-base font-semibold mb-1 transition-colors duration-150 ${isHovered ? "text-primary" : "text-foreground"}`} style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {svc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{svc.tagline}</p>
                </div>
                <ArrowRight size={16} className={`flex-shrink-0 mt-1 transition-all duration-150 ${isHovered ? "text-primary translate-x-1" : "text-border"}`} />
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${isHovered ? "max-h-20 mt-3 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-wrap gap-1.5">
                  {svc.subItems.map((item) => (
                    <span key={item.id} className="text-[10px] bg-secondary text-muted-foreground px-2.5 py-1 rounded-full">{item.name}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
