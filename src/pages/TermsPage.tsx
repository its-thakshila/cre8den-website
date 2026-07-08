import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function TermsPage() {
  const navigate = useNavigate();
  return (
    <main className="bg-white min-h-[70vh] py-16 border-t border-border">
      <div className="max-w-3xl mx-auto px-6">
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft size={16} /> Back
        </button>
        <h1 className="text-3xl font-semibold text-foreground mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>Terms of Service</h1>
        <div className="prose prose-sm text-muted-foreground">
          <p className="mb-4">Welcome to Cre8Den. By using our website and services, you agree to comply with and be bound by the following terms and conditions.</p>
          
          <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">1. Custom Orders</h2>
          <p className="mb-4">All custom orders are produced based on the specifications you provide. Please ensure that all design files, dimensions, and materials are accurate before confirming your order. Once an order is confirmed and production has started, it cannot be modified or cancelled.</p>
          
          <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">2. Intellectual Property</h2>
          <p className="mb-4">You must own or have permission to use any logos, artwork, or text you submit for engraving or cutting. Cre8Den reserves the right to refuse orders that violate copyright or intellectual property laws.</p>
          
          <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">3. Turnaround Times</h2>
          <p className="mb-4">While we strive to meet our standard timelines (3–5 working days) and express requests, these are estimates and may vary based on order complexity, material availability, and current workload.</p>
          
          <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">4. Returns & Refunds</h2>
          <p>Due to the personalized nature of our products, we do not accept returns or offer refunds unless the item is defective or there was an error on our part during production. Please inspect your item upon receipt and contact us immediately if there are any issues.</p>
        </div>
      </div>
    </main>
  );
}
