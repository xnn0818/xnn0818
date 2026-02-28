import { PageHero } from "@/components/page-hero"
import { Gamepad2, Users, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="關於伊卡洛斯 2.0"
        subtitle="我們致力於打造台灣最有趣的半 RP FiveM 伺服器。結合角色扮演與多元遊戲模式，從 2023 年成立至今，已經累積了超過千名活躍玩家。"
        bgImage="/images/about-bg.jpg"
      />

      {/* Features */}
      <section className="relative overflow-hidden bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="glass-card rounded-xl p-8">
              <Gamepad2 className="mb-4 h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold text-foreground">{'半 RP 模式'}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {'結合角色扮演元素與娛樂性遊戲模式，玩家可以自由選擇參與 RP 劇情或是競技對戰，享受最大的遊戲自由度。'}
              </p>
            </div>
            <div className="glass-card rounded-xl p-8">
              <Users className="mb-4 h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold text-foreground">{'多元玩法'}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {'空投爭奪、地盤戰、毒區對戰等多種遊戲模式。無論你喜歡哪種玩法，都能在這裡找到樂趣。'}
              </p>
            </div>
            <div className="glass-card rounded-xl p-8">
              <Zap className="mb-4 h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold text-foreground">{'穩定運行'}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {'高效能伺服器，24/7 穩定運行。採用最新技術，確保流暢的遊戲體驗和最低延遲。'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Game Modes */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-center text-3xl font-black text-primary md:text-4xl">
            {'遊戲模式'}
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <GameMode
              title="空投爭奪戰"
              description="定時空投降落，玩家可以組隊或單人爭奪稀有物資和裝備。考驗團隊合作與戰術策略。"
            />
            <GameMode
              title="地盤爭奪"
              description="黑幫可以佔領地盤，爭奪地盤控制權。成功佔領後獲得豐富獎勵和收入來源。"
            />
            <GameMode
              title="毒區對戰"
              description="進入危險的毒區區域，在有限時間內搜刮物資並與其他玩家對戰。高風險高回報。"
            />
            <GameMode
              title="角色扮演"
              description="創建獨特角色，體驗豐富的城市生活。從事各種職業，與其他玩家互動，打造自己的故事。"
            />
          </div>
        </div>
      </section>
    </>
  )
}

function GameMode({ title, description }: { title: string; description: string }) {
  return (
    <div className="glass-card flex items-start gap-4 rounded-xl p-6">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-secondary/20">
        <Gamepad2 className="h-5 w-5 text-secondary" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-accent">{title}</h3>
        <p className="mt-2 leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
