"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://submit-form.com/TRUjK7Mrq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
          "_email.subject": "New Wedding Enquiry from Claire Creates Moments",
          "_email.from": "Claire Creates Moments Website",
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        form.reset()
        
        setTimeout(() => {
          setSubmitted(false)
        }, 5000)
      } else {
        alert("There was an error sending your message. Please try again or email us directly at info@ccmoments.co.uk")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert("There was an error sending your message. Please try again or email us directly at info@ccmoments.co.uk")
    } finally {
      setIsSubmitting(false)
    }
  }

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
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#B76E8E] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-medium text-[#D6B85A] mb-2 tracking-tight">Thank You!</h3>
                <p className="text-white/70">We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#D6B85A] mb-2 text-sm font-medium">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    disabled={isSubmitting}
                    className="w-full bg-black border border-[#D6B85A]/30 text-white rounded-md px-3 py-2 focus:outline-none focus:border-[#B76E8E] focus:ring-1 focus:ring-[#B76E8E] disabled:opacity-50"
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
                    disabled={isSubmitting}
                    className="w-full bg-black border border-[#D6B85A]/30 text-white rounded-md px-3 py-2 focus:outline-none focus:border-[#B76E8E] focus:ring-1 focus:ring-[#B76E8E] disabled:opacity-50"
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
                    disabled={isSubmitting}
                    className="w-full bg-black border border-[#D6B85A]/30 text-white rounded-md px-3 py-2 focus:outline-none focus:border-[#B76E8E] focus:ring-1 focus:ring-[#B76E8E] disabled:opacity-50"
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
                    disabled={isSubmitting}
                    className="w-full bg-black border border-[#D6B85A]/30 text-white rounded-md px-3 py-2 min-h-[150px] focus:outline-none focus:border-[#B76E8E] focus:ring-1 focus:ring-[#B76E8E] disabled:opacity-50"
                    placeholder="Tell us about your special day..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#B76E8E] hover:bg-[#9B5A78] text-white py-6 text-lg rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  )
}
