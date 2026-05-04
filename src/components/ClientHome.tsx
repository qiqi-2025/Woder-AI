'use client'

import { useCallback, useMemo, useState } from 'react'
import AboutSection from '@/components/AboutSection'
import CtaSection from '@/components/CtaSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import HonorsSection from '@/components/HonorsSection'
import ProductGrid from '@/components/ProductGrid'
import SiteModal from '@/components/SiteModal'
import WorkshopSection from '@/components/WorkshopSection'
import { siteContent } from '@/content/siteContent'

export default function ClientHome() {
  const [activeModalKey, setActiveModalKey] = useState<string | null>(null)

  const activeModal = useMemo(() => {
    if (!activeModalKey) return null
    return siteContent.modals[activeModalKey] || null
  }, [activeModalKey])

  const openModal = useCallback((modalKey: string) => {
    setActiveModalKey(modalKey)
  }, [])

  const closeModal = useCallback(() => {
    setActiveModalKey(null)
  }, [])

  const scrollToProducts = useCallback(() => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <div className="space-y-0">
      <Header site={siteContent.site} />
      <Hero hero={siteContent.hero} cubeFaces={siteContent.cubeFaces} onOpenModal={openModal} onScrollToProducts={scrollToProducts} />
      <ProductGrid products={siteContent.products} onOpenModal={openModal} />
      <WorkshopSection workshop={siteContent.workshop} />
      <AboutSection about={siteContent.about} />
      <HonorsSection honors={siteContent.honors} onOpenModal={openModal} />
      <CtaSection cta={siteContent.cta} onOpenModal={openModal} />
      <Footer footer={siteContent.site.footer} />
      <SiteModal modal={activeModal} onClose={closeModal} />
    </div>
  )
}
