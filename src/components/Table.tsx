/* eslint-disable @typescript-eslint/no-explicit-any */

import { formatString } from '@/utils/commons'
import React from 'react'
import { MdEdit, MdRemove } from 'react-icons/md'

interface ITable {
  headers: string[]
  data: any[]
  onRemove?: (client: any) => void
  onEdit?: (client: any) => void
}

export const Table = ({ headers, data, onRemove, onEdit }: ITable) => {
  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full table-auto'>
        <thead className=''>
          <tr className='border-b border-gray-400'>
            {headers.map((header, index) => (
              <th key={index} className='px-4 py-2 text-left font-semibold text-black'>
                {formatString(header)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className='border-b'>
              {headers.map((header, index) => (
                <td key={index} className='px-4 py-2 text-gray-600'>
                  {row[header]}
                </td>
              ))}
              {(onRemove || onEdit) && (
                <td className='flex gap-2 px-4 py-2'>
                  {onRemove && (
                    <button
                      onClick={() => onRemove(row)}
                      className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded'
                    >
                      <MdRemove size={14} />
                    </button>
                  )}
                  {onEdit && (
                    <button
                      onClick={() => onEdit(row)}
                      className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded'
                    >
                      <MdEdit size={14} />
                    </button>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
