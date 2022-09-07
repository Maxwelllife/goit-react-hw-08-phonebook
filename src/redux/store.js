import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contactsReducers from './contacts/contacts-slice';
import authReducers from './auth/auth-slice';

const rootReducer = combineReducers({
  auth: authReducers,
  phonebook: contactsReducers,
});

export const store = configureStore({
  reducer: rootReducer,
});
