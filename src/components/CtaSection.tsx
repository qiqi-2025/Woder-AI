import React from 'react'

const CtaSection: React.FC = () => {
  return (
    <section className="mt-[72px] text-center bg-yellow border-5 border-black shadow-[12px_12px_0_#111] p-12">
      <h2 className="text-4xl font-black mb-4">关注公众号「Woder AI」</h2>
      <p className="text-xl mb-6">你的第一个AI产品，从这里开始。</p>
      <button className="px-8 py-4 bg-green border-3 border-black shadow-[5px_5px_0_#111] font-black text-lg hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[1px_1px_0_#111] transition-all">
        了解更多工作坊
      </button>
    </section>
  )
}

export default CtaSection
