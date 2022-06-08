import type { ReactElement } from 'react'
import MainLayout from '@layouts/MainLayout'

const Login = () => {
  return <div>Login</div>
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout name="Login">{page}</MainLayout>
}
export default Login
