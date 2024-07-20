import axios from 'axios'

const apiDevClub = axios.create({
  baseURL: 'https://codeburger-api-production-a066.up.railway.app/'
})

apiDevClub.interceptors.request.use(async config => {
  const customerData = await localStorage.getItem('devclub:customerData')
  const token = customerData && JSON.parse(customerData).token

  config.headers.authorization = `Bearer ${token}`

  return config
})

export default apiDevClub
