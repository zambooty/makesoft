"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ExternalLink } from "lucide-react"

const categories = ["All", "Web", "Software", "Mobile", "AI"] as const

const projects = [
  {
    name: "CASF Community Radio",
    category: "Web",
    description: "Live streaming community radio platform with schedule management, news updates, and song request system for Central Valley.",
    tags: ["Next.js", "Streaming", "Real-time"],
    image: "/images/portfolio-casf-radio.png",
    url: "https://radio.makesoft.io",
  },
  {
    name: "Neon-Lab",
    category: "Web",
    description: "A futuristic web platform featuring dark UI with neon accents, built for a next-gen tech startup.",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    image: "/images/portfolio-neonlab.jpg",
  },
  {
    name: "Whispra",
    category: "Software",
    description: "End-to-end encrypted messaging platform with real-time sync, designed for privacy-first teams.",
    tags: ["React", "WebSockets", "Node.js"],
    image: "/images/portfolio-whispra.jpg",
  },
  {
    name: "Modelify",
    category: "Software",
    description: "AI-powered 3D modeling software that lets creators generate and edit 3D assets with natural language.",
    tags: ["Three.js", "Python", "OpenAI"],
    image: "/images/portfolio-modelify.jpg",
  },
  {
    name: "Roosted Roots",
    category: "Web",
    description: "Artisan coffee e-commerce store with subscription management and seamless Stripe integration.",
    tags: ["Shopify", "Custom Theme", "Stripe"],
    image: "/images/portfolio-roastedroots.jpg",
  },
  {
    name: "XRoute",
    category: "Mobile",
    description: "Smart routing mobile app with real-time traffic data, optimized ETAs, and offline map support.",
    tags: ["React Native", "Mapbox", "Firebase"],
    image: "/images/portfolio-xroute.jpg",
  },
  {
    name: "Foundry",
    category: "AI",
    description: "Intelligent automation dashboard that orchestrates workflows, monitors pipelines, and auto-scales resources.",
    tags: ["Python", "LangChain", "AWS"],
    image: "/images/portfolio-foundry.jpg",
  },
]

export function CompanyPortfolio() {
  const [active, setActive] = useState<(typeof categories)[number]>("All")

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="work" className="px-4 py-16 sm:px-6 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-3 text-xs font-medium tracking-widest uppercase text-primary sm:mb-4 sm:text-sm">
          Our Work
        </div>
        <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground text-balance sm:text-3xl md:text-4xl lg:text-5xl">
              Projects that speak for themselves
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
              From concept to launch, here are some of the brands and products we have helped bring to life.
            </p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-colors sm:px-5 sm:text-sm ${active === cat
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project grid */}
        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => {
            const ProjectCard = (
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/30">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.name} project screenshot`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                  {/* Hover overlay - only show if URL exists */}
                  {project.url && (
                    <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">
                        View Project <ExternalLink className="h-4 w-4" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-display text-base font-bold text-foreground sm:text-lg">
                        {project.name}
                      </h3>
                      <span className="mt-0.5 inline-block text-xs font-medium uppercase tracking-wider text-primary">
                        {project.category}
                      </span>
                    </div>
                    <ArrowUpRight className={`h-4 w-4 flex-shrink-0 text-muted-foreground transition-colors sm:h-5 sm:w-5 ${project.url ? 'group-hover:text-primary' : ''}`} />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground sm:px-3 sm:py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )

            // Wrap in Link if URL exists, otherwise return card as-is
            return project.url ? (
              <Link
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {ProjectCard}
              </Link>
            ) : (
              <div key={project.name}>{ProjectCard}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
