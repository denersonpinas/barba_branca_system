import { ErrorLogInterface } from '@/types/common'

export const errorLog = ({ error, errorInfo }: ErrorLogInterface) => {
  console.error('Error encontrado: ', error)

  if (errorInfo) {
    console.error('Informações adicionais: ', errorInfo)
  }
}
