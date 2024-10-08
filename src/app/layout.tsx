'use client'

import Script from 'next/script'
import localFont from 'next/font/local'
import { INavigation } from '@/types/common'

import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

const navigations: INavigation[] = [
  { id: 1, name: 'Home', to: '/', current: true },
  { id: 2, name: 'Team', to: '#', current: false },
  { id: 3, name: 'Projects', to: '#', current: false },
  { id: 4, name: 'Calendar', to: '#', current: false },
  { id: 5, name: 'Reports', to: '#', current: false }
]

const userNavigation: INavigation[] = [
  { id: 1, name: 'Your Profile', to: '#' },
  { id: 2, name: 'Settings', to: '#' },
  { id: 3, name: 'Sign out', to: '#' }
]

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`bg-[#f4f4f4] ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script src="/script/new_relic.js" />
        <Header userNavigation={userNavigation} navigations={navigations} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
