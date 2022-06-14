import { configureStore, ThunkAction } from '@reduxjs/toolkit'
import { Action } from 'redux'
import authReducer from '@features/Auth/authSlice'
import { createWrapper } from 'next-redux-wrapper'

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})

const makeStore = () => store

export type AppStore = ReturnType<typeof makeStore>

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>

export const wrapper = createWrapper<AppStore>(makeStore)
