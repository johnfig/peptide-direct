import Link from "next/link";

/**
 * Landing page layout — minimal, distraction-free wrapper.
 * No navigation or full footer to maximize conversion focus.
 */
export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Minimal header — logo only */}
      <header className="fixed left-0 right-0 top-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-0.5">
            <span className="text-xl font-bold tracking-tight sm:text-2xl">
              <span className="text-navy">Peptide</span>
              <span className="text-medical-blue">Rx</span>
            </span>
            <span className="ml-1 text-lg font-medium text-gray-500 sm:text-xl">
              Direct
            </span>
          </Link>
        </div>
      </header>

      <main className="min-h-screen pt-[64px]">{children}</main>

      {/* Minimal footer — legal links only */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-6 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} PeptideRx Direct. All rights
            reserved.
          </p>
          <nav className="flex gap-4 text-xs text-gray-400">
            <Link href="/privacy" className="hover:text-gray-600">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-600">
              Terms of Service
            </Link>
            <Link href="/hipaa" className="hover:text-gray-600">
              HIPAA Notice
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
