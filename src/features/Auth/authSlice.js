/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import AuthService from '@services/auth.service'

export const register = createAsyncThunk(
  'auth/register',
  async ({ username, email, password }, thunkAPI) => {
    try {
      const response = await AuthService.register(username, email, password)
      return response.data
    } catch (error) {
      const errorMessage = error?.response?.data
      return thunkAPI.rejectWithValue(errorMessage)
    }
  }
)

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await AuthService.login(email, password)
      if (response.data) {
        localStorage.setItem(
          'token',
          JSON.stringify(response.data.tokens.access)
        )
      }
      return response.data
    } catch (error) {
      const errorMessage = error?.response?.data
      return thunkAPI.rejectWithValue(errorMessage)
    }
  }
)

export const logout = createAsyncThunk('auth/logout', async () => {
  await AuthService.logout()
})

const initialState = {
  user: null,
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearState: (state) => {
      state.isError = false
      state.isSuccess = false
      state.isFetching = false
    },
  },
  extraReducers: {
    [register.pending]: (state) => {
      state.isFetching = true
    },
    [register.fulfilled]: (state, { payload }) => {
      state.isFetching = false
      state.isSuccess = true
      state.user = payload.user
    },
    [register.rejected]: (state, { payload }) => {
      state.isFetching = false
      state.isError = true
      state.errorMessage = payload.message
    },
    [login.pending]: (state) => {
      state.isFetching = true
    },
    [login.fulfilled]: (state, { payload }) => {
      state.isFetching = false
      state.isSuccess = true
      state.user = payload.user
    },
    [login.rejected]: (state, { payload }) => {
      state.isFetching = false
      state.isError = true
      state.errorMessage = payload.message
    },
    [logout.fulfilled]: (state) => {
      state.user = null
      state.isFetching = false
      state.isSuccess = false
      state.isError = false
      state.errorMessage = ''
    },
    // [fetchUserBytoken.pending]: (state) => {
    //   state.isFetching = true
    // },
    // [fetchUserBytoken.fulfilled]: (state, { payload }) => {
    //   state.isFetching = false
    //   state.isSuccess = true
    //   state.username = payload.name
    // },
    // [fetchUserBytoken.rejected]: (state) => {
    //   state.isFetching = false
    //   state.isError = true
    // },
  },
})

export const { clearState } = authSlice.actions

export default authSlice.reducer
