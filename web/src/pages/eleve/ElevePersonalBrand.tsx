import { Eyebrow, Lines, ParallaxImage, Reveal, scrollToId, SolidButton } from "@/components/site/motion";
import { PHOTOS } from "@/lib/content";

import { BOOK_ID } from "./tokens";

/**
 * (01) — Your Personal Brand Architect.
 * The trust-building editorial beneath the Belief — the framed study on
 * the left; on the right the founder introduction (supplied copy,
 * verbatim) flowing into the detailed career background across a quiet
 * hairline. Every fact preserved, no cards or borders added.
 */
export default function ElevePersonalBrand() {
  return (
    <section id="architect" className="border-t border-espresso/10">
      <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* the address — with the pinned collage beneath */}
          <div className="lg:col-span-5">
            <Eyebrow>(01) Your Personal Brand Architect</Eyebrow>
            <h2 className="mt-8 font-display text-[clamp(1.9rem,3.8vw,3rem)] font-medium leading-[1.14] tracking-[-0.01em] text-espresso">
              <Lines
                stagger={0.1}
                lines={[
                  <span key="1">Build a personal brand</span>,
                  <span key="2">with someone who</span>,
                  <span key="3">
                    understands <em className="font-normal italic text-bronze">perception</em>.
                  </span>,
                ]}
              />
            </h2>
            <Reveal delay={0.3}>
              <span aria-hidden className="mt-9 block h-px w-16 bg-bronze" />
            </Reveal>

            {/* the study — the framed photograph, carried from the archive */}
            <div className="mx-auto mt-14 w-full max-w-md lg:mt-16 lg:max-w-none">
              <Reveal delay={0.15}>
                <div className="relative rotate-[-2deg] border border-espresso/10 bg-linen p-3 shadow-[0_18px_50px_-30px_rgba(44,33,24,0.35)]">
                  <ParallaxImage photo={PHOTOS.libraryBook} className="aspect-[4/5]" speed={0.5} />
                </div>
              </Reveal>
            </div>
          </div>

          {/* the account — finalized copy, exactly as supplied */}
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="max-w-xl font-display text-[clamp(1.15rem,2vw,1.5rem)] leading-[1.6] text-espresso">
                When your work depends on trust, credibility and first impressions, personal style becomes more than
                clothing. It becomes part of your personal brand.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-7 font-display text-[16px] italic text-bronze">
                That’s the perspective Chandni brings to every Élevé consultation.
              </p>
            </Reveal>

            {/* the founder introduction — supplied copy, verbatim */}
            <Reveal delay={0.14}>
              <div className="mt-7 max-w-xl space-y-6 text-[15px] font-light leading-[1.9] text-cocoa">
                <p>
                  Chandni Ahuja founded Élevé after years inside newsrooms, ministries and global policy environments,
                  working alongside diplomats, media professionals, policymakers and leadership teams.
                </p>
                <p>
                  What she saw, over and over: how we present ourselves shapes first impressions long before we speak.
                  A certified fashion stylist with a master’s degree in political communications, she brings a rare,
                  nuanced understanding of how appearance, language and presence shape perception.
                </p>
                <p>
                  That insight became Élevé, a personalised approach to style that goes beyond clothing, helping
                  clients build confidence, presence, and a wardrobe that is unmistakably their own.
                </p>
              </div>
            </Reveal>

            {/* the career background — desktop only; tablet + mobile read it in the Founder section */}
            <Reveal delay={0.18} className="hidden lg:block">
              <div className="hairline mt-9 max-w-xl space-y-6 pt-8 text-[15px] font-light leading-[1.9] text-cocoa">
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

            <Reveal delay={0.22}>
              <div className="mt-10">
                <SolidButton onClick={() => scrollToId(BOOK_ID)}>Book a Call</SolidButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
