import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SERVICES_DATA } from "@/constants/services";
import { getFirstImageForFolder } from "@/lib/images";

export function ServicesPage() {
  const navigate = useNavigate();
  function go(to: string) { navigate(to); window.scrollTo({ top: 0, behavior: "smooth" }); }

  const PROCESS = [
    { n: "01", title: "Share Your Idea",   body: "Tell us what you need or upload a design file (AI, SVG, PDF, DXF, JPG). We'll help you refine it." },
    { n: "02", title: "Get a Quote",       body: "We send a detailed quote within 24 hours. No obligation - ask any questions before you confirm." },
    { n: "03", title: "Approve the Proof", body: "We send a digital proof before production. Make any changes until you're completely happy." },
    { n: "04", title: "We Create & Ship",  body: "Production takes 3–5 working days. Carefully packed and shipped islandwide." },
  ];

  return (
    <main>
      <section className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <p className="text-xs font-medium tracking-widest text-primary uppercase mb-2">Services</p>
          <h1 className="text-3xl lg:text-4xl font-light text-foreground leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Precision services, <span className="font-semibold">endless possibilities.</span>
          </h1>
        </div>
      </section>

      {SERVICES_DATA.map((svc, si) => {
        const Icon = svc.icon;
        const isEven = si % 2 === 0;
        return (
          <section key={svc.id} id={svc.id} className={isEven ? "bg-background" : "bg-white"}>
            <div className="max-w-6xl mx-auto px-6 py-14">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#FFF0F1] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground" style={{ fontFamily: "'Outfit', sans-serif" }}>{svc.title}</h2>
                    <p className="text-sm text-muted-foreground mt-1 max-w-xl">{svc.desc}</p>
                  </div>
                </div>
                <button onClick={() => go("/order")}
                  className="flex-shrink-0 inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-md hover:bg-accent transition-colors group">
                  Get a Quote <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[...svc.subItems]
                  .sort((a: any, b: any) => (a.comingSoon === b.comingSoon ? 0 : a.comingSoon ? 1 : -1))
                  .map((item: any) => {
                    const imageSrc = getFirstImageForFolder(item.folder, item.img);
                    return (
                  <div key={item.id}
                    className={`group bg-white border border-border rounded-xl overflow-hidden transition-all duration-200 flex flex-col ${item.comingSoon ? "opacity-75" : "hover:shadow-md hover:border-primary/20 cursor-pointer"}`}
                    onClick={() => {
                      if (item.comingSoon) return;
                      const dest = item.detailPage ?? (svc as any).detailPage ?? "/order";
                      go(dest);
                    }}
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-[#F0EDE8] relative">
                      <img src={imageSrc} alt={item.name} className={`w-full h-full object-cover transition-transform duration-500 ${!item.comingSoon ? "group-hover:scale-105" : "grayscale-[20%]"}`} />
                      {item.tag && (
                        <span className={`absolute top-2.5 left-2.5 text-white text-[9px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded ${item.comingSoon ? "bg-muted-foreground" : "bg-primary"}`}>
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <p className="text-sm font-semibold text-foreground mb-1.5" style={{ fontFamily: "'Outfit', sans-serif" }}>{item.name}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-3">{item.desc}</p>
                      <div className="flex items-center justify-between">
                        {item.comingSoon
                          ? <p className="text-xs font-medium text-muted-foreground italic">Available soon</p>
                          : item.price
                            ? <p className="text-xs font-semibold text-primary">{item.price}</p>
                            : <p className="text-xs font-semibold text-primary">Quote on request</p>
                        }
                        {!item.comingSoon && (
                          <ArrowRight size={13} className="text-border group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-150" />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <p className="text-xs font-medium tracking-widest text-primary uppercase mb-2">How It Works</p>
            <h2 className="text-2xl font-semibold text-foreground" style={{ fontFamily: "'Outfit', sans-serif" }}>From idea to finished piece in four steps.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROCESS.map(({ n, title, body }) => (
              <div key={n} className="bg-white border border-border rounded-xl p-6">
                <p className="text-4xl font-light text-border mb-4 leading-none" style={{ fontFamily: "'Outfit', sans-serif" }}>{n}</p>
                <h3 className="text-sm font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary">
        <div className="max-w-xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>Ready to get started?</h2>
          <p className="text-sm text-white/70 mb-7">Share your idea and we'll give you a free quote within 24 hours.</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button onClick={() => go("/order")} className="inline-flex items-center gap-2 bg-white text-primary text-sm font-semibold px-6 py-3 rounded-md hover:bg-white/90 transition-colors group">
              Request a Quote <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button onClick={() => go("/contact")} className="inline-flex items-center gap-2 border border-white/40 text-white text-sm font-medium px-6 py-3 rounded-md hover:border-white hover:bg-white/10 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

