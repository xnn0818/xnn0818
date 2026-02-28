import { PageHero } from "@/components/page-hero"
import Image from "next/image"
import { Download, CheckCircle, Gamepad, Link2 } from "lucide-react"

export default function HowToConnectPage() {
  return (
    <>
      <PageHero
        title="如何連線"
        subtitle="跟隨以下步驟，輕鬆加入 伊卡洛斯 2.0"
        bgImage="/images/team-bg.jpg"
      />

      <section className="relative overflow-hidden bg-background">
        <div className="mx-auto max-w-5xl px-4 py-16">
          {/* Steps */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <StepCard
              number={1}
              title="安裝 FiveM"
              description="前往 FiveM 官方網站下載並安裝客戶端"
              icon={<Download className="h-10 w-10 text-accent" />}
            />
            <StepCard
              number={2}
              title="取得白名單"
              description="加入 Discord 完成白名單申請"
              icon={<CheckCircle className="h-10 w-10 text-green-400" />}
            />
            <StepCard
              number={3}
              title="開始遊玩"
              description="連線到伺服器開始你的 RP 之旅"
              icon={<Gamepad className="h-10 w-10 text-secondary" />}
            />
          </div>

          {/* Connection Info */}
          <div className="mt-12 glass-card rounded-xl p-8">
            <h2 className="text-center text-2xl font-bold text-foreground">{'連線資訊'}</h2>

            <div className="mt-8">
              <h3 className="text-lg font-bold text-secondary">{'方法一：直接連線（推薦）'}</h3>
              <p className="mt-2 text-muted-foreground">
                {'點擊下方按鈕直接啟動 FiveM 並連線到伺服器：'}
              </p>
              <a
                href="#"
                className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 font-bold text-primary-foreground transition-all hover:opacity-90"
              >
                <Link2 className="h-5 w-5" />
                {'點擊直接連線到伺服器'}
              </a>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-bold text-secondary">{'方法二：使用 F8 控制台'}</h3>
              <p className="mt-2 text-muted-foreground">
                {'在 FiveM 中按下 F8 打開控制台，輸入以下指令：'}
              </p>
              <div className="mt-4 rounded-lg bg-muted/50 p-4 font-mono text-sm text-primary">
                {'connect cfx.re/join/xxxxx'}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-bold text-secondary">{'方法三：伺服器列表搜尋'}</h3>
              <p className="mt-2 text-muted-foreground">
                {'在 FiveM 的伺服器列表中搜尋「伊卡洛斯」即可找到我們的伺服器。'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function StepCard({
  number,
  title,
  description,
  icon,
}: {
  number: number
  title: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <div className="glass-card flex flex-col items-center rounded-xl p-8 text-center">
      <div className="mb-4">{icon}</div>
      <span className="text-2xl font-black text-secondary">{`步驟 ${number}`}</span>
      <h3 className="mt-2 text-lg font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
