"use client"

import { PageHero } from "@/components/page-hero"
import { Search } from "lucide-react"
import { useState } from "react"

export default function PlayerSearchPage() {
  const [query, setQuery] = useState("")
  const [searched, setSearched] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      setSearched(true)
    }
  }

  return (
    <>
      <PageHero
        title="玩家搜尋"
        subtitle="搜尋伺服器中的玩家資訊"
        bgImage="/images/hero-bg.jpg"
      />

      <section className="relative overflow-hidden bg-background">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <form onSubmit={handleSearch} className="glass-card flex items-center gap-3 rounded-xl p-3">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="輸入玩家名字或姓氏..."
              className="flex-1 bg-transparent px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <button
              type="submit"
              className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-bold text-primary-foreground transition-all hover:opacity-90"
            >
              <Search className="h-4 w-4" />
              {'搜尋'}
            </button>
          </form>

          {searched && (
            <div className="mt-8 glass-card rounded-xl p-8 text-center">
              <p className="text-muted-foreground">{'找不到符合的玩家，請嘗試其他關鍵字。'}</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
