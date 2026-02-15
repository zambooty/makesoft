import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Terms & Conditions - makesoft',
    description: 'Terms and conditions for makesoft digital innovation agency services.',
}

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b border-border">
                <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Link>
                </div>
            </header>

            {/* Content */}
            <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
                <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    Terms & Conditions
                </h1>

                <p className="mt-4 text-lg text-muted-foreground">
                    Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>

                <div className="mt-12 space-y-8 text-foreground">
                    <section>
                        <h2 className="text-2xl font-bold">1. Agreement to Terms</h2>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                            By accessing or using makesoft's services, you agree to be bound by these Terms and Conditions.
                            If you disagree with any part of these terms, you may not access our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold">2. Services</h2>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                            makesoft provides full-service digital innovation services including website development,
                            custom software development, mobile application development, and AI-driven automation solutions.
                            Services are provided on a project-by-project or retainer basis as outlined in individual service agreements.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold">3. Intellectual Property</h2>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                            Unless otherwise specified in a project agreement, all work products created by makesoft
                            become the property of the client upon full payment. makesoft retains the right to showcase
                            completed projects in our portfolio unless a non-disclosure agreement specifies otherwise.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold">4. Payment Terms</h2>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                            Payment terms are specified in individual project agreements. Typically, projects require
                            a deposit before work begins, with the balance due upon completion. Late payments may
                            incur additional fees as outlined in the project agreement.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold">5. Limitation of Liability</h2>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                            makesoft shall not be liable for any indirect, incidental, special, consequential, or
                            punitive damages resulting from your use of or inability to use our services. Our total
                            liability shall not exceed the amount paid by you for the specific service in question.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold">6. Changes to Terms</h2>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                            We reserve the right to modify these terms at any time. Changes will be effective
                            immediately upon posting to our website. Your continued use of our services after
                            such changes constitutes acceptance of the new terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold">7. Contact Information</h2>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                            For questions about these Terms & Conditions, please contact us at{' '}
                            <a href="mailto:support@makesoft.com" className="text-primary hover:underline">
                                support@makesoft.com
                            </a>
                        </p>
                    </section>
                </div>

                <div className="mt-16 rounded-lg border border-border bg-muted/50 p-6">
                    <p className="text-sm text-muted-foreground">
                        <strong>Note:</strong> This is a basic terms and conditions page. For specific project terms,
                        please refer to your individual service agreement or contact us for more information.
                    </p>
                </div>
            </main>
        </div>
    )
}
