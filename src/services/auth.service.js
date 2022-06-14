import axios from 'axios'

const API_URL = 'http://localhost:4000/v1/auth/'

axios.defaults.baseURL = API_URL

const register = (username, email, password) => {
  return axios.post('/register', {
    username,
    email,
    password,
  })
}

const login = (email, password) => {
  return axios.post('/login', {
    email,
    password,
  })
}

const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  login,
  logout,
}

export default authService
