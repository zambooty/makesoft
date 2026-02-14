const portfolioItems = [
  { name: "Neon-Lab", category: "Website Development" },
  { name: "Whispra", category: "Software Development" },
  { name: "Modelify", category: "Software Development" },
  { name: "Roosted Roots", category: "Website Development" },
  { name: "XRoute", category: "Mobile App Development" },
  { name: "Foundry", category: "AI & Automation Development" },
  { name: "Creative", category: "Graphic Design" },
  { name: "Video Production", category: "Video Design & Promo Production" },
  { name: "Compliance", category: "ARIA / Accessibility Implementation" },
]

export function Portfolio() {
  const items = [...portfolioItems, ...portfolioItems]

  return (
    <section id="portfolio" className="py-16 overflow-hidden md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground text-balance sm:text-3xl md:text-4xl lg:text-5xl">
          Building the future.
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
          By merging creativity, innovation, and technology, makesoft helps communities evolve and thrive in a connected world.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Our approach unites humanitarian values with smart, future-ready systems designed to adapt and scale with real-world needs.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative mt-10 sm:mt-16">
        <div className="animate-marquee flex gap-3 whitespace-nowrap sm:gap-4">
          {items.map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className="inline-flex flex-col rounded-2xl border border-border bg-card px-6 py-4 min-w-[180px] sm:min-w-[240px] sm:px-8 sm:py-6"
            >
              <span className="font-display text-base font-bold text-foreground sm:text-lg">{item.name}</span>
              <span className="mt-1 text-xs text-muted-foreground">{item.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
