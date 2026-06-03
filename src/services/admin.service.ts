
import { adminApiClient } from "./interceptors";

export const adminService = {
  async fetchAdminStats(): Promise<any> {
    return adminApiClient.get("/stats/users");
  },
};

export default adminService;
