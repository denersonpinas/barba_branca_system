export const formatString = (input: string): string => {
  // Verificar se a string está no formato de data DD/MM/YYYY
  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/
  if (dateRegex.test(input)) {
    // Se for uma data, retornar no formato correto
    const [day, month, year] = input.split('/')
    return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`
  }

  // Substituir "_" por espaço
  let formattedString = input.replace(/_/g, ' ')

  // Remover caracteres especiais (exceto letras, números e espaços)
  formattedString = formattedString.replace(/[^a-zA-Z0-9\s]/g, '')

  // Colocar apenas a primeira letra em maiúscula e o restante em minúsculas
  formattedString = formattedString.charAt(0).toUpperCase() + formattedString.slice(1).toLowerCase()

  return formattedString
}
