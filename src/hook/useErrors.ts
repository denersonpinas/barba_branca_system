'use client'

import { useCallback, useState } from 'react'

interface IError {
  field: string
  message: string
}

export const useErrors = () => {
  const [errors, setErrors] = useState<IError[]>([])

  const setError = useCallback(
    ({ field, message }: IError) => {
      const errorIndex = errors.findIndex((error) => error.field === field)

      if (errorIndex !== -1) {
        setErrors((prevState) => {
          prevState[errorIndex] = { field, message }
          return [...prevState]
        })
        return
      }
      setErrors((prevState) => [...prevState, { field, message }])
    },
    [errors]
  )

  const removeError = useCallback((field: string) => {
    setErrors((prevState) => prevState.filter((error) => error.field !== field))
  }, [])

  const getErrorMessageByFieldName = useCallback(
    (field: string) => errors.find((error) => error.field === field)?.message,
    [errors]
  )

  return { errors, setError, removeError, getErrorMessageByFieldName }
}
