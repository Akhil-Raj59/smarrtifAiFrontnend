import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "http://localhost:5001";

const commonConfig = {
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
  withCredentials: true,
};

export const apiClient = axios.create({
  baseURL: `${API_BASE_URL}/api/v1/user`,
  ...commonConfig,
});

export const coursesApiClient = axios.create({
  baseURL: `${API_BASE_URL}/api/v1/courses`,
  ...commonConfig,
});

export const paymentsApiClient = axios.create({
  baseURL: `${API_BASE_URL}/api/v1/payments`,
  ...commonConfig,
});

export const adminApiClient = axios.create({
  baseURL: `${API_BASE_URL}/api/v1/admin`,
  ...commonConfig,
});

export const baseApiClient = axios.create({
  baseURL: `${API_BASE_URL}/api/v1`,
  ...commonConfig,
});

export default apiClient;