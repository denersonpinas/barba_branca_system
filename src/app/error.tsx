'use client'

import { useCallback, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ErrorLogInterface } from '@/types/common'
import Image from 'next/image'

const ErrorBoundary = ({ error, errorInfo }: ErrorLogInterface) => {
  const router = useRouter()

  const handleError = useCallback(() => {
    console.error('Error encontrado: ', error)
    if (errorInfo) {
      console.error('Informações adicionais: ', errorInfo)
    }
  }, [])

  const handleReload = () => router.refresh()

  useEffect(() => {
    handleError()
  }, [])

  return (
    <main className="h-screen flex justify-center items-center bg-white">
      <div className="text-center">
        <p className="text-base font-semibold text-orange-600">404</p>
        <Image width={350} height={350} src={'/image/error.png'} alt="Error" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Desculpe, nós não encontramos a página que você deseja.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
            Voltar para home
          </a>
          <button onClick={() => handleReload()} className="text-sm font-semibold text-gray-900">
            Recarregar a página <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>
    </main>
  )
}

export default ErrorBoundary
