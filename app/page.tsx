import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Hero />
      <About />
      <Testimonials />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
