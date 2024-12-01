import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true', // Retrieve from localStorage
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', 'true'); // Persist to localStorage
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      localStorage.removeItem('isLoggedIn'); // Clear from localStorage
    },
  },
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
