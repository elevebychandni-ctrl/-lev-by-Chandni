import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { EASE, scrollToId, stopScroll } from "@/components/site/motion";
import { CONTACT_EMAIL, LOCATION_LINE } from "@/lib/content";
import { cn } from "@/lib/utils";

import { BOOK_ID, ELEVE_NAV } from "./tokens";

/**
 * Global navigation — minimal and premium.
 * Transparent over the ivory hero at every breakpoint, settling onto
 * ivory with a hairline once the page moves. "Book a Call" is the single
 * persistent action.
 */
export default function EleveHeader() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstItemRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef<boolean>(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    stopScroll(open);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  /* Keyboard support — focus moves into the menu when it opens and returns to the toggle when it closes. */
  useEffect(() => {
    if (open) {
      firstItemRef.current?.focus({ preventScroll: true });
    } else if (wasOpen.current) {
      toggleRef.current?.focus({ preventScroll: true });
    }
    wasOpen.current = open;
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    window.setTimeout(() => scrollToId(id), open ? 450 : 0);
  };

  /** "Book a Call" travels to the booking suite where the calendar lives. */
  const book = () => go(BOOK_ID);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: EASE, delay: 0.2 }}
        className={cn(
          "fixed inset-x-0 top-0 z-[120] transition-all duration-700",
          scrolled && !open
            ? "border-b border-espresso/10 bg-ivory/95 backdrop-blur-[2px]"
            : "border-b border-transparent",
        )}
      >
        {/* three-part structure: logo left, links centered on the viewport, CTA right */}
        <nav
          className={cn(
            "relative mx-auto flex max-w-[1500px] items-center justify-between px-6 transition-all duration-700 md:px-10",
            scrolled ? "py-4" : "py-5 md:py-6 lg:py-8",
          )}
        >
          {/* the wordmark lives in the hero below lg; the bar carries it from lg up */}
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              scrollToId("top");
            }}
            className="group hidden items-baseline gap-2 lg:flex"
            aria-label="Élevé by Chandni, back to top"
          >
            <span className="font-display text-2xl tracking-tight text-espresso transition-colors duration-500 group-hover:text-bronze md:text-[26px]">
              Élevé
            </span>
            <span className="hidden whitespace-nowrap font-sans text-[9px] uppercase tracking-micro text-cocoa sm:inline">
              by Chandni
            </span>
          </button>

          {/* centre group — pinned to the true middle of the bar, independent of the flanks;
              gap-6 until xl so the row clears the logo and CTA at 1024px */}
          <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-6 lg:flex xl:gap-10">
            {ELEVE_NAV.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => go(link.id)}
                className="link-line whitespace-nowrap font-sans text-[11px] uppercase tracking-micro text-espresso transition-colors duration-500 hover:text-bronze"
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={book}
            className="hidden whitespace-nowrap border border-espresso bg-espresso px-6 py-2.5 font-sans text-[11px] uppercase tracking-micro text-ivory transition-all duration-700 hover:border-bronze hover:bg-bronze lg:block"
          >
            Book a Call
          </button>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="eleve-mobile-menu"
            className="relative ml-auto flex h-11 w-11 items-center justify-center lg:hidden"
          >
            <span
              className={cn(
                "absolute h-px w-6 bg-espresso transition-all duration-500",
                open ? "rotate-45" : "-translate-y-[4px]",
              )}
            />
            <span
              className={cn(
                "absolute h-px w-6 bg-espresso transition-all duration-500",
                open ? "-rotate-45" : "translate-y-[4px]",
              )}
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="eleve-mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="fixed inset-0 z-[110] flex flex-col justify-between overflow-y-auto bg-ivory px-6 pb-10 pt-28"
          >
            <motion.nav
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ staggerChildren: 0.07, delayChildren: 0.1 }}
              className="flex flex-col"
            >
              {[...ELEVE_NAV, { label: "Book a Call", id: BOOK_ID }].map((link, index) => (
                <span key={link.id} className="overflow-hidden border-b border-espresso/10 py-1">
                  <motion.button
                    ref={index === 0 ? firstItemRef : undefined}
                    type="button"
                    variants={{
                      hidden: { y: "110%" },
                      show: { y: "0%", transition: { duration: 0.9, ease: EASE } },
                    }}
                    onClick={() => (link.id === BOOK_ID ? book() : go(link.id))}
                    className={cn(
                      "block py-4 font-display text-4xl",
                      link.id === BOOK_ID ? "italic text-bronze" : "text-espresso",
                    )}
                  >
                    {link.label}
                  </motion.button>
                </span>
              ))}
            </motion.nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-10 space-y-2"
            >
              <p className="eyebrow">{LOCATION_LINE}</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-sans text-sm text-cocoa">
                {CONTACT_EMAIL}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
