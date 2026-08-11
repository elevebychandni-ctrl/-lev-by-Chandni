import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { EASE, Reveal, scrollToId, SolidButton } from "@/components/site/motion";
import { cn } from "@/lib/utils";

import { ELEVE_TESTIMONIALS } from "./copy";
import { BOOK_ID } from "./tokens";

const SLIDE_MS = 5000;

interface SlotStyle {
  x: string;
  scale: number;
  opacity: number;
  zIndex: number;
}

/** True from the `lg` breakpoint — used to widen the side glimpses. */
function useIsDesktop(): boolean {
  const [desktop, setDesktop] = useState<boolean>(() =>
    typeof window === "undefined" ? true : window.matchMedia("(min-width: 1024px)").matches,
  );

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const onChange = (event: MediaQueryListEvent) => setDesktop(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return desktop;
}

/** Quiet editorial quote card — shared by the sizing and animated layers. */
function QuoteCard({ quote, className }: { quote: string; className?: string }) {
  return (
    <div className={cn("border border-espresso/10 bg-linen px-7 py-9 md:px-10 md:py-11", className)}>
      <span aria-hidden className="block h-px w-10 bg-bronze" />
      <p className="mt-6 font-display text-[clamp(1.02rem,1.6vw,1.35rem)] italic leading-[1.75] text-espresso">
        “{quote}”
      </p>
    </div>
  );
}

/**
 * (05) — Testimonials.
 * Three endorsements side by side: the centre one fully legible, its two
 * neighbours as faded glimpses at the edges. Every five seconds the row
 * slides one step left — the centre departs into the left glimpse, the
 * right glimpse arrives at the centre, and the old left wraps around to
 * reappear as the right glimpse — endlessly. Rotation pauses on hover and
 * under reduced-motion preferences; arrows allow manual browsing.
 */
export default function EleveTestimonials() {
  const prefersReduced = useReducedMotion();
  const isDesktop = useIsDesktop();
  const count = ELEVE_TESTIMONIALS.length;

  const [pos, setPos] = useState<{ index: number; prev: number }>({ index: 0, prev: 0 });
  const [paused, setPaused] = useState<boolean>(false);

  const go = (dir: number) => setPos((p) => ({ index: (p.index + dir + count) % count, prev: p.index }));

  useEffect(() => {
    if (prefersReduced || paused) return;
    const timer = window.setInterval(() => {
      setPos((p) => ({ index: (p.index + 1) % count, prev: p.index }));
    }, SLIDE_MS);
    return () => window.clearInterval(timer);
  }, [prefersReduced, paused, pos.index, count]);

  /** Slot geometry — x is a percentage of the card's own width. */
  const offset = isDesktop ? 110 : 104;
  const slots: SlotStyle[] = [
    { x: "-50%", scale: 1, opacity: 1, zIndex: 2 },
    { x: `${-50 + offset}%`, scale: 0.95, opacity: 0.3, zIndex: 1 },
    { x: `${-50 - offset}%`, scale: 0.95, opacity: 0.3, zIndex: 1 },
  ];

  const cardWidth = "w-[82%] sm:w-[68%] lg:w-[56%]";

  return (
    <section id="testimonials" className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 lg:py-36">
      <Reveal y={14}>
        <p className="font-sans text-[10px] uppercase tracking-micro text-cocoa">(05)</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-6 font-display text-[clamp(1.9rem,4.2vw,3.2rem)] font-medium leading-[1.1] tracking-[-0.01em] text-espresso">
          Testimonials<span className="text-bronze">.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.15} className="mt-14 lg:mt-20">
        <div
          role="region"
          aria-label="Client testimonials"
          className="relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* sizing layer — reserves the height of the tallest quote */}
          <div aria-hidden className="pointer-events-none invisible grid">
            {ELEVE_TESTIMONIALS.map((quote) => (
              <div key={quote.slice(0, 32)} className={cn("col-start-1 row-start-1 mx-auto", cardWidth)}>
                <QuoteCard quote={quote} />
              </div>
            ))}
          </div>

          {/* animated layer — three slots, sliding one step left per cycle */}
          <div className="absolute inset-0">
            {ELEVE_TESTIMONIALS.map((quote, i) => {
              const slot = (((i - pos.index) % count) + count) % count;
              const prevSlot = (((i - pos.prev) % count) + count) % count;
              const wraps = (slot === 1 && prevSlot === 2) || (slot === 2 && prevSlot === 1);
              const target = slots[slot] ?? slots[0];

              return (
                <motion.figure
                  key={quote.slice(0, 32)}
                  initial={false}
                  animate={{
                    x: target.x,
                    scale: target.scale,
                    opacity: wraps ? [0, target.opacity] : target.opacity,
                  }}
                  transition={
                    wraps
                      ? { x: { duration: 0 }, scale: { duration: 0 }, opacity: { duration: 1.1, ease: EASE } }
                      : { duration: 1.1, ease: EASE }
                  }
                  style={{ zIndex: target.zIndex }}
                  aria-hidden={slot !== 0}
                  className={cn("absolute left-1/2 top-0 h-full", cardWidth)}
                >
                  <QuoteCard quote={quote} className="h-full" />
                </motion.figure>
              );
            })}
          </div>
        </div>
      </Reveal>

      {/* index + manual browsing */}
      <div className="mt-10 flex items-center justify-center gap-8">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="flex h-11 w-11 items-center justify-center border border-espresso/30 text-espresso transition-all duration-500 hover:bg-espresso hover:text-ivory"
        >
          ←
        </button>
        <p className="font-display text-[13px] italic text-bronze">
          {String(pos.index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
        </p>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="flex h-11 w-11 items-center justify-center border border-espresso/30 text-espresso transition-all duration-500 hover:bg-espresso hover:text-ivory"
        >
          →
        </button>
      </div>

      <Reveal delay={0.1} className="mt-16 border-t border-espresso/10 pt-8">
        <SolidButton onClick={() => scrollToId(BOOK_ID)}>Book a Call</SolidButton>
      </Reveal>
    </section>
  );
}
