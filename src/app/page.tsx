import { GetClients } from '@/service/getClients'
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

async function getData() {
  const { data } = await GetClients()

  const cliente: ICLient[] = data || []
  return cliente
}
