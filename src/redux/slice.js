import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact } from './operations';
const initialState = {
  //   contacts: {
  //     items: [],
  //     loading: false,
  //     error: null,
  //     filter: '',
  //   },
  items: [],
  loading: false,
  error: null,
  filter: '',
};
const contactsSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    filterContact: (store, action) => {
      store.filter = action.payload;
    },
  },
  extraReducers: {
    // -------------------fetchContacts------------------------------
    [fetchContacts.pending]: store => ({
      ...store,
      loading: true,
      error: null,
    }),
    [fetchContacts.fulfilled]: (store, { payload }) => {
      store.items = payload;
      store.loading = false;
    },
    [fetchContacts.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
    // -------------------addContact------------------------------
    [addContact.pending]: store => ({
      ...store,
      loading: true,
      error: null,
    }),
    [addContact.fulfilled]: (store, { payload }) => {
      store.items.push(payload);
      store.loading = false;
    },
    [addContact.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
    // -------------------removeContact------------------------------
    [removeContact.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [removeContact.fulfilled]: (store, { payload }) => {
      store.items = store.items.filter(items => items.id !== payload.id);
      store.loading = false;
    },
    [removeContact.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export const { filterContact } = contactsSlice.actions;
export default contactsSlice.reducer;
