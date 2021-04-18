import Axios from 'axios'

const axiosInstance = Axios.create({
  baseURL: 'https://restcountries.eu/rest/v2'
})

export const AXIOS = {
  get (url) {
    return axiosInstance.get(url)
  }
}
