/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit'

export const registerUser = createAsyncThunk(
  'users/registerUser',
  async ({ username, email, password }, thunkAPI) => {
    try {
      const response = await fetch(
        'https://62a1c3bfcc8c0118ef54210f.mockapi.io/api/v1/users',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            email,
            password,
          }),
        }
      )
      const data = await response.json()
      console.log('data', data)
      if (response.status === 200) {
        localStorage.setItem('token', data.token)
        return { ...data, username, email }
      }
      return thunkAPI.rejectWithValue(data)
    } catch (e) {
      console.log('Error', e.response.data)
      return thunkAPI.rejectWithValue(e.response.data)
    }
  }
)
