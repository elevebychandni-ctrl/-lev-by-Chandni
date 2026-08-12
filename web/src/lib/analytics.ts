/** Allowed values for cta_click event parameters — keeps GA4 reporting consistent. */
export type CtaType = "booking" | "navigation" | "contact" | "social";

export interface CtaTracking {
  cta_name: string;
  cta_location: string;
  cta_type: CtaType;
  /** Section hash, route path, or external hostname — never personal data. */
  destination?: string;
}

/** Fire a single GA4 cta_click event through the existing deferred gtag queue. */
export function trackCtaClick({ cta_name, cta_location, cta_type, destination }: CtaTracking): void {
  window.gtag?.("event", "cta_click", {
    cta_name,
    cta_location,
    cta_type,
    ...(destination ? { destination } : {}),
  });
}

/** Hostname only — safe for external link destinations. */
export function externalDestination(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "external";
  }
}
