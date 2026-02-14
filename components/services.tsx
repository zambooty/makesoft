import { Rocket, HandHelping, Zap, Timer, Plug, ArrowRight } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: HandHelping,
    title: "Hands-Off Execution",
    description: "You focus on your business. We handle the ideas, creative, and optimization — start to finish.",
  },
  {
    icon: Rocket,
    title: "Full-Service Execution",
    description: "Think it, submit it, and we'll make it real. Every project managed, optimized, and delivered without extra effort on your end.",
  },
  {
    icon: Timer,
    title: "Quick Turnaround",
    description: "Most projects go live within a few business days — complex builds just take a little more time to perfect.",
  },
  {
    icon: Zap,
    title: "Go Live in Days",
    description: "From first brief to live campaigns in a week, with tracking and QA handled.",
  },
  {
    icon: Plug,
    title: "Seamless Integration",
    description: "Connect makesoft with your existing tools and workflows effortlessly — no disruptions, just smooth collaboration.",
  },
]

export function Services() {
  return (
    <section id="services" className="px-4 py-16 sm:px-6 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-3 text-xs font-medium tracking-widest uppercase text-primary sm:mb-4 sm:text-sm">
          What you get
        </div>
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground text-balance sm:text-3xl md:text-4xl lg:text-5xl">
          Tools built for real digital growth
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
          From full-stack development to automated workflows and creative strategy, makesoft gives your brand everything it needs to scale with confidence.
        </p>

        {/* Conversion pipeline card */}
        <div className="mt-10 rounded-2xl border border-border bg-card p-6 sm:mt-16 sm:p-8 md:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div className="max-w-lg">
              <div className="mb-2 text-xs font-medium tracking-widest uppercase text-muted-foreground">
                Conversion pipeline
              </div>
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
                Launch conversions, not guesses
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3 sm:text-base">
                We turn your ideas into measurable wins — prioritized by impact, shipped fast, and reported with clarity.
              </p>
              <div className="mt-4 flex gap-4 sm:mt-6">
                <Link
                  href="#work"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  See our work <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#contact"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  Start a request
                </Link>
              </div>
            </div>
            {/* Mini chart visual */}
            <div className="flex items-end gap-2 h-32 sm:h-40">
              {[25, 40, 35, 55, 70, 60, 85].map((h, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-2 sm:flex-none">
                  <div
                    className="w-full rounded-t-md bg-primary/20 transition-all hover:bg-primary/40 sm:w-8 md:w-10"
                    style={{ height: `${h}%` }}
                  />
                  <span className="text-[10px] text-muted-foreground">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30 sm:p-8"
            >
              <feature.icon className="mb-3 h-5 w-5 text-primary sm:mb-4 sm:h-6 sm:w-6" />
              <h3 className="font-display text-base font-semibold text-foreground sm:text-lg">
                {feature.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:mt-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
