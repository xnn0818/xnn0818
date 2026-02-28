"use client"

import { PageHero } from "@/components/page-hero"
import { HardHat, Ship, ArrowRight, CheckCircle } from "lucide-react"
import { useState } from "react"

const guides = {
  mining: {
    title: "礦工工作指南",
    subtitle: "完整的礦工工作流程說明",
    icon: <HardHat className="h-8 w-8 text-accent" />,
    steps: [
      {
        number: 1,
        title: "開始工作",
        items: [
          "歡迎來到礦工工作",
          "您的任務是在 -1 層 挖掘隧道",
          "前往更衣室穿上公司制服",
          "前往儲藏室領取裝備",
        ],
      },
      {
        number: 2,
        title: "進入礦區",
        items: [
          "搭乘電梯前往 -1 層",
          "找到指定的挖掘區域",
          "使用工具開始挖掘",
          "收集礦石放入背包",
        ],
      },
      {
        number: 3,
        title: "完成工作",
        items: [
          "將收集的礦石帶回地面",
          "前往收購站出售礦石",
          "領取工資報酬",
          "歸還裝備到儲藏室",
        ],
      },
    ],
  },
  drilling: {
    title: "鑽油平台工作指南",
    subtitle: "完整的鑽油平台工作流程說明",
    icon: <Ship className="h-8 w-8 text-primary" />,
    steps: [
      {
        number: 1,
        title: "準備工作",
        items: [
          "前往港口集合點",
          "搭乘船隻前往鑽油平台",
          "在平台上換上工作服",
          "領取工具和安全裝備",
        ],
      },
      {
        number: 2,
        title: "鑽油作業",
        items: [
          "前往指定鑽井位置",
          "操作鑽油設備",
          "監控油壓和產量",
          "定期檢查設備狀態",
        ],
      },
      {
        number: 3,
        title: "結算報酬",
        items: [
          "完成規定的工作時數",
          "回報工作成果",
          "領取薪資",
          "搭船返回港口",
        ],
      },
    ],
  },
}

type GuideKey = keyof typeof guides

export default function WorkGuidePage() {
  const [activeGuide, setActiveGuide] = useState<GuideKey>("mining")
  const guide = guides[activeGuide]

  return (
    <>
      <PageHero
        title="工作指南"
        subtitle="詳細的職業工作指南，幫助您快速上手各種工作"
        bgImage="/images/store-bg.jpg"
      />

      <section className="relative overflow-hidden bg-background">
        <div className="mx-auto max-w-4xl px-4 py-16">
          {/* Guide Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setActiveGuide("mining")}
              className={`flex items-center gap-2 rounded-lg px-6 py-3 font-bold transition-all ${
                activeGuide === "mining"
                  ? "bg-accent text-accent-foreground"
                  : "glass-card text-foreground hover:bg-muted/50"
              }`}
            >
              <HardHat className="h-5 w-5" />
              {'礦工工作指南'}
            </button>
            <button
              onClick={() => setActiveGuide("drilling")}
              className={`flex items-center gap-2 rounded-lg px-6 py-3 font-bold transition-all ${
                activeGuide === "drilling"
                  ? "bg-primary text-primary-foreground"
                  : "glass-card text-foreground hover:bg-muted/50"
              }`}
            >
              <Ship className="h-5 w-5" />
              {'鑽油平台工作指南'}
            </button>
          </div>

          {/* Guide Header */}
          <div className="mt-10 glass-card rounded-xl p-6">
            <div className="flex items-center gap-4">
              {guide.icon}
              <div>
                <h2 className="text-2xl font-bold text-secondary">{guide.title}</h2>
                <p className="text-muted-foreground">{guide.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Steps */}
          {guide.steps.map((step) => (
            <div key={step.number} className="mt-6 glass-card rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  {guide.icon}
                  <span className="mt-2 text-lg font-bold text-secondary">
                    {`步驟 ${step.number}`}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-accent">{step.title}</h3>
                  <div className="mt-4 flex flex-col gap-3">
                    {step.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 rounded-lg bg-muted/30 px-4 py-3">
                        <ArrowRight className="h-4 w-4 flex-shrink-0 text-primary" />
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
