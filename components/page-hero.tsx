import Image from "next/image"

interface PageHeroProps {
  title: string
  subtitle: string
  bgImage: string
}

export function PageHero({ title, subtitle, bgImage }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden pt-16">
      <Image
        src={bgImage}
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 px-4 py-20 text-center">
        <h1 className="text-4xl font-black text-primary md:text-6xl text-balance">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  )
}
