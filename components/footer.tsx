import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-8 sm:px-6 sm:py-12" role="contentinfo">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap lg:justify-between">
          {/* Brand */}
          <div className="min-w-0 flex-1 sm:max-w-xs">
            <span className="font-display text-lg font-bold text-foreground">makesoft</span>
            <p className="mt-2 text-sm text-muted-foreground">
              Transforming businesses with digital innovation
            </p>
            <div className="mt-3 text-sm text-muted-foreground">50K+</div>
            <span className="text-xs text-muted-foreground">Follow Along</span>
          </div>

          {/* Explore */}
          <nav aria-labelledby="footer-explore-heading">
            <h3 id="footer-explore-heading" className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
              Explore
            </h3>
            <ul className="mt-3 flex flex-col gap-2 sm:mt-4">
              <li>
                <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#work" className="text-sm text-muted-foreground hover:text-foreground">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Fine Print */}
          <nav aria-labelledby="footer-legal-heading">
            <h3 id="footer-legal-heading" className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
              Fine Print
            </h3>
            <ul className="mt-3 flex flex-col gap-2 sm:mt-4">
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Notice
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground sm:mt-12">
          {`© ${new Date().getFullYear()} makesoft — Transforming businesses with digital innovation`}
        </div>
      </div>
    </footer>
  )
}
