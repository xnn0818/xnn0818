"use client"

import { PageHero } from "@/components/page-hero"
import { Download, Link2, Monitor, CheckCircle, AlertTriangle, ArrowDown } from "lucide-react"
import { useState } from "react"

const tabs = [
  { key: "install", label: "安裝 FiveM", icon: <Download className="h-4 w-4" /> },
  { key: "connect", label: "連接伺服器", icon: <Link2 className="h-4 w-4" /> },
]

const systemReqs = [
  { label: "作業系統", value: "Windows 10 (64-bit) 或更新版本", color: "text-primary" },
  { label: "GTA V 版本", value: "Steam 或 Epic Games 正版", color: "text-primary" },
  { label: "記憶體", value: "建議 8GB RAM 以上", color: "text-primary" },
  { label: "儲存空間", value: "至少 72GB 可用空間", color: "text-primary" },
  { label: "網路", value: "穩定的網際網路連線", color: "text-primary" },
]

const installSteps = [
  {
    number: 2,
    title: "下載 FiveM",
    items: [
      "前往 FiveM 官方網站 (fivem.net)",
      "點擊「Download Client」按鈕",
      "等待下載完成",
    ],
  },
  {
    number: 3,
    title: "安裝 FiveM",
    items: [
      "執行下載的安裝檔",
      "選擇安裝路徑（建議預設路徑）",
      "等待安裝完成",
      "首次啟動需要一些時間載入",
    ],
  },
]

export default function InstallGuidePage() {
  const [activeTab, setActiveTab] = useState("install")

  return (
    <>
      <PageHero
        title="遊戲安裝指南"
        subtitle="完整的 FiveM 安裝教學與伺服器連線指南"
        bgImage="/images/about-bg.jpg"
      />

      <section className="relative overflow-hidden bg-background">
        <div className="mx-auto max-w-4xl px-4 py-16">
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 rounded-lg px-6 py-3 font-bold transition-all ${
                  activeTab === tab.key
                    ? "bg-primary text-primary-foreground"
                    : "glass-card text-foreground hover:bg-muted/50"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "install" ? (
            <div className="mt-10">
              {/* System Requirements */}
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <Monitor className="h-8 w-8 text-primary" />
                    <span className="mt-2 text-lg font-bold text-secondary">{'步驟 1'}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-secondary">{'確認系統需求'}</h3>
                    <div className="mt-4 flex flex-col gap-3">
                      {systemReqs.map((req) => (
                        <div key={req.label} className="flex items-center gap-3 rounded-lg bg-muted/30 px-4 py-3">
                          <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-400" />
                          <span>
                            <span className={`font-bold ${req.color}`}>{req.label}:</span>{" "}
                            <span className="text-foreground">{req.value}</span>
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center gap-2 rounded-lg bg-accent/10 px-4 py-3">
                      <AlertTriangle className="h-4 w-4 text-accent" />
                      <span className="text-sm text-accent">{'請確保您擁有 GTA V 正版遊戲才能遊玩'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Install Steps */}
              {installSteps.map((step) => (
                <div key={step.number} className="mt-6 glass-card rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <Download className="h-8 w-8 text-primary" />
                      <span className="mt-2 text-lg font-bold text-secondary">
                        {`步驟 ${step.number}`}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-secondary">{step.title}</h3>
                      <div className="mt-4 flex flex-col gap-3">
                        {step.items.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 rounded-lg bg-muted/30 px-4 py-3">
                            <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-400" />
                            <span className="text-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-10">
              <div className="glass-card rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold text-secondary">{'方法一：直接連線（推薦）'}</h3>
                <p className="mt-3 text-muted-foreground">
                  {'點擊下方按鈕直接啟動 FiveM 並連線到伺服器：'}
                </p>
                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-bold text-primary-foreground transition-all hover:opacity-90"
                >
                  <Link2 className="h-5 w-5" />
                  {'點擊直接連線到伺服器'}
                </a>
              </div>

              <div className="mt-6 glass-card rounded-xl p-8">
                <h3 className="text-xl font-bold text-secondary">{'方法二：使用 F8 控制台'}</h3>
                <p className="mt-3 text-muted-foreground">
                  {'在 FiveM 中按下 F8 打開控制台，輸入以下指令：'}
                </p>
                <div className="mt-4 rounded-lg bg-muted/50 p-4 font-mono text-sm text-primary">
                  {'connect cfx.re/join/xxxxx'}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
