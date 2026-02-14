"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "What services do you offer?",
    a: "We offer a full range of digital services including website development, software development, mobile app development, AI automation, ARIA/accessibility implementation, graphic design, and video production.",
  },
  {
    q: "What's your typical project timeline?",
    a: "Most projects go live within 1-2 weeks for standard websites. More complex builds like custom software or mobile apps typically take 4-8 weeks depending on scope.",
  },
  {
    q: "Do you offer support & maintenance?",
    a: "Yes! Our Managed plan includes ongoing hosting, maintenance, and support. For One-Time projects, we offer optional maintenance retainers to keep your site running smoothly.",
  },
  {
    q: "What's your revision policy?",
    a: "We include multiple revision rounds in every project to ensure you're 100% satisfied. The exact number depends on your plan, but we always work collaboratively until the final result meets your vision.",
  },
  {
    q: "How's the payment structured?",
    a: "Payment structure varies by plan. Managed plans have a setup fee plus monthly payments. One-Time projects require a 50% deposit with the remainder due upon completion. Enterprise plans are custom-quoted.",
  },
  {
    q: "Can you integrate with existing systems?",
    a: "Absolutely. We specialize in seamless integrations with CRMs, ERPs, payment systems, booking platforms, and more. Our team ensures zero disruption to your existing workflows.",
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="px-4 py-16 sm:px-6 md:py-24 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-3 text-xs font-medium tracking-widest uppercase text-primary sm:mb-4 sm:text-sm">
          Questions & Support
        </div>
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
          Get in touch.
        </h2>

        <div className="mt-8 flex flex-col gap-2 sm:mt-12 sm:gap-3">
          {faqs.map((faq, i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-border bg-card">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-6 sm:py-5"
                aria-expanded={open === i}
              >
                <span className="text-sm font-medium text-foreground sm:text-base">{faq.q}</span>
                <ChevronDown
                  className={`h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform sm:h-5 sm:w-5 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:pb-5">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
