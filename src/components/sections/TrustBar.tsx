/* ─── Trust Bar ──────────────────────────────────────────────────── */
/* Server component — pure CSS marquee, no client JS required.       */

/* ─── SVG icons ──────────────────────────────────────────────────── */

function StethoscopeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <path d="M4.8 2.3A2 2 0 0 0 3 4.5v4a5 5 0 0 0 5 5h1a5 5 0 0 0 5-5v-4a2 2 0 0 0-1.8-2.2" />
      <path d="M8 15v1a6 6 0 0 0 6 6 4 4 0 0 0 4-4v-3" />
      <circle cx="18" cy="13" r="2" />
      <path d="M8 2v3" />
      <path d="M12 2v3" />
    </svg>
  );
}

function LaptopIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M2 20h20" />
    </svg>
  );
}

function DollarIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v12" />
      <path d="M15.5 9.5c0-1.38-1.57-2.5-3.5-2.5S8.5 8.12 8.5 9.5 10.07 12 12 12s3.5 1.12 3.5 2.5S13.93 17 12 17s-3.5-1.12-3.5-2.5" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <path d="M16 3H1v13h15V3z" />
      <path d="M16 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <path d="M12 2L3 5v5.09c0 5.1 3.42 9.87 9 11.01 5.58-1.14 9-5.91 9-11.01V5l-9-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function UserMdIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="4" />
      <path d="M18 8h4M20 6v4" />
    </svg>
  );
}

/* ─── Trust items ────────────────────────────────────────────────── */

const trustItems = [
  { icon: StethoscopeIcon, label: "Licensed Providers" },
  { icon: LaptopIcon, label: "100% Online" },
  { icon: DollarIcon, label: "Clear Pricing" },
  { icon: TruckIcon, label: "Shipped to Your Door" },
  { icon: ShieldCheckIcon, label: "HIPAA Secured" },
  { icon: UserMdIcon, label: "Doctor-Led Plans" },
];

/* ─── Marquee strip (rendered twice for seamless loop) ───────────── */

function MarqueeStrip() {
  return (
    <>
      {trustItems.map((item, idx) => (
        <span key={idx} className="flex items-center gap-2">
          <item.icon />
          <span>{item.label}</span>
          {/* dot separator */}
          <span className="mx-4 inline-block h-1 w-1 rounded-full bg-white/40" aria-hidden="true" />
        </span>
      ))}
    </>
  );
}

/* ─── Component ──────────────────────────────────────────────────── */

export default function TrustBar() {
  return (
    <section className="bg-forest-900 pt-20 sm:pt-24 lg:pt-28 py-2 sm:py-3 md:py-4 overflow-hidden">
      <div
        className="flex whitespace-nowrap animate-marquee text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-wider text-white/90"
        /* The animation runs translateX(0) -> translateX(-50%).
           Because the content is duplicated, the second half slides
           in seamlessly before the first half loops. */
      >
        <MarqueeStrip />
        <MarqueeStrip />
      </div>
    </section>
  );
}
