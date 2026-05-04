import React from 'react'
import { SiteContent } from '@/types/siteContent'

interface AboutSectionProps {
  about: SiteContent['about']
}

const AboutSection: React.FC<AboutSectionProps> = ({ about }) => {
  return (
    <section className="mt-[72px] grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
      <div className="border-4 border-black bg-white shadow-[8px_8px_0_#111] p-[28px]">
        <h3 className="text-[28px] font-black mb-4">{about.title}</h3>
        <div className="space-y-3 text-base leading-relaxed">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="border-4 border-black bg-white shadow-[8px_8px_0_#111] p-[28px]">
        <h3 className="text-[28px] font-black mb-4">{about.methodTitle}</h3>
        <ul className="list-disc list-inside text-base leading-relaxed">
          {about.methodItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4 text-base leading-relaxed">{about.methodNote}</p>
      </div>
    </section>
  )
}

export default AboutSection
