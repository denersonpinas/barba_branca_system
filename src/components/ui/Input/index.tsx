/* eslint-disable react/react-in-jsx-scope */
import { ChangeEvent, FocusEvent, ReactNode, useId } from 'react'
import { Label } from '../Label'

interface IInput {
  label: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: FocusEvent<HTMLInputElement, Element>) => void
  type?: string
  placeholder?: string
  icon?: ReactNode
  name?: string
  ariaLabel?: string
  error?: string | undefined
  minLength?: number | undefined
  maxLength?: number | undefined
  max?: string | number | undefined
  min?: string | number | undefined
}

const Input = ({
  label,
  onChange,
  type = 'text',
  placeholder = '',
  icon,
  name,
  onBlur,
  ariaLabel,
  error,
  value,
  minLength,
  maxLength,
  max,
  min
}: IInput) => {
  const htmlFor: string = useId()
  const className = `block w-full rounded-md border-0 py-1.5 pl-7 pr-2 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${error ? 'text-red-500 ring-gray-300 placeholder:text-red-400 focus:ring-red-600 outline outline-red-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-orange-600'}`

  return (
    <div>
      <Label htmlFor={htmlFor} error={error}>
        {label}
      </Label>
      <div className='relative mt-2 rounded-md shadow-sm'>
        {icon && (
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
            <span className={`sm:text-sm ${error ? 'text-red-500' : 'text-gray-500'}`}>{icon}</span>
          </div>
        )}
        {type == 'text' ? (
          <input
            type={type}
            name={name}
            id={htmlFor}
            className={className}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            aria-label={ariaLabel}
            value={value}
            maxLength={maxLength}
            minLength={minLength}
          />
        ) : (
          <input
            type={type}
            name={name}
            id={htmlFor}
            className={className}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            aria-label={ariaLabel}
            value={value}
            max={max}
            min={min}
          />
        )}
      </div>
      {error && <span className='text-center text-sm text-red-500'>{error}</span>}
    </div>
  )
}

export default Input
