import { MotionConfig } from "framer-motion";
import { Suspense, lazy, useEffect, useRef } from "react";
import { BrowserRouter, Navigate, Routes, Route, useLocation } from "react-router-dom";

import NotFound from "./pages/NotFound";
import ElevePage from "./pages/eleve/ElevePage";

declare global {
  interface Window {
    /** Injected by the GA4 snippet in index.html. */
    gtag?: (...args: unknown[]) => void;
  }
}

/* The landing page is the site — it ships with the entry bundle so first paint
   never waits on a second round trip. Only the rarely-visited terms page stays lazy. */
const EleveTermsPage = lazy(() => import("./pages/eleve/EleveTermsPage"));

/**
 * Reports client-side route changes to GA4. The initial page load is already
 * measured by the tag in index.html, so the first location is recorded without
 * sending; each subsequent distinct route fires exactly one page_view.
 */
function TrackPageViews() {
  const location = useLocation();
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    const path = location.pathname + location.search;
    if (lastPath.current === path) return;
    const isInitialLoad = lastPath.current === null;
    lastPath.current = path;
    if (isInitialLoad) return;
    window.gtag?.("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
    });
  }, [location.pathname, location.search]);

  return null;
}

/** Starts every page at the top when navigating between routes. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // "instant" bypasses the global `scroll-behavior: smooth`, which would
    // otherwise animate the freshly opened page up from the previous scroll position.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

const App = () => (
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <MotionConfig reducedMotion="user">
      <ScrollToTop />
      <TrackPageViews />
      <Suspense fallback={<div className="min-h-screen bg-ivory" />}>
        <Routes>
          <Route path="/" element={<ElevePage />} />
          <Route path="/terms" element={<EleveTermsPage />} />
          {/* legacy paths from the design-exploration phase resolve to the live site */}
          <Route path="/eleve" element={<Navigate to="/" replace />} />
          <Route path="/eleve/terms" element={<Navigate to="/terms" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </MotionConfig>
  </BrowserRouter>
);

export default App;
