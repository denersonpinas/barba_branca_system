import axios from 'axios'

export const axiosApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_DOMAIN_BACKEND}${process.env.NEXT_PUBLIC_PORT_BACKEND ? ':' + process.env.NEXT_PUBLIC_PORT_BACKEND : ''}`,
  headers: {
    'Content-Type': 'application/json'
  }
})
