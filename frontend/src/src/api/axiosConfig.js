import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Accessing the base URL from the .env file
  timeout: parseInt(import.meta.env.VITE_API_TIMEOUT, 10), // Timeout from .env
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
