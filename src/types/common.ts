import { ErrorInfo } from 'react'

export interface INavigation {
  id: number
  name: string
  to: string
  current?: boolean
}

export interface IErrorLog {
  error: Error
  errorInfo?: ErrorInfo
}

export interface ICLient {
  id: string
  nome: string
  whatsapp: string
  cpf: string
  data_nacimento: string
}
