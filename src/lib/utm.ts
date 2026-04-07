export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

const UTM_KEYS: (keyof UtmParams)[] = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

const STORAGE_KEY = "peptiderx_utm";

/** Read UTM parameters from the current URL and persist them in sessionStorage. */
export function captureUtmParams(): void {
  if (typeof window === "undefined") return;

  const searchParams = new URLSearchParams(window.location.search);
  const params: UtmParams = {};
  let hasAny = false;

  for (const key of UTM_KEYS) {
    const value = searchParams.get(key);
    if (value) {
      params[key] = value;
      hasAny = true;
    }
  }

  if (hasAny) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(params));
  }
}

/** Retrieve previously captured UTM parameters from sessionStorage. */
export function getUtmParams(): UtmParams {
  if (typeof window === "undefined") return {};

  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as UtmParams) : {};
  } catch {
    return {};
  }
}
