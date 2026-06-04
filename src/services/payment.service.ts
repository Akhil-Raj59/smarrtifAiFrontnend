
import { paymentsApiClient } from "./interceptors";

export const paymentService = {
  async getRazorpayKey(): Promise<any> {
    return paymentsApiClient.get("/razorpay-key");
  },

  async createOrder(courseId: string): Promise<any> {
    return paymentsApiClient.post("/create-order", { courseId });
  },

  async verifyPayment(payload: {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
    courseId: string;
  }): Promise<any> {
    return paymentsApiClient.post("/verify", payload);
  },

  async checkCoursePurchaseStatus(courseId: string): Promise<any> {
    return paymentsApiClient.get(`/status/${courseId}`);
  },

  async fetchPurchasedCourses(): Promise<any> {
    return paymentsApiClient.get("/purchased");
  },

  // Legacy Subscription APIs (Deprecated)
  async subscribe(): Promise<any> {
    return paymentsApiClient.post("/subscribe");
  },

  async verifySubscription(payload: {
    razorpay_payment_id: string;
    razorpay_subscription_id: string;
    razorpay_signature: string;
  }): Promise<any> {
    return paymentsApiClient.post("/verify", payload);
  },

  async unsubscribe(): Promise<any> {
    return paymentsApiClient.post("/unsubscribe");
  },

  async fetchAllPayments(count = 10, skip = 0): Promise<any> {
    return paymentsApiClient.get("/", {
      params: { count, skip },
    });
  },
};

export default paymentService;
