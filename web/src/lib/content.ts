/**
 * Élevé by Chandni — shared site constants: contact details and the
 * photography actually carried by the live site. All narrative copy
 * lives in `src/pages/eleve/copy.ts`.
 */

export const CONTACT_EMAIL = "queries@elevebychandni.com";
export const LOCATION_LINE = "New Delhi · Virtual Worldwide";

export interface SitePhoto {
  src: string;
  /** WebP variant served via <picture>; the JPG stays as the universal fallback. */
  srcWebp?: string;
  /** AVIF variant — smallest file, preferred by every modern browser. */
  srcAvif?: string;
  /** Responsive candidates per format (the hero portrait) sharing one sizes attribute. */
  srcsetAvif?: string;
  srcsetWebp?: string;
  sizes?: string;
  alt: string;
}

export const PHOTOS = {
  marbleTable: {
    src: "/images/marble-table.jpg",
    srcWebp: "/images/marble-table.webp",
    srcAvif: "/images/marble-table.avif",
    srcsetAvif:
      "/images/marble-table-800.avif 800w, /images/marble-table-1000.avif 1000w, /images/marble-table.avif 1400w",
    srcsetWebp:
      "/images/marble-table-800.webp 800w, /images/marble-table-1000.webp 1000w, /images/marble-table.webp 1400w",
    /**
     * The hero ships two compositions and the inactive one still resolves a
     * candidate, so both must describe the same width at every breakpoint —
     * otherwise the portrait is fetched twice.
     *
     * Below `md` the portrait is cropped into a short band, where `object-cover`
     * would throw away most of the 1400w plate. Describing that band at 72vw
     * lands a DPR-3 phone on the 1000w candidate: still ~2.5× the CSS box, at
     * roughly half the bytes on the LCP path.
     */
    sizes: "(min-width: 1024px) 620px, (min-width: 768px) 560px, 72vw",
    alt: "Chandni Ahuja in a pinstripe suit, seated at a marble table before pale blue panelling",
  },
  libraryBook: {
    src: "/images/library-book.jpg",
    srcWebp: "/images/library-book.webp",
    srcAvif: "/images/library-book.avif",
    srcsetAvif:
      "/images/library-book-640.avif 640w, /images/library-book-960.avif 960w, /images/library-book.avif 1200w",
    srcsetWebp:
      "/images/library-book-640.webp 640w, /images/library-book-960.webp 960w, /images/library-book.webp 1200w",
    sizes: "(min-width: 1024px) 620px, (min-width: 768px) 448px, calc(100vw - 72px)",
    alt: "Chandni studying a large fashion volume in a softly lit library",
  },
  seatedPortrait: {
    src: "/images/seated-portrait.jpg",
    srcWebp: "/images/seated-portrait.webp",
    srcAvif: "/images/seated-portrait.avif",
    srcsetAvif:
      "/images/seated-portrait-560.avif 560w, /images/seated-portrait-960.avif 960w, /images/seated-portrait.avif 1400w",
    srcsetWebp:
      "/images/seated-portrait-560.webp 560w, /images/seated-portrait-960.webp 960w, /images/seated-portrait.webp 1400w",
    sizes: "(min-width: 1024px) 540px, (min-width: 768px) 420px, calc(100vw - 72px)",
    alt: "Black and white portrait of Chandni seated in a pinstripe suit, chin resting on her hand",
  },
} as const satisfies Record<string, SitePhoto>;
