import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LearnSphere - Expand Your Universe of Knowledge",
  description:
    "Premium Learning Management System with expert-led courses, interactive projects, and career-focused content. Join millions of learners worldwide.",
  keywords: "online learning, courses, education, LMS, skills development, professional training",
  authors: [{ name: "LearnSphere Team" }],
  creator: "LearnSphere",
  publisher: "LearnSphere",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://learnsphere.com"),
  openGraph: {
    title: "LearnSphere - Expand Your Universe of Knowledge",
    description: "Premium Learning Management System with expert-led courses and interactive learning experiences.",
    url: "https://learnsphere.com",
    siteName: "LearnSphere",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LearnSphere - Premium Learning Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LearnSphere - Expand Your Universe of Knowledge",
    description: "Premium Learning Management System with expert-led courses and interactive learning experiences.",
    images: ["/twitter-image.jpg"],
    creator: "@learnsphere",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0A0E27" />
        <meta name="color-scheme" content="dark light" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
