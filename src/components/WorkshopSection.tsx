import React from 'react'
import { SiteContent } from '@/types/siteContent'

interface WorkshopSectionProps {
  workshop: SiteContent['workshop']
}

const WorkshopSection: React.FC<WorkshopSectionProps> = ({ workshop }) => {
  return (
    <section className="mt-[72px] border-4 border-black bg-black text-white shadow-[8px_8px_0_#111] p-[28px] grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[32px] items-center">
      <h2 className="text-[38px] font-black leading-[1.1] m-0">{workshop.title}</h2>
      <div className="flex flex-wrap gap-[10px]">
        {workshop.tags.map((tag) => (
          <span key={tag} className="bg-yellow text-black border-3 border-white px-[12px] py-2 font-black">
            {tag}
          </span>
        ))}
      </div>
    </section>
  )
}

export default WorkshopSection
