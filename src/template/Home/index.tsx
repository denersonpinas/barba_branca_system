/* eslint-disable react/react-in-jsx-scope */
'use client'

import { Table } from '@/components/Table'
import Input from '@/components/ui/Input'
import { useErrors } from '@/hook/useErrors'
import { DeleteClient, PostClient } from '@/service/client'
import { IClient, IClientRepository } from '@/types/client'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useState } from 'react'
import { MdPhone } from 'react-icons/md'

interface IHomeTemplate {
  data: IClient[]
}

const header = ['nome', 'whatsapp', 'cpf', 'data_nacimento', '']

const textErrorMessage = {
  name: 'Informe o nome completo',
  cpf: 'Informe um CPF válido',
  phone: 'Informe um telefone válido'
}

export const HomeTemplate = ({ data }: IHomeTemplate) => {
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [cpf, setCpf] = useState<string>('')
  const [birthday, setBirthday] = useState<string>('')
  const [client, setClient] = useState<IClient>()
  const [isOpen, setIsOpen] = useState(false)
  const { setError, getErrorMessageByFieldName, removeError } = useErrors()
  const router = useRouter()

  const cleanAndNormalizeString = (str: string) => {
    const cleanedStr = str.replace(/[^a-zA-Z\s]/g, '')
    const normalizeStr = cleanedStr.replace(/\s{2,}/g, ' ')
    return normalizeStr
  }

  const isFullNameValid = (name: string) => {
    /**
     * Verify is the name is valid
     * :params  - name in string
     * :return  - boolean
     */
    const fullNameRegex = /(^[a-zA-Z]{3,})(\s+[a-zA-Z]{2,})+$/
    return fullNameRegex.test(name.trim())
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    /**
     * Verify if the name is valid
     * :params  - event
     * :return  - void
     */
    e.preventDefault()
    const isBlur = e.type === 'blur'
    const isTouched = e.currentTarget.dataset.touched
    const nameClean = cleanAndNormalizeString(e.target.value)

    if (isBlur && !isTouched) {
      e.currentTarget.dataset.touched = 'true'
      const response = isFullNameValid(nameClean)

      if (!response) {
        setError({ field: 'name', message: textErrorMessage.name })
      }
    }

    if (!isBlur && isTouched) {
      const response = isFullNameValid(nameClean)

      if (!response) {
        setError({ field: 'name', message: textErrorMessage.name })
      } else {
        removeError('name')
      }
    }

    setName(nameClean)
  }

  const handleModal = (client: IClient) => {
    if (client?.id) {
      setClient(client)
      setIsOpen(true)
    }
  }

  const handleRemoveClient = async () => {
    if (client?.id) {
      const response = await DeleteClient(client.id)

      if (response === 200) {
        setIsOpen(false)
        setClient(undefined)
        router.refresh()
      }
    }
  }

  const handleSendClient = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data: IClientRepository = { nome: name, whatsapp: phone, cpf, data_nacimento: birthday }

    const response: IClient | never[] = await PostClient(data)

    if (response?.id) {
      console.log('Success: ', response)

      setName('')
      setPhone('')
      setCpf('')
      setBirthday('')
    } else {
      console.error('Error: encontramos um error na requisição.')
    }
  }

  return (
    <div className='w-full max-w-7xl flex flex-col justify-center items-center gap-8 px-4 py-6 pt-16 pb-16 sm:px-6 lg:px-8'>
      <section className='w-full'>
        <form
          className='w-full flex gap-4 p-4 bg-white rounded-lg shadow-md'
          onSubmit={(e) => handleSendClient(e)}
        >
          <fieldset className='w-full flex gap-4'>
            <Input
              label='Nome Completo'
              onChange={(e) => handleNameChange(e)}
              onBlur={(e) => handleNameChange(e)}
              error={getErrorMessageByFieldName('name')}
              value={name}
            />
            <Input
              label='Whatsapp'
              icon={<MdPhone size={14} />}
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <Input label='Cpf' onChange={(e) => setCpf(e.target.value)} value={cpf} />
            <Input
              label='Data Nacimento'
              onChange={(e) => setBirthday(e.target.value)}
              value={birthday}
            />
          </fieldset>
          <div className='w-1/3 flex flex-col gap-2'>
            <button
              type='submit'
              className='flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600'
            >
              Salvar
            </button>
            <button
              type='button'
              className='flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-orange-600 hover:text-orange-500'
            >
              Cancelar
            </button>
          </div>
        </form>
      </section>
      <div className='w-full justify-center items-center'>
        <Table headers={header} data={data} onRemove={(client) => handleModal(client)} />
      </div>

      {isOpen && (
        <div
          className='relative z-10'
          aria-labelledby='modal-title'
          role='dialog'
          aria-modal='true'
        >
          <section
            className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
            aria-hidden='true'
          ></section>

          <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
            <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
              <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                  <div className='sm:flex sm:items-start'>
                    <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>
                      <svg
                        className='h-6 w-6 text-red-600'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        aria-hidden='true'
                        data-slot='icon'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z'
                        />
                      </svg>
                    </div>
                    <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
                      <h3
                        className='text-base font-semibold leading-6 text-gray-900'
                        id='modal-title'
                      >
                        Atenção!
                      </h3>
                      <div className='mt-2'>
                        <p className='text-sm text-gray-500'>
                          Você está prestes a excluir permanentemente o cliente{' '}
                          <strong>{client?.nome}</strong> de nossa base de dados. Essa ação não
                          poderá ser desfeita e todos os dados relacionados a esse cliente serão
                          removidos.
                        </p>
                        <p className='text-sm text-gray-500'>
                          Tem certeza de que deseja continuar com a exclusão?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row sm:justify-end sm:items-center sm:gap-2 sm:px-6'>
                  <button
                    type='button'
                    className='flex justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500'
                    onClick={() => handleRemoveClient()}
                  >
                    Excluir
                  </button>
                  <button
                    type='button'
                    className='justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:w-auto'
                    onClick={() => setIsOpen(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
