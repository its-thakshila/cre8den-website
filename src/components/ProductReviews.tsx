import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { useApprovedTestimonials } from "@/hooks/useApprovedTestimonials";

export function ProductReviews({ productName, bgClassName = "bg-background" }: { productName: string, bgClassName?: string }) {
  const [page, setPage] = useState(0);
  const [timerKey, setTimerKey] = useState(0);
  
  const { items, loading } = useApprovedTestimonials();
  const productReviews = items.filter(t => t.product === productName);
  const PAGE_SIZE = 3;
  const totalPages = Math.ceil(productReviews.length / PAGE_SIZE);

  useEffect(() => {
    if (loading || totalPages <= 1) return;
    const id = setInterval(() => { setPage((p) => (p + 1) % totalPages); }, 5000);
    return () => clearInterval(id);
  }, [loading, totalPages, timerKey]);
  
  if (loading) return null;
  
  if (productReviews.length === 0) return null;

  const cardBg = bgClassName === "bg-white" ? "bg-background" : "bg-white";
  const currentReviews = productReviews.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  return (
    <section className={`${bgClassName} border-t border-border`}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-10 text-center">
          <p className="text-xs font-medium tracking-widest text-primary uppercase mb-2">Customer Reviews</p>
          <h2 className="text-2xl lg:text-3xl font-semibold text-foreground" style={{ fontFamily: "'Outfit', sans-serif" }}>What People Say About This</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentReviews.map((review, i) => (
            <div key={i} className={`${cardBg} border border-border rounded-2xl p-6 flex flex-col h-full`}>
              <div className="flex gap-1 mb-4">
                {Array(review.stars).fill(0).map((_, idx) => (
                  <Star key={idx} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed mb-5 italic flex-1">"{review.text}"</p>
              <p className="text-xs font-semibold text-muted-foreground">- {review.name}</p>
            </div>
          ))}
        </div>
        
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-1.5 mt-10">
            {Array(totalPages).fill(0).map((_, i) => (
              <button 
                key={i} 
                onClick={() => { setPage(i); setTimerKey(k => k + 1); }}
                aria-label={`Go to review page ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-200 ${i === page ? "bg-primary w-6" : "bg-border w-3.5 hover:bg-muted-foreground"}`} 
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
