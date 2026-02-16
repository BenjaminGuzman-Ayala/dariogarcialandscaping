import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { LocalBusinessSchema } from '@/components/json-ld'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: {
    default: 'Dario Garcia Landscaping | Expert Landscaping & Lawn Care in Summit, IL',
    template: '%s | Dario Garcia Landscaping',
  },
  description:
    'Dario Garcia Landscaping provides professional landscaping, lawn care, tree removal, snow removal, and hardscaping services in Summit, IL, Chicago, and surrounding suburbs. Family-owned with years of experience. Call (312) 985-0996 for a free estimate.',
  keywords: [
    'landscaping Summit IL',
    'lawn care Chicago',
    'snow removal Summit IL',
    'tree removal Chicago suburbs',
    'brick paving Summit IL',
    'asphalt seal coating Chicago',
    'landscaping near me',
    'Dario Garcia Landscaping',
  ],
  openGraph: {
    title: 'Dario Garcia Landscaping | Expert Landscaping & Lawn Care in Summit, IL',
    description:
      'Professional landscaping, lawn care, tree removal, snow removal, and more in Summit, IL & Chicago suburbs. Call (312) 985-0996.',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport = {
  themeColor: '#516116',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <LocalBusinessSchema />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
