import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true', 
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', 'true'); 
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      localStorage.removeItem('isLoggedIn');
    },
  },
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
