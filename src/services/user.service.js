import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:4000/v1/test/'

axios.defaults.baseURL = API_URL
// eslint-disable-next-line @typescript-eslint/dot-notation
axios.defaults.headers.common['Authorization'] = authHeader()['x-access-token']

const getPublicContent = () => {
  return axios.get('/all')
}

const getUserBoard = () => {
  return axios.get('/user')
}

const getModeratorBoard = () => {
  return axios.get('/mod')
}

const getAdminBoard = () => {
  return axios.get('/admin')
}

const userService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
}

export default userService
