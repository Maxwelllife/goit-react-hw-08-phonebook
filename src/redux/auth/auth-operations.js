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

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, thunkAPI) => {
    try {
      const { auth } = thunkAPI.getState();
      const result = await api.getCurrentUser(auth.token);
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
