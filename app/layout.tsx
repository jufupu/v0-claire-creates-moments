import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Great_Vibes } from "next/font/google"
import "./globals.css"
import { ClientLayout } from "./ClientLayout"

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-great-vibes",
  weight: ["400"],
})

export const metadata: Metadata = {
  title: "Claire Creates Moments | Bespoke Wedding Celebrant",
  description: "Where every moment becomes a memory, creating timeless ceremonies that reflect your story.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${greatVibes.variable}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
