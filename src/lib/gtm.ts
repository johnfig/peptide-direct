declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

/** Push a custom event to the GTM dataLayer. */
export function pushEvent(
  event: string,
  data?: Record<string, unknown>
): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data });
}

/** Track when a user begins interacting with a form. */
export function trackFormStart(formName: string): void {
  pushEvent("form_start", { form_name: formName });
}

/** Track when a user successfully submits a form. */
export function trackFormComplete(formName: string): void {
  pushEvent("form_complete", { form_name: formName });
}

/** Track when a consultation is booked. */
export function trackConsultationBooked(): void {
  pushEvent("consultation_booked");
}

/** Track CTA button clicks with name and page location. */
export function trackCtaClick(ctaName: string, location: string): void {
  pushEvent("cta_click", { cta_name: ctaName, cta_location: location });
}
