import { Eyebrow, Lines, Reveal } from "@/components/site/motion";

/**
 * The Belief.
 * A two-column editorial spread: the belief statement on the left; the
 * é·le·vé definition set as plain editorial text heading the reading
 * column, with the finalized copy beneath.
 */
export default function ElevePhilosophy() {
  return (
    <section id="philosophy" className="relative">
      <div className="mx-auto max-w-[1500px] px-6 pb-28 pt-24 md:px-10 lg:pb-36 lg:pt-36">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* the statement — the belief, spoken once */}
          <div className="lg:col-span-5">
            <Eyebrow>The Belief</Eyebrow>

            <h2 className="mt-8 font-display text-[clamp(1.9rem,3.8vw,3rem)] font-medium leading-[1.14] tracking-[-0.01em] text-espresso">
              <Lines
                stagger={0.11}
                lines={[
                  <span key="1">How we dress shapes</span>,
                  <span key="2">
                    <span className="italic font-normal text-bronze">perception</span>, long
                  </span>,
                  <span key="3">before we speak.</span>,
                ]}
              />
            </h2>

            <Reveal delay={0.3}>
              <span aria-hidden className="mt-9 block h-px w-16 bg-bronze" />
            </Reveal>
          </div>

          {/* the reading column — the definition, then the finalized copy */}
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <div>
                <p className="font-display text-2xl leading-tight text-espresso">
                  é·le·vé <span className="italic text-cocoa">/ adj.</span>
                </p>
                <p className="mt-3 font-sans text-[13px] font-light leading-relaxed text-cocoa">
                  French: <span className="italic">raised; elevated.</span>
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="hairline mt-10 pt-8">
                <p className="max-w-xl text-[15px] font-light leading-[1.9] text-cocoa">
                  Today, personal brands are built across boardrooms, businesses, social platforms and everyday
                  interactions. Whether you’re a founder, entrepreneur, executive, creator or ambitious professional,
                  your image communicates before your expertise has the chance to.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="hairline mt-10 pt-8">
                <p className="max-w-xl font-display text-[clamp(1.35rem,2.4vw,1.85rem)] leading-[1.5] text-espresso">
                  Style is not about clothing. It is about{" "}
                  <em className="font-normal italic text-bronze">alignment</em>.
                </p>
                <p className="mt-6 max-w-xl text-[15px] font-light leading-[1.9] text-cocoa">
                  At Élevé, we align your wardrobe with your identity, your ambitions and the personal brand you want
                  to build. Through strategic personal styling, image consulting and wardrobe planning, we create
                  wardrobes that strengthen your presence, simplify everyday decisions and ensure you’re remembered
                  for the right reasons.
                </p>
                <p className="mt-8 font-display text-[16px] italic text-bronze">Individualised, never template-led.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
