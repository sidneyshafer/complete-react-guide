import { createSlice } from '@reduxjs/toolkit';

const intialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: 'authentication',
  initialState: intialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
