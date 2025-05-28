import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API_URL = 'https://autopadi-server.vercel.app/api';

// Types
export interface ProfileData {
  _id?: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  userId?: string;
  createdAt?: string;
  updatedAt?: string;
  isApproved?: boolean;
  approvalStatus?: 'pending' | 'approved' | 'rejected';
}

export interface AuthResponse {
  token: string;
  message: string;
}

export interface VerificationResponse {
  message: string;
  verified: boolean;
}

export interface ProfileResponse {
  profile: ProfileData;
  message: string;
}

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
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

class AuthService {
  // Registration
  async register(phone: string, password: string): Promise<AuthResponse> {
    try {
      const response = await api.post<AuthResponse>('/register', {
        phone,
        password,
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Registration failed');
      }
      throw error;
    }
  }

  // Login
  async login(phone: string, password: string): Promise<AuthResponse> {
    try {
      const response = await api.post<AuthResponse>('/login', {
        phone,
        password,
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Login failed');
      }
      throw error;
    }
  }

  // Phone Verification
  async verifyPhone(phone: string, code: string): Promise<VerificationResponse> {
    try {
      const response = await api.post<VerificationResponse>('/verify-code', {
        phone,
        code,
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Verification failed');
      }
      throw error;
    }
  }

  // Resend Verification Code
  async resendCode(phone: string): Promise<{ message: string }> {
    try {
      const response = await api.post<{ message: string }>('/resend-code', {
        phone,
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to resend code');
      }
      throw error;
    }
  }

  // Create Profile
  async createProfile(profileData: ProfileData): Promise<ProfileResponse> {
    try {
      const response = await api.post<ProfileResponse>('/create-profile', profileData);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to create profile');
      }
      throw error;
    }
  }

  // Get Profile
  async getProfile(profileId: string): Promise<ProfileResponse> {
    try {
      const response = await api.get<ProfileResponse>(`/get-profile/${profileId}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to get profile');
      }
      throw error;
    }
  }

  // Update Profile
  async updateProfile(profileId: string, profileData: Partial<ProfileData>): Promise<ProfileResponse> {
    try {
      const response = await api.put<ProfileResponse>(`/update-profile/${profileId}`, profileData);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to update profile');
      }
      throw error;
    }
  }

  // Update Location
  async updateLocation(locationData: { latitude: number; longitude: number }): Promise<{ message: string }> {
    try {
      const response = await api.put<{ message: string }>('/location', locationData);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to update location');
      }
      throw error;
    }
  }

  // Get Location
  async getLocation(locationId: string): Promise<{ location: { latitude: number; longitude: number } }> {
    try {
      const response = await api.get<{ location: { latitude: number; longitude: number } }>(`/location-by-id/${locationId}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to get location');
      }
      throw error;
    }
  }

  // Check Profile Approval Status
  async checkProfileApproval(profileId: string): Promise<{ isApproved: boolean; status: 'pending' | 'approved' | 'rejected' }> {
    try {
      const response = await api.get<{ isApproved: boolean; status: 'pending' | 'approved' | 'rejected' }>(`/get-profile/${profileId}/approval-status`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to check approval status');
      }
      throw error;
    }
  }
}

export const authService = new AuthService(); 