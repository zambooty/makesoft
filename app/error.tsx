'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertCircle, RefreshCcw, Home } from 'lucide-react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log error to error reporting service
        console.error('Application error:', error)
    }, [error])

    return (
        <div className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-6">
            <div className="mx-auto max-w-md text-center">
                {/* Error Icon */}
                <div className="mb-6 flex justify-center sm:mb-8">
                    <div className="rounded-full bg-destructive/10 p-4">
                        <AlertCircle className="h-10 w-10 text-destructive sm:h-12 sm:w-12" />
                    </div>
                </div>

                {/* Content */}
                <h1 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
                    Something Went Wrong
                </h1>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
                    We encountered an unexpected error. Don't worry—our team has been notified and we're working on it.
                </p>

                {/* Error Details (in development) */}
                {process.env.NODE_ENV === 'development' && error.message && (
                    <div className="mt-4 rounded-lg border border-border bg-muted p-4 text-left">
                        <p className="text-xs font-medium text-muted-foreground">Error Details:</p>
                        <p className="mt-1 text-xs font-mono text-foreground">{error.message}</p>
                    </div>
                )}

                {/* Actions */}
                <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center sm:gap-4">
                    <button
                        onClick={reset}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                    >
                        <RefreshCcw className="h-4 w-4" />
                        Try Again
                    </button>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                    >
                        <Home className="h-4 w-4" />
                        Go Home
                    </Link>
                </div>

                {/* Support Link */}
                <div className="mt-8 sm:mt-12">
                    <p className="text-sm text-muted-foreground">
                        Need help?{' '}
                        <Link href="/#contact" className="text-primary hover:underline">
                            Contact our support team
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
