import { Eyebrow, Lines, Reveal } from "@/components/site/motion";

import { ELEVE_METHOD } from "./copy";

/**
 * (03) — The Method.
 * The working ledger — the six chapters of an engagement — set as
 * hairline rows with bronze italic numerals and uppercase point tags.
 * Sits between Services and What changes, so the reader sees what an
 * engagement includes, how it unfolds, and what it leaves behind.
 */
export default function EleveMethod() {
  return (
    <section id="method" className="border-t border-espresso/10">
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 lg:py-28">
        <Eyebrow>(03) The Method</Eyebrow>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-7">
            <h2 className="font-display text-[clamp(1.9rem,3.8vw,3rem)] font-medium leading-[1.14] tracking-[-0.01em] text-espresso">
              <Lines
                stagger={0.1}
                lines={[
                  <span key="1">From conversation,</span>,
                  <span key="2">
                    to <em className="font-normal italic text-bronze">elevation</em>.
                  </span>,
                ]}
              />
            </h2>
          </div>
          <Reveal delay={0.15} className="lg:col-span-4 lg:col-start-9">
            <p className="max-w-md text-[15px] font-light leading-[1.9] text-cocoa lg:pb-1.5">
              Every engagement moves through the same six chapters: private, unhurried and entirely yours.
            </p>
          </Reveal>
        </div>

        {/* the working ledger — one chapter per hairline row */}
        <div className="mt-12 border-t border-espresso/20 lg:mt-16">
          {ELEVE_METHOD.map((step) => (
            <Reveal key={step.index} y={26}>
              <article className="grid grid-cols-[56px_1fr] gap-x-5 gap-y-5 border-b border-espresso/20 py-8 sm:grid-cols-[88px_1fr] lg:grid-cols-12 lg:gap-8 lg:py-10">
                <span className="font-display text-[clamp(1.9rem,3.2vw,2.6rem)] font-medium italic leading-[0.9] text-bronze lg:col-span-1">
                  {step.index}
                </span>

                <div className="lg:col-span-7">
                  <h3 className="font-display text-[clamp(1.35rem,2.4vw,1.8rem)] font-medium leading-tight text-espresso">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-[14px] font-light leading-[1.85] text-cocoa">{step.body}</p>
                </div>

                <div className="col-span-2 flex flex-wrap content-start gap-x-6 gap-y-2 sm:col-span-1 sm:col-start-2 lg:col-span-3 lg:col-start-10 lg:flex-col lg:gap-y-2.5 lg:pt-2">
                  {step.points.map((point) => (
                    <span
                      key={point}
                      className="flex items-baseline gap-2.5 font-sans text-[10px] uppercase tracking-micro text-cocoa"
                    >
                      <span aria-hidden className="h-1 w-1 shrink-0 rotate-45 bg-bronze" />
                      <span>{point}</span>
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
