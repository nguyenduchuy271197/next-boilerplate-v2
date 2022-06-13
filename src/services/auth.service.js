import axios from 'axios'

const API_URL = 'http://localhost:4000/v1/auth/'

axios.defaults.baseURL = API_URL

const register = (username, email, password) => {
  return axios.post('/signup', {
    username,
    email,
    password,
  })
}

const login = (username, password) => {
  return axios
    .post('/signin', {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }

      return response.data
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
