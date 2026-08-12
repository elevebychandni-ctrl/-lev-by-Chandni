import { motion } from "framer-motion";

import { EASE, Lines, Reveal, scrollToId, SolidButton } from "@/components/site/motion";
import { LOCATION_LINE, PHOTOS } from "@/lib/content";

import { Curtain } from "./primitives";

const EXPLORE_SERVICES_CTA = {
  cta_name: "Explore Our Services",
  cta_location: "Hero",
  cta_type: "navigation" as const,
  destination: "#services",
};

/**
 * 01 — Hero.
 * From `lg` up: the approved desktop composition, untouched — ivory
 * ground, five-column statement, tall portrait beside it.
 * `md` to `lg`: the stacked composition with the wordmark carried into
 * the statement (the header logo rests below `lg`).
 * Below `md`: the opening wall, recomposed — the portrait leads with the
 * face unveiled, melting into ivory through a low seam; the wordmark and
 * the centred statement follow on home ground, meta bar at the foot.
 */
export default function EleveHero() {
  return (
    <section className="relative">
      {/* mobile — the opening wall, recomposed: the portrait leads, the statement follows on ivory */}
      <div className="relative flex min-h-[100svh] flex-col md:hidden">
        {/* the portrait — the face carried clear, only a low seam melting it into ivory */}
        <div className="relative h-[36svh] min-h-[280px] w-full">
          <Curtain
            photo={PHOTOS.marbleTable}
            className="absolute inset-0"
            imgClassName="object-[50%_38%]"
            immediate
            priority
          />
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ivory" />
        </div>

        <div className="relative z-10 -mt-9 flex flex-1 flex-col items-center px-6 pb-20 text-center">
          {/* the wordmark — carried from the corner into the composition itself */}
          <Reveal y={14} delay={0.06} fade={false}>
            <p>
              <span className="block font-display text-[27px] leading-none tracking-tight text-espresso">Élevé</span>
              <span className="mt-2 block font-sans text-[9px] uppercase tracking-micro text-cocoa">by Chandni</span>
            </p>
          </Reveal>

          <Reveal y={14} delay={0.12} fade={false}>
            <p className="mt-7 font-sans text-[10px] uppercase tracking-micro text-cocoa">
              Image &amp; Personal Brand Advisory
            </p>
          </Reveal>

          <h1 className="mt-5 font-display text-[clamp(1.85rem,9.5vw,3.25rem)] font-medium leading-[1.12] tracking-[-0.01em] text-espresso">
            <Lines
              delay={0.16}
              stagger={0.1}
              lines={[
                <span key="l1">Become the most</span>,
                <span key="l2">
                  <em className="font-normal italic text-cocoa">elevated</em> version
                </span>,
                <span key="l3">of yourself.</span>,
              ]}
            />
          </h1>

          <motion.span
            aria-hidden
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.3 }}
            className="mt-6 block h-px w-16 bg-bronze"
          />

          {/* the LCP element on mobile — rises without fading so it paints on the first frame */}
          <Reveal delay={0.2} y={14} fade={false} className="mt-6 max-w-[340px]">
            <p className="text-[14px] font-light leading-[1.85] text-cocoa">
              Your style is more than what you wear. It’s how you introduce yourself before you’ve said a word. When
              your wardrobe reflects your ambition, confidence stops feeling like an act.
            </p>
          </Reveal>

          <Reveal delay={0.34} className="mt-8 w-full max-w-[300px]">
            <SolidButton
              onClick={() => scrollToId("services")}
              ctaTracking={EXPLORE_SERVICES_CTA}
              className="w-full"
            >
              Explore Our Services
            </SolidButton>
          </Reveal>

          {/* always-animate — this line rests at the fold edge, outside Reveal's in-view margin */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: EASE, delay: 0.42 }}
            className="mt-6 font-sans text-[9px] uppercase tracking-micro text-cocoa"
          >
            Chandni Ahuja · Founder, Élevé
          </motion.p>
        </div>

        {/* meta bar at the foot — the opening wall's hairline handoff */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.5 }}
          className="absolute inset-x-0 bottom-0 z-10 mx-6 flex items-baseline justify-between gap-6 border-t border-espresso/10 py-5"
        >
          <span className="font-sans text-[9px] uppercase tracking-micro text-cocoa">{LOCATION_LINE}</span>
        </motion.div>
      </div>

      {/* tablet & desktop — the approved composition, untouched */}
      <div className="mx-auto hidden max-w-[1500px] px-6 md:block md:px-10">
        <div className="grid grid-cols-1 gap-12 pb-14 pt-24 md:pt-28 lg:min-h-[100svh] lg:grid-cols-12 lg:items-center lg:gap-8 lg:pb-20 lg:pt-24">
          {/* the statement */}
          <div className="lg:col-span-5">
            {/* the wordmark — carried into the statement while the header logo rests below lg */}
            <Reveal y={14} className="lg:hidden">
              <p className="mb-8">
                <span className="block font-display text-[30px] leading-none tracking-tight text-espresso">Élevé</span>
                <span className="mt-2 block font-sans text-[9px] uppercase tracking-micro text-cocoa">by Chandni</span>
              </p>
            </Reveal>
            <Reveal y={14} delay={0.05}>
              <div className="flex items-center gap-5">
                <p className="font-sans text-[10px] uppercase tracking-micro text-cocoa md:text-[11px]">
                  Image &amp; Personal Brand Advisory
                </p>
                <motion.span
                  aria-hidden
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, ease: EASE, delay: 0.3 }}
                  className="h-px w-16 origin-left bg-bronze"
                />
              </div>
            </Reveal>

            {/* Font curve is fitted so all three authored lines render unwrapped from 320px to 1920px:
                a mobile segment (9vw) until ~430px, a 2.5rem plateau through tablet, then a desktop
                segment (4.6vw) sized to the five-column measure, capped at 3.95rem. */}
            <h1 className="mt-8 font-display text-[length:min(9vw_+_0.075rem,max(2.5rem,4.6vw_-_0.4rem),3.95rem)] font-medium leading-[1.1] tracking-[-0.01em] text-espresso">
              <Lines
                delay={0.05}
                stagger={0.1}
                lines={[
                  <span key="l1">Become the most</span>,
                  <span key="l2">
                    {/* cocoa through tablet for contrast; the approved bronze returns on desktop */}
                    <em className="font-normal italic text-cocoa lg:text-bronze">elevated</em> version
                  </span>,
                  <span key="l3">of yourself.</span>,
                ]}
              />
            </h1>

            <Reveal delay={0.16} y={14} fade={false} className="mt-8 max-w-md">
              <p className="text-[15px] font-light leading-[1.9] text-cocoa">
                Your style is more than what you wear. It’s how you introduce yourself before you’ve said a word. When
                your wardrobe reflects your ambition, confidence stops feeling like an act.
              </p>
            </Reveal>

            <Reveal delay={0.28} className="mt-10">
              <SolidButton
                onClick={() => scrollToId("services")}
                ctaTracking={EXPLORE_SERVICES_CTA}
                className="w-full sm:w-auto"
              >
                Explore Our Services
              </SolidButton>
            </Reveal>
          </div>

          {/* the portrait — above the statement below lg, beside it from lg */}
          {/* the LCP element on desktop — it rises and settles, but never fades,
              so the portrait is on screen the moment the bytes are decoded */}
          <motion.figure
            initial={{ y: 18 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, ease: EASE }}
            className="order-first mx-auto w-full max-w-[560px] lg:order-none lg:col-span-7 lg:mx-0 lg:ml-auto lg:max-w-[540px] xl:max-w-[620px]"
          >
            <div className="overflow-hidden bg-sand">
              <picture className="contents">
                <source
                  srcSet={PHOTOS.marbleTable.srcsetAvif}
                  sizes={PHOTOS.marbleTable.sizes}
                  type="image/avif"
                />
                <source
                  srcSet={PHOTOS.marbleTable.srcsetWebp}
                  sizes={PHOTOS.marbleTable.sizes}
                  type="image/webp"
                />
                <motion.img
                  src={PHOTOS.marbleTable.src}
                  alt={PHOTOS.marbleTable.alt}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  initial={{ scale: 1.04 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.4, ease: EASE }}
                  className="aspect-[3/4] w-full object-cover object-top"
                />
              </picture>
            </div>
            <motion.figcaption
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.45 }}
              className="mt-3.5 text-right font-sans text-[9px] uppercase tracking-micro text-cocoa"
            >
              Chandni Ahuja · Founder, Élevé
            </motion.figcaption>
          </motion.figure>
        </div>

        {/* closing hairline — the handoff into the philosophy */}
        <Reveal delay={0.15}>
          <div className="flex items-baseline justify-between gap-6 border-t border-espresso/10 py-5">
            <span className="font-sans text-[9px] uppercase tracking-micro text-cocoa">{LOCATION_LINE}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
