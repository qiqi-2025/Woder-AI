import React from 'react'
import { SiteContent } from '@/types/siteContent'

interface CtaSectionProps {
  cta: SiteContent['cta']
  onOpenModal: (modalKey: string) => void
}

const CtaSection: React.FC<CtaSectionProps> = ({ cta, onOpenModal }) => {
  return (
    <section className="relative z-10 mt-[72px] text-center bg-yellow border-5 border-black shadow-[12px_12px_0_#111] p-12">
      <h2 className="text-4xl font-black mb-4">{cta.title}</h2>
      <p className="text-xl mb-6">{cta.description}</p>
      <button
        className="px-8 py-4 bg-green border-3 border-black shadow-[5px_5px_0_#111] font-black text-lg hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[1px_1px_0_#111] transition-all"
        onClick={() => onOpenModal(cta.modalKey)}
      >
        {cta.buttonLabel}
      </button>
    </section>
  )
}

export default CtaSection
