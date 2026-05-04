import './globals.css'

export const metadata = {
  title: 'Woder AI 工作坊｜你的第一个AI产品，从这里开始',
  description: '学AI，你不需要先会。你只需要一个想做的东西。在这里，我们帮你把脑子里的想法，变成一个真实的AI小产品。',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=ZCOOL+KuaiLe&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen overflow-x-hidden relative">
        <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(rgba(17,17,17,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.05)_1px,transparent_1px)] bg-[size:26px_26px] mix-blend-multiply z-0"></div>
        <div className="fixed inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.05)_0px,rgba(0,0,0,0.05)_1px,transparent_1px,transparent_4px)] opacity-25 z-[999]"></div>
        <main className="relative z-1 w-full max-w-[1180px] mx-auto px-4 py-9">
          {children}
        </main>
      </body>
    </html>
  )
}
