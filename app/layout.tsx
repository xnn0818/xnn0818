import type { Metadata } from 'next'
import { Noto_Sans_TC, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import './globals.css'

const _notoSansTC = Noto_Sans_TC({ subsets: ['latin'], weight: ['400', '500', '700', '900'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '伊卡洛斯 2.0 - 台灣半 RP FiveM 伺服器',
  description: '台灣半 RP FiveM 伺服器 - 多元遊戲模式，結合角色扮演與多元遊戲模式',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-TW">
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
