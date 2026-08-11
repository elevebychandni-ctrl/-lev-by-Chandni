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
    srcsetAvif: "/images/marble-table-800.avif 800w, /images/marble-table.avif 1400w",
    srcsetWebp: "/images/marble-table-800.webp 800w, /images/marble-table.webp 1400w",
    sizes: "(min-width: 1024px) 620px, (min-width: 768px) 560px, 100vw",
    alt: "Chandni Ahuja in a pinstripe suit, seated at a marble table before pale blue panelling",
  },
  libraryBook: {
    src: "/images/library-book.jpg",
    srcWebp: "/images/library-book.webp",
    srcAvif: "/images/library-book.avif",
    alt: "Chandni studying a large fashion volume in a softly lit library",
  },
  seatedPortrait: {
    src: "/images/seated-portrait.jpg",
    srcWebp: "/images/seated-portrait.webp",
    srcAvif: "/images/seated-portrait.avif",
    alt: "Black and white portrait of Chandni seated in a pinstripe suit, chin resting on her hand",
  },
} as const satisfies Record<string, SitePhoto>;
