import { baseApiClient } from "./interceptors";

export const contactService = {
  async submitContact(payload: { name: string; email: string; message: string }): Promise<any> {
    return baseApiClient.post("/contact", payload);
  },
};

export default contactService;
