import { PageHero } from "@/components/page-hero"
import { Ban, AlertTriangle, ShieldAlert, Bug, Users, Drama, Tag, Heart } from "lucide-react"

const rules = [
  {
    number: 1,
    title: "禁止宣傳其他伺服器",
    description: "不得以任何方式（包括私下形式）宣傳其他伺服器/直播其他伺服器畫面/宣傳自己群組，工作室，拉人離開等等（FIVEM 以外遊戲除外）",
    penalty: "永久封禁",
    icon: <Ban className="h-6 w-6 text-destructive" />,
  },
  {
    number: 2,
    title: "禁止歧視與人身攻擊",
    description: "遊戲公頻及麥克風語音言詞不得帶有歧視、人身攻擊。",
    penalty: "警告 x1",
    icon: <ShieldAlert className="h-6 w-6 text-secondary" />,
  },
  {
    number: 3,
    title: "禁止使用外掛腳本",
    description: "禁止非正當途徑進行遊玩！（例如：腳本、外掛、bug 等等）",
    penalty: "警告 x1 或永久封禁",
    icon: <AlertTriangle className="h-6 w-6 text-destructive" />,
  },
  {
    number: 4,
    title: "禁止利用漏洞",
    description: "禁止利用任何漏洞刷任何物品。",
    penalty: "洗白 + 警告 1-3 支",
    icon: <Bug className="h-6 w-6 text-secondary" />,
  },
  {
    number: 5,
    title: "禁止多重帳號",
    description: "禁止創建多個身分進行遊玩。",
    penalty: "大小號洗白 + 警告 x1",
    icon: <Users className="h-6 w-6 text-accent" />,
  },
  {
    number: 6,
    title: "劇情需告知目的",
    description: "任何劇情都須[告知]，或有[明確目的]，若無目的或對話就算是無劇情。",
    penalty: "警告 x1",
    icon: <Drama className="h-6 w-6 text-secondary" />,
  },
  {
    number: 7,
    title: "名稱必須一致",
    description: "玩家名稱 DC & Steam & 遊戲身分必須一致。",
    penalty: "警告 x1",
    icon: <Tag className="h-6 w-6 text-primary" />,
  },
  {
    number: 8,
    title: "禁止性騷擾",
    description: "禁止以騷擾為目的做出性騷擾行為，如互相同意且他人不受影響則不在此限。",
    penalty: "永久封禁",
    icon: <Heart className="h-6 w-6 text-destructive" />,
  },
]

export default function RulesPage() {
  return (
    <>
      <PageHero
        title="伺服器規則"
        subtitle="請仔細閱讀並遵守以下規則，違規者將受到相應處罰"
        bgImage="/images/rules-bg.jpg"
      />

      <section className="relative overflow-hidden bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {rules.map((rule) => (
              <div key={rule.number} className="glass-card rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">{rule.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-secondary">
                      {`#${rule.number} ${rule.title}`}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      {rule.description}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-accent/10 px-3 py-1">
                      <AlertTriangle className="h-3.5 w-3.5 text-accent" />
                      <span className="text-xs font-medium text-accent">{rule.penalty}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
