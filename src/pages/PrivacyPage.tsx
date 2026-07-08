import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function PrivacyPage() {
  const navigate = useNavigate();
  return (
    <main className="bg-white min-h-[70vh] py-16 border-t border-border">
      <div className="max-w-3xl mx-auto px-6">
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft size={16} /> Back
        </button>
        <h1 className="text-3xl font-semibold text-foreground mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>Privacy Policy</h1>
        <div className="prose prose-sm text-muted-foreground">
          <p className="mb-4">At CRE8DEN, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.</p>
          
          <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">1. Information We Collect</h2>
          <p className="mb-4">We collect information that you provide directly to us, such as your name, email address, phone number, and any specific design requirements or files you share when placing a custom order via WhatsApp or our forms.</p>
          
          <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">2. How We Use Your Information</h2>
          <p className="mb-4">Your information is solely used to process your orders, communicate with you regarding your design requirements, and improve our services. We do not sell or share your personal data with third parties.</p>
          
          <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">3. Data Security</h2>
          <p className="mb-4">We implement appropriate security measures to protect your personal information. Since our order processing primarily relies on WhatsApp, your data is handled in accordance with their respective secure protocols.</p>
          
          <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">4. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at cre8den@gmail.com.</p>
        </div>
      </div>
    </main>
  );
}
