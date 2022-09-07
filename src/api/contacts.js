import instance from './auth';
export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addContact = async newData => {
  const { data: result } = await instance.post('/contacts', newData);
  return result;
};

export const removeContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
