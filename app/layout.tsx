import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://nap.xfer.hr"),
  title: "NAP! - Natjecanje u Algoritamskom Programiranju",
  description: "Individualno natjecanje u algoritamskom programiranju otvoreno za sve učenike i studente",
  openGraph: {
    title: "NAP! - Natjecanje u Algoritamskom Programiranju",
    description: "Individualno natjecanje u algoritamskom programiranju otvoreno za sve učenike i studente",
    url: "https://nap.xfer.hr",
    siteName: "NAP!",
    locale: "hr_HR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hr">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
