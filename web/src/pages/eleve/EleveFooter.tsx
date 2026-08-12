import { Link } from "react-router-dom";

import { Reveal, scrollToId } from "@/components/site/motion";
import { CONTACT_EMAIL, LOCATION_LINE } from "@/lib/content";
import { externalDestination, trackCtaClick } from "@/lib/analytics";

import { ELEVE_PACKAGES } from "./copy";
import { BOOK_ID } from "./tokens";
import { LEGAL_LINKS, SOCIAL_LINKS } from "./tokens";

/**
 * 09 — Footer.
 * The final editorial spread: an oversized wordmark, then contact,
 * booking, service and social columns on espresso, closed by the legal
 * line. Social and legal links render as quiet inert labels until their
 * live URLs are supplied (see tokens.ts).
 */
export default function EleveFooter() {
  const [emailUser = "", emailDomain = ""] = CONTACT_EMAIL.split("@");

  return (
    <footer className="border-t border-ivory/15 bg-espresso text-ivory">
      <div className="mx-auto max-w-[1400px] px-6 pb-10 pt-16 md:px-10 lg:pt-24">
        {/* wordmark spread */}
        <Reveal>
          <p className="font-display text-[clamp(3.2rem,9vw,7.5rem)] leading-[0.98] tracking-[-0.015em] text-ivory">
            Élevé
          </p>
          <p className="mt-2 font-script text-[clamp(1.5rem,3vw,2.2rem)] leading-none text-bronze">by Chandni</p>
        </Reveal>

        {/* Columns pair up from 360px; below that a bordered CTA cannot fit half a 272px row. */}
        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 border-t border-ivory/15 pt-12 min-[360px]:grid-cols-2 md:grid-cols-4 lg:mt-20">
          {/* contact */}
          <div>
            <p className="font-sans text-[9px] uppercase tracking-micro text-ivory/60">Contact us</p>
            <div className="mt-5 space-y-3">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                onClick={() =>
                  trackCtaClick({
                    cta_name: "Email",
                    cta_location: "Footer",
                    cta_type: "contact",
                    destination: "mailto",
                  })
                }
                className="link-line inline-block break-words font-sans text-[12px] font-light text-ivory/90"
              >
                {emailUser}@
                <wbr />
                {emailDomain}
              </a>
              <p className="font-sans text-[10px] uppercase tracking-wide2 text-ivory/70">{LOCATION_LINE}</p>
            </div>
          </div>

          {/* book a call */}
          <div>
            <p className="font-sans text-[9px] uppercase tracking-micro text-ivory/60">Begin</p>
            <div className="mt-5">
              <button
                type="button"
                onClick={() => {
                  trackCtaClick({
                    cta_name: "Book a Call",
                    cta_location: "Footer",
                    cta_type: "booking",
                    destination: `#${BOOK_ID}`,
                  });
                  scrollToId(BOOK_ID);
                }}
                className="whitespace-nowrap border border-ivory bg-ivory px-5 py-3 font-sans text-[10px] uppercase tracking-micro text-espresso transition-all duration-500 hover:border-bronze hover:bg-bronze hover:text-ivory sm:px-6"
              >
                Book a Call
              </button>
              <p className="mt-4 max-w-[200px] font-sans text-[10px] font-light leading-[1.8] text-ivory/60">
                Answered personally, within forty-eight hours.
              </p>
            </div>
          </div>

          {/* services */}
          <div>
            <p className="font-sans text-[9px] uppercase tracking-micro text-ivory/60">Services</p>
            <ul className="mt-5 space-y-3">
              {ELEVE_PACKAGES.map((pkg) => (
                <li key={pkg.name}>
                  <button
                    type="button"
                    onClick={() => {
                      trackCtaClick({
                        cta_name: pkg.name,
                        cta_location: "Footer",
                        cta_type: "navigation",
                        destination: "#services",
                      });
                      scrollToId("services");
                    }}
                    className="link-line font-sans text-[12px] font-light text-ivory/90"
                  >
                    {pkg.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => {
                    trackCtaClick({
                      cta_name: "Beyond the wardrobe",
                      cta_location: "Footer",
                      cta_type: "navigation",
                      destination: "#beyond",
                    });
                    scrollToId("beyond");
                  }}
                  className="link-line font-sans text-[12px] font-light text-ivory/90"
                >
                  Beyond the wardrobe
                </button>
              </li>
            </ul>
          </div>

          {/* social */}
          <div>
            <p className="font-sans text-[9px] uppercase tracking-micro text-ivory/60">Follow</p>
            <ul className="mt-5 space-y-3">
              {SOCIAL_LINKS.map((social) =>
                social.href ? (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() =>
                        trackCtaClick({
                          cta_name: social.label,
                          cta_location: "Footer",
                          cta_type: "social",
                          destination: externalDestination(social.href),
                        })
                      }
                      className="link-line font-sans text-[12px] font-light text-ivory/90"
                    >
                      {social.label}
                    </a>
                  </li>
                ) : (
                  <li key={social.label}>
                    <span
                      title="Profile link to be added"
                      className="cursor-default font-sans text-[12px] font-light text-ivory/50"
                    >
                      {social.label}
                    </span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        {/* legal line */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-ivory/15 pt-6 sm:flex-row sm:items-center lg:mt-20">
          <p className="font-sans text-[10.5px] uppercase tracking-micro text-ivory/85">
            © {new Date().getFullYear()} Élevé by Chandni · {LOCATION_LINE}
          </p>
          <div className="flex flex-wrap items-center gap-6">
            {LEGAL_LINKS.map((legal) =>
              legal.href ? (
                legal.href.startsWith("/") ? (
                  <Link
                    key={legal.label}
                    to={legal.href}
                    onClick={() =>
                      trackCtaClick({
                        cta_name: legal.label,
                        cta_location: "Footer",
                        cta_type: "navigation",
                        destination: legal.href,
                      })
                    }
                    className="link-line font-sans text-[10.5px] uppercase tracking-micro text-ivory/90"
                  >
                    {legal.label}
                  </Link>
                ) : (
                  <a
                    key={legal.label}
                    href={legal.href}
                    className="link-line font-sans text-[10.5px] uppercase tracking-micro text-ivory/90"
                  >
                    {legal.label}
                  </a>
                )
              ) : (
                <span
                  key={legal.label}
                  title="Page to be added"
                  className="cursor-default font-sans text-[10.5px] uppercase tracking-micro text-ivory/70"
                >
                  {legal.label}
                </span>
              ),
            )}
            {/* Room reserved for a Privacy Policy link when supplied */}
            <p className="font-display text-[13px] italic text-bronze">Style. Image. Presence.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
