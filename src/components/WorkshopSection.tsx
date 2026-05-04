import React from 'react'

const WorkshopSection: React.FC = () => {
  return (
    <section className="mt-[72px] border-4 border-black bg-black text-white shadow-[8px_8px_0_#111] p-[28px] grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[32px] items-center">
      <h2 className="text-[38px] font-black leading-[1.1] m-0">做，就是最好的学习。</h2>
      <div className="flex flex-wrap gap-[10px]">
        <span className="bg-yellow text-black border-3 border-white px-[12px] py-2 font-black">零基础友好</span>
        <span className="bg-yellow text-black border-3 border-white px-[12px] py-2 font-black">不做理论堆砌</span>
        <span className="bg-yellow text-black border-3 border-white px-[12px] py-2 font-black">实际项目驱动</span>
        <span className="bg-yellow text-black border-3 border-white px-[12px] py-2 font-black">AI工具赋能</span>
        <span className="bg-yellow text-black border-3 border-white px-[12px] py-2 font-black">2小时做出原型</span>
      </div>
    </section>
  )
}

export default WorkshopSection
