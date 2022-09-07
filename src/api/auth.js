import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = (token = '') => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};

export const signup = async data => {
  console.log('data: ', data);
  const { data: result } = await instance.post('/users/signup', data);
  console.log('result: ', result);

  setToken(result.token);
  return result;
};

export const login = async data => {
  const { data: result } = await instance.post('/users/login', data);
  setToken(result.token);
  return result;
};

export const logout = async data => {
  const { data: result } = await instance.post('/users/logout', data);
  setToken('');
  return result;
};

export const getCurrentUser = async token => {
  try {
    setToken(token);
    const result = await instance.get('/users/current');
    console.log('result: ', result);

    return result.data;
  } catch (error) {
    console.log('error: ', error);

    setToken('');
    throw error;
  }
};
export default instance;
