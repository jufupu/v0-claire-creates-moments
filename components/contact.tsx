"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Form submitted:", formData)
    setSubmitted(true)
    setIsSubmitting(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", phone: "", message: "" })
    }, 3000)
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
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-black border-[#D6B85A]/30 text-white focus:border-[#B76E8E]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#D6B85A] mb-2 text-sm font-medium">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-black border-[#D6B85A]/30 text-white focus:border-[#B76E8E]"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[#D6B85A] mb-2 text-sm font-medium">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-black border-[#D6B85A]/30 text-white focus:border-[#B76E8E]"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#D6B85A] mb-2 text-sm font-medium">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-black border-[#D6B85A]/30 text-white focus:border-[#B76E8E] min-h-[150px]"
                    placeholder="Tell us about your special day..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#B76E8E] hover:bg-[#9B5A78] text-white py-6 text-lg"
                >
                  {isSubmitting ? "Sending..." : "Send Enquiry"}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  )
}
