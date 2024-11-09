// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { portfolioData } from '../portfolioData'

import Script from 'next/script'

// Next.js Font Optimization
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-inter',
  fallback: ['system-ui', 'arial']
})

export const metadata: Metadata = {
  metadataBase: new URL('https://acharyashailesh.com.np'),
  title: {
    default: 'Shailesh Acharya - Portfolio',
    template: '%s | Shailesh Acharya'
  },
  description: 'Computer Science graduate student at Tribhuvan University with expertise in full-stack development, cloud computing (AWS/Azure), and machine learning. Skilled in HTML, CSS, JavaScript, Hugo framework, with additional proficiency in cybersecurity, SEO, and digital marketing',
  keywords: [
    'Shailesh Acharya',
    'Portfolio',
    'Computer Science',
    'Web Development',
    'Machine Learning',
    'Cloud Computing',
    'AWS',
    'Azure'
  ],
  openGraph: {
    title: 'Shailesh Acharya - Portfolio',
    description: 'Computer Science graduate student with expertise in full-stack development and machine learning',
    url: 'https://acharyashailesh.com.np',
    siteName: 'Shailesh Acharya Portfolio',
    images: [
      {
        url: '/profile.jpg',
        width: 800,
        height: 600,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shailesh Acharya - Portfolio',
    description: 'Computer Science graduate student with expertise in full-stack development and machine learning',
    images: ['/profile.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className} ${inter.variable}`}>
      <head>
        {/* Schema.org JSON-LD */}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(portfolioData)
          }}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

      </head>
      <body className="antialiased min-h-screen">
        <div className="flex flex-col min-h-screen">
          {children}

        </div>
      </body>
    </html>
  )
}