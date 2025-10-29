"use client"

import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    quote:
      "Claire planned our wedding for us throughout a time where it was quite difficult to do so due to COVID restrictions. From the first meeting she reassured us we would have our dream wedding at the parsonage. Rearranging from a 200 people wedding, to a 20 people intimate dinner to a 60 people wedding, she never once let us down and we always felt confident we were going to have an amazing day. She provided first class service and care for ourselves and our guests on the day. She knew what would be best and we had the most wonderful wedding - it flowed perfectly from start to finish. We can't thank Claire enough!",
    author: "Erin Cooper",
    year: "2018",
  },
  {
    quote:
      "I first met Claire back in 2017 after I accidently showed up to The Parsonage while she was waiting on a wedding arriving. As soon as I seen the venue I fell in love with it and knew this was the place I wanted to say 'I do'. I feel like I instantly clicked with Claire. She was so easy to talk to and her knowledge and experience made me feel so comfortable putting my trust in her to plan my big day. Over the course of the following year and a half Claire checked in regularly, helping me plan every detail of our wedding. Nothing was ever too much bother for her. To this day friends and family still comment on our wedding and I can't thank Claire enough.",
    author: "Stephanie Smith",
    year: "2018",
  },
  {
    quote:
      "Absolutely delighted to hear Claire's coming back to the wedding industry! I've worked alongside her many times as a florist while she managed several different venues. She's the best at what she does, always taking time to talk to everyone and consistently going above and beyond to make her couples' days run seamlessly. I have no doubt she'll excel in her new venture as a celebrant. It's so unique to have a celebrant who can also help plan your entire wedding day! Being a celebrant means she knows your whole story, so who better to help plan your big day exactly as you imagine it? Anyone who works with Claire will be in safe hands.",
    author: "Sarah Dornan",
    year: "2024",
  },
  {
    quote:
      "We got married on 22/9/2018 at the parsonage and our events planner was Claire, right from the start she made us feel at ease discussing details of what we hoped to achieve on our special day. Nothing was too much trouble and even minor details which may seem silly were taken on board and put into place, working with our suppliers which took the pressure off us. Claire worked hard behind the scenes and never stopped! But still made time to come for a chat to see that everything was ok making it a truly special day.",
    author: "Elaine Buist",
    year: "2018",
  },
  {
    quote:
      "I had the pleasure of working with Claire for a number of years when she was the Wedding Co-ordinator at The Parsonage and I was a Humanist Celebrant - and she was one of the best, if not THE best, in the business! She was always cheerful, friendly, relaxed and approachable with everyone and it was always clear to me that her brides and grooms adored her! Totally professional without being officious, I have no idea how she managed to work so hard to make everything perfect for her couples, but also make it look effortless! Claire is a real people person, someone who just has that knack of calming nerves and making everyone feel welcome, relaxed and comfortable.",
    author: "Mary Wallace",
    year: "2018",
  },
  {
    quote:
      "Working with Claire was the best and easiest decision in the whole of our wedding planning process. Every detail was taken care of she took the time to get to know us from our 1st meeting and made our whole day so tailored just for us – everyone who met Claire on the day mentioned her to us afterwards and she left a lovely and lasting impression on us and our guests. We found that Claire was super intuitive and gets what it takes to incorporate the little details to a couple's important day. Wouldn't hesitate to recommend Claire's involvement in organising any aspect of anyone's wedding.",
    author: "Yvonne Munn",
    year: "2018",
  },
  {
    quote:
      "Don't really know where to start but Claire is just the best and don't think I could have planned our wedding without her. From the very start of us just viewing the Parsonage as a potential wedding venue right up until the wedding finished on our wedding night she was always there and she was really unwell the week of our wedding but didn't want to let us down and still came in to work. Her attention to detail is amazing and my Husband and I just clicked with her from the start, she really made planning our wedding so much easier because we genuinely had no clue where to start.",
    author: "Clair Ramsay",
    year: "2018",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-extralight text-[#D6B85A] text-center mb-4 text-balance tracking-tight">
            Love Stories
          </h2>

          <p className="text-white/70 text-center mb-16 text-lg text-pretty">
            Hear from couples who trusted Claire with their special day
          </p>

          <div className="relative min-h-[550px] md:min-h-[480px]">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br from-[#1C1C1C] to-[#1C1C1C]/50 border-[#FFB3C6]/30 p-6 md:p-8 transition-all duration-500 flex flex-col absolute inset-0 ${
                  index === currentIndex ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <Quote className="w-8 h-8 md:w-10 md:h-10 text-[#FFB3C6] mb-4 md:mb-6 flex-shrink-0" />
                <p className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8 font-light text-pretty">
                  "{testimonial.quote}"
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 flex-shrink-0 pt-4 border-t border-[#FFB3C6]/20 mt-auto">
                  <p className="text-[#D6B85A] font-semibold text-sm md:text-base">{testimonial.author}</p>
                  <p className="text-white/50 text-xs md:text-sm">{testimonial.year}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-[#FFB3C6] w-8" : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
