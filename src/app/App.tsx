import { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

ReactGA.initialize("G-1ZVHK73DRF");
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

import { HomePage }        from "@/pages/HomePage";
import { AboutPage }       from "@/pages/AboutPage";
import { GiftsPage }       from "@/pages/GiftsPage";
import { ServicesPage }    from "@/pages/ServicesPage";
import { CustomOrderPage } from "@/pages/CustomOrderPage";
import { ContactPage }     from "@/pages/ContactPage";
import { PrivacyPage }     from "@/pages/PrivacyPage";
import { TermsPage }       from "@/pages/TermsPage";

import { AcrylicPhotoPage }  from "@/pages/products/AcrylicPhotoPage";
import { KeyTagPage }         from "@/pages/products/KeyTagPage";
import { PersonalizePage }    from "@/pages/products/PersonalizePage";
import { NameBoardsPage }     from "@/pages/products/NameBoardsPage";
import { RobotChassisPage }   from "@/pages/products/RobotChassisPage";

import { ACRYLIC_KEYTAG_CONFIG, WOODEN_KEYTAG_CONFIG } from "@/constants/products";

function ScrollToTop() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.send({ hitType: "pageview", page: pathname + search });
  }, [pathname, search]);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Nav />
        <div className="flex-1">
          <Routes>
            <Route path="/"        element={<HomePage />} />
            <Route path="/about"   element={<AboutPage />} />
            <Route path="/gifts"   element={<GiftsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/order"   element={<CustomOrderPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms"   element={<TermsPage />} />

            {/* Product detail pages */}
            <Route path="/gifts/acrylic-photo"   element={<AcrylicPhotoPage />} />
            <Route path="/gifts/acrylic-keytag"  element={<KeyTagPage config={ACRYLIC_KEYTAG_CONFIG} />} />
            <Route path="/gifts/wooden-keytag"   element={<KeyTagPage config={WOODEN_KEYTAG_CONFIG} />} />
            <Route path="/services/personalize/:id?"  element={<PersonalizePage />} />
            <Route path="/services/name-boards"  element={<NameBoardsPage />} />
            <Route path="/services/robot-chassis" element={<RobotChassisPage />} />

            {/* 404 fallback */}
            <Route path="*" element={
              <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center px-6">
                <p className="text-6xl font-light text-border" style={{ fontFamily: "'Outfit', sans-serif" }}>404</p>
                <h1 className="text-xl font-semibold text-foreground">Page not found</h1>
                <p className="text-sm text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
                <a href="#/" className="mt-2 inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-md hover:bg-accent transition-colors">
                  Go Home
                </a>
              </div>
            } />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}
