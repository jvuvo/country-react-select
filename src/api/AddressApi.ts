import axios from 'axios'

const addressUrl = 'http://address-api.herokuapp.com/api'

export function get({ path, params }: any) {
  return axios.request({
    method: 'GET',
    url: `${addressUrl}${path}`,
    headers: {},
    params,
  })
}

export const getCountries = async (keywords: string) => {
  const { data } = await get({ path: `/countries` })
  const countries = data
    .filter((item: any) => item.name.includes(keywords) || keywords == '')
    .map((item: any) => ({ label: item.name, value: item.code }))
  return Promise.resolve(countries)
}

export const getStates = async (country: string, keywords: string) => {
  const { data } = await get({ path: `/countries/${country}/states` })
  const states = data
    .filter((item: any) => item.name.includes(keywords) || keywords == '')
    .map((item: any) => ({ label: item.name, value: item.code }))
  return Promise.resolve(states)
}

export const getCities = async (country: string, state: string, keywords: string) => {
  const { data } = await get({ path: `/countries/${country}/states/${state}/cities` })
  const cities = data
    .filter((item: any) => item.name.includes(keywords) || keywords == '')
    .map((item: any) => ({ label: item.name, value: item.code }))
  return Promise.resolve(cities)
}
