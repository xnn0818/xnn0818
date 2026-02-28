import { PageHero } from "@/components/page-hero"
import { FileText } from "lucide-react"

export default function AnnouncementsPage() {
  return (
    <>
      <PageHero
        title="伺服器更新與公告"
        subtitle="查看最新的伺服器更新、活動公告和重要消息"
        bgImage="/images/store-bg.jpg"
      />

      <section className="relative overflow-hidden bg-background">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <div className="glass-card flex flex-col items-center rounded-xl p-12 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-muted/30">
              <FileText className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground">{'目前沒有文章'}</h3>
            <p className="mt-2 text-muted-foreground">{'請稍後再回來查看'}</p>
          </div>
        </div>
      </section>
    </>
  )
}
