"use client"

import { PageHero } from "@/components/page-hero"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "如何開始遊玩？",
    answer: "首先您需要擁有 GTA V 正版遊戲，然後安裝 FiveM 客戶端。安裝完成後加入我們的 Discord 伺服器完成白名單申請，即可連線遊玩。詳細步驟請參考我們的安裝指南頁面。",
  },
  {
    question: "需要什麼配備要求？",
    answer: "基本要求：Windows 10 (64-bit)、8GB RAM 以上、72GB 可用儲存空間、穩定的網路連線，以及 Steam 或 Epic Games 版本的 GTA V 正版遊戲。",
  },
  {
    question: "伺服器有哪些遊戲模式？",
    answer: "我們提供多種遊戲模式，包括：空投爭奪戰、地盤爭奪、毒區對戰、角色扮演等。每種模式都有獨特的玩法和獎勵機制。",
  },
  {
    question: "什麼是半 RP 伺服器？",
    answer: "半 RP（Half Roleplay）是指結合角色扮演元素與娛樂性遊戲模式的伺服器類型。玩家可以自由選擇參與 RP 劇情或是進行競技對戰，享受最大的遊戲自由度。",
  },
  {
    question: "違規會受到什麼懲罰？",
    answer: "根據違規嚴重程度，處罰包括：口頭警告、警告處分、資產洗白、暫時封禁至永久封禁。具體規則請參考伺服器規則頁面。",
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      <PageHero
        title="常見問題"
        subtitle="關於伊卡洛斯 2.0 半 RP 伺服器的常見問題解答"
        bgImage="/images/about-bg.jpg"
      />

      <section className="relative overflow-hidden bg-background">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                >
                  <span className="text-lg font-bold text-foreground">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="border-t border-border px-6 py-4">
                    <p className="leading-relaxed text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Discord CTA */}
          <div className="mt-12 glass-card rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-foreground">{'還有其他問題？'}</h3>
            <p className="mt-2 text-muted-foreground">
              {'加入我們的 Discord 社群，我們的團隊會盡快為您解答'}
            </p>
            <a
              href="#"
              className="mt-6 inline-flex rounded-lg bg-[#5865F2] px-8 py-3 font-bold text-foreground transition-all hover:opacity-90"
            >
              {'加入 Discord'}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
