import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isModalOpen: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    switchModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
  }
})

export const { switchModal } = modalSlice.actions