import { ErrorInfo } from 'react'

export interface navigationInterface {
  id: number
  name: string
  to: string
  current?: boolean
}

export interface ErrorLogInterface {
  error: Error
  errorInfo?: ErrorInfo
}
