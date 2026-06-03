
import apiClient from "./interceptors";
import type { User, AuthResponse } from "@/types/api";

export const authService = {
  async login(credentials: any): Promise<AuthResponse> {
    return apiClient.post("/login", credentials);
  },

  async register(formData: FormData): Promise<AuthResponse> {
    return apiClient.post("/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  async logout(): Promise<any> {
    return apiClient.get("/logout");
  },

  async getProfile(): Promise<AuthResponse> {
    return apiClient.get("/me");
  },

  async changePassword(passwords: any): Promise<any> {
    return apiClient.post("/change-password", passwords);
  },

  async updateProfile(id: string, formData: FormData): Promise<AuthResponse> {
    return apiClient.put(`/update/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  async forgotPassword(email: string): Promise<any> {
    return apiClient.post("/forget-password", { email });
  },

  async resetPassword(resetToken: string, password: string): Promise<any> {
    return apiClient.post(`/reset-password/${resetToken}`, { password });
  },

  async verifyEmail(email: string, otp: string): Promise<any> {
    return apiClient.post("/verify-email", { email, otp });
  },

  async resendVerificationOTP(email: string): Promise<any> {
    return apiClient.post("/resend-verification-otp", { email });
  },
};

export default authService;
