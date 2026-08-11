import { AnimatePresence, motion } from "framer-motion";
import { lazy, Suspense, useEffect, useRef, useState } from "react";

import { EASE } from "@/components/site/motion";

/** The Cal SDK is heavy — split into its own chunk, fetched only as the booking suite approaches. */
const Cal = lazy(() => import("@calcom/embed-react"));

/** Cal.com — the scheduling event behind the booking suite; the inline booker is the only place visitors book. */
const CAL_LINK = "elevebychandni/fdc";

/** Isolated embed queue for this event, mirroring the official snippet. */
const CAL_NAMESPACE = "fdc";

/**
 * Cal.com's hosted booker is a full application — roughly 2 MB over ~90 requests —
 * and needs several seconds before it is interactive. The page is ~18,000px tall
 * and the booking suite sits at the very bottom, so mounting two viewports ahead
 * still costs nothing on first load while giving the embed a real head start.
 */
const MOUNT_MARGIN = "2000px 0px";

/** Sockets are opened a little earlier still — a handshake is a few hundred bytes
    and removes ~400ms of cold DNS/TCP/TLS from the embed's critical path. */
const WARM_MARGIN = "3600px 0px";

/** The booker's own assets and the avatars it renders come from two origins. */
const CAL_ORIGINS = ["https://app.cal.com", "https://cal.com"];

/** Safety net: reveal the calendar even if the `linkReady` signal never arrives. */
const READY_FALLBACK_MS = 10000;

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

  /* Lazy mount, in two stages — sockets to Cal.com are warmed first, then the
     embed itself mounts as the booking suite approaches. Neither fires anywhere
     near the top of the page. */
  useEffect(() => {
    const host = hostRef.current;
    if (!host || typeof IntersectionObserver === "undefined") {
      setMounted(true);
      return;
    }

    const warm = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        warm.disconnect();
        for (const origin of CAL_ORIGINS) {
          if (document.head.querySelector(`link[rel="preconnect"][href="${origin}"]`)) continue;
          const link = document.createElement("link");
          link.rel = "preconnect";
          link.href = origin;
          link.crossOrigin = "";
          document.head.appendChild(link);
        }
      },
      { rootMargin: WARM_MARGIN },
    );

    const mount = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        mount.disconnect();
        setMounted(true);
      },
      { rootMargin: MOUNT_MARGIN },
    );

    warm.observe(host);
    mount.observe(host);
    return () => {
      warm.disconnect();
      mount.disconnect();
    };
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
    const fallback = window.setTimeout(() => setReady(true), READY_FALLBACK_MS);

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
      {/* the waiting state — the site's own bronze hairline, drawn slowly across a
          quiet track, rather than a spinner */}
      <AnimatePresence>
        {ready ? null : (
          <motion.div
            key="preparing"
            aria-hidden
            initial={false}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-5"
          >
            <p className="font-sans text-[10px] uppercase tracking-micro text-ivory/60">Preparing the calendar…</p>
            <span className="relative block h-px w-24 overflow-hidden bg-ivory/15">
              <motion.span
                className="absolute inset-y-0 left-0 w-1/3 bg-bronze"
                initial={{ x: "-100%" }}
                animate={{ x: "300%" }}
                transition={{ duration: 1.9, ease: EASE, repeat: Infinity, repeatDelay: 0.15 }}
              />
            </span>
          </motion.div>
        )}
      </AnimatePresence>

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
