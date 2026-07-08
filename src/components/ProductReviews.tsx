import { Star } from "lucide-react";
import { useApprovedTestimonials } from "@/hooks/useApprovedTestimonials";

export function ProductReviews({ productName, bgClassName = "bg-background" }: { productName: string, bgClassName?: string }) {
  const { items, loading } = useApprovedTestimonials();
  
  if (loading) return null;

  const productReviews = items.filter(t => t.product === productName);
  
  if (productReviews.length === 0) return null;

  return (
    <section className={`${bgClassName} border-t border-border`}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-10 text-center">
          <p className="text-xs font-medium tracking-widest text-primary uppercase mb-2">Customer Reviews</p>
          <h2 className="text-2xl lg:text-3xl font-semibold text-foreground" style={{ fontFamily: "'Outfit', sans-serif" }}>What People Say About This</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productReviews.map((review, i) => (
            <div key={i} className="bg-white border border-border rounded-2xl p-6 flex flex-col h-full">
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
      </div>
    </section>
  );
}
