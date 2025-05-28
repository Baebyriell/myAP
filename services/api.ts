import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


const api = axios.create({
  baseURL: 'https://autopadi-server.vercel.app/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to add auth token
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle common errors
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      await AsyncStorage.removeItem('auth_token');
      // You might want to redirect to login screen here
    }
    return Promise.reject(error);
  }
);

export default api; 