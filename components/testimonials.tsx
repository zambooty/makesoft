"use client"

import { useState } from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const testimonials = [
  {
    name: "Alexander Wallow",
    company: "PlumbedUp Solutions",
    quote:
      "DigitalLink completely transformed how we manage our plumbing operations. The automation saved us countless hours every week, allowing our team to focus on what really matters—serving our clients better.",
    stats: [
      { label: "Time Saved", value: "70%" },
      { label: "Hours/Week", value: "15+" },
      { label: "Faster", value: "3x" },
    ],
  },
  {
    name: "Thomas Pike",
    company: "Innovate Labs",
    quote:
      "DigitalLink completely transformed our online presence. The new site loads faster, looks sharper, and actually converts. We saw a 180% increase in lead generation within the first month.",
    stats: [
      { label: "Lead Growth", value: "180%" },
      { label: "Load Time", value: "2.3s" },
      { label: "Conversion", value: "8.5%" },
    ],
  },
  {
    name: "Brailee Schneck",
    company: "HabitHike Co-Founder",
    quote:
      "Our launch with DigitalLink was frictionless. HabitHike was live, stable, and synced with all our tools within days. Their support team went above and beyond to make the transition seamless.",
    stats: [
      { label: "Days to Live", value: "3" },
      { label: "Uptime", value: "99.9%" },
      { label: "Support", value: "24h" },
    ],
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)

  const t = testimonials[current]

  return (
    <section id="results" className="px-4 py-16 sm:px-6 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-3 text-xs font-medium tracking-widest uppercase text-primary sm:mb-4 sm:text-sm">
          Customer Success
        </div>
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
          Results.
        </h2>
        <p className="mt-2 text-base text-muted-foreground sm:text-lg">
          Real impact from real workflows
        </p>

        {/* Stats bar */}
        <div className="mt-8 flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8 sm:p-8">
          <div className="flex-1 min-w-0">
            <div className="font-display text-3xl font-bold text-primary sm:text-4xl">99.8%</div>
            <p className="mt-1 text-sm text-muted-foreground">
              Hundreds of workflows automated — delivering reliable performance day after day.
            </p>
          </div>
          <div className="border-t border-border pt-4 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
            <div className="font-display text-3xl font-bold text-foreground sm:text-4xl">100+</div>
            <p className="mt-1 text-sm text-muted-foreground">Active across 20+ industries</p>
          </div>
          <div className="sm:ml-auto">
            <Link
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 sm:w-auto"
            >
              Start your workflow <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Testimonial carousel */}
        <div className="mt-6 rounded-2xl border border-border bg-card p-6 sm:mt-8 sm:p-8 md:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
            <div className="flex-1">
              <div className="mb-4 sm:mb-6">
                <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">{t.name}</h3>
                <p className="text-sm text-muted-foreground">{t.company}</p>
              </div>
              <blockquote className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                {`"${t.quote}"`}
              </blockquote>
            </div>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {t.stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-border bg-secondary p-3 text-center sm:p-4">
                    <div className="font-display text-xl font-bold text-primary sm:text-2xl">{stat.value}</div>
                    <div className="mt-0.5 text-xs text-muted-foreground sm:mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Link
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 sm:w-fit"
              >
                Get Started Now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-6 flex items-center gap-4 sm:mt-8">
            <button
              onClick={prev}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary sm:h-10 sm:w-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-8 bg-primary" : "w-2 bg-border"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary sm:h-10 sm:w-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
