import type { ReactElement } from 'react'
import MainLayout from '@layouts/MainLayout'
import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginValidationSchema } from '@validations/schema'

type Inputs = {
  username: string
  password: string
}

const Login = () => {
  const formOptions = { resolver: yupResolver(loginValidationSchema) }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>(formOptions)

  /* eslint no-console: "off" */
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
          <h3 className="text-2xl font-bold text-center">Login</h3>

          {/* eslint @typescript-eslint/no-misused-promises: "off" */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4">
              {/* Username */}
              <div className="mt-4">
                <label className="block" htmlFor="username">
                  Username
                  <input
                    {...register('username')}
                    type="text"
                    placeholder="Username"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    id="username"
                  />
                </label>
                <span className="text-xs text-red-400">
                  {errors.username?.message}
                </span>
              </div>

              {/* Password */}
              <div className="mt-4">
                <label className="block" htmlFor="password">
                  Password
                  <input
                    {...register('password')}
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    id="password"
                  />
                </label>
                <span className="text-xs text-red-400">
                  {errors.password?.message}
                </span>
              </div>

              <div className="flex">
                <button
                  type="submit"
                  className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                >
                  Login
                </button>
              </div>
              <div className="mt-6 text-grey-dark flex gap-1">
                <span>Need an account?</span>
                <Link href="/register">
                  <a className="text-blue-600 hover:underline" href="#">
                    Register
                  </a>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout name="Login">{page}</MainLayout>
}
export default Login
