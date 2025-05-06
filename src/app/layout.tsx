import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "./../app/components/Header"
import Footer from "./../app/components/Footer"
import "./globals.scss"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kyam Portal",
  description: "Kyam Portal Site",
  openGraph: {
    title: "Kyam Portal",
    description: "Kyam Portal Site",
    url: "https://kyam-next-app.vercel.app/",
    siteName: "Kyam Portal",
    images: [
      {
        url: "https://kyam-next-app.vercel.app/ogp/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Kyam Portal",
      }
    ],
    locale: "ja_JP",
    type: "website",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="layout">
          <Header />
          <main>
            <div className="container">
              {children}
            </div>
          </main>
          <Footer />
          </div>
      </body>
    </html>
  )
}
