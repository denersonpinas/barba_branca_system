import { formatString } from '@/utils/commons'
import React from 'react'

interface ITable {
  headers: string[]
  data: any[]
}

const Table = ({ headers, data }: ITable) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead className="">
          <tr className="border-b border-gray-400">
            {headers.map((header, index) => (
              <th key={index} className="px-4 py-2 text-left font-semibold text-black">
                {formatString(header)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b">
              {headers.map((header, index) => (
                <td key={index} className="px-4 py-2 text-gray-600">
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
