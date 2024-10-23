/* eslint-disable react/react-in-jsx-scope */
'use client'

import { usePathname } from 'next/navigation'

import { INavigation } from '@/types/common'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Script from 'next/script'
import localFont from 'next/font/local'

import './globals.css'

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
  { id: 1, name: 'Clientes', to: '/', current: true },
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
  const pathname = usePathname()

  const navigation = navigations.find((item) => item.to === pathname)

  return (
    <html lang='pt-br'>
      <body
        className={`min-h-screen w-full flex flex-col justify-start bg-[#f4f4f4] ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script src='/js/new_relic.js' />
        <Header
          userNavigation={userNavigation}
          navigations={navigations}
          namePage={navigation?.name || ''}
        />
        <main className='w-full flex flex-col justify-center items-center'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
