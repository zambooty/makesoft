import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface HeroProps {
  onGetStarted?: () => void
}

export function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pt-16 sm:px-6 sm:pt-20">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px]"
        aria-hidden="true"
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px] sm:h-[600px] sm:w-[600px] sm:blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-4 text-xs font-medium tracking-widest uppercase text-primary sm:mb-6 sm:text-sm">
          Digital Agency
        </p>
        <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-foreground text-balance sm:text-4xl md:text-5xl lg:text-7xl">
          Your agency partner for growth, design, and automation.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg md:text-xl">
          We help ambitious brands turn ideas into high-performing websites, apps, and AI systems — built to grow and convert.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4">
          <button
            onClick={onGetStarted}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 hover:gap-3 sm:w-auto"
            aria-label="Launch your idea - get started with makesoft"
          >
            {"Let's Launch Your Idea"}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
          <Link
            href="#work"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary sm:w-auto"
          >
            See Our Work
          </Link>
        </div>
        <p className="mt-8 text-xs text-muted-foreground sm:mt-12">
          Trusted by businesses across 20+ industries.
        </p>
      </div>
    </section>
  )
}
