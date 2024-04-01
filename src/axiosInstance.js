import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // Set your base URL
  timeout: 5000, // Set a timeout
  headers: {
    'Content-Type': 'application/json', // Set default headers
    // You can add more default headers here
  },
  // You can add more default configuration options here
});

export default axiosInstance;
