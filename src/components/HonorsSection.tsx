import React from 'react'
import { SiteContent } from '@/types/siteContent'

interface HonorsSectionProps {
  honors: SiteContent['honors']
  onOpenModal: (modalKey: string) => void
}

const HonorsSection: React.FC<HonorsSectionProps> = ({ honors, onOpenModal }) => {
  return (
    <section className="mt-[72px]">
      <h2 className="inline-block bg-black text-white px-4 py-2 font-black text-xl -rotate-1 mb-6">
        比赛与认可
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
        {honors.map((honor) => (
          <button
            key={honor.id}
            className="text-left border-3 border-black bg-cream shadow-[5px_5px_0_#111] p-[18px] cursor-pointer hover:-translate-y-1 hover:-rotate-1 transition-all"
            onClick={() => onOpenModal(honor.modalKey)}
          >
            <strong className="text-base">{honor.title}</strong>
            <p className="text-sm mt-1 whitespace-pre-line">{honor.summary}</p>
          </button>
        ))}
      </div>
    </section>
  )
}

export default HonorsSection
