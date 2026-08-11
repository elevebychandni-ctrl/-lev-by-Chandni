import { Reveal, scrollToId, SolidButton } from "@/components/site/motion";

import { ELEVE_ADVISORY, STANDALONE_CLOSING } from "./copy";
import { BOOK_ID } from "./tokens";

/**
 * Other services — beyond the wardrobe.
 * Display heading and parchment chips with their staggered rise, grown
 * gently so each advisory carries its full line, closed by the
 * consultation note. Deliberately quieter than the three primary
 * declarations. (The standalone services live at the foot of the
 * Services section.)
 */
export default function EleveOtherServices() {
  return (
    <section id="beyond" className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 lg:py-28">
      <Reveal y={14}>
        <p className="font-sans text-[10px] uppercase tracking-micro text-cocoa">Other services</p>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="mt-5 font-display text-[clamp(1.4rem,3vw,2.1rem)] font-medium text-espresso">
          Beyond the wardrobe
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-4 font-display text-[15px] italic text-bronze">
          Because personal presence extends beyond your wardrobe.
        </p>
      </Reveal>
      <Reveal delay={0.14}>
        <p className="mt-4 max-w-xl font-sans text-[13px] font-light leading-[1.8] text-cocoa">
          Explore specialised advisory designed to strengthen your personal brand, professional presence and social
          confidence.
        </p>
      </Reveal>

      <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ELEVE_ADVISORY.map((advisory, i) => (
          <Reveal key={advisory.title} delay={0.04 * i} y={10} className="h-full">
            <div className="h-full bg-parchment px-5 py-5">
              <p className="font-sans text-[11px] uppercase tracking-wide2 text-espresso/90">{advisory.title}</p>
              <p className="mt-2.5 font-sans text-[13px] font-light leading-[1.75] text-cocoa">
                {advisory.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.12}>
        <p className="mt-10 max-w-2xl font-display text-[14px] italic leading-relaxed text-cocoa">
          {STANDALONE_CLOSING}
        </p>
      </Reveal>

      <Reveal delay={0.18} className="mt-9">
        <SolidButton onClick={() => scrollToId(BOOK_ID)}>Book a Call</SolidButton>
      </Reveal>
    </section>
  );
}
