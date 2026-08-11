import { Reveal, scrollToId, SolidButton } from "@/components/site/motion";
import { PHOTOS } from "@/lib/content";

import { Curtain } from "./primitives";
import { BOOK_ID } from "./tokens";

const CREDENTIALS: [string, string][] = [
  ["Training", "Certified Personal Stylist"],
  ["Academia", "Lady Shri Ram College · University of Sheffield"],
  ["Formed by", "Newsrooms · Ministries · Global Policy"],
  ["Based", "New Delhi, serving worldwide"],
];

/**
 * The Founder.
 * Dominant full-length portrait left with the credential ledger beneath
 * it, oversized headline and a concise biography right, signature. A
 * luxury magazine profile.
 */
export default function EleveFounder() {
  return (
    <section id="about" className="border-y border-espresso/10 bg-linen">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 lg:py-32">
        {/* section heading */}
        <Reveal className="mb-14 text-center lg:mb-20">
          <h2 className="font-display text-[clamp(1.9rem,4.6vw,3.6rem)] font-medium uppercase leading-[1.1] tracking-[0.14em] text-espresso">
            The Founder
          </h2>
          <span aria-hidden className="mx-auto mt-8 block h-10 w-px bg-bronze/70" />
        </Reveal>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
          {/* portrait — dominant, full-length */}
          <div className="mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            <div className="border border-espresso/10 bg-ivory p-3 md:p-4">
              {/* seated portrait — native 2:3, fills the frame without cropping */}
              <Curtain photo={PHOTOS.seatedPortrait} className="aspect-[2/3]" />
            </div>
            <div className="mt-5 text-center lg:text-left">
              <span className="inline-block border border-espresso/25 px-5 py-3">
                <span className="font-sans text-[10px] uppercase tracking-micro text-cocoa">
                  Chandni Ahuja · Founder, Élevé · New Delhi
                </span>
              </span>
            </div>

            {/* credential ledger — beneath the portrait */}
            <div className="mt-8">
              {CREDENTIALS.map(([label, value], i) => (
                <Reveal key={label} delay={0.06 * i}>
                  <div className="flex items-baseline justify-between gap-6 border-t border-espresso/15 py-4">
                    <span className="font-sans text-[10px] uppercase tracking-micro text-cocoa">{label}</span>
                    <span className="text-right font-sans text-[13px] font-light text-espresso">{value}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* editorial profile — finalized copy, exactly as supplied */}
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="font-sans text-[10px] uppercase tracking-micro text-cocoa">
                Élevé, founder &amp; personal stylist
              </p>
              <h3 className="mt-5 font-display text-[clamp(2.6rem,6vw,5rem)] font-medium leading-[1.02] tracking-[-0.01em] text-espresso">
                About Chandni<span className="text-bronze">.</span>
              </h3>
              <span aria-hidden className="mt-7 block h-px w-16 bg-bronze" />
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-9 font-display text-[clamp(1.3rem,2.3vw,1.8rem)] italic leading-[1.55] text-espresso">
                “Working alongside diplomats, media professionals, and policymakers showed me that how we present
                ourselves shapes first impressions long before we speak.”
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-9 max-w-lg text-[15px] font-light leading-[1.9] text-cocoa">
                After years across communications, branding, and international development, from newsrooms and
                ministries to global policy environments, Chandni became fascinated by the quiet relationship between
                personal style, image, and perception. That insight became Élevé.
              </p>
            </Reveal>

            {/* the detailed account — desktop keeps the finalized profile copy */}
            <Reveal delay={0.2} className="hidden lg:block">
              <div className="hairline mt-9 max-w-lg space-y-6 pt-8 text-[15px] font-light leading-[1.9] text-cocoa">
                <p>
                  Long before Élevé, Chandni wrote speeches for diplomats, coordinated media briefings for Heads of
                  State and worked alongside policymakers and leadership teams. The strongest personal brands, she
                  learnt, are rarely accidental.
                </p>
                <p className="font-display text-[17px] italic text-bronze">
                  That perspective is what sets Élevé apart.
                </p>
                <p>
                  Rather than approaching style as fashion, she helps clients build a wardrobe that strengthens their
                  personal brand, supports their ambitions and ensures they show up with clarity, credibility and
                  intention.
                </p>
              </div>
            </Reveal>

            {/* tablet + mobile carry the expanded career account instead */}
            <Reveal delay={0.2} className="lg:hidden">
              <div className="hairline mt-9 max-w-lg space-y-6 pt-8 text-[15px] font-light leading-[1.9] text-cocoa">
                <p>
                  Before founding Élevé, she spent over five years shaping the perception of organisations, global
                  initiatives and public leaders, from journalism internships at NDTV, The Guardian and the Centre
                  for Investigative Journalism India to leading communications for 100+ Government of Germany
                  development projects and the Global Disability Summit. One thing ran through it all: how brands earn
                  attention, build trust and leave lasting impressions.
                </p>
                <p>
                  Formal training as a Certified Personal Stylist brought that expertise from institutions to
                  individuals. Today, Élevé unites strategic communications, personal branding and personal styling to
                  help clients build an image that’s intentional, authentic and aligned with the opportunities they’re
                  working towards.
                </p>
              </div>
            </Reveal>

            {/* signature — desktop only */}
            <Reveal delay={0.2} className="hidden lg:block">
              <p className="mt-10 font-script text-[clamp(2.4rem,4vw,3.2rem)] leading-none text-bronze">
                Chandni Ahuja
              </p>
            </Reveal>

            <Reveal delay={0.26} className="mt-9">
              <SolidButton onClick={() => scrollToId(BOOK_ID)}>Book a Call</SolidButton>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
