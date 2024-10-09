import { axiosApi } from '@/lib/axios_config'

// Get clients
export async function GetClients() {
  try {
    const response = await axiosApi.get('/clientes')
    return response.data
  } catch (error) {
    console.log('Erro econtrado: ', error)
    return []
  }
}
