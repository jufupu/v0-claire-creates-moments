"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Users, Sparkles } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Personalised Ceremonies",
    description: "A bespoke ceremony crafted to reflect your unique love story.",
  },
  {
    icon: FileText,
    title: "Script Writing",
    description: "Personalised scripts that reflect your love and life together.",
  },
  {
    icon: Users,
    title: "Planning Support",
    description: "Guidance and support from the initial consultation all the way through to the big day.",
  },
  {
    icon: Sparkles,
    title: "The Full Experience",
    description: "From ceremony design to rehearsal coordination, Claire is by your side every step of the way.",
  },
]

export function Services() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-[#FFB3C6]/15 via-black to-[#FFD1DC]/15">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-[#D6B85A] text-center mb-2 text-balance font-extralight">
            Creating Your Perfect Day
          </h2>

          <p className="text-white/70 text-center mb-8 text-base md:text-lg max-w-2xl mx-auto text-pretty">
            A comprehensive service tailored to bring your wedding vision to life
          </p>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="bg-[#1C1C1C] border-[#D6B85A]/20 p-4 md:p-6 hover:border-[#FFB3C6] transition-colors flex flex-col"
                >
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-[#FFB3C6] mb-3" strokeWidth={1.5} />
                  <h3 className="text-lg md:text-xl font-medium text-[#D6B85A] mb-2">{service.title}</h3>
                  <p className="text-white/70 leading-relaxed text-sm mb-4 flex-grow">{service.description}</p>
                  <Button
                    onClick={scrollToContact}
                    variant="outline"
                    className="w-full border-[#FFB3C6] text-[#FFB3C6] hover:bg-[#FFB3C6] hover:text-black text-sm bg-transparent"
                  >
                    Find Out More
                  </Button>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
