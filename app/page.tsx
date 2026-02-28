import Image from "next/image"
import Link from "next/link"
import { Gamepad2, Users, Zap, Shield } from "lucide-react"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 px-4 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 backdrop-blur-sm">
            <Gamepad2 className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-5xl font-black text-primary md:text-7xl text-balance">
            {'伊卡洛斯 2.0'}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground md:text-xl">
            {'台灣半 RP FiveM 伺服器 - 多元遊戲模式'}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/how-to-connect"
              className="rounded-lg bg-primary px-8 py-3 font-bold text-primary-foreground transition-all hover:opacity-90"
            >
              {'開始遊玩'}
            </Link>
            <a
              href="#"
              className="glass-card rounded-lg px-8 py-3 font-bold text-foreground transition-all hover:bg-muted/50"
            >
              {'加入 Discord'}
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/about-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20">
          <h2 className="text-center text-3xl font-black text-primary md:text-4xl">
            {'為什麼選擇伊卡洛斯？'}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            {'我們提供最優質的半 RP 遊戲體驗，結合角色扮演與多元遊戲模式'}
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <FeatureCard
              icon={<Gamepad2 className="h-8 w-8 text-primary" />}
              title="半 RP 模式"
              description="結合角色扮演元素與娛樂性遊戲模式，玩家可以自由選擇參與 RP 劇情或是競技對戰，享受最大的遊戲自由度。"
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-primary" />}
              title="多元玩法"
              description="空投爭奪、地盤戰、毒區對戰等多種遊戲模式。無論你喜歡哪種玩法，都能在這裡找到樂趣。"
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-primary" />}
              title="穩定運行"
              description="高效能伺服器，24/7 穩定運行。採用最新技術，確保流暢的遊戲體驗和最低延遲。"
            />
          </div>
        </div>
      </section>

      {/* Game Modes Section */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/rules-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20">
          <h2 className="text-center text-3xl font-black text-primary md:text-4xl">
            {'遊戲模式'}
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <GameModeCard
              icon={<span className="text-2xl text-accent">{'🎯'}</span>}
              title="空投爭奪戰"
              description="定時空投降落，玩家可以組隊或單人爭奪稀有物資和裝備。考驗團隊合作與戰術策略。"
              color="text-accent"
            />
            <GameModeCard
              icon={<span className="text-2xl text-accent">{'🏴'}</span>}
              title="地盤爭奪"
              description="黑幫可以佔領地盤，爭奪地盤控制權。成功佔領後獲得豐富獎勵和收入來源。"
              color="text-accent"
            />
            <GameModeCard
              icon={<span className="text-2xl text-accent">{'☠️'}</span>}
              title="毒區對戰"
              description="進入危險的毒區區域，在有限時間內搜刮物資並與其他玩家對戰。高風險高回報。"
              color="text-accent"
            />
            <GameModeCard
              icon={<span className="text-2xl text-accent">{'🎭'}</span>}
              title="角色扮演"
              description="創建獨特角色，體驗豐富的城市生活。從事各種職業，與其他玩家互動，打造自己的故事。"
              color="text-accent"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/store-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-20">
          <div className="glass-card rounded-2xl p-10">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <StatItem value="1000+" label="活躍玩家" />
              <StatItem value="24/7" label="穩定運行" />
              <StatItem value="50+" label="遊戲功能" />
              <StatItem value="2023" label="創立年份" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/team-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 py-20 text-center">
          <h2 className="text-3xl font-black text-primary md:text-4xl">
            {'準備好開始冒險了嗎？'}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {'加入伊卡洛斯 2.0，體驗最精彩的 FiveM 遊戲世界'}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/install-guide"
              className="rounded-lg bg-primary px-8 py-3 font-bold text-primary-foreground transition-all hover:opacity-90"
            >
              {'安裝指南'}
            </Link>
            <Link
              href="/how-to-connect"
              className="glass-card rounded-lg px-8 py-3 font-bold text-foreground transition-all hover:bg-muted/50"
            >
              {'如何連線'}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="glass-card rounded-xl p-6">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  )
}

function GameModeCard({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}) {
  return (
    <div className="glass-card flex items-start gap-4 rounded-xl p-6">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h3 className={`text-lg font-bold ${color}`}>{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-3xl font-black text-primary md:text-4xl">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  )
}
