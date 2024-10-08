import Table from '@/components/Table'
import { ICLient } from '@/types/common'

interface IHomeTemplate {
  data: ICLient[]
}

const header = ['nome', 'whatsapp', 'cpf', 'data_nacimento']

export const HomeTemplate = ({ data }: IHomeTemplate) => {
  return (
    <div className="min-h-full">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Table headers={header} data={data} />
      </div>
    </div>
  )
}
