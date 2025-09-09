import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './userSlice'
import { modalSlice } from './modalSlice'
import { useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [modalSlice.name]: modalSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()