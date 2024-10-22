export const maskPhone = (phone: string) => {
  /** Implementing Mask of the Phone */
  return phone
    .replace(/[\D]/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{1})(\d{4})(\d)/, '$1 $2-$3')
    .replace(/(-\d{1})(\d{4})(\d+?)/, '$1')
}

export const maskCpf = (cpf: string) =>
  cpf.replace(/[^\d]/g, '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')

export const maskBirthday = (birthday: string) =>
  birthday.replace(/(\d{2})(\d{2})(\d{4})/, '$3-$2-$1')

export const removeMask = (mask: string) => mask.replace(/\D/g, '')
