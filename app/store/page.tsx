"use client"

import { PageHero } from "@/components/page-hero"
import { Car, Shirt, Crosshair, Briefcase, Zap, ShoppingCart } from "lucide-react"
import { useState } from "react"

const categories = [
  { key: "all", label: "全部商品", icon: <Briefcase className="h-4 w-4" /> },
  { key: "vehicles", label: "載具", icon: <Car className="h-4 w-4" /> },
  { key: "weapons", label: "武器", icon: <Crosshair className="h-4 w-4" /> },
  { key: "props", label: "道具", icon: <Briefcase className="h-4 w-4" /> },
]

const products = [
  {
    name: "贊助車",
    category: "vehicles",
    tag: "載具",
    tagColor: "bg-primary/20 text-primary",
    description: "一般價格：獲得該車輛使用權",
    price: "NT$ 700.00",
    icon: <Car className="h-12 w-12 text-primary" />,
  },
  {
    name: "時裝",
    category: "props",
    tag: "道具",
    tagColor: "bg-secondary/20 text-secondary",
    description: "一般價格：獲得該時裝使用權",
    price: "NT$ 300.00",
    icon: <Shirt className="h-12 w-12 text-secondary" />,
  },
  {
    name: "衝鋒槍",
    category: "weapons",
    tag: "武器",
    tagColor: "bg-accent/20 text-accent",
    description: "獨家擁有權價格：擁有該槍枝的獨家擁有權（該槍枝只屬於您一人，其他人無法獲得）",
    price: "NT$ 1300.00",
    icon: <Crosshair className="h-12 w-12 text-accent" />,
  },
  {
    name: "跑車套裝",
    category: "vehicles",
    tag: "載具",
    tagColor: "bg-primary/20 text-primary",
    description: "包含三輛精選跑車的使用權",
    price: "NT$ 1500.00",
    icon: <Car className="h-12 w-12 text-primary" />,
  },
  {
    name: "步槍",
    category: "weapons",
    tag: "武器",
    tagColor: "bg-accent/20 text-accent",
    description: "獨家擁有權價格：擁有該槍枝的獨家擁有權",
    price: "NT$ 1000.00",
    icon: <Crosshair className="h-12 w-12 text-accent" />,
  },
  {
    name: "特殊服裝",
    category: "props",
    tag: "道具",
    tagColor: "bg-secondary/20 text-secondary",
    description: "限量版特殊服裝套組",
    price: "NT$ 500.00",
    icon: <Shirt className="h-12 w-12 text-secondary" />,
  },
]

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <>
      <PageHero
        title="商店"
        subtitle="購買遊戲商品，提升您的遊戲體驗"
        bgImage="/images/store-bg.jpg"
      />

      <section className="relative overflow-hidden bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold transition-all ${
                  activeCategory === cat.key
                    ? "bg-primary text-primary-foreground"
                    : "glass-card text-foreground hover:bg-muted/50"
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <div key={product.name} className="glass-card flex flex-col rounded-xl overflow-hidden">
                {/* Product Image Area */}
                <div className="flex h-48 items-center justify-center bg-muted/20">
                  {product.icon}
                </div>
                {/* Product Info */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-secondary">{product.name}</h3>
                    <span className={`rounded-full px-3 py-0.5 text-xs font-bold ${product.tagColor}`}>
                      {product.tag}
                    </span>
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>
                  <p className="mt-4 text-2xl font-black text-primary">{product.price}</p>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition-all hover:opacity-90">
                      <Zap className="h-4 w-4" />
                      {'立即購買'}
                    </button>
                    <button className="flex items-center justify-center gap-2 rounded-lg glass-card px-4 py-2.5 text-sm font-bold text-foreground transition-all hover:bg-muted/50">
                      <ShoppingCart className="h-4 w-4" />
                      {'加入購物車'}
                    </button>
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
