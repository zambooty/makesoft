'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Cookie } from 'lucide-react'

export function CookieConsent() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookie-consent')
        if (!consent) {
            // Delay showing banner slightly for better UX
            setTimeout(() => setShow(true), 1500)
        } else if (consent === 'accepted') {
            // User previously accepted - update GA consent
            if (typeof window !== 'undefined' && (window as any).gtag) {
                ; (window as any).gtag('consent', 'update', {
                    analytics_storage: 'granted',
                })
            }
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted')
        setShow(false)
        // Enable Google Analytics tracking
        if (typeof window !== 'undefined' && (window as any).gtag) {
            ; (window as any).gtag('consent', 'update', {
                analytics_storage: 'granted',
            })
        }
    }

    const handleDecline = () => {
        localStorage.setItem('cookie-consent', 'declined')
        setShow(false)
        // Optionally disable GA tracking here if user declines
        if (typeof window !== 'undefined' && (window as any).gtag) {
            ; (window as any).gtag('consent', 'update', {
                analytics_storage: 'denied',
            })
        }
    }

    if (!show) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-md">
            <div className="relative rounded-lg border border-border bg-card p-4 shadow-lg sm:p-5">
                {/* Close button */}
                <button
                    onClick={handleDecline}
                    className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    aria-label="Dismiss cookie banner"
                >
                    <X className="h-3.5 w-3.5" />
                </button>

                {/* Content */}
                <div className="flex gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Cookie className="h-5 w-5 text-primary" />
                    </div>
                    <div className="pr-6">
                        <h3 className="text-sm font-semibold text-foreground">Cookie Notice</h3>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                            We use cookies to improve your experience and analyze site traffic. By clicking{' '}
                            <span className="font-medium">"Accept"</span>, you consent to our use of cookies.{' '}
                            <Link href="/privacy" className="text-primary hover:underline">
                                Learn more
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Actions */}
                <div className="mt-4 flex gap-2">
                    <button
                        onClick={handleAccept}
                        className="flex-1 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                    >
                        Accept
                    </button>
                    <button
                        onClick={handleDecline}
                        className="flex-1 rounded-lg border border-border bg-secondary px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-secondary/80"
                    >
                        Decline
                    </button>
                </div>
            </div>
        </div>
    )
}
