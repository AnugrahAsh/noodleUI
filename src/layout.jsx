import React from "react"
import { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const Metadata = {
  title: "NoodleUI - Beautiful React Components for Modern Web Apps",
  description:
    "A comprehensive React component library with 300+ components including premium designs, chatbot UI, stunning backgrounds, text animations, and essential building blocks. Built with Tailwind CSS and designed for the future of human-AI interaction.",
  keywords:
    "React components, UI library, Tailwind CSS, chatbot UI, premium components, text animations, backgrounds, TypeScript, Next.js",
  authors: [{ name: "NoodleUI Team" }],
  creator: "NoodleUI",
  publisher: "NoodleUI",
  openGraph: {
    title: "NoodleUI - Beautiful React Components",
    description: "Premium React component library with 300+ components for modern web applications",
    url: "https://noodle-ui.vercel.app",
    siteName: "NoodleUI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NoodleUI - React Component Library",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NoodleUI - Beautiful React Components",
    description: "Premium React component library with 300+ components for modern web applications",
    images: ["/og-image.png"],
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
  },
}

export default function RootLayout({ children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                  document.documentElement.style.colorScheme = 'dark'
                } else {
                  document.documentElement.classList.remove('dark')
                  document.documentElement.style.colorScheme = 'light'
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}


