import React from 'react'
import { SiteContent } from '@/types/siteContent'

interface HeaderProps {
  site: SiteContent['site']
}

const Header: React.FC<HeaderProps> = ({ site }) => {
  return (
    <header className="flex flex-wrap items-start justify-between gap-[24px] mb-[48px]">
      <div className="flex items-center gap-2 px-4 py-2 border-3 border-black bg-yellow shadow-[4px_4px_0_#111] transform -rotate-2 font-black">
        {site.badge}
      </div>
      <div className="max-w-md border-3 border-black bg-white/70 shadow-[5px_5px_0_#111] px-4 py-3 text-sm leading-relaxed">
        {site.navNote}
      </div>
    </header>
  )
}

export default Header
