import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-primary">{'伊卡洛斯 2.0'}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {'台灣半 RP FiveM 伺服器 - 多元遊戲模式'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-secondary">{'快速連結'}</h4>
            <ul className="mt-3 flex flex-col gap-2">
              <li>
                <Link href="/rules" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {'伺服器規則'}
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {'管理團隊'}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {'常見問題'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-bold text-secondary">{'社群'}</h4>
            <ul className="mt-3 flex flex-col gap-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {'論壇'}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-secondary">{'法律資訊'}</h4>
            <ul className="mt-3 flex flex-col gap-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {'服務條款'}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {'隱私政策'}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {'退款政策'}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            {'© 2025 伊卡洛斯 2.0. 版權所有。'}
          </p>
          <p className="mt-1 text-xs text-muted-foreground/60">
            {'本伺服器與 Rockstar Games 或 Take-Two Interactive 無關'}
          </p>
        </div>
      </div>
    </footer>
  )
}
