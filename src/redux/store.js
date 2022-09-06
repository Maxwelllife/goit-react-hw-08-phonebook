import { configureStore } from '@reduxjs/toolkit';
import contactsReducers from './slice';

export const store = configureStore({
  reducer: { phonebook: contactsReducers },
});
