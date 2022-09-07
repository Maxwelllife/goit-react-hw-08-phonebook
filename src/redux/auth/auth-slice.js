import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUser, signup } from './auth-operations';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
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
      //   console.log('payload: ', payload);
      store.loading = false;
      store.error = payload;
    },
    // -------------------signup------------------------------
    //данные из формы подставляются в ф. signup операцию, а сам вызов происходит с помощью диспатча в RegisterPage

    [signup.pending]: store => {
      console.log('store.pending: ', store);

      store.loading = true;
      store.error = null;
    },
    [signup.fulfilled]: (store, { payload }) => {
      console.log('store.fulfilled: ', store);
      console.log('payload: ', payload);

      // store.user = { ...payload };
      // store.loading = false;
    },
    // [signup.rejected]: (store, { payload }) => {
    //   console.log('payload: ', payload);
    // store.loading = false;
    // store.error = payload;
    // },
  },
});

export default authSlice.reducer;
