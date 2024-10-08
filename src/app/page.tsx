import { axiosApi } from '@/lib/axios_config'
import { HomeTemplate } from '@/template/Home'
import { ICLient } from '@/types/common'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Barba Branca System',
  description: 'O melhor gerenciamento de barbearia do Brasil.'
}

export default async function Home() {
  const data: ICLient[] = await getData()
  return <HomeTemplate data={data} />
}

export const getData = async () => {
  const { data } = await axiosApi.get('/clientes')

  if (!data || data.length == 0) throw new Error('Falha na requisição!')

  const cliente: ICLient[] = data
  return cliente
}
