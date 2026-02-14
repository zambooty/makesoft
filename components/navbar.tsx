"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  onGetStarted?: () => void
}

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Portfolio" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
]

export function Navbar({ onGetStarted }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header>
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <Link href="/" className="font-display text-lg font-bold tracking-tight text-foreground sm:text-xl">
            makesoft
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <button
              onClick={onGetStarted}
              className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get Started
            </button>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            className="border-t border-border/50 bg-background/95 backdrop-blur-xl lg:hidden"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 border-t border-border/50 pt-3">
                <button
                  className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
                  onClick={() => { setMobileOpen(false); onGetStarted?.() }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
