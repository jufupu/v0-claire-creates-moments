import { Video } from "lucide-react"

export function VideoSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#EAB8D1]/10 via-black to-[#9B59B6]/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-4xl md:text-5xl font-light text-[#D6B85A] text-center mb-4 text-balance tracking-tight">
            Get to Know Claire
          </h2>

          <p className="text-white/70 text-center mb-12 text-lg text-pretty">
            Watch this introduction to learn more about Claire's approach and experience
          </p>

          <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-[#D6B85A]/30 bg-gradient-to-br from-[#9B59B6]/10 to-[#B76E8E]/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center justify-center text-center space-y-4 p-8">
                <Video className="w-16 h-16 text-[#D6B85A]" strokeWidth={1.5} />
                <p className="text-[#D6B85A] text-lg md:text-xl font-light">
                  Video to be added after photoshoot on 1st Nov
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
