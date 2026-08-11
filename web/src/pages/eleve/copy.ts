/**
 * Élevé by Chandni — finalized client copy.
 * Every string is reproduced exactly as supplied by the client — do not
 * rewrite or shorten. Punctuation follows the client's August 2026
 * editorial cleanup: no em dashes anywhere in rendered copy.
 */

export interface ElevePackage {
  index: string;
  name: string;
  tagline: string;
  description: string;
  includesLabel: string;
  includes: string[];
  leavesWith: string;
  priceLabel: string;
  /** Original price — shown struck through while the launch offer runs. */
  priceOriginal: string;
  /** August 2026 launch-offer price — the price in focus. */
  priceOffer: string;
  cta: string;
}

/**
 * Temporary August 2026 launch offer — hardcoded by design; remove these
 * two lines and the offer block in EleveServices when the campaign ends.
 */
export const ELEVE_OFFER = {
  label: "August Launch Offer",
  discount: "15% Off",
} as const;

export const ELEVE_PACKAGES: ElevePackage[] = [
  {
    index: "01",
    name: "Élevé Edit",
    tagline: "Discover the styles, fits and pieces that truly work for you.",
    description:
      "A focused experience for those seeking clarity around personal style and everyday presence. Understand what suits you, shop with intention and stop relying on trial and error.",
    includesLabel: "Includes",
    includes: [
      "40-minute private consultation",
      "Personal Style Archetype Assessment",
      "Body Shape Analysis & Fit Guidance",
      "Personalised Shopping Edit (15-20 pieces)",
      "Virtual Try-On Session",
      "Styling & Outfit Building Session",
    ],
    leavesWith: "Leaves you with a personalised Body & Style Guide and Outfit Formula Guide you’ll use every day.",
    priceLabel: "Starts from",
    priceOriginal: "₹11,999",
    priceOffer: "₹10,199",
    cta: "Book Call",
  },
  {
    index: "02",
    name: "Élevé Signature",
    tagline: "Build a wardrobe that supports your lifestyle, goals and personal brand.",
    description:
      "For those ready to create a wardrobe that works as a complete system. Spend less time deciding what to wear and more time showing up with confidence.",
    includesLabel: "Includes everything in Élevé Edit, plus",
    includes: [
      "Wardrobe Audit & Gap Analysis",
      "Capsule Wardrobe Plan",
      "Personal Style Moodboard",
      "Personalised Shopping Guide (50+ pieces)",
      "Image & Personal Brand Alignment",
      "2 Weeks of WhatsApp Support",
    ],
    leavesWith:
      "Leaves you with a personalised Lookbook, a wardrobe strategy and a clear direction for every future purchase.",
    priceLabel: "Starts from",
    priceOriginal: "₹21,999",
    priceOffer: "₹18,699",
    cta: "Book Call",
  },
  {
    index: "03",
    name: "Élevé Privé",
    tagline: "Your complete personal style blueprint.",
    description:
      "Our most comprehensive experience, combining wardrobe strategy, colour analysis and advanced image alignment to refine every aspect of how you show up.",
    includesLabel: "Includes everything in Élevé Signature, plus",
    includes: [
      "Personal Colour Analysis",
      "Face Shape & Accessories Styling",
      "Advanced Image & Personal Brand Alignment",
      "Extended Shopping Guide (100+ pieces)",
      "Grooming & Makeup Guide",
      "4 Weeks of WhatsApp Support",
    ],
    leavesWith:
      "Leaves you with a complete Personal Style Blueprint you’ll use to shop, dress and present yourself with confidence for years to come",
    priceLabel: "Starts from",
    priceOriginal: "₹34,999",
    priceOffer: "₹29,749",
    cta: "Book Call",
  },
];

export interface EleveAdvisory {
  title: string;
  description: string;
}

export const ELEVE_ADVISORY: EleveAdvisory[] = [
  {
    title: "Personal Brand Mapping",
    description: "Shape how you’re perceived across every room and every platform.",
  },
  {
    title: "Cross-Cultural Awareness & Social Cues",
    description: "Navigate global workplaces, intercultural teams and international travel with confidence.",
  },
  {
    title: "Executive & Business Etiquette",
    description: "Navigate business dining, networking and professional etiquette with ease.",
  },
  {
    title: "First Impressions & Introductions",
    description: "Introduce yourself with confidence and leave a lasting impression.",
  },
  {
    title: "Body Language & Non-Verbal Communication",
    description: "Project confidence, credibility and presence before you speak.",
  },
  {
    title: "The Art of Small Talk",
    description: "Build meaningful conversations in professional and social settings.",
  },
];

export const ELEVE_STANDALONE: string[] = [
  "Personal Shopping (Virtual or In-Person across Delhi NCR)",
  "Colour Analysis",
  "Event & Occasion Styling: Keynote Speeches, Personal Brand Shoots, Work Conferences & Travel",
];

export const STANDALONE_CLOSING =
  "Interested in exploring these? Mention them during your 1:1 consultation, and we’ll recommend the modules best suited to your goals.";

export interface EleveOutcome {
  index: string;
  text: string;
}

export const ELEVE_OUTCOMES: EleveOutcome[] = [
  { index: "01", text: "Discover a signature style that’s authentically yours." },
  { index: "02", text: "Stop wasting money on clothes you’ll never wear." },
  { index: "03", text: "Know exactly what suits you and what to stop buying." },
  { index: "04", text: "Create more outfits from the clothes you already own." },
  { index: "05", text: "Spend less time deciding what to wear." },
  { index: "06", text: "Build a wardrobe that supports your lifestyle and strengthens your personal brand" },
];

export const ELEVE_TESTIMONIALS: string[] = [
  "As someone working closely with government stakeholders in India, I needed a wardrobe that felt appropriate for ministry meetings without being uncomfortable in the climate. Chandni understood both, and the recommendations were spot on.",
  "The outfit combinations were my favourite part. I finally have a capsule wardrobe where everything works together, and the layering formulas made getting dressed ridiculously easy.",
  "What stood out was how personalised the process was. Chandni considered my body type, the image I wanted to project and even the values of the company I work for when putting everything together.",
];

export interface EleveMethodStep {
  index: string;
  title: string;
  body: string;
  points: string[];
}

/** The six chapters of the working method — client-supplied, verbatim. */
export const ELEVE_METHOD: EleveMethodStep[] = [
  {
    index: "01",
    title: "The Conversation",
    body: "Every engagement begins with understanding who you are, how you live, and how you want to show up. A private, unhurried consultation: your lifestyle, your wardrobe frustrations, your ambitions.",
    points: ["Lifestyle & context", "Style preferences", "Budget & goals"],
  },
  {
    index: "02",
    title: "The Analysis",
    body: "Style is studied before it is styled. Your personal archetype is mapped, your proportions understood, your colours read, so every recommendation is grounded in you, not in trend.",
    points: ["Style archetype assessment", "Body shape & fit", "Colour, where included"],
  },
  {
    index: "03",
    title: "The Direction",
    body: "Findings become a direction: a moodboard that feels unmistakably yours, a capsule plan, and a curated shopping edit. You know exactly what to buy, what to avoid, and what truly suits you.",
    points: ["Personal moodboard", "Capsule wardrobe plan", "Curated shopping edit"],
  },
  {
    index: "04",
    title: "The Fitting",
    body: "Pieces arrive; nothing is left to chance. Together, over a virtual try-on, each piece is judged on your body and in your light: kept, returned, or tailored. Nothing wasted.",
    points: ["Virtual try-on session", "Keep / return decisions", "Fit refinement"],
  },
  {
    index: "05",
    title: "The Styling",
    body: "The wardrobe learns to work. Outfits are built, formulas are written, finishing details resolved, so you create more looks from what you own and dress without deliberation.",
    points: ["Outfit building", "Personal outfit formulas", "Finishing session"],
  },
  {
    index: "06",
    title: "The Elevation",
    body: "The result is not a new wardrobe. It is a presence. A personal brand that feels intentional, effortless, and unmistakably your own, with guidance that holds for years.",
    points: ["Image alignment", "Wardrobe management", "Long-term guidance"],
  },
];
