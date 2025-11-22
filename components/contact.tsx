import { Card } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="bg-black leading-3 py-0">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-extralight text-[#D6B85A] text-center mb-4 text-balance tracking-tight">
            Let's Create Your Moment
          </h2>

          <p className="text-white/70 text-center mb-12 text-lg text-pretty">
            Get in touch to start planning your perfect ceremony
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-[#1C1C1C] border-[#D6B85A]/20 p-6 text-center md:col-span-3 lg:col-span-1">
              <Mail className="w-8 h-8 text-[#B76E8E] mx-auto mb-3" />
              <p className="text-white/90 text-sm">info@ccmoments.co.uk</p>
            </Card>

            <Card className="bg-[#1C1C1C] border-[#D6B85A]/20 p-6 text-center md:col-span-3 lg:col-span-2">
              <Phone className="w-8 h-8 text-[#B76E8E] mx-auto mb-3" />
              <p className="text-white/90 text-sm">Contact details available upon enquiry</p>
            </Card>
          </div>

          <Card className="bg-[#1C1C1C] border-[#D6B85A]/20 p-8 md:p-12">
            <form action="https://submit-form.com/TRUjK7Mrq" method="POST" className="space-y-6">
              <input type="hidden" name="_redirect" value="/" />
              <input type="hidden" name="_email.subject" value="New Wedding Enquiry from Claire Creates Moments" />
              <input type="hidden" name="_email.from" value="Claire Creates Moments Website" />

              <div>
                <label htmlFor="name" className="block text-[#D6B85A] mb-2 text-sm font-medium">
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full bg-black border border-[#D6B85A]/30 text-white rounded-md px-3 py-2 focus:outline-none focus:border-[#B76E8E] focus:ring-1 focus:ring-[#B76E8E]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#D6B85A] mb-2 text-sm font-medium">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full bg-black border border-[#D6B85A]/30 text-white rounded-md px-3 py-2 focus:outline-none focus:border-[#B76E8E] focus:ring-1 focus:ring-[#B76E8E]"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-[#D6B85A] mb-2 text-sm font-medium">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full bg-black border border-[#D6B85A]/30 text-white rounded-md px-3 py-2 focus:outline-none focus:border-[#B76E8E] focus:ring-1 focus:ring-[#B76E8E]"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#D6B85A] mb-2 text-sm font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full bg-black border border-[#D6B85A]/30 text-white rounded-md px-3 py-2 min-h-[150px] focus:outline-none focus:border-[#B76E8E] focus:ring-1 focus:ring-[#B76E8E]"
                  placeholder="Tell us about your special day..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#B76E8E] hover:bg-[#9B5A78] text-white py-6 text-lg rounded-md transition-colors"
              >
                Send Enquiry
              </button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
