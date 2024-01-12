import axios from 'axios'

const apiDevClub = axios.create({
  baseURL: 'http://localhost:3001'
})

apiDevClub.interceptors.request.use(async config => {
  const customerData = await localStorage.getItem('devclub:customerData')
  const token = customerData && JSON.parse(customerData).token

  config.headers.authorization = `Bearer ${token}`

  return config
})

export default apiDevClub
