// Core
import axios from 'axios';

const BASE_URL = 'https://5f59fc01b121580016cae0c5.mockapi.io/users';

export const getUsers = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const postUser = async (newUser) => {
  const res = await axios.post(BASE_URL, newUser);
  return res.status;
};
