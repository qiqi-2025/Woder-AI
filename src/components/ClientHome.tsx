'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProductGrid from '@/components/ProductGrid'
import WorkshopSection from '@/components/WorkshopSection'
import AboutSection from '@/components/AboutSection'
import HonorsSection from '@/components/HonorsSection'
import CtaSection from '@/components/CtaSection'
import Footer from '@/components/Footer'
import { Product } from '@/types/sanity'

const mockHero = {
  _id: 'hero-1',
  title: '学AI，\n你不需要先会',
  subtitle: 'You Don\'t Need to Learn First — Just Start Making',
  manifesto: '你不需要先学完Python、机器学习、深度学习再开始做AI产品。\n你只需要一个想做的东西，和愿意把它做出来的冲动。\n我不会写代码，但我做了15+个AI产品。现在我想帮你也做出来。'
}

const mockProducts: Product[] = [
  {
    _id: 'product-1',
    title: '小帮主任',
    description: 'AI班主任助手。针对乡村教育班级管理困境开发，学生行为智能记录、积分量化管理。',
    order: 1,
    modalTitle: 'PRODUCT 01｜小帮主任 — AI班主任助手',
    modalBody: `
      <p>针对乡村教育班级管理困境开发的教师端AI微信助手 + 学生端调查小助手。</p>
      <h3>技术栈</h3>
      <ul>
        <li>Python + Flask 后端</li>
        <li>JavaScript 前端</li>
        <li>学生行为智能记录</li>
        <li>积分量化管理系统</li>
        <li>数据驱动迭代</li>
      </ul>
      <p>从一个叫"小判官"的好玩想法，长成了一个真正落地的产品。</p>
    `,
    images: []
  },
  {
    _id: 'product-2',
    title: '泡泡阅读侠',
    description: '校园阅读智能助手。基于ESP32主板，语音识别、自动录入、大语言模型交互。',
    order: 2,
    modalTitle: 'PRODUCT 02｜泡泡阅读侠 — 校园阅读智能助手',
    modalBody: `
      <p>基于ESP32主板，集成语音识别、自动录入、大语言模型智能交互。</p>
      <h3>功能亮点</h3>
      <ul>
        <li>聊天陪伴</li>
        <li>语音借阅</li>
        <li>数据查询分析</li>
        <li>AI教师端</li>
      </ul>
      <p>腾讯科创营铜鹅伴奖 · 试用阶段学生阅读频率显著提升<br />
      全网无参考项目 · 从电子信号原理开始自学 · 独立开发</p>
    `,
    images: []
  },
  {
    _id: 'product-3',
    title: '待办神签',
    description: '修仙风防拖延APP。随机抽签代替按计划，三段式时间窗口防糊弄，灵气值成长反馈。',
    order: 3,
    modalTitle: 'PRODUCT 03｜待办神签 — 修仙风防拖延APP',
    modalBody: `
      <p>修仙风格，logo是一只黄鼠狼。</p>
      <h3>核心机制</h3>
      <ul>
        <li><strong>随机抽签代替按计划</strong>（P人友好）</li>
        <li><strong>三段式时间窗口</strong>防糊弄防拖延</li>
        <li><strong>灵气值 + 修仙境界</strong>成长反馈</li>
      </ul>
      <p>每一个机制都是从我自己作为重度拖延症患者的日子里长出来的。</p>
    `,
    images: []
  },
  {
    _id: 'product-4',
    title: '无敌花题集',
    description: 'AI智能题库工具，支持题目生成、分类管理、错题复习。',
    order: 4,
    modalTitle: 'PRODUCT 04｜无敌花题集',
    modalBody: `
      <p>AI智能题库工具，支持题目生成、分类管理、错题复习。</p>
      <h3>功能特点</h3>
      <ul>
        <li>AI自动生成题目</li>
        <li>智能分类管理</li>
        <li>错题本与复习提醒</li>
        <li>个性化学习路径</li>
      </ul>
      <p>让学习更有针对性，告别题海战术。</p>
    `,
    images: []
  },
  {
    _id: 'product-5',
    title: 'Wiki知识管理与AI分身',
    description: '个人知识库搭建与AI数字分身，实现个性化知识管理和智能助手。',
    order: 5,
    modalTitle: 'PRODUCT 05｜Wiki知识管理与AI分身',
    modalBody: `
      <p>个人知识库搭建与AI数字分身，实现个性化知识管理和智能助手。</p>
      <h3>核心能力</h3>
      <ul>
        <li>Wiki知识库构建</li>
        <li>AI数字分身定制</li>
        <li>个性化知识管理</li>
        <li>智能问答与检索</li>
      </ul>
      <p>探索数字人在教育和个人成长领域的应用边界。</p>
    `,
    images: []
  },
  {
    _id: 'product-6',
    title: '其他产品...',
    description: '成长教练AI、心域小灯、答题器尺子、抽签干活等15+个小产品。',
    order: 6,
    modalTitle: 'PRODUCT 06｜其他产品',
    modalBody: `
      <p>成长教练AI、心域小灯、答题器尺子、抽签干活等15+个小产品。</p>
      <h3>部分产品</h3>
      <ul>
        <li><strong>成长教练AI</strong> — 陪伴式成长助手</li>
        <li><strong>心域小灯</strong> — 情绪调节智能灯</li>
        <li><strong>答题器尺子</strong> — 智能答题辅助工具</li>
        <li><strong>抽签干活</strong> — 随机任务分配器</li>
      </ul>
      <p>每个产品都是一个小实验，探索AI在不同场景的应用。</p>
    `,
    images: []
  }
]

const mockAbout = {
  _id: 'about-1',
  content: '这里是希希。拥有丰富的创新教育经验，曾策划大型PBL夏令营，专注于儿童阅读与性教育领域。\n\n2024年从零开始做AI产品——做一个学一个，学一个做一个。至今已开发超过15个AI小产品，覆盖智能硬件开发全流程（前端、后端、APP、客户端软件、网站等）。\n\n现于杭州某AI教研公司担任产品运营与B端培训讲师，同时探索AI Agent的设计与架构，工作坊也在筹备中。'
}

const mockHonors = [
  {
    _id: 'honor-1',
    title: '百度千帆杯 AI原生应用创意挑战赛',
    description: '教育生态行业赛总决赛优秀作品奖\n\n参赛作品：小帮主任 — AI班主任助手\n获奖时间：2024年',
    images: []
  },
  {
    _id: 'honor-2',
    title: '2024 百度云智大会',
    description: '展位路演嘉宾\n\n展示项目：泡泡阅读侠\n活动时间：2024年',
    images: []
  },
  {
    _id: 'honor-3',
    title: '腾讯第五届科创营',
    description: '铜鹅伴奖\n\n参赛作品：泡泡阅读侠\n获奖时间：2024年',
    images: []
  },
  {
    _id: 'honor-4',
    title: '第十三届全国挑战杯创业计划竞赛',
    description: '广东省银奖\n\n参赛项目：乡村教育AI解决方案\n获奖时间：2024年',
    images: []
  },
  {
    _id: 'honor-5',
    title: '复旦大学国金',
    description: '可持续发展课程案例入选\n\n案例主题：AI赋能乡村教育创新实践\n入选时间：2024年',
    images: []
  },
  {
    _id: 'honor-6',
    title: '百度开发者中心',
    description: '受邀线上直播分享（资深开发者身份）\n\n分享主题：零基础做AI产品的实践经验\n直播时间：2024年',
    images: []
  }
]

export default function ClientHome() {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null)

  const handleProductClick = (product: Product) => {
    setSelectedProductId(product._id)
  }

  const handleCloseProductModal = () => {
    setSelectedProductId(null)
  }

  const selectedProduct = mockProducts.find(p => p._id === selectedProductId) || null

  return (
    <div className="space-y-0">
      <Header />
      <Hero hero={mockHero} products={mockProducts} onProductClick={handleProductClick} />
      <ProductGrid products={mockProducts} selectedProduct={selectedProduct} onCloseProductModal={handleCloseProductModal} />
      <WorkshopSection />
      <AboutSection about={mockAbout} />
      <HonorsSection honors={mockHonors} />
      <CtaSection />
      <Footer />
    </div>
  )
}
