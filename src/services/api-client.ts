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

// why yoiu are mocking these urls ? please do not mock any data remove this code below and use the actual urls from the backend

export const getMockVideoUrl = (
  lectureId: string,
  defaultUrl: string
) => {
  return (window as any).__mockVideos?.[lectureId] || defaultUrl;
};

export const getMockThumbnailUrl = (
  courseId: string,
  defaultUrl: string
) => {
  return (window as any).__mockThumbnails?.[courseId] || defaultUrl;
};

// Dynamically initialize mock backend if present
const mockModules = import.meta.glob("./mock-backend.ts", {
  eager: true,
});

const mockKey = "./mock-backend.ts";

if (mockModules && mockModules[mockKey]) {
  const mockFile = mockModules[mockKey] as any;

  if (
    mockFile &&
    typeof mockFile.setupMocks === "function"
  ) {
    mockFile.setupMocks();
  }
}

export default apiClient;