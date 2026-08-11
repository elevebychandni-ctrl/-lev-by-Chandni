import { motion } from "framer-motion";
import { lazy, Suspense, useEffect, useRef, useState } from "react";

import { EASE } from "@/components/site/motion";

/** The Cal SDK is heavy — split into its own chunk, fetched only as the booking suite approaches. */
const Cal = lazy(() => import("@calcom/embed-react"));

/** Cal.com — the scheduling event behind the booking suite; the inline booker is the only place visitors book. */
const CAL_LINK = "elevebychandni/fdc";

/** Isolated embed queue for this event, mirroring the official snippet. */
const CAL_NAMESPACE = "fdc";

/**
 * The official Cal.com inline booker, configured exactly as supplied by
 * the client (namespace "fdc", month view, per-theme brand variables).
 * Lazily mounted as the booking section approaches so the closing pages
 * stay light, then fading in softly once the booker signals ready — no
 * layout shift, the host reserves its height from the start. The host is
 * a quiet bronze hairline frame on the section's espresso field.
 */
export default function EleveCalInline() {
  const hostRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState<boolean>(false);
  const [ready, setReady] = useState<boolean>(false);

  /* Lazy mount — the embed begins loading shortly before it scrolls into view. */
  useEffect(() => {
    const host = hostRef.current;
    if (!host || typeof IntersectionObserver === "undefined") {
      setMounted(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setMounted(true);
          observer.disconnect();
        }
      },
      { rootMargin: "700px 0px" },
    );
    observer.observe(host);
    return () => observer.disconnect();
  }, []);

  /* Client-supplied embed configuration — applied verbatim to the shared namespace.
     The SDK module is imported on demand; it resolves from the same chunk the lazy
     <Cal> component loads, so nothing is fetched twice. */
  useEffect(() => {
    if (!mounted) return;

    let cancelled = false;
    const onLinkReady = () => setReady(true);
    const apiPromise = import("@calcom/embed-react").then((mod) => mod.getCalApi({ namespace: CAL_NAMESPACE }));

    apiPromise
      .then((cal) => {
        if (cancelled) return;
        cal("ui", {
          cssVarsPerTheme: {
            light: {
              "cal-brand": "#983f47",
            },
            dark: {
              "cal-brand": "#e7beac",
            },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
        cal("on", { action: "linkReady", callback: onLinkReady });
      })
      .catch((error: unknown) => {
        console.error("[cal.com] inline embed failed to initialise", error);
      });

    /* Never hold the calendar hidden if the ready signal is missed. */
    const fallback = window.setTimeout(() => setReady(true), 4500);

    return () => {
      cancelled = true;
      window.clearTimeout(fallback);
      apiPromise.then((cal) => cal("off", { action: "linkReady", callback: onLinkReady })).catch(() => undefined);
    };
  }, [mounted]);

  return (
    <div
      ref={hostRef}
      role="region"
      aria-label="Book a call, scheduling calendar"
      className="relative min-h-[560px] border border-bronze/40 p-6 md:p-8"
    >
      <motion.p
        aria-hidden
        initial={false}
        animate={{ opacity: ready ? 0 : 1 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center font-sans text-[10px] uppercase tracking-micro text-ivory/60"
      >
        Preparing the calendar…
      </motion.p>

      {mounted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: ready ? 1 : 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="w-full"
        >
          <Suspense fallback={null}>
            <Cal
              namespace={CAL_NAMESPACE}
              calLink={CAL_LINK}
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
            />
          </Suspense>
        </motion.div>
      ) : null}
    </div>
  );
}
