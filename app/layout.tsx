import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://makesoft.io'),
  title: 'makesoft - Full-Service Digital Innovation Agency | Custom Software, Web & Mobile Apps',
  description: "We're a full-service digital innovation agency that designs, builds, and scales digital platforms — from responsive websites and custom software to mobile apps and AI-driven automation. Transform your business with cutting-edge digital solutions.",
  keywords: [
    'full-service digital innovation agency',
    'responsive websites',
    'custom software development',
    'mobile app development',
    'AI-driven automation',
    'digital platforms',
    'web development',
    'software agency',
    'digital transformation',
    'custom web applications',
  ],
  authors: [{ name: 'makesoft' }],
  creator: 'makesoft',
  publisher: 'makesoft',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://makesoft.io',
    siteName: 'makesoft',
    title: 'makesoft - Full-Service Digital Innovation Agency',
    description: "We're a full-service digital innovation agency that designs, builds, and scales digital platforms — from responsive websites and custom software to mobile apps and AI-driven automation.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'makesoft - Digital Innovation Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'makesoft - Full-Service Digital Innovation Agency',
    description: "We're a full-service digital innovation agency that designs, builds, and scales digital platforms — from responsive websites and custom software to mobile apps and AI-driven automation.",
    images: ['/og-image.jpg'],
    creator: '@makesoft',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    // Add your Google Search Console verification code to .env.local:
    // NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // JSON-LD structured data for Organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'makesoft',
    description: "Full-service digital innovation agency that designs, builds, and scales digital platforms — from responsive websites and custom software to mobile apps and AI-driven automation.",
    url: 'https://makesoft.io',
    logo: 'https://makesoft.io/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-610-607-2432',
      contactType: 'customer service',
      email: 'support@makesoft.com',
      areaServed: 'US',
      availableLanguage: 'English',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Philadelphia',
      addressRegion: 'PA',
      addressCountry: 'US',
    },
    sameAs: [
      // Add your social media profiles here
      // 'https://twitter.com/makesoft',
      // 'https://linkedin.com/company/makesoft',
    ],
  }

  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
