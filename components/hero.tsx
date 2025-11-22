"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFB3C6] via-[#FF9EBB] to-[#FFD1DC] opacity-20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="flex justify-center items-center">
            <img 
              src="/logo.png" 
              alt="Claire Creates Moments - Wedding Celebrant" 
              className="w-[300px] md:w-[350px] lg:w-[450px] h-auto"
            />
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed text-pretty font-light italic">
            Where every moment becomes a memory, creating timeless ceremonies that reflect your story
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-[#FFB3C6] hover:bg-[#FF9EBB] text-white px-8 py-6 text-lg font-medium"
            >
              Enquire Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="border-[#D6B85A] text-[#D6B85A] hover:bg-[#D6B85A] hover:text-black px-8 py-6 text-lg font-medium"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
