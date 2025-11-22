import { Sparkles } from "lucide-react"

export function About() {
  return (
    <section id="about" className="bg-black leading-7 py-[43px] pt-[22px] pb-[63px]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Sparkles className="w-8 h-8 text-[#FFB3C6]" />
          </div>

          <h2 className="font-serif text-5xl md:text-6xl text-[#D6B85A] text-center mb-12 text-balance font-extralight">
            Meet Claire
          </h2>

          <div className="space-y-8">
            <div className="relative aspect-[9/16] bg-black rounded-lg overflow-hidden border-2 border-[#FFB3C6]/40 shadow-lg shadow-[#FFB3C6]/20 max-w-md mx-auto">
              <iframe
                src="https://player.vimeo.com/video/1139631322?badge=0&autopause=0&player_id=0&app_id=58479"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                allowFullScreen
                loading="lazy"
                title="Claire Creates Moments - Introduction"
              ></iframe>
            </div>

            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p className="text-center text-pretty">
                With over 20 years of experience creating unforgettable wedding ceremonies, Claire brings warmth,
                professionalism, and a deeply personal touch to every celebration.
              </p>

              <p className="text-center text-pretty">
                Every couple has a unique story, and Claire is dedicated to crafting a ceremony that reflects your
                journey, your values, and your dreams for the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
