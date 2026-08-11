import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { EASE } from "@/components/site/motion";
import type { SitePhoto } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * The site's bespoke photographic primitives — curtain reveals and
 * framed figures, set in the unified ivory / espresso / bronze palette.
 */

interface CurtainProps {
  photo: SitePhoto;
  className?: string;
  imgClassName?: string;
  delay?: number;
  from?: "bottom" | "left" | "right";
  immediate?: boolean;
  priority?: boolean;
}

/** Curtain reveal — the photograph is unveiled like a draped canvas. */
export function Curtain({
  photo,
  className,
  imgClassName,
  delay = 0,
  from = "bottom",
  immediate = false,
  priority = false,
}: CurtainProps) {
  const clipFrom =
    from === "bottom" ? "inset(0% 0% 100% 0%)" : from === "left" ? "inset(0% 100% 0% 0%)" : "inset(0% 0% 0% 100%)";
  const visible = { clipPath: "inset(0% 0% 0% 0%)" };
  const settle = { scale: 1 };

  return (
    <div className={cn("relative overflow-hidden bg-sand", className)}>
      <motion.div
        className="h-full w-full"
        initial={{ clipPath: clipFrom }}
        {...(immediate
          ? { animate: visible }
          : { whileInView: visible, viewport: { once: true, margin: "-8% 0px" } })}
        transition={{ duration: 1.3, ease: EASE, delay }}
      >
        <picture className="contents">
          {photo.srcAvif ? (
            <source srcSet={photo.srcsetAvif ?? photo.srcAvif} sizes={photo.sizes} type="image/avif" />
          ) : null}
          {photo.srcWebp ? (
            <source srcSet={photo.srcsetWebp ?? photo.srcWebp} sizes={photo.sizes} type="image/webp" />
          ) : null}
          <motion.img
            src={photo.src}
            alt={photo.alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            {...(priority ? { fetchPriority: "high" as const } : {})}
            initial={{ scale: 1.06 }}
            {...(immediate
              ? { animate: settle }
              : { whileInView: settle, viewport: { once: true, margin: "-8% 0px" } })}
            transition={{ duration: 1.3, ease: EASE, delay }}
            className={cn("h-full w-full object-cover", imgClassName)}
          />
        </picture>
      </motion.div>
    </div>
  );
}

/** Poster heading — an uppercase serif declaration. */
export function PosterHeading({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <h2
      className={cn(
        "font-display text-[clamp(2rem,5vw,3.9rem)] font-medium uppercase leading-[1.06] tracking-[-0.01em]",
        light ? "text-ivory" : "text-espresso",
      )}
    >
      {children}
    </h2>
  );
}
