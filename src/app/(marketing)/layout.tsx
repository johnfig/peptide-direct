import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { organizationSchema } from "@/lib/schema";

/**
 * Marketing layout — wraps all public-facing pages with the
 * shared Header, Footer, and conversion components.
 */
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Organization structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema()),
        }}
      />

      <Header />

      {/* StickyHeaderCTA placeholder — will be replaced with real component */}
      <div id="sticky-header-cta" />

      <main className="min-h-screen pt-[72px]">{children}</main>

      {/* ExitIntentPopup placeholder — will be replaced with real component */}
      <div id="exit-intent-popup" />

      <Footer />
    </>
  );
}
