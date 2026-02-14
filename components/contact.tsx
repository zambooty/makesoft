import { Mail, Phone, MapPin, Clock } from "lucide-react"
import Link from "next/link"

interface ContactProps {
  onGetStarted?: () => void
}

export function Contact({ onGetStarted }: ContactProps) {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Contact info */}
        <div className="grid gap-3 grid-cols-2 sm:gap-4 lg:grid-cols-4">
          <div className="rounded-2xl border border-border bg-card p-4 sm:p-6">
            <Mail className="mb-2 h-4 w-4 text-primary sm:mb-3 sm:h-5 sm:w-5" />
            <div className="text-xs text-muted-foreground">Email</div>
            <Link href="mailto:support@makesoft.com" className="mt-1 block text-xs font-medium text-foreground hover:text-primary sm:text-sm break-all">
              support@makesoft.com
            </Link>
          </div>
          <div className="rounded-2xl border border-border bg-card p-4 sm:p-6">
            <Phone className="mb-2 h-4 w-4 text-primary sm:mb-3 sm:h-5 sm:w-5" />
            <div className="text-xs text-muted-foreground">Phone</div>
            <Link href="tel:610-607-2432" className="mt-1 block text-xs font-medium text-foreground hover:text-primary sm:text-sm">
              610-607-2432
            </Link>
          </div>
          <div className="rounded-2xl border border-border bg-card p-4 sm:p-6">
            <Clock className="mb-2 h-4 w-4 text-primary sm:mb-3 sm:h-5 sm:w-5" />
            <div className="text-xs text-muted-foreground">Availability</div>
            <span className="mt-1 block text-xs font-medium text-foreground sm:text-sm">24/7</span>
          </div>
          <div className="rounded-2xl border border-border bg-card p-4 sm:p-6">
            <MapPin className="mb-2 h-4 w-4 text-primary sm:mb-3 sm:h-5 sm:w-5" />
            <div className="text-xs text-muted-foreground">Location</div>
            <span className="mt-1 block text-xs font-medium text-foreground sm:text-sm">Philadelphia, PA</span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-2xl border border-primary/30 bg-card p-8 text-center sm:mt-16 sm:p-12">
          <h2 className="font-display text-2xl font-bold text-foreground text-balance sm:text-3xl md:text-4xl">
            Ready to transform your business?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:mt-4 sm:text-base">
            Book a free consultation or send us a message to get started on your next project.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center sm:gap-4">
            <button
              onClick={onGetStarted}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
            >
              Get Started
            </button>
            <button
              onClick={onGetStarted}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary sm:w-auto"
            >
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
