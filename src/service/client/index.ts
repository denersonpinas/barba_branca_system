import { axiosApi } from '@/lib/axios_config'
import { IClient, IClientRepository, IClientResponse } from '@/types/client'

// Get clients
export async function GetClients() {
  try {
    const response = await axiosApi.get('/clientes')
    return response.data
  } catch (error) {
    console.error('Erro econtrado: ', error)
    return []
  }
}

// Delete client
export async function DeleteClient(id: string) {
  try {
    const response = await axiosApi.delete(`/clientes/${id}`)
    const status: number = response.status
    return status
  } catch (error) {
    console.error('Erro econtrado: ', error)
    return []
  }
}

// Post clients
export async function PostClient(data: IClientRepository): Promise<IClientResponse> {
  try {
    const response = await axiosApi.post('/clientes', data)

    const dataResponse: IClient = response.data
    return { success: true, data: dataResponse, status: response.status }
  } catch (error) {
    console.error('Erro econtrado: ', error)
    return { success: true, data: {}, status: 500 }
  }
}

// Upload clients
export async function UpdateClient(data: IClientRepository, id: string): Promise<IClientResponse> {
  try {
    const response = await axiosApi.put(`/clientes/${id}`, data)

    const dataResponse: IClient = response.data
    return { success: true, data: dataResponse, status: response.status }
  } catch (error) {
    console.error('Erro econtrado: ', error)
    return { success: true, data: {}, status: 500 }
  }
}
