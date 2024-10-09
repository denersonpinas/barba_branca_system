import { IErrorLog } from '@/types/common'

export const errorLog = ({ error, errorInfo }: IErrorLog) => {
  console.error('Error encontrado: ', error)

  if (errorInfo) {
    console.error('Informações adicionais: ', errorInfo)
  }
}
