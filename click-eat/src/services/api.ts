import axios from 'axios';
import { useKeycloak } from '../contexts/KeycloakContext';

// Extend the Window interface to include keycloakInstance
declare global {
  interface Window {
    keycloakInstance?: any;
  }
}

// Create a base axios instance
const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Create a request interceptor
api.interceptors.request.use(
  async (config) => {
    // Get the Keycloak instance from the context
    const keycloak = window.keycloakInstance;
    
    // If the user is authenticated, add the token to the request
    if (keycloak && keycloak.authenticated) {
      const token = keycloak.token;
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// API service functions
export const apiService = {
  // Restaurant endpoints
  getRestaurants: async (params = {}) => {
    return api.get('/restaurants/', { params });
  },
  
  getRestaurant: async (id: number) => {
    return api.get(`/restaurants/${id}/`);
  },
  
  // Category endpoints
  getCategories: async () => {
    return api.get('/categories/');
  },
  
  // Menu item endpoints
  getMenuItems: async (params = {}) => {
    return api.get('/menu-items/', { params });
  },
  
  // Order endpoints
  getOrders: async () => {
    return api.get('/orders/');
  },
  
  getOrder: async (id: number) => {
    return api.get(`/orders/${id}/`);
  },
  
  createOrder: async (orderData: any) => {
    return api.post('/orders/', orderData);
  },
  
  updateOrder: async (id: number, orderData: any) => {
    return api.patch(`/orders/${id}/`, orderData);
  },
  
  cancelOrder: async (id: number) => {
    return api.post(`/orders/${id}/cancel/`);
  },
  
  // User profile endpoints
  getUserProfile: async () => {
    return api.get('/profile/');
  },
  
  updateUserProfile: async (profileData: any) => {
    return api.patch('/profile/', profileData);
  },
};

export default apiService;