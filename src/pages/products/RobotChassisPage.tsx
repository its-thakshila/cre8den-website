import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { ProductSlider } from "@/components/ProductSlider";
import { OrderModal } from "@/components/OrderModal";
import { ProductReviews } from "@/components/ProductReviews";
import { ROBOT_SLIDES } from "@/constants/products";

const HIGHLIGHTS = [
  { title: "Precision Laser-Cut",    body: "Every chassis is cut with sub-millimeter accuracy for clean edges and perfect component fitment." },
  { title: "Fully Custom",           body: "Designed to your exact dimensions, hole layouts, sensor mounts, and controller placement." },
  { title: "Team Personalisation",   body: "Engrave your team name, project name, or logo directly onto the chassis frame." },
  { title: "Any Scale & Complexity", body: "Suitable for university projects, school competitions, research prototypes, and robotics clubs." },
];

export function RobotChassisPage() {
  const [modal, setModal] = useState(false);
  const [projectDesc, setProjectDesc] = useState("");
  const navigate = useNavigate();

  function buildMsg(name: string, email: string) {
    return [
      `*Robot Chassis Enquiry - CRE8DEN*`, "",
      `*Name:* ${name}`, `*Email:* ${email}`,
      projectDesc ? `\n*Project Description:*\n${projectDesc}` : "",
      "", "_Pricing depends on the design and dimensions. Our agent will review your requirements and provide a quote._",
    ].filter(Boolean).join("\n").trim();
  }

  return (
    <main>
      <section className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-2 text-xs text-muted-foreground">
          <button onClick={() => { navigate("/services"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="hover:text-primary transition-colors">Services</button>
          <span>/</span><span className="text-foreground font-medium">Robot Chassis</span>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ProductSlider slides={ROBOT_SLIDES} />
          <div>
            <h1 className="text-2xl lg:text-3xl font-semibold text-foreground leading-snug mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>Robot Chassis</h1>
            <p className="text-sm text-muted-foreground mb-5">Precision laser-cut frames designed to provide a robust and accurate foundation for any custom robotics project.</p>
            <div className="bg-background border border-border rounded-xl px-4 py-3 mb-5 flex items-center justify-between">
              <span className="text-sm text-foreground font-medium">Pricing</span>
              <span className="text-sm font-semibold text-primary">Depends on design</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">Every chassis is manufactured with precision and designed specifically for the customer's project. Provide us with your dimensions, requirements, and any mounting specifications - we'll create an accurate, lightweight, and durable frame ready for your build.</p>
            <div className="h-px bg-border mb-6" />
            <div className="flex flex-col sm:flex-row gap-3 mb-3">
              <button onClick={() => setModal(true)} className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-white text-sm font-semibold py-3.5 rounded-md hover:bg-accent transition-colors">Request a Quote</button>
              <button onClick={() => setModal(true)} className="flex-1 inline-flex items-center justify-center gap-2 border border-border text-sm font-medium text-foreground py-3.5 rounded-md hover:border-primary hover:text-primary transition-colors">Discuss Requirements</button>
            </div>
            <p className="text-[10px] text-muted-foreground text-center">You'll be directed to WhatsApp - our agent will assess your design and provide a quote.</p>
          </div>
        </div>
      </section>

      <section className="bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <p className="text-xs font-medium tracking-widest text-primary uppercase mb-2">Why Choose Us</p>
          <h2 className="text-2xl font-semibold text-foreground mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>Built for your exact requirements.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {HIGHLIGHTS.map(({ title, body }) => (
              <div key={title} className="bg-white border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-lg bg-[#FFF0F1] flex items-center justify-center mb-4"><Check size={14} className="text-primary" /></div>
                <h3 className="text-sm font-semibold text-foreground mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductReviews productName="Robot Chassis" bgClassName="bg-white" />

      {modal && (
        <OrderModal
          title="Request a Quote"
          subtitle="Robot Chassis"
          orderRows={[]}
          onClose={() => setModal(false)}
          buildWhatsAppMsg={buildMsg}
          extraField={
            <div>
              <label className="text-xs font-semibold text-foreground uppercase tracking-wider block mb-1.5">Project Description</label>
              <textarea rows={3} placeholder="Describe your chassis requirements - dimensions, motor count, sensor mounts, material preference, etc."
                value={projectDesc} onChange={(e) => setProjectDesc(e.target.value)}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors resize-none" />
            </div>
          }
        />
      )}
    </main>
  );
}


