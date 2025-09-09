import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: {
  userName: null | string,
  isLogined: boolean,
} = {
  userName: null,
  isLogined: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState: () => {
    const loginedUser = localStorage.getItem("loginedUser");
    if (loginedUser) {
      return { userName: loginedUser, isLogined: true }
    } else {
      return initialState
    }
  },
  reducers: {
    logIn: (state, action: PayloadAction<string>) => {
      localStorage.setItem("loginedUser", action.payload);
      state.userName = action.payload;
      state.isLogined = true;
    },
    logOut: (state) => {
      localStorage.removeItem("loginedUser");
      state.userName = null;
      state.isLogined = false;
    },
  }
})

export const { logIn, logOut } = userSlice.actions