
import { paymentsApiClient } from "./interceptors";

export const paymentService = {
  async getRazorpayKey(): Promise<any> {
    return paymentsApiClient.get("/razorpay-key");
  },

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
