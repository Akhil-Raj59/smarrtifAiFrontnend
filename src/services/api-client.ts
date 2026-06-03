
import axios from "axios";


const getBaseUrl = (segment: string) => {
  console.log("Getting base URL for segment:", segment);
  console.log("Environment variable VITE_API_BASE_URL:", import.meta.env.VITE_API_BASE_URL);
  const envUrl = import.meta.env.VITE_API_BASE_URL;
  if (envUrl) {
    return envUrl.replace("/user", segment);
  }
  return `http://localhost:5001/api/v1${segment}`;
};

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5001/api/v1/user",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
  withCredentials: true,
});

export const coursesApiClient = axios.create({
  baseURL: getBaseUrl("/courses"),
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
  withCredentials: true,
});

export const paymentsApiClient = axios.create({
  baseURL: getBaseUrl("/payments"),
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
  withCredentials: true,
});

export const adminApiClient = axios.create({
  baseURL: getBaseUrl("/admin"),
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
  withCredentials: true,
});

export const baseApiClient = axios.create({
  baseURL: getBaseUrl(""),
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
  withCredentials: true,
});

export const getMockVideoUrl = (lectureId: string, defaultUrl: string) => {
  return (window as any).__mockVideos?.[lectureId] || defaultUrl;
};

export const getMockThumbnailUrl = (courseId: string, defaultUrl: string) => {
  return (window as any).__mockThumbnails?.[courseId] || defaultUrl;
};

// Dynamically initialize mock backend if the file is present locally
const mockModules = import.meta.glob("./mock-backend.ts", { eager: true });
const mockKey = "./mock-backend.ts";
if (mockModules && mockModules[mockKey]) {
  const mockFile = mockModules[mockKey] as any;
  if (mockFile && typeof mockFile.setupMocks === "function") {
    mockFile.setupMocks();
  }
}

export default apiClient;

