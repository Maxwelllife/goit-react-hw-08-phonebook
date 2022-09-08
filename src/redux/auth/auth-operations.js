import * as api from 'api/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, thunkAPI) => {
    try {
      const result = await api.signup(data);
      console.log('result: ', result);

      return result;
    } catch (error) {
      toast.error(`Sorry, Register failed. Try again.`);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    const result = await api.login(data);
    return result;
  } catch (error) {
    toast.error(`Sorry, login failed. Check email and password. Try again.`);
    return thunkAPI.rejectWithValue(error);
  }
});

export const logout = createAsyncThunk(
  'auth/logout',
  async (data, thunkAPI) => {
    try {
      const result = await api.logout(data);
      return result;
    } catch (error) {
      toast.error(`Sorry, logout failed. Try again.`);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, thunkAPI) => {
    try {
      const { auth } = thunkAPI.getState();
      console.log('auth: ', auth);
      const result = await api.getCurrentUser(auth.token);
      console.log('result: ', result);

      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error,
        toast.error('Sorry, your token is dead or time is out ')
      );
    }
  },
  {
    condition: (_, thunkAPI) => {
      const { auth } = thunkAPI.getState();
      if (!auth.token) return false;
    },
  }
);
