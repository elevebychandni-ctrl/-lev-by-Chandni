import { motion } from "framer-motion";

import { EASE, Reveal, scrollToId, SolidButton } from "@/components/site/motion";

import { ELEVE_OUTCOMES } from "./copy";
import { BOOK_ID } from "./tokens";

const TILTS: number[] = [-1.5, 1.2, -1, 1.5, -1.2, 1];

/**
 * (04) — What changes.
 * Six tilted billets — the settle-into-place entrance, rotation and
 * pacing — each carrying one finalized outcome, numbered 01–06.
 */
export default function EleveOutcomes() {
  return (
    <section id="outcomes" className="border-y border-espresso/10 bg-parchment/60">
      <div className="mx-auto max-w-[1140px] px-6 py-20 md:px-10 lg:py-28">
        <div className="text-center">
          <Reveal y={14}>
            <p className="font-sans text-[10px] uppercase tracking-[0.24em] text-cocoa">(04)</p>
          </Reveal>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.4vw,3.3rem)] font-medium leading-[1.08] text-espresso">
            What changes
          </h2>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {ELEVE_OUTCOMES.map((outcome, i) => {
            const tilt = TILTS[i] ?? 0;
            return (
              <motion.article
                key={outcome.index}
                initial={{ opacity: 0, y: 32, rotate: tilt * 2.2 }}
                whileInView={{ opacity: 1, y: 0, rotate: tilt }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 1.15, ease: EASE, delay: (i % 3) * 0.12 }}
                className="border border-bronze/30 bg-linen p-7 shadow-[0_26px_50px_-34px_rgba(44,33,24,0.45)]"
              >
                <p className="font-display text-[2rem] font-medium italic leading-none text-bronze">{outcome.index}</p>
                <p className="mt-4 font-display text-[1.3rem] font-medium leading-[1.45] text-espresso">
                  {outcome.text}
                </p>
              </motion.article>
            );
          })}
        </div>

        <Reveal delay={0.15} className="mt-14 text-center">
          <SolidButton
            onClick={() => scrollToId(BOOK_ID)}
            ctaTracking={{
              cta_name: "Book a Call",
              cta_location: "Outcomes",
              cta_type: "booking",
              destination: `#${BOOK_ID}`,
            }}
          >
            Book a Call
          </SolidButton>
        </Reveal>
      </div>
    </section>
  );
}
