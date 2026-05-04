import React from 'react'
import { About } from '@/types/sanity'

interface AboutSectionProps {
  about: About
}

const AboutSection: React.FC<AboutSectionProps> = ({ about }) => {
  return (
    <section className="mt-[72px] grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
      <div className="border-4 border-black bg-white shadow-[8px_8px_0_#111] p-[28px]">
        <h3 className="text-[28px] font-black mb-4">关于我</h3>
        <div className="text-base leading-relaxed whitespace-pre-line">{about.content}</div>
      </div>
      <div className="border-4 border-black bg-white shadow-[8px_8px_0_#111] p-[28px]">
        <h3 className="text-[28px] font-black mb-4">我的方法</h3>
        <ul className="list-disc list-inside text-base leading-relaxed">
          <li>感到哪里不对劲 → 抓住一个真实问题</li>
          <li>给它一个隐喻 → 拆成最小交互</li>
          <li>让AI帮我补骨架 → 用工具做出原型</li>
          <li>交给真实的人碰一下 → 记录它哪里失效</li>
          <li>继续改</li>
        </ul>
        <p className="mt-4 text-base leading-relaxed">
          我不是先学会了再做的——我是做着做着就会了。
        </p>
      </div>
    </section>
  )
}

export default AboutSection
