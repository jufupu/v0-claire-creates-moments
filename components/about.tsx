import { Sparkles, Video } from "lucide-react"

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
            <div className="rounded-lg overflow-hidden border border-[#D6B85A]/20 bg-gradient-to-br from-[#FFB3C6]/15 to-[#FFD1DC]/15 p-12 md:p-16">
              <div className="flex flex-col items-center justify-center text-center space-y-4">
                <Video className="w-12 h-12 text-[#D6B85A]" strokeWidth={1.5} />
                <p className="text-[#D6B85A] text-lg md:text-xl font-light">
                  Video to be added after photoshoot on 1st Nov
                </p>
              </div>
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
