import { SiteContent } from '@/types/siteContent'

const productImagePlaceholder = '产品截图/界面图片位置'
const honorImagePlaceholder = '证书/奖杯图片位置'

const products: SiteContent['products'] = [
  {
    id: 'assistant',
    order: 1,
    no: 'PRODUCT 01',
    title: '小帮主任',
    shortTitle: '小帮主任',
    subtitle: 'AI 班主任助手',
    description: 'AI班主任助手。针对乡村教育班级管理困境开发，学生行为智能记录、积分量化管理。',
    modalKey: 'product-assistant',
    cardColor: 'bg-[#fff0a8]',
    modal: {
      key: 'product-assistant',
      title: 'PRODUCT 01｜小帮主任 — AI班主任助手',
      body: [
        { type: 'paragraph', content: '针对乡村教育班级管理困境开发的教师端AI微信助手 + 学生端调查小助手。' },
        {
          type: 'list',
          title: '技术栈',
          items: ['Python + Flask 后端', 'JavaScript 前端', '学生行为智能记录', '积分量化管理系统', '数据驱动迭代'],
        },
        { type: 'paragraph', content: '从一个叫“小判官”的好玩想法，长成了一个真正落地的产品。' },
      ],
      placeholder: productImagePlaceholder,
    },
  },
  {
    id: 'reading',
    order: 2,
    no: 'PRODUCT 02',
    title: '泡泡阅读侠',
    shortTitle: '泡泡阅读侠',
    subtitle: '校园阅读助手',
    description: '校园阅读智能助手。基于ESP32主板，语音识别、自动录入、大语言模型交互。',
    modalKey: 'product-reading',
    cardColor: 'bg-[#bdf7d0]',
    modal: {
      key: 'product-reading',
      title: 'PRODUCT 02｜泡泡阅读侠 — 校园阅读智能助手',
      body: [
        { type: 'paragraph', content: '基于ESP32主板，集成语音识别、自动录入、大语言模型智能交互。' },
        { type: 'list', title: '功能亮点', items: ['聊天陪伴', '语音借阅', '数据查询分析', 'AI教师端'] },
        { type: 'paragraph', content: '腾讯科创营铜鹅伴奖 · 试用阶段学生阅读频率显著提升\n全网无参考项目 · 从电子信号原理开始自学 · 独立开发' },
      ],
      placeholder: productImagePlaceholder,
    },
  },
  {
    id: 'todo',
    order: 3,
    no: 'PRODUCT 03',
    title: '待办神签',
    shortTitle: '待办神签',
    subtitle: '修仙风防拖延',
    description: '修仙风防拖延APP。随机抽签代替按计划，三段式时间窗口防糊弄，灵气值成长反馈。',
    modalKey: 'product-todo',
    cardColor: 'bg-[#b9d4ff]',
    modal: {
      key: 'product-todo',
      title: 'PRODUCT 03｜待办神签 — 修仙风防拖延APP',
      body: [
        { type: 'paragraph', content: '修仙风格，logo是一只黄鼠狼。' },
        { type: 'list', title: '核心机制', items: ['随机抽签代替按计划（P人友好）', '三段式时间窗口防糊弄防拖延', '灵气值 + 修仙境界成长反馈'] },
        { type: 'paragraph', content: '每一个机制都是从我自己作为重度拖延症患者的日子里长出来的。' },
      ],
      placeholder: productImagePlaceholder,
    },
  },
  {
    id: 'questionbank',
    order: 4,
    no: 'PRODUCT 04',
    title: '无敌花题集',
    shortTitle: '无敌花题集',
    subtitle: 'AI 题库工具',
    description: 'AI智能题库工具，支持题目生成、分类管理、错题复习。',
    modalKey: 'product-questionbank',
    cardColor: 'bg-[#ffc1dc]',
    modal: {
      key: 'product-questionbank',
      title: 'PRODUCT 04｜无敌花题集',
      body: [
        { type: 'paragraph', content: 'AI智能题库工具，支持题目生成、分类管理、错题复习。' },
        { type: 'list', title: '功能特点', items: ['AI自动生成题目', '智能分类管理', '错题本与复习提醒', '个性化学习路径'] },
        { type: 'paragraph', content: '让学习更有针对性，告别题海战术。' },
      ],
      placeholder: productImagePlaceholder,
    },
  },
  {
    id: 'wiki',
    order: 5,
    no: 'PRODUCT 05',
    title: 'Wiki知识管理与AI分身',
    shortTitle: 'Wiki知识管理',
    subtitle: 'AI 分身',
    description: '个人知识库搭建与AI数字分身，实现个性化知识管理和智能助手。',
    modalKey: 'product-wiki',
    cardColor: 'bg-[#d7c2ff]',
    modal: {
      key: 'product-wiki',
      title: 'PRODUCT 05｜Wiki知识管理与AI分身',
      body: [
        { type: 'paragraph', content: '个人知识库搭建与AI数字分身，实现个性化知识管理和智能助手。' },
        { type: 'list', title: '核心能力', items: ['Wiki知识库构建', 'AI数字分身定制', '个性化知识管理', '智能问答与检索'] },
        { type: 'paragraph', content: '探索数字人在教育和个人成长领域的应用边界。' },
      ],
      placeholder: productImagePlaceholder,
    },
  },
  {
    id: 'more',
    order: 6,
    no: 'PRODUCT 06',
    title: '其他产品...',
    shortTitle: '其他产品...',
    subtitle: '15+ 个小产品',
    description: '成长教练AI、心域小灯、答题器尺子、抽签干活等15+个小产品。',
    modalKey: 'product-more',
    cardColor: 'bg-white',
    modal: {
      key: 'product-more',
      title: '更多AI小产品',
      body: [
        { type: 'paragraph', content: '我做过的AI小产品超过15个，涵盖教育、效率、情感、数字人等方向：' },
        { type: 'list', items: ['成长教练 AI', '心域小灯', '答题器尺子', '抽签干活', '小咕噜', 'HuahuaApp', 'AI 小智', 'AI 角色设计', '……'] },
        { type: 'paragraph', content: '对我来说，做产品就是学习。每一个都是我理解AI能力边界的方式。\n不是为了简历好看，是因为真的想做。' },
      ],
    },
  },
]

const honors: SiteContent['honors'] = [
  {
    id: 'honor-baidu-qianfan',
    title: '百度千帆杯 AI原生应用创意挑战赛',
    summary: '教育生态行业赛总决赛优秀作品奖',
    modalKey: 'honor-baidu-qianfan',
    modal: {
      key: 'honor-baidu-qianfan',
      title: '百度千帆杯 AI原生应用创意挑战赛',
      body: [{ type: 'paragraph', content: '教育生态行业赛总决赛优秀作品奖\n\n参赛作品：小帮主任 — AI班主任助手\n获奖时间：2024年' }],
      placeholder: honorImagePlaceholder,
    },
  },
  {
    id: 'honor-baidu-cloud',
    title: '2024 百度云智大会',
    summary: '展位路演',
    modalKey: 'honor-baidu-cloud',
    modal: {
      key: 'honor-baidu-cloud',
      title: '2024 百度云智大会',
      body: [{ type: 'paragraph', content: '展位路演嘉宾\n\n展示项目：泡泡阅读侠\n活动时间：2024年' }],
      placeholder: '活动照片/展位图片位置',
    },
  },
  {
    id: 'honor-tencent-camp',
    title: '腾讯第五届科创营',
    summary: '铜鹅伴奖',
    modalKey: 'honor-tencent-camp',
    modal: {
      key: 'honor-tencent-camp',
      title: '腾讯第五届科创营',
      body: [{ type: 'paragraph', content: '铜鹅伴奖\n\n参赛作品：泡泡阅读侠\n获奖时间：2024年' }],
      placeholder: honorImagePlaceholder,
    },
  },
  {
    id: 'honor-challenge-cup',
    title: '第十三届全国挑战杯创业计划竞赛',
    summary: '广东省银奖',
    modalKey: 'honor-challenge-cup',
    modal: {
      key: 'honor-challenge-cup',
      title: '第十三届全国挑战杯创业计划竞赛',
      body: [{ type: 'paragraph', content: '广东省银奖\n\n参赛项目：乡村教育AI解决方案\n获奖时间：2024年' }],
      placeholder: honorImagePlaceholder,
    },
  },
  {
    id: 'honor-fudan',
    title: '复旦大学国金',
    summary: '可持续发展课程案例入选',
    modalKey: 'honor-fudan',
    modal: {
      key: 'honor-fudan',
      title: '复旦大学国金',
      body: [{ type: 'paragraph', content: '可持续发展课程案例入选\n\n案例主题：AI赋能乡村教育创新实践\n入选时间：2024年' }],
      placeholder: '证书/案例封面图片位置',
    },
  },
  {
    id: 'honor-baidu-developer',
    title: '百度开发者中心',
    summary: '受邀线上直播分享（资深开发者身份）',
    modalKey: 'honor-baidu-developer',
    modal: {
      key: 'honor-baidu-developer',
      title: '百度开发者中心',
      body: [{ type: 'paragraph', content: '受邀线上直播分享（资深开发者身份）\n\n分享主题：零基础做AI产品的实践经验\n直播时间：2024年' }],
      placeholder: '直播截图/证书图片位置',
    },
  },
]

const workshopModal = {
  key: 'workshop',
  title: 'Woder AI 工作坊',
  body: [
    { type: 'paragraph' as const, emphasis: true, content: '我们不教代码语法，不讲理论。我们只做一件事：帮你把脑子里的想法，变成一个真实的AI小产品。' },
    { type: 'paragraph' as const, content: '不管你是老师、设计师、创业者、学生，还是单纯觉得“我有想法但不知道怎么实现”的人——这里就是你的起点。' },
    {
      type: 'list' as const,
      title: '近期活动',
      items: [
        '「属于自己的 APP」工作坊：2小时，线上或线下。你带着一个想法来，带着一个属于自己的APP（或半成品）走。不需要任何编程基础。',
        '《聊聊小产品的设计思路与技术落地》：分享我15+个AI产品的实战经验',
      ],
    },
    { type: 'list' as const, title: '未来计划', items: ['AI分身工作坊', 'AI知识管理工作坊', 'AI + 教研交流', 'Agent设计交流'] },
    { type: 'paragraph' as const, emphasis: true, content: '关注公众号「Woder AI」，加入我们。' },
  ],
  images: [{ src: '/images/qrcode/woder-ai-official-account.png', alt: 'Woder AI 公众号二维码' }],
  placeholder: '公众号二维码位置：public/images/qrcode/woder-ai-official-account.png',
}

export const siteContent: SiteContent = {
  site: {
    name: 'Woder AI 工作坊',
    badge: '▣ Woder AI 工作坊',
    navNote: '学AI，你不需要先会。你只需要一个想做的东西。在这里，我们帮你把脑子里的想法，变成一个真实的AI小产品。',
    footer: 'Woder AI — "做"就是最好的学习 | 适合老师、设计师、创业者、学生',
    officialAccountName: 'Woder AI',
  },
  hero: {
    titleLines: ['学AI，', '你不需要先会'],
    subtitle: 'You Don\'t Need to Learn First — Just Start Making',
    manifesto: [
      '你不需要先学完Python、机器学习、深度学习再开始做AI产品。',
      '你只需要一个想做的东西，和愿意把它做出来的冲动。',
      '我不会写代码，但我做了15+个AI产品。现在我想帮你也做出来。',
    ],
    primaryButtonLabel: '看看我能做什么',
    secondaryButtonLabel: '工作坊详情',
  },
  cubeFaces: [
    { id: 'assistant', title: '小帮主任', subtitle: 'AI 班主任助手', colorClass: 'bg-yellow', transform: 'rotateY(0deg) translateZ(105px)', modalKey: 'product-assistant' },
    { id: 'reading', title: '泡泡阅读侠', subtitle: '校园阅读助手', colorClass: 'bg-blue', textColorClass: 'text-white', transform: 'rotateY(90deg) translateZ(105px)', modalKey: 'product-reading' },
    { id: 'todo', title: '待办神签', subtitle: '修仙风防拖延', colorClass: 'bg-red', textColorClass: 'text-white', transform: 'rotateY(180deg) translateZ(105px)', modalKey: 'product-todo' },
    { id: 'questionbank', title: '无敌花题集', subtitle: 'AI 题库工具', colorClass: 'bg-green', transform: 'rotateY(-90deg) translateZ(105px)', modalKey: 'product-questionbank' },
    { id: 'wiki', title: 'Wiki知识管理', subtitle: 'AI 分身', colorClass: 'bg-pink', transform: 'rotateX(90deg) translateZ(105px)', modalKey: 'product-wiki' },
    { id: 'join', title: '加入我们', subtitle: 'Woder AI', colorClass: 'bg-white', transform: 'rotateX(-90deg) translateZ(105px)', modalKey: 'workshop' },
  ],
  products,
  workshop: {
    title: '做，就是最好的学习。',
    tags: ['零基础友好', '不做理论堆砌', '实际项目驱动', 'AI工具赋能', '2小时做出原型'],
  },
  about: {
    title: '关于我',
    paragraphs: [
      '这里是希希。拥有丰富的创新教育经验，曾策划大型PBL夏令营，专注于儿童阅读与性教育领域。',
      '2024年从零开始做AI产品——做一个学一个，学一个做一个。至今已开发超过15个AI小产品，覆盖智能硬件开发全流程（前端、后端、APP、客户端软件、网站等）。',
      '现于杭州某AI教研公司担任产品运营与B端培训讲师，同时探索AI Agent的设计与架构，工作坊也在筹备中。',
    ],
    methodTitle: '我的方法',
    methodItems: ['感到哪里不对劲 → 抓住一个真实问题', '给它一个隐喻 → 拆成最小交互', '让AI帮我补骨架 → 用工具做出原型', '交给真实的人碰一下 → 记录它哪里失效', '继续改'],
    methodNote: '我不是先学会了再做的——我是做着做着就会了。',
  },
  honors,
  cta: {
    title: '关注公众号「Woder AI」',
    description: '你的第一个AI产品，从这里开始。',
    buttonLabel: '了解更多工作坊',
    modalKey: 'workshop',
  },
  modals: {
    workshop: workshopModal,
    ...Object.fromEntries(products.map((product) => [product.modalKey, product.modal])),
    ...Object.fromEntries(honors.map((honor) => [honor.modalKey, honor.modal])),
  },
}
