import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import React, { useEffect, useRef } from "react";

import type { SitePhoto } from "@/lib/content";
import { cn } from "@/lib/utils";

/** Shared easing — a long, graceful settle. */
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

let lenisInstance: Lenis | null = null;

/** Buttery smooth scrolling, disabled for users who prefer reduced motion. */
export function useSmoothScroll(): void {
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1 });
    lenisInstance = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisInstance = null;
    };
  }, [prefersReduced]);
}

/** Scrolls elegantly to a section by id (falls back to native behaviour). */
export function scrollToId(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenisInstance) {
    lenisInstance.scrollTo(el, { offset: -8, duration: 1.6 });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function stopScroll(stopped: boolean): void {
  if (!lenisInstance) return;
  if (stopped) lenisInstance.stop();
  else lenisInstance.start();
}

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  duration?: number;
  /**
   * An opacity fade withholds content from paint until it completes, which
   * pushes back Largest Contentful Paint. Above-the-fold copy therefore rises
   * without fading — legible from the first frame, still in motion.
   */
  fade?: boolean;
}

/** Quiet fade-and-rise reveal on scroll. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 20,
  once = true,
  duration = 0.85,
  fade = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={fade ? { opacity: 0, y } : { y }}
      whileInView={fade ? { opacity: 1, y: 0 } : { y: 0 }}
      viewport={{ once, margin: "-10% 0px" }}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

interface LinesProps {
  lines: React.ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  as?: "span" | "div" | "p";
  animate?: boolean;
}

/**
 * Editorial masked line reveal — each line rises from beneath a crop.
 * Pass `animate` to control imperatively (e.g. after the preloader),
 * otherwise it reveals on scroll.
 */
export function Lines({
  lines,
  className,
  lineClassName,
  delay = 0,
  stagger = 0.09,
  as = "span",
  animate,
}: LinesProps) {
  const Tag = motion[as];
  const controlled = typeof animate === "boolean";

  return (
    <Tag
      className={cn("block", className)}
      initial="hidden"
      {...(controlled
        ? { animate: animate ? "show" : "hidden" }
        : { whileInView: "show", viewport: { once: true, margin: "-12% 0px" } })}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {lines.map((line, i) => (
        <span key={i} className={cn("block overflow-hidden pb-[0.08em] -mb-[0.08em]", lineClassName)}>
          <motion.span
            className="block will-change-transform"
            variants={{
              hidden: { y: "112%" },
              show: { y: "0%", transition: { duration: 0.95, ease: EASE } },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

interface ParallaxImageProps {
  photo: SitePhoto;
  className?: string;
  imgClassName?: string;
  speed?: number;
  priority?: boolean;
  caption?: string;
  /** Stagger offset (seconds) so grouped photographs enter one after another. */
  delay?: number;
}

/**
 * Editorial photograph: soft parallax drift inside a cropped frame,
 * with a slow settle when it first enters view.
 */
export function ParallaxImage({
  photo,
  className,
  imgClassName,
  speed = 1,
  priority = false,
  caption,
  delay = 0,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`${-2.75 * speed}%`, `${2.75 * speed}%`]);

  return (
    <figure className={cn("relative", className)}>
      <div ref={ref} className="relative h-full w-full overflow-hidden bg-sand">
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
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1.05, opacity: 1 }}
            viewport={{ once: true, margin: "-5% 0px" }}
            transition={{ duration: 1.2, ease: EASE, delay, opacity: { duration: 0.9, ease: EASE, delay } }}
            style={prefersReduced ? undefined : { y }}
            className={cn("h-full w-full object-cover will-change-transform", imgClassName)}
          />
        </picture>
      </div>
      {caption ? (
        <figcaption className="mt-3 font-sans text-[10px] uppercase tracking-micro text-cocoa">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

interface PhotoFadeProps {
  photo: SitePhoto;
  className?: string;
  imgClassName?: string;
  /** Stagger offset (seconds) for grouped photographs. */
  delay?: number;
  caption?: string;
  captionClassName?: string;
  scaleFrom?: number;
  blur?: boolean;
  priority?: boolean;
}

/**
 * Quiet photograph entrance — a staggered fade with a gentle scale settle
 * (optionally through a soft blur) as it enters the viewport.
 */
export function PhotoFade({
  photo,
  className,
  imgClassName,
  delay = 0,
  caption,
  captionClassName,
  scaleFrom = 1.03,
  blur = false,
  priority = false,
}: PhotoFadeProps) {
  return (
    <figure className={cn("relative", className)}>
      <div className="h-full w-full overflow-hidden bg-sand">
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
            initial={{ opacity: 0, scale: scaleFrom, filter: blur ? "blur(8px)" : "blur(0px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 1.05, ease: EASE, delay }}
            className={cn("h-full w-full object-cover will-change-transform", imgClassName)}
          />
        </picture>
      </div>
      {caption ? (
        <figcaption
          className={cn("mt-3 font-sans text-[10px] uppercase tracking-micro text-cocoa", captionClassName)}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

/** Numbered editorial section label — "( 01 ) — The Philosophy". */
export function Eyebrow({ children, className, light = false }: EyebrowProps) {
  return (
    <Reveal className={className} y={14}>
      <p className={cn("eyebrow", light && "text-ivory/75")}>{children}</p>
    </Reveal>
  );
}

interface TextButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  light?: boolean;
}

/** Understated uppercase text link with sliding underline and drifting arrow. */
export function TextButton({ children, onClick, className, light = false }: TextButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group inline-flex items-baseline gap-3 font-sans text-[11px] uppercase tracking-micro transition-colors duration-500",
        light ? "text-ivory hover:text-bronze" : "text-espresso hover:text-bronze",
        className,
      )}
    >
      <span className="link-line">{children}</span>
      <span aria-hidden className="inline-block transition-transform duration-500 ease-out group-hover:translate-x-1.5">
        →
      </span>
    </button>
  );
}

interface SolidButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  light?: boolean;
  type?: "button" | "submit";
}

/** Primary action — quiet, confident, tactile. */
export function SolidButton({ children, onClick, className, light = false, type = "button" }: SolidButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileTap={{ scale: 0.975 }}
      transition={{ duration: 0.25, ease: EASE }}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden px-9 py-4 font-sans text-[11px] uppercase tracking-micro transition-colors duration-700",
        light
          ? "border border-ivory/40 text-ivory hover:border-ivory hover:bg-ivory hover:text-espresso"
          : "bg-espresso text-ivory hover:bg-bronze",
        className,
      )}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
