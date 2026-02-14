"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { CompanyPortfolio } from "@/components/company-portfolio"

import { Pricing } from "@/components/pricing"
import { Portfolio } from "@/components/portfolio"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { LaunchModal } from "@/components/launch-modal"

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <main className="min-h-screen">
      <Navbar onGetStarted={() => setModalOpen(true)} />
      <Hero onGetStarted={() => setModalOpen(true)} />
      <Services />
      <CompanyPortfolio />
      <Pricing />
      <Portfolio />
      <FAQ />
      <Contact onGetStarted={() => setModalOpen(true)} />
      <Footer />
      <LaunchModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  )
}
