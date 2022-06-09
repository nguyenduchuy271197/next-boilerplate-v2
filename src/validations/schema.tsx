import * as Yup from 'yup'

export const registerValidationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().required('Email is required').email('Email is invalid'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
})

export const loginValidationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
})
