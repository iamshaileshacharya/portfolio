// app/layout.tsx

import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { portfolioData } from '../portfolioData'
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'], display: 'swap', variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Shailesh Acharya - Portfolio',
  description: 'Computer Science graduate student at Tribhuvan University with expertise in full-stack development, cloud computing (AWS/Azure), and machine learning. Skilled in HTML, CSS, JavaScript, Hugo framework, with additional proficiency in cybersecurity, SEO, and digital marketing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioData) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}