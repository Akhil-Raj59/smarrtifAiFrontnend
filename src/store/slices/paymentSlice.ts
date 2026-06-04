
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import paymentService from "@/services/payment.service";

interface PaymentState {
  razorpayKey: string | null;
  subscriptionId: string | null;
  payments: any[];
  paymentsCount: number;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: PaymentState = {
  razorpayKey: null,
  subscriptionId: null,
  payments: [],
  paymentsCount: 0,
  status: "idle",
  error: null,
};

export const getRazorpayKey = createAsyncThunk(
  "payment/getRazorpayKey",
  async (_, { rejectWithValue }) => {
    try {
      const response = await paymentService.getRazorpayKey();
      if (response && response.success) {
        return response.key;
      }
      return rejectWithValue("Failed to fetch Razorpay key.");
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Failed to fetch Razorpay key.");
    }
  }
);

export const subscribeToCourse = createAsyncThunk(
  "payment/subscribeToCourse",
  async (_, { rejectWithValue }) => {
    try {
      const response = await paymentService.subscribe();
      if (response && response.success) {
        return response.subscription_id;
      }
      return rejectWithValue("Subscription creation failed.");
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Subscription creation failed.");
    }
  }
);

export const createCourseOrder = createAsyncThunk(
  "payment/createCourseOrder",
  async (courseId: string, { rejectWithValue }) => {
    try {
      const response = await paymentService.createOrder(courseId);
      if (response && response.success) {
        return response;
      }
      return rejectWithValue(response?.message || "Order creation failed.");
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Order creation failed.");
    }
  }
);

export const verifyPayment = createAsyncThunk(
  "payment/verifyPayment",
  async (
    payload: {
      razorpay_payment_id: string;
      razorpay_subscription_id: string;
      razorpay_signature: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await paymentService.verifySubscription(payload);
      if (response && response.success) {
        return response.message || "Payment verified successfully";
      }
      return rejectWithValue(response?.message || "Payment verification failed.");
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Payment verification failed.");
    }
  }
);

export const verifyCoursePayment = createAsyncThunk(
  "payment/verifyCoursePayment",
  async (
    payload: {
      razorpay_payment_id: string;
      razorpay_order_id: string;
      razorpay_signature: string;
      courseId: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await paymentService.verifyPayment(payload);
      if (response && response.success) {
        return response.message || "Payment verified successfully";
      }
      return rejectWithValue(response?.message || "Payment verification failed.");
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Payment verification failed.");
    }
  }
);

export const cancelSubscription = createAsyncThunk(
  "payment/cancelSubscription",
  async (_, { rejectWithValue }) => {
    try {
      const response = await paymentService.unsubscribe();
      if (response && response.success) {
        return response.message || "Subscription cancelled successfully";
      }
      return rejectWithValue(response?.message || "Failed to cancel subscription.");
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Failed to cancel subscription.");
    }
  }
);

export const fetchAllPayments = createAsyncThunk(
  "payment/fetchAllPayments",
  async ({ count, skip }: { count?: number; skip?: number } = {}, { rejectWithValue }) => {
    try {
      const response = await paymentService.fetchAllPayments(count, skip);
      if (response && response.success) {
        return {
          payments: response.payments || [],
          count: response.count || 0,
        };
      }
      return rejectWithValue(response?.message || "Failed to fetch payments.");
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Failed to fetch payments.");
    }
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    clearPaymentError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      
      .addCase(getRazorpayKey.fulfilled, (state, action: PayloadAction<string>) => {
        state.razorpayKey = action.payload;
      })
      
      .addCase(subscribeToCourse.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(subscribeToCourse.fulfilled, (state, action: PayloadAction<string>) => {
        state.status = "succeeded";
        state.subscriptionId = action.payload;
      })
      .addCase(subscribeToCourse.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      
      .addCase(verifyPayment.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(verifyPayment.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(verifyPayment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      
      .addCase(cancelSubscription.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(cancelSubscription.fulfilled, (state) => {
        state.status = "succeeded";
        state.subscriptionId = null;
      })
      .addCase(cancelSubscription.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      
      .addCase(fetchAllPayments.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchAllPayments.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.payments = action.payload.payments;
        state.paymentsCount = action.payload.count;
      })
      .addCase(fetchAllPayments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      
      .addCase(createCourseOrder.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createCourseOrder.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(createCourseOrder.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      
      .addCase(verifyCoursePayment.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(verifyCoursePayment.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(verifyCoursePayment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { clearPaymentError } = paymentSlice.actions;
export default paymentSlice.reducer;
