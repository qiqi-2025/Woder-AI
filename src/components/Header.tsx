import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-start gap-[24px] mb-[48px] flex-wrap">
      <div className="flex items-center gap-2 px-4 py-2 border-3 border-black bg-yellow shadow-[4px_4px_0_#111] transform -rotate-2 font-black">
        ▣ Woder AI 工作坊
      </div>
      <div className="max-w-md border-3 border-black bg-white/70 shadow-[5px_5px_0_#111] px-4 py-3 text-sm leading-relaxed">
        学AI，你不需要先会。你只需要一个想做的东西。在这里，我们帮你把脑子里的想法，变成一个真实的AI小产品。
      </div>
    </header>
  )
}

export default Header
