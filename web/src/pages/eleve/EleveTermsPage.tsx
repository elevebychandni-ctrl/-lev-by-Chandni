import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { EASE, Reveal } from "@/components/site/motion";
import { CONTACT_EMAIL, LOCATION_LINE } from "@/lib/content";

import EleveWhatsApp from "./EleveWhatsApp";

interface TermsSection {
  heading: string;
  paragraphs: string[];
}

/** The complete client-supplied Terms & Conditions — reproduced exactly, word for word. */
const TERMS_SECTIONS: TermsSection[] = [
  {
    heading: "Booking & Payment",
    paragraphs: [
      "Your booking is confirmed upon receipt of 100% advance payment. As consultation time is reserved exclusively for you and significant preparation takes place before our sessions, all payments are non-refundable.",
      "Should you be unable to continue with your engagement, your service may be transferred to another individual. One transfer is permitted per booking. Once transferred, the booking cannot be transferred again, and any unused service thereafter will be deemed forfeited.",
    ],
  },
  {
    heading: "Scheduling",
    paragraphs: [
      "All consultations are conducted by prior appointment and, unless otherwise agreed, take place over virtual conferencing platforms like Google Meet or Zoom.",
      "We understand that plans sometimes change. Each session may therefore be rescheduled once, provided we receive at least 24 hours’ notice. Requests made with shorter notice, or missed appointments without prior intimation, may be treated as completed sessions. Any additional rescheduling will be accommodated solely at Élevé’s discretion and subject to availability.",
    ],
  },
  {
    heading: "Communication",
    paragraphs: [
      "To ensure all client communication remains organised, our primary channels of communication are email and WhatsApp.",
      "Our working hours are Monday to Friday, 10:00 AM to 5:00 PM IST, and Saturdays from 3:00 PM to 5:00 PM IST. We are unavailable on Sundays and public holidays.",
      "We aim to respond to WhatsApp messages within one business day and emails within two business days. WhatsApp support included in select packages is intended for quick questions and implementation support. More detailed discussions are best addressed during scheduled consultation sessions.",
    ],
  },
  {
    heading: "Scope of Services",
    paragraphs: [
      "Every recommendation is personalised to your lifestyle, professional goals, preferences, body proportions, and budget. While we provide expert guidance and carefully curated recommendations, all purchasing and implementation decisions remain entirely yours.",
      "Our styling fee covers professional consultation, planning, and advisory services only. The cost of clothing, footwear, accessories, tailoring, beauty services, shipping charges, taxes, or any other shopping expenses is not included unless specifically stated. Clients are free to determine their own shopping budget, and recommendations will always be tailored accordingly.",
    ],
  },
  {
    heading: "Confidentiality & Privacy",
    paragraphs: [
      "Discretion is central to the way we work. Any personal information, photographs, measurements, wardrobe details, or discussions shared during your engagement will be treated as strictly confidential.",
      "From time to time, Élevé may showcase styling transformations, wardrobe edits, or case studies as part of its portfolio or educational content. To protect client privacy, all such content is shared anonymously. Faces and any other identifying features will always be concealed or cropped, ensuring that clients cannot be identified.",
      "If we wish to feature your name, testimonial, or recognisable photographs, we will always seek your written consent beforehand.",
    ],
  },
  {
    heading: "Intellectual Property",
    paragraphs: [
      "All personalised reports, shopping guides, lookbooks, style frameworks, moodboards, presentations, PDFs, and any supporting material prepared by Élevé remain our intellectual property. These resources are intended solely for your personal use and may not be copied, distributed, reproduced, or used for commercial purposes without prior written permission.",
    ],
  },
  {
    heading: "Changes to Services",
    paragraphs: [
      "As our services continue to evolve, Élevé reserves the right to update these guidelines, pricing, or service offerings from time to time. Any such changes will not affect engagements that have already been confirmed and paid for.",
    ],
  },
];

/**
 * Terms & Conditions — the dedicated legal page, linked from the
 * footer. Carries the complete supplied "Client Experience Guidelines"
 * verbatim, set as a quiet editorial document in the site's language.
 */
export default function EleveTermsPage() {
  useEffect(() => {
    document.title = "Terms & Conditions · Élevé by Chandni";
  }, []);

  return (
    <div className="grain relative min-h-screen bg-ivory font-sans text-espresso">
      <header className="border-b border-espresso/10">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5 md:px-10">
          <Link to="/" className="group flex items-baseline gap-2" aria-label="Élevé by Chandni, back to the site">
            <span className="font-display text-2xl tracking-tight text-espresso transition-colors duration-500 group-hover:text-bronze">
              Élevé
            </span>
            <span className="hidden font-sans text-[9px] uppercase tracking-micro text-cocoa sm:inline">
              by Chandni
            </span>
          </Link>
          <Link to="/" className="link-line font-sans text-[10px] uppercase tracking-micro text-espresso">
            ← Back to the site
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[780px] px-6 pb-28 pt-16 md:px-10 lg:pt-24">
        <Reveal y={14}>
          <p className="eyebrow">Élevé by Chandni · Terms &amp; Conditions</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 font-display text-[clamp(2.2rem,5vw,3.6rem)] font-medium leading-[1.12] tracking-[-0.01em] text-espresso">
            Client Experience Guidelines
          </h1>
        </Reveal>
        <motion.span
          aria-hidden
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.4 }}
          className="mt-8 block h-px w-16 origin-left bg-bronze"
        />

        <Reveal delay={0.15}>
          <p className="mt-10 text-[15px] font-light leading-[1.9] text-cocoa">
            Thank you for choosing Élevé by Chandni. Every engagement is thoughtfully designed to be personal,
            collaborative, and tailored to your goals. The following guidelines help ensure a smooth experience for
            both you and our team.
          </p>
        </Reveal>

        <div className="mt-14 space-y-12">
          {TERMS_SECTIONS.map((section, i) => (
            <Reveal key={section.heading} delay={Math.min(0.05 * i, 0.15)}>
              <section className="hairline pt-10">
                <h2 className="font-display text-[clamp(1.3rem,2.4vw,1.7rem)] font-medium leading-tight text-espresso">
                  {section.heading}
                </h2>
                <div className="mt-5 space-y-5">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)} className="text-[15px] font-light leading-[1.9] text-cocoa">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}

          <Reveal>
            <section className="hairline pt-10">
              <p className="font-display text-[16px] italic leading-[1.7] text-espresso">
                Should you have any questions before or during your journey with Élevé, we’re always happy to help.
                You can reach us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="link-line text-bronze">
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </section>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-16 border-t border-espresso/10 pt-6">
          <p className="font-sans text-[10.5px] uppercase tracking-micro text-cocoa">
            © {new Date().getFullYear()} Élevé by Chandni · {LOCATION_LINE}
          </p>
        </Reveal>
      </main>

      <EleveWhatsApp />
    </div>
  );
}
