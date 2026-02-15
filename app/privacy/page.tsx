import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Privacy Policy - makesoft',
    description: 'Privacy policy for makesoft digital innovation agency.',
}

export default function PrivacyPage() {
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
                    Privacy Policy
                </h1>

                <p className="mt-4 text-lg text-muted-foreground">
                    Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>

                <div className="mt-12 space-y-8 text-foreground">
                    <section>
                        <h2 className="text-2xl font-bold">1. Information We Collect</h2>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                            We collect information you provide directly to us, such as when you fill out a contact form,
                            schedule a consultation, or communicate with us via email. This may include your name, email
                            address, phone number, company name, and project details.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold">2. How We Use Your Information</h2>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                            We use the information we collect to:
                        </p>
                        <ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
                            <li>Respond to your inquiries and provide customer support</li>
                            <li>Process and fulfill your service requests</li>
                            <li>Send you important updates about our services</li>
                            <li>Improve our website and services</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold">3. Information Sharing</h2>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                            We do not sell, trade, or otherwise transfer your personal information to third parties.
                            We may share information with trusted service providers who assist us in operating our
                            website and conducting our business, provided they agree to keep this information confidential.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold">4. Cookies and Analytics</h2>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                            We use Google Analytics to understand how visitors interact with our website. This service
                            uses cookies to collect information such as pages visited, time spent on pages, and navigation
                            patterns. You can opt out of Google Analytics by installing the{' '}
                            <a
                                href="https://tools.google.com/dlpage/gaoptout"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                            >
                                Google Analytics Opt-out Browser Add-on
                            </a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold">5. Third-Party Services</h2>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                            Our website integrates with third-party services such as Calendly for scheduling consultations.
                            These services have their own privacy policies governing the collection and use of your information.
                            We encourage you to review their privacy policies.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold">6. Data Security</h2>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                            We implement appropriate technical and organizational security measures to protect your
                            personal information from unauthorized access, disclosure, alteration, or destruction.
                            However, no internet transmission is completely secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold">7. Your Rights</h2>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                            You have the right to:
                        </p>
                        <ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
                            <li>Access the personal information we hold about you</li>
                            <li>Request correction of inaccurate information</li>
                            <li>Request deletion of your personal information</li>
                            <li>Opt out of marketing communications</li>
                        </ul>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                            To exercise these rights, please contact us at{' '}
                            <a href="mailto:support@makesoft.com" className="text-primary hover:underline">
                                support@makesoft.com
                            </a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold">8. Children's Privacy</h2>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                            Our services are not directed to individuals under the age of 18. We do not knowingly
                            collect personal information from children. If you become aware that a child has provided
                            us with personal information, please contact us.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold">9. Changes to This Policy</h2>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                            We may update this Privacy Policy from time to time. We will notify you of any changes
                            by posting the new policy on this page with an updated "Last updated" date. Your continued
                            use of our services after such changes constitutes acceptance of the updated policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold">10. Contact Us</h2>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                            If you have questions or concerns about this Privacy Policy, please contact us at:
                        </p>
                        <div className="mt-4 text-muted-foreground">
                            <p>
                                Email:{' '}
                                <a href="mailto:support@makesoft.com" className="text-primary hover:underline">
                                    support@makesoft.com
                                </a>
                            </p>
                            <p className="mt-2">Location: Nova Scotia, Canada</p>
                        </div>
                    </section>
                </div>

                <div className="mt-16 rounded-lg border border-border bg-muted/50 p-6">
                    <p className="text-sm text-muted-foreground">
                        <strong>Note:</strong> This privacy policy outlines our general practices. For specific
                        questions about how we handle your data in the context of a project, please reach out to us directly.
                    </p>
                </div>
            </main>
        </div>
    )
}
