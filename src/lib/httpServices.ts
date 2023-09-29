import axios, { AxiosRequestConfig } from "axios"

const options: AxiosRequestConfig = {
  method: 'GET',
  url: `https://${process.env.NEXT_PUBLIC_TOKEN_API_URL}/coins`,
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    'tiers[0]': '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
  },
  headers: {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_TOKEN_API_KEY || 0 || false,
    'X-RapidAPI-Host': process.env.NEXT_PUBLIC_TOKEN_API_URL || 0 || false
  }
}

// eslint-disable-next-line import/prefer-default-export
export const http = {
  request: () => axios.request(options)
}