import Link from 'next/link'
import { Home, Search, ArrowLeft } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-6">
            <div className="mx-auto max-w-md text-center">
                {/* 404 Graphic */}
                <div className="mb-6 sm:mb-8">
                    <span className="font-display text-8xl font-bold text-primary sm:text-9xl">404</span>
                </div>

                {/* Content */}
                <h1 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
                    Page Not Found
                </h1>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
                    Looks like this page took a wrong turn. Let's get you back on track.
                </p>

                {/* Actions */}
                <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center sm:gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                    >
                        <Home className="h-4 w-4" />
                        Go Home
                    </Link>
                    <Link
                        href="/#contact"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                    >
                        <Search className="h-4 w-4" />
                        Contact Us
                    </Link>
                </div>

                {/* Helpful Links */}
                <div className="mt-8 sm:mt-12">
                    <p className="text-sm text-muted-foreground">Or explore these sections:</p>
                    <nav className="mt-3 flex flex-wrap justify-center gap-4 text-sm">
                        <Link href="/#services" className="text-primary hover:underline">
                            Services
                        </Link>
                        <Link href="/#work" className="text-primary hover:underline">
                            Portfolio
                        </Link>
                        <Link href="/#pricing" className="text-primary hover:underline">
                            Pricing
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    )
}
