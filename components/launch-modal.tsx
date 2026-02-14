"use client"

import { useState, useEffect, type FormEvent } from "react"
import { X, Calendar, Mail, ArrowLeft, Send } from "lucide-react"

interface LaunchModalProps {
  open: boolean
  onClose: () => void
}

type View = "options" | "email"

export function LaunchModal({ open, onClose }: LaunchModalProps) {
  const [calendlyLoaded, setCalendlyLoaded] = useState(false)
  const [view, setView] = useState<View>("options")
  const [fromEmail, setFromEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined" && !calendlyLoaded) {
      const script = document.createElement("script")
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      script.onload = () => setCalendlyLoaded(true)
      document.head.appendChild(script)

      const link = document.createElement("link")
      link.href = "https://assets.calendly.com/assets/external/widget.css"
      link.rel = "stylesheet"
      document.head.appendChild(link)
    }
  }, [calendlyLoaded])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
      // Reset view when modal closes
      setTimeout(() => {
        setView("options")
        setSent(false)
      }, 300)
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  function handleBookCall() {
    const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/mckale-g-jonas/30min"
    if (typeof window !== "undefined" && (window as any).Calendly) {
      ; (window as any).Calendly.initPopupWidget({
        url: calendlyUrl,
      })
    } else {
      window.open(calendlyUrl, "_blank")
    }
    onClose()
  }

  async function handleSendEmail(e: FormEvent) {
    e.preventDefault()
    setSending(true)

    // Build a mailto fallback with pre-filled fields
    const mailtoUrl = `mailto:inquiries@makesoft.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${fromEmail}\n\n${message}`)}`
    window.location.href = mailtoUrl

    // Show success state briefly then close
    setTimeout(() => {
      setSending(false)
      setSent(true)
      setTimeout(() => {
        onClose()
        setFromEmail("")
        setSubject("")
        setMessage("")
      }, 1500)
    }, 800)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-4" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-description">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md animate-fade-in-up rounded-t-2xl border border-border bg-card sm:rounded-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          aria-label="Close modal"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>

        {view === "options" ? (
          <div className="p-6 sm:p-8">
            {/* Header */}
            <div className="mb-8 text-center">
              <h2 id="modal-title" className="font-display text-2xl font-bold text-foreground">
                {"Let's Launch Your Idea"}
              </h2>
              <p id="modal-description" className="mt-2 text-sm text-muted-foreground">
                {"Choose how you'd like to get started"}
              </p>
            </div>

            {/* Options */}
            <div className="flex flex-col gap-4">
              {/* Book a Discovery Call */}
              <button
                onClick={handleBookCall}
                className="group flex items-start gap-4 rounded-xl border border-primary/30 bg-primary/5 p-5 text-left transition-all hover:border-primary/60 hover:bg-primary/10"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-display text-base font-semibold text-foreground">
                    Book a Discovery Call
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Schedule a 30-minute consultation to discuss your project in detail and get a custom proposal.
                  </p>
                </div>
              </button>

              {/* Send Us an Email */}
              <button
                onClick={() => setView("email")}
                className="group flex items-start gap-4 rounded-xl border border-border bg-secondary/30 p-5 text-left transition-all hover:border-primary/30 hover:bg-secondary/50"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-display text-base font-semibold text-foreground">
                    Send Us an Email
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {"Prefer to write? Send us an email with your project details and we'll get back to you shortly."}
                  </p>
                </div>
              </button>
            </div>
          </div>
        ) : (
          <div className="max-h-[85svh] overflow-y-auto p-6 sm:p-8">
            {/* Email Form Header */}
            <div className="mb-6">
              <button
                onClick={() => setView("options")}
                className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back
              </button>
              <h2 className="font-display text-2xl font-bold text-foreground">
                Start a Request
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {"Tell us about your project and we'll get back to you shortly"}
              </p>
            </div>

            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Send className="h-6 w-6 text-primary" />
                </div>
                <p className="mt-4 font-display text-lg font-semibold text-foreground">
                  Opening your email client...
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Your message details have been pre-filled.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSendEmail} className="flex flex-col gap-4">
                {/* To */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    To
                  </label>
                  <input
                    type="email"
                    value="inquiries@makesoft.com"
                    readOnly
                    className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-muted-foreground outline-none cursor-not-allowed"
                  />
                </div>

                {/* From */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    From
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    value={fromEmail}
                    onChange={(e) => setFromEmail(e.target.value)}
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Enter email subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    placeholder="Enter your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
                >
                  {sending ? "Sending..." : "Send Email"}
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
