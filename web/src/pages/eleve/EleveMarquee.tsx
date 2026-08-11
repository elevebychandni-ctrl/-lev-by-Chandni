import { memo } from "react";

const WORDS: string[] = ["Style", "Image", "Presence", "Perception", "Identity", "Confidence"];

/** Each visual row carries the words twice so it always outspans the widest viewport. */
const ROW_WORDS: string[] = [...WORDS, ...WORDS];

/**
 * Infinite editorial ticker separating the hero from the story — espresso
 * field, ivory serif italics, bronze marks, drifting right-to-left on the
 * shared marquee animation (paused on hover and under reduced motion).
 */
const EleveMarquee = () => {
  /* Both visual rows are decorative for assistive tech; the section's aria-label carries the words. */
  const row = (suffix: "a" | "b") => (
    <div aria-hidden className="flex shrink-0 items-center">
      {ROW_WORDS.map((word, index) => (
        <span key={`${word}-${index}-${suffix}`} className="flex items-center">
          <span className="px-8 font-display text-2xl italic text-ivory/90 md:px-14 md:text-4xl">{word}</span>
          <span className="text-xs text-bronze md:text-sm">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <section
      aria-label="Style, Image, Presence, Perception, Identity, Confidence"
      className="relative overflow-hidden border-y border-bronze/20 bg-espresso py-7 md:py-9"
    >
      <div className="flex w-max will-change-transform animate-marquee hover:[animation-play-state:paused]">
        {row("a")}
        {row("b")}
      </div>
    </section>
  );
};

export default memo(EleveMarquee);
