/* eslint-disable react/react-in-jsx-scope */
import { GetClients } from '@/service/client'
import { HomeTemplate } from '@/template/Home'
import { IClient } from '@/types/client'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Barba Branca System',
  description: 'O melhor gerenciamento de barbearia do Brasil.'
}

export default async function Home() {
  const data: IClient[] = await getData()
  return <HomeTemplate data={data} />
}

async function getData() {
  const data: IClient[] = await GetClients()

  const cliente = data || []
  return cliente
}
