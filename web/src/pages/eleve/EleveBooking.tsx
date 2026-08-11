import { Eyebrow, Lines, Reveal } from "@/components/site/motion";

import { BOOK_ID } from "./tokens";
import EleveCalInline from "./EleveCalInline";

/**
 * Book a Call — the closing espresso suite.
 * The page's final destination: a single centred column — the invitation
 * spoken once above, the inline Cal.com calendar resting beneath it on
 * the shared espresso field. The embed itself is untouched.
 */
export default function EleveBooking() {
  return (
    <section id={BOOK_ID} className="bg-espresso text-ivory">
      <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32 lg:py-40">
        {/* the invitation */}
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="text-ivory/75">Book a Call</Eyebrow>

          <h2 className="mt-9 font-display text-[clamp(1.9rem,3.8vw,3rem)] font-medium leading-[1.16] tracking-[-0.01em] text-ivory">
            <Lines
              stagger={0.1}
              lines={[
                <span key="1">
                  Ready to <em className="font-normal italic text-bronze">elevate</em>
                </span>,
                <span key="2">your personal brand?</span>,
              ]}
            />
          </h2>

          <Reveal delay={0.22}>
            <p className="mt-6 font-display text-[clamp(1.15rem,1.9vw,1.45rem)] italic leading-[1.5] text-bronze">
              Book a 20 min discovery call.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <span aria-hidden className="mx-auto mt-11 block h-px w-16 bg-bronze" />
          </Reveal>
        </div>

        {/* the calendar — official Cal.com inline embed, resting on the espresso field */}
        <Reveal delay={0.14} y={18} className="mx-auto mt-12 max-w-[1100px] lg:mt-14">
          <EleveCalInline />
        </Reveal>
      </div>
    </section>
  );
}
