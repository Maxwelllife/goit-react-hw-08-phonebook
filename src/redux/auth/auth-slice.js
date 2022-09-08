import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUser, signup, login, logout } from './auth-operations';

const initialState = {
  user: {},
  token: '',
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: {
    // -------------------getCurrentUser------------------------------
    [getCurrentUser.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [getCurrentUser.fulfilled]: (store, { payload }) => {
      store.user = { ...payload };
      store.loading = false;
    },
    [getCurrentUser.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    // -------------------signup------------------------------
    //данные из формы подставляются в ф. signup операцию, а сам вызов происходит с помощью диспатча в RegisterPage

    [signup.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [signup.fulfilled]: (store, { payload }) => {
      store.user = { ...payload.user };
      store.token = payload.token;
      store.loading = false;
    },
    [signup.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    // -------------------login------------------------------

    [login.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [login.fulfilled]: (store, { payload }) => {
      store.user = { ...payload.user };
      store.token = payload.token;
      store.loading = false;
    },
    [login.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    // -------------------logout------------------------------
    [logout.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [logout.fulfilled]: () => ({ ...initialState }),
    [logout.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default authSlice.reducer;
