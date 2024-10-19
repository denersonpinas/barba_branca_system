/* eslint-disable react/react-in-jsx-scope */

interface ILabel {
  children: React.ReactNode
  htmlFor: string
  error?: string | undefined
}

export const Label = ({ children, htmlFor, error }: ILabel) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium leading-6 ${error ? 'text-red-500' : 'text-gray-900'}`}
    >
      {children}
    </label>
  )
}
