export interface IClient {
  id: string
  nome: string
  whatsapp: string
  cpf: string
  data_nacimento: string
}

export interface IClientRepository {
  nome: string
  whatsapp: string
  cpf: string
  data_nacimento: string
}

export interface IClientResponse {
  success: boolean
  data: IClient | object
  status: number
}
