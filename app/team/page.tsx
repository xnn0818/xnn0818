import { PageHero } from "@/components/page-hero"
import Image from "next/image"
import { Wrench } from "lucide-react"

const teamMembers = [
  {
    name: "Kody Chan",
    role: "創辦人",
    roleColor: "bg-secondary text-secondary-foreground",
    avatar: "/images/hero-bg.jpg",
  },
  {
    name: "博士助理",
    role: "創辦人",
    roleColor: "bg-secondary text-secondary-foreground",
    avatar: "/images/about-bg.jpg",
  },
  {
    name: "阿儒",
    role: "管理員",
    roleColor: "bg-accent text-accent-foreground",
    avatar: "/images/team-bg.jpg",
  },
]

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="管理團隊"
        subtitle="認識我們專業且熱情的管理團隊，為您提供最佳遊戲體驗"
        bgImage="/images/team-bg.jpg"
      />

      <section className="relative overflow-hidden bg-background">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {teamMembers.map((member) => (
              <div key={member.name} className="glass-card flex flex-col items-center rounded-xl p-8 text-center">
                <div className="relative mb-4 h-28 w-28 overflow-hidden rounded-full border-2 border-primary/40">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className={`mb-2 rounded-full px-3 py-0.5 text-xs font-bold ${member.roleColor}`}>
                  {member.role}
                </span>
                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                <div className="mt-3">
                  <Wrench className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
