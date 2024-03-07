import axios from "axios";

export const login = async (id, password) => {
  const result = await axios.post(`${process.env.REACT_APP_SERVER_URL}/login`, {
    id,
    password,
  });
  return result.data;
};

export const signup = async (id, password) => {
  const result = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/register`,
    {
      id,
      password,
    }
  );
  return result.data;
};