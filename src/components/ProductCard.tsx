import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getFirstImageForFolder } from "@/lib/images";
import type { GIFTS_DATA } from "@/constants/gifts";

type Gift = typeof GIFTS_DATA[number];

interface Props {
  gift: Gift;
}

export function ProductCard({ gift }: Props) {
  const navigate = useNavigate();
  const imageSrc = getFirstImageForFolder((gift as any).folder, gift.img);

  function handleClick() {
    if (gift.comingSoon) return;
    const dest = (gift as any).detailPage ?? "/order";
    navigate(typeof dest === "string" && dest.startsWith("/") ? dest : `/gifts/${dest}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div
      className={`group bg-white border border-border rounded-xl overflow-hidden transition-all duration-200 flex flex-col ${gift.comingSoon ? "opacity-75" : "hover:shadow-md hover:border-primary/20 cursor-pointer"}`}
      onClick={handleClick}
    >
      <div className="aspect-[4/3] overflow-hidden bg-[#F0EDE8] flex-shrink-0 relative">
        <img src={imageSrc} alt={gift.name} className={`w-full h-full object-cover transition-transform duration-500 ${!gift.comingSoon ? "group-hover:scale-105" : "grayscale-[20%]"}`} />
        {gift.tag && (
          <span className={`absolute top-2.5 left-2.5 text-white text-[9px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded ${gift.comingSoon ? "bg-muted-foreground" : "bg-primary"}`}>
            {gift.tag}
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1.5">{gift.material}</p>
        <p className="text-sm font-semibold text-foreground leading-snug mb-1.5" style={{ fontFamily: "'Outfit', sans-serif" }}>{gift.name}</p>
        <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-3">{gift.desc}</p>
        <div className="flex items-center justify-between">
          {gift.comingSoon
            ? <p className="text-xs font-medium text-muted-foreground italic">Available soon</p>
            : <p className="text-xs font-semibold text-primary">{gift.price}</p>
          }
          {!gift.comingSoon && (
            <ArrowRight size={13} className="text-border group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-150 flex-shrink-0" />
          )}
        </div>
      </div>
    </div>
  );
}
