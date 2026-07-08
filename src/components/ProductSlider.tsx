import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { getImagesForFolder } from "@/lib/images";

interface Slide { src: string; alt: string; }
interface Props { slides?: Slide[]; folderPath?: string; fallbackAlt?: string; }

export function ProductSlider({ slides = [], folderPath, fallbackAlt = "Product Image" }: Props) {
  const dynamicSlides = folderPath ? getImagesForFolder(folderPath).map(src => ({ src, alt: fallbackAlt })) : [];
  const activeSlides = dynamicSlides.length > 0 ? dynamicSlides : slides;

  const [slide, setSlide] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (activeSlides.length <= 1) return;
    const id = setInterval(() => setSlide((i) => (i + 1) % activeSlides.length), 3500);
    return () => clearInterval(id);
  }, [key, activeSlides.length]);

  function go(i: number) { setSlide(i); setKey((k) => k + 1); }

  if (activeSlides.length === 0) return (
    <div className="bg-[#F0EDE8] aspect-[4/3] rounded-2xl flex flex-col items-center justify-center text-muted-foreground text-sm border border-border">
      No images available. Add images to the respective local folder.
    </div>
  );

  return (
    <div className="lg:sticky lg:top-24">
      <div className="relative rounded-2xl overflow-hidden bg-[#F0EDE8] aspect-[4/3]">
        <img key={slide} src={activeSlides[slide].src} alt={activeSlides[slide].alt} className="w-full h-full object-cover transition-opacity duration-500" />
        <button onClick={() => go((slide - 1 + activeSlides.length) % activeSlides.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow transition-colors">
          <ArrowRight size={14} className="rotate-180 text-foreground" />
        </button>
        <button onClick={() => go((slide + 1) % activeSlides.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow transition-colors">
          <ArrowRight size={14} className="text-foreground" />
        </button>
        <div className="absolute bottom-3 inset-x-0 flex justify-center gap-1.5">
          {activeSlides.length > 1 && activeSlides.map((_, i) => (
            <button key={i} onClick={() => go(i)}
              className={`h-1.5 rounded-full transition-all duration-200 ${i === slide ? "bg-white w-5" : "bg-white/50 w-2"}`} />
          ))}
        </div>
      </div>
      {activeSlides.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-2 snap-x">
          {activeSlides.map((img, i) => (
            <button key={i} onClick={() => go(i)}
              className={`flex-none w-20 aspect-square rounded-lg overflow-hidden border-2 transition-colors snap-start ${i === slide ? "border-primary" : "border-transparent"}`}>
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
