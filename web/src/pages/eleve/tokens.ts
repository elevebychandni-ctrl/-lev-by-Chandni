/**
 * Élevé by Chandni — global tokens: navigation and footer links.
 * Every "Book a Call" CTA scrolls to the booking suite (#book), where
 * the inline Cal.com calendar (EleveCalInline.tsx) is the only booking
 * surface.
 */

/** Anchor id of the closing booking section; also marks the Book entry in the mobile menu. */
export const BOOK_ID = "book";

export interface EleveNavLink {
  label: string;
  id: string;
}

export const ELEVE_NAV: EleveNavLink[] = [
  { label: "The Belief", id: "philosophy" },
  { label: "Services", id: "services" },
  { label: "Outcomes", id: "outcomes" },
  { label: "About", id: "about" },
  { label: "Testimonials", id: "testimonials" },
];

export interface PlaceholderLink {
  label: string;
  href: string | null;
}

/** Live profiles — each opens in a new tab from the footer's Follow column. */
export const SOCIAL_LINKS: PlaceholderLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/elevebychandni" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/chandniahuja" },
  { label: "Facebook", href: "https://www.facebook.com/share/14etukmyrT6/?mibextid=wwXIfr" },
];

/** Terms & Conditions lives on its own page; a Privacy Policy link can join it when supplied. */
export const LEGAL_LINKS: PlaceholderLink[] = [{ label: "Terms & Conditions", href: "/terms" }];
