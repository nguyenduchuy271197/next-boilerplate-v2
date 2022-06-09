import type { ReactElement } from 'react'
import MainLayout from '@layouts/MainLayout'
import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerValidationSchema } from '@validations/schema'
import { toast } from 'react-toastify'

type Inputs = {
  username: string
  email: string
  password: string
  confirmPassword: string
}

const Register = () => {
  const formOptions = { resolver: yupResolver(registerValidationSchema) }

  // get functions to build form with useForm() hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>(formOptions)

  /* eslint no-console: "off" */
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data) {
      toast.success('Register successful. Please login')
    }
  }

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
          <h3 className="text-2xl font-bold text-center">Join us</h3>

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

              {/* Email */}
              <div className="mt-4">
                <label className="block" htmlFor="email">
                  Email
                  <input
                    {...register('email')}
                    type="text"
                    placeholder="Email"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    id="email"
                  />
                </label>
                <span className="text-xs text-red-400">
                  {errors.email?.message}
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

              {/* Confirm Password */}
              <div className="mt-4">
                <label className="block" htmlFor="confirmPassword">
                  Confirm Password
                  <input
                    {...register('confirmPassword')}
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    id="confirmPassword"
                  />
                </label>
                <span className="text-xs text-red-400">
                  {errors.confirmPassword?.message}
                </span>
              </div>

              <div className="flex">
                <button
                  type="submit"
                  className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                >
                  Create Account
                </button>
              </div>
              <div className="mt-6 text-grey-dark flex gap-1">
                <span>Already have an account?</span>
                <Link href="/login">
                  <a className="text-blue-600 hover:underline" href="#">
                    Log in
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

Register.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout name="Register">{page}</MainLayout>
}
export default Register
