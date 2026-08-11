import { Eyebrow, Reveal, scrollToId } from "@/components/site/motion";

import { ELEVE_OFFER, ELEVE_PACKAGES, ELEVE_STANDALONE } from "./copy";
import { BOOK_ID } from "./tokens";
import { PosterHeading } from "./primitives";

/**
 * (02) — Services.
 * Declaration cards — softly rounded, hairline-framed, with full-card
 * hover inversion — carrying the three finalized experiences with
 * every inclusion visible. No accordions, nothing hidden. The standalone
 * services close the section beneath the three declarations.
 */
export default function EleveServices() {
  return (
    <section id="services" className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 lg:py-28">
      <Eyebrow>(02) Services</Eyebrow>

      <div className="mt-8 max-w-4xl">
        <PosterHeading>
          Choose the experience that meets you where you are<span className="text-bronze">.</span>
        </PosterHeading>
      </div>

      <Reveal delay={0.1}>
        <p className="mt-6 max-w-2xl text-[15px] font-light leading-[1.9] text-cocoa">
          Whether you’re building a wardrobe from scratch, refining your personal brand or looking for a complete
          image transformation, every Élevé experience is tailored to your lifestyle, goals and the way you want to be
          perceived.
        </p>
      </Reveal>

      <div className="mt-12 space-y-5 md:space-y-6">
        {ELEVE_PACKAGES.map((pkg, i) => (
          <Reveal key={pkg.name} delay={i * 0.06}>
            <div className="group rounded-xl border border-espresso/20 px-5 py-10 transition-colors duration-500 hover:border-espresso hover:bg-espresso md:px-8 lg:py-12">
              <div className="grid gap-6 lg:grid-cols-[110px_1fr_190px] lg:gap-10">
                <span className="font-display text-[3rem] font-medium italic leading-none text-bronze transition-colors duration-500 group-hover:text-sand">
                  {pkg.index}
                </span>
                <div>
                  <h3 className="font-display text-[2rem] font-medium uppercase leading-[1.02] tracking-[-0.01em] text-espresso transition-colors duration-500 group-hover:text-ivory md:text-[2.6rem]">
                    {pkg.name}
                  </h3>
                  <p className="mt-3 font-display text-[15px] italic leading-relaxed text-cocoa transition-colors duration-500 group-hover:text-sand">
                    {pkg.tagline}
                  </p>
                  <p className="mt-5 max-w-2xl text-[14px] font-light leading-[1.85] text-cocoa transition-colors duration-500 group-hover:text-ivory/85">
                    {pkg.description}
                  </p>
                  <p className="mt-7 font-sans text-[10px] uppercase tracking-[0.24em] text-bronze transition-colors duration-500 group-hover:text-sand">
                    {pkg.includesLabel}
                  </p>
                  <ul className="mt-3 grid gap-x-10 gap-y-2 sm:grid-cols-2">
                    {pkg.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-baseline gap-3 text-[13px] font-light leading-relaxed text-cocoa transition-colors duration-500 group-hover:text-ivory/85"
                      >
                        {/* diamond pointer — bronze on ivory, sand when the row inverts */}
                        <span
                          aria-hidden
                          className="h-[5px] w-[5px] shrink-0 rotate-45 bg-bronze transition-colors duration-500 group-hover:bg-sand"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 max-w-2xl font-display text-[14px] italic leading-relaxed text-espresso transition-colors duration-500 group-hover:text-ivory">
                    {pkg.leavesWith}
                  </p>
                </div>
                <div className="flex flex-row items-center justify-between lg:flex-col lg:items-end lg:justify-start lg:gap-5 lg:text-right">
                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-cocoa transition-colors duration-500 group-hover:text-sand">
                      {pkg.priceLabel}
                    </p>
                    {/* original price — struck through, quietly — while the launch offer runs */}
                    <p className="mt-2 font-display text-[15px] font-light leading-none text-cocoa/75 line-through decoration-cocoa/45 decoration-1 transition-colors duration-500 group-hover:text-ivory/55 group-hover:decoration-ivory/35">
                      {pkg.priceOriginal}
                    </p>
                    <p className="mt-2 font-display text-[1.7rem] font-medium leading-none text-espresso transition-colors duration-500 group-hover:text-ivory">
                      {pkg.priceOffer}
                    </p>
                    {/* launch-offer note — a hairline and two whispered lines, never a badge */}
                    <span
                      aria-hidden
                      className="mt-4 block h-px w-9 bg-bronze/60 transition-colors duration-500 group-hover:bg-sand/50 lg:ml-auto"
                    />
                    <p className="mt-3 font-sans text-[9px] uppercase tracking-[0.24em] text-bronze transition-colors duration-500 group-hover:text-sand">
                      {ELEVE_OFFER.label}
                    </p>
                    <p className="mt-1 font-sans text-[9px] uppercase tracking-[0.24em] text-bronze transition-colors duration-500 group-hover:text-sand">
                      {ELEVE_OFFER.discount}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => scrollToId(BOOK_ID)}
                    className="border border-espresso bg-espresso px-6 py-3 font-sans text-[9.5px] uppercase tracking-[0.22em] text-ivory transition-colors duration-500 hover:!border-bronze hover:!bg-bronze hover:!text-ivory group-hover:border-ivory group-hover:bg-ivory group-hover:text-espresso"
                  >
                    {pkg.cta} →
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* standalone services — available outside the packages */}
      <div className="mt-14 lg:mt-16">
        <Reveal>
          <p className="font-sans text-[10px] uppercase tracking-micro text-cocoa">Also available independently</p>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-4 font-display text-[clamp(1.2rem,2.2vw,1.6rem)] italic text-espresso">
            Looking for a standalone service?
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <ul className="mt-6 max-w-2xl space-y-3">
            {ELEVE_STANDALONE.map((service) => (
              <li key={service} className="flex items-baseline gap-3 text-[14px] font-light leading-[1.8] text-cocoa">
                <span aria-hidden className="h-[5px] w-[5px] shrink-0 rotate-45 bg-bronze" />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
