
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import authService from "@/services/auth.service";
import type { User } from "@/types/api";

interface AuthState {
  user: User | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  changePasswordStatus: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: AuthState = {
  user: null,
  status: "idle",
  error: null,
  changePasswordStatus: "idle",
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials: any, { rejectWithValue }) => {
    try {
      const response = await authService.login(credentials);
      if (response && response.success && response.user) {
        return response.user;
      }
      return rejectWithValue(response?.message || "Login failed.");
    } catch (error: any) {
      const message = error.response?.data?.message || error.message || "Invalid email or password.";
      return rejectWithValue(message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (formData: FormData, { rejectWithValue }) => {
    try {
      const response = await authService.register(formData);
      if (response && response.success && response.user) {
        return response.user;
      }
      return rejectWithValue(response?.message || "Registration failed.");
    } catch (error: any) {
      const message = error.response?.data?.message || error.message || "Registration failed.";
      return rejectWithValue(message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await authService.logout();
      return null;
    } catch (error: any) {
      return null;
    }
  }
);

export const checkAuthUser = createAsyncThunk(
  "auth/checkAuthUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await authService.getProfile();
      if (response && response.success && response.user) {
        return response.user;
      }
      return null;
    } catch (error: any) {
      return rejectWithValue(null);
    }
  }
);

export const changePasswordUser = createAsyncThunk(
  "auth/changePasswordUser",
  async (passwords: any, { rejectWithValue }) => {
    try {
      const response = await authService.changePassword(passwords);
      if (response && response.success) {
        return response.message || "Password changed successfully";
      }
      return rejectWithValue(response?.message || "Password change failed.");
    } catch (error: any) {
      const message = error.response?.data?.message || error.message || "Password change failed.";
      return rejectWithValue(message);
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  "auth/updateUserProfile",
  async ({ id, formData }: { id: string; formData: FormData }, { rejectWithValue }) => {
    try {
      const response = await authService.updateProfile(id, formData);
      if (response && response.success && response.user) {
        return response.user;
      }
      return rejectWithValue(response?.message || "Profile update failed.");
    } catch (error: any) {
      const message = error.response?.data?.message || error.message || "Profile update failed.";
      return rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    resetChangePasswordStatus: (state) => {
      state.changePasswordStatus = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      // Register
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      // Logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.status = "idle";
      })
      // Check Auth
      .addCase(checkAuthUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "succeeded";
      })
      .addCase(checkAuthUser.rejected, (state) => {
        state.user = null;
        state.status = "failed";
      })
      // Update profile
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      // Change Password
      .addCase(changePasswordUser.pending, (state) => {
        state.changePasswordStatus = "loading";
      })
      .addCase(changePasswordUser.fulfilled, (state) => {
        state.changePasswordStatus = "succeeded";
      })
      .addCase(changePasswordUser.rejected, (state, action) => {
        state.changePasswordStatus = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { clearError, setUser, resetChangePasswordStatus } = authSlice.actions;
export default authSlice.reducer;
