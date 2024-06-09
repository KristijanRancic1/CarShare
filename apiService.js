import axios from 'axios';

const API_URL = 'http://kristijanrancicmc2.duckdns.org:3000/';

// Function to get a message from the backend
export const getMessage = async (endpoint) => {
  try {
    const response = await axios.get(`${API_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    throw error;
  }
};

// Function to register a new user
export const registerUser = async (email, username, password) => {
  try {
    const response = await axios.post(`${API_URL}register`, {
      email,
      username,
      password,
    });

    return response.data;
  } catch (error) {
    console.error('Error registering user: ', error);
    throw error;
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}login`, {
      username,
      password,
    });

    return response.data;
  } catch (error) {
    console.error('Error logging in: ', error);
    throw error;
  }
};
