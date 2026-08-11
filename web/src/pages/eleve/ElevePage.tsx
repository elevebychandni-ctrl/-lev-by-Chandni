import { useEffect } from "react";

import { useSmoothScroll } from "@/components/site/motion";

import EleveBooking from "./EleveBooking";
import EleveFooter from "./EleveFooter";
import EleveFounder from "./EleveFounder";
import EleveHeader from "./EleveHeader";
import EleveHero from "./EleveHero";
import EleveMarquee from "./EleveMarquee";
import EleveMethod from "./EleveMethod";
import EleveOtherServices from "./EleveOtherServices";
import EleveOutcomes from "./EleveOutcomes";
import ElevePersonalBrand from "./ElevePersonalBrand";
import ElevePhilosophy from "./ElevePhilosophy";
import EleveServices from "./EleveServices";
import EleveTestimonials from "./EleveTestimonials";
import EleveWhatsApp from "./EleveWhatsApp";

/**
 * The Élevé by Chandni website — every approved section assembled in
 * the required sequence under one ivory / espresso / bronze art direction.
 */
export default function ElevePage() {
  useSmoothScroll();

  useEffect(() => {
    document.title = "Élevé by Chandni · Personal Styling & Image Advisory";
  }, []);

  return (
    <div id="top" className="grain relative min-h-screen bg-ivory font-sans text-espresso">
      <EleveHeader />
      <main>
        <EleveHero />
        <EleveMarquee />
        <ElevePhilosophy />
        <ElevePersonalBrand />
        <EleveServices />
        <EleveMethod />
        <EleveOutcomes />
        <EleveOtherServices />
        <EleveFounder />
        <EleveTestimonials />
        <EleveBooking />
      </main>
      <EleveFooter />
      <EleveWhatsApp />
    </div>
  );
}
