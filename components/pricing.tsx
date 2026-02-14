"use client"

import { useState } from "react"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

const tabs = [
  "Website Development",
  "Software Development",
  "Mobile App Development",
  "AI Automation",
  "ARIA Implementation",
  "Graphic Design",
  "Video Design",
]

const plans = [
  {
    name: "Managed",
    description:
      "Ideal for small businesses and startups who want a low-cost, fully managed website without the headache of hosting or maintenance.",
    price: "$750 setup",
    sub: "+ $300/month",
    cta: "Get Started",
    popular: false,
    features: [
      "Semi-custom design (up to 5 pages)",
      "Hosting & maintenance included",
      "Basic on-page SEO setup",
      "Monthly backups and updates",
      "Contact forms & basic integrations",
      "Email support within 48 hours",
      "Cancel anytime after 6 months",
    ],
  },
  {
    name: "One-Time",
    description:
      "For growing brands ready to invest in a professional website they fully own. One payment, full control, launch-ready.",
    price: "$2,500 one-time",
    sub: null,
    cta: "Get Started",
    popular: true,
    features: [
      "Fully custom design (up to 10 pages)",
      "Mobile-responsive development",
      "Standard SEO + analytics setup",
      "Hosting setup and training session",
      "CRM or booking integration",
      "Email support within 24 hours",
      "Optional retainer for maintenance",
    ],
  },
  {
    name: "Enterprise",
    description:
      "A complete, enterprise-grade solution for organizations that need advanced integrations, automation, and long-term scalability.",
    price: "Contact Sales",
    sub: null,
    cta: "Contact Sales",
    popular: false,
    features: [
      "Unlimited pages + full UX/UI design system",
      "Dedicated hosting environment",
      "Advanced SEO and performance optimization",
      "CRM, ERP, or AI automation integrations",
      "E-commerce and payment systems",
      "Priority same-day support",
      "Dedicated account manager",
      "Custom growth dashboard and analytics",
    ],
  },
]

export function Pricing() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="pricing" className="px-4 py-16 sm:px-6 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-3 text-xs font-medium tracking-widest uppercase text-primary sm:mb-4 sm:text-sm">
          Simple Pricing
        </div>
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground text-balance sm:text-3xl md:text-4xl lg:text-5xl">
          Plans that scale with you
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
          From small business sites to enterprise-grade systems, we have a plan that fits your goals. Pricing shown are starting prices.
        </p>

        {/* Service tabs - horizontally scrollable on mobile */}
        <div className="-mx-4 mt-8 overflow-x-auto px-4 sm:-mx-0 sm:mt-10 sm:overflow-visible sm:px-0">
          <div className="flex gap-2 pb-2 sm:flex-wrap sm:pb-0">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium transition-colors sm:text-sm ${
                  i === activeTab
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing cards */}
        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-6 transition-colors sm:p-8 ${
                plan.popular
                  ? "border-primary bg-card shadow-[0_0_40px_-12px] shadow-primary/20"
                  : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground sm:left-8">
                  Most Popular
                </div>
              )}
              <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">{plan.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{plan.description}</p>

              <div className="mt-4 sm:mt-6">
                {plan.sub ? (
                  <>
                    <div className="text-xs text-muted-foreground">Starting at</div>
                    <div className="font-display text-2xl font-bold text-foreground sm:text-3xl">{plan.price}</div>
                    <div className="text-sm text-muted-foreground">{plan.sub}</div>
                  </>
                ) : plan.price === "Contact Sales" ? (
                  <div className="font-display text-2xl font-bold text-foreground sm:text-3xl">{plan.price}</div>
                ) : (
                  <>
                    <div className="text-xs text-muted-foreground">Starting at</div>
                    <div className="font-display text-2xl font-bold text-foreground sm:text-3xl">{plan.price}</div>
                  </>
                )}
              </div>

              <Link
                href="#contact"
                className={`mt-4 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90 sm:mt-6 ${
                  plan.popular
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-foreground hover:bg-secondary"
                }`}
              >
                {plan.cta} <ArrowRight className="h-4 w-4" />
              </Link>

              <ul className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-muted-foreground sm:gap-3">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Add-on */}
        <div className="mt-6 rounded-2xl border border-border bg-card p-6 text-center sm:mt-8 sm:p-8">
          <p className="text-sm text-muted-foreground">Add-ons</p>
          <h3 className="mt-2 font-display text-lg font-bold text-foreground sm:text-xl">
            {"Need a custom plan? Let's talk"}
          </h3>
        </div>
      </div>
    </section>
  )
}
