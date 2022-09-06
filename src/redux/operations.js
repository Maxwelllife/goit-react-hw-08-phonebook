import * as api from 'api/contacts';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const result = await api.getContacts();
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts.add',
  async (data, thunkAPI) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
  {
    // тут делаем доп проверки в condition
    condition: (data, { getState }) => {
      const { phonebook } = getState();
      const isDublicate = phonebook.items.find(
        item => item.name.toLowerCase() === data.name.toLowerCase()
      );
      if (isDublicate) {
        alert(`${data.name} is already in contacts`);
        return false;
      } else if (data.name === '') {
        alert('Please enter your name');
        return false;
      }
    },
  }
);

export const removeContact = createAsyncThunk(
  'contacts/remove',
  async (id, thunkAPI) => {
    try {
      const result = await api.removeContact(id);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
