'use client'

import { navigationInterface } from '@/types/common'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const navigations: navigationInterface[] = [
  { id: 1, name: 'Home', to: '/', current: true },
  { id: 2, name: 'Team', to: '#', current: false },
  { id: 3, name: 'Projects', to: '#', current: false },
  { id: 4, name: 'Calendar', to: '#', current: false },
  { id: 5, name: 'Reports', to: '#', current: false }
]

const userNavigation: navigationInterface[] = [
  { id: 1, name: 'Your Profile', to: '#' },
  { id: 2, name: 'Settings', to: '#' },
  { id: 3, name: 'Sign out', to: '#' }
]

export default function Home() {
  const [isOpenUserNavigation, setIsOpenUserNavigation] = useState(false)
  const [isOpenNavigation, setIsOpenNavigation] = useState(false)

  return (
    <div className="min-h-full">
      <nav className="bg-orange-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  width={32}
                  height={32}
                  className="h-8 w-8"
                  src="https://tailwindui.com/plus/img/logos/mark.svg"
                  alt="Your Company"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navigations.map((navigation) => (
                    <Link
                      href={navigation.to}
                      key={navigation.id}
                      className={`rounded-md px-3 py-2 text-sm font-medium ${
                        navigation.current
                          ? 'bg-orange-900 text-white'
                          : 'text-white hover:bg-orange-700 hover:text-white'
                      }`}
                      aria-current={navigation.current ? 'page' : undefined}
                    >
                      {navigation.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  className="relative rounded-full bg-orange-800 p-1 text-orange-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-800"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                    />
                  </svg>
                </button>

                <div className="relative ml-3">
                  <div>
                    <button
                      type="button"
                      className="relative flex max-w-xs items-center rounded-full bg-orange-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-800"
                      id="user-menu-button"
                      aria-expanded={isOpenUserNavigation}
                      aria-haspopup={!isOpenUserNavigation}
                      onClick={() => setIsOpenUserNavigation(!isOpenUserNavigation)}
                    >
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">Open user menu</span>
                      <Image
                        width={32}
                        height={32}
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                        alt=""
                      />
                    </button>
                  </div>

                  {isOpenUserNavigation && (
                    <div
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabIndex={-1}
                    >
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-orange-700"
                        role="menuitem"
                        tabIndex={-1}
                        id="user-menu-item-0"
                      >
                        Your Profile
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-orange-700"
                        role="menuitem"
                        tabIndex={-1}
                        id="user-menu-item-1"
                      >
                        Settings
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-orange-700"
                        role="menuitem"
                        tabIndex={-1}
                        id="user-menu-item-2"
                      >
                        Sign out
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md bg-orange-800 p-2 text-orange-400 hover:bg-orange-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-800"
                aria-controls="mobile-menu"
                aria-expanded={isOpenNavigation}
                onClick={() => setIsOpenNavigation(!isOpenNavigation)}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {isOpenNavigation &&
              navigations.map((navigation) => (
                <Link
                  href={navigation.to}
                  key={navigation.id}
                  className={`block rounded-md px-3 py-2 text-sm font-medium ${
                    navigation.current
                      ? 'bg-orange-900 text-white'
                      : 'text-orange-300 hover:bg-orange-700 hover:text-white'
                  }`}
                  aria-current={navigation.current ? 'page' : undefined}
                >
                  {navigation.name}
                </Link>
              ))}
          </div>
          <div className="border-t border-orange-700 pb-3 pt-4">
            <div className="flex items-center px-5">
              <button
                className="flex-shrink-0"
                onClick={() => setIsOpenUserNavigation(!isOpenUserNavigation)}
              >
                <Image
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt=""
                />
              </button>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-white">Tom Cook</div>
                <div className="text-sm font-medium leading-none text-orange-400">
                  tom@example.com
                </div>
              </div>
              <button
                type="button"
                className="relative ml-auto flex-shrink-0 rounded-full bg-orange-800 p-1 text-orange-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-800"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                  />
                </svg>
              </button>
            </div>
            {isOpenUserNavigation && (
              <div className="mt-3 space-y-1 px-2">
                {userNavigation.map((navigation) => (
                  <Link
                    key={navigation.id}
                    href={navigation.to}
                    className="block rounded-md px-3 py-2 text-base font-medium text-orange-400 hover:bg-orange-700 hover:text-white"
                  >
                    {navigation.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-orange-900">Home</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"></div>
      </main>
    </div>
  )
}
