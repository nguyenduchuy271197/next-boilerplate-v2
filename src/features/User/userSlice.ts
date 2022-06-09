import type { RootState } from '@app/store'
import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface UserState {
  username: string
  email: string
  isFetching: boolean
  isSuccess: boolean
  isError: boolean
  errorMessage: string
}

// Define the initial state using that type
const initialState: UserState = {
  username: '',
  email: '',
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState: { value: initialState },
  reducers: {
    // Reducer comes here
  },
  extraReducers: {
    // Extra reducer comes here
  },
})

// export const {} = userSlice.actions

export const selectUser = (state: RootState) => state.user.value

export default userSlice.reducer
