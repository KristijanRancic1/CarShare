import axios from 'axios';

const API_URL = 'http://kristijanrancicmc2.duckdns.org:3000/';

// Function to get a test message from the backend
export const getTestMessage = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    throw error;
  }
};
