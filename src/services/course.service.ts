
import apiClient, { coursesApiClient, paymentsApiClient } from "./interceptors";
import type { Course, Lecture } from "@/types/api";

export const courseService = {
  async fetchCourses(): Promise<any> {
    return coursesApiClient.get("/");
  },

  async enrollCourse(courseId: string): Promise<any> {
    return apiClient.post("/enroll", { courseId });
  },

  async fetchEnrolledCourses(): Promise<any> {
    return paymentsApiClient.get("/purchased");
  },

  async createCourse(formData: FormData): Promise<any> {
    return coursesApiClient.post("/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  async updateCourse(id: string, formData: any): Promise<any> {
    return coursesApiClient.put(`/${id}`, formData);
  },

  async deleteCourse(id: string): Promise<any> {
    // Note: Postman has no specific delete course endpoint, but we keep this method mapping to maintain original behavior/mock capability if backend supports it.
    return coursesApiClient.delete(`/${id}`);
  },

  async fetchCourseLectures(courseId: string): Promise<any> {
    return coursesApiClient.get(`/${courseId}`);
  },

  async addLecture(courseId: string, formData: FormData): Promise<any> {
    return coursesApiClient.post(`/${courseId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  async removeLecture(courseId: string, lectureId: string): Promise<any> {
    return coursesApiClient.delete("/", {
      params: { courseId, lectureId },
    });
  },

  async updateLecture(courseId: string, lectureId: string, formData: FormData): Promise<any> {
    return coursesApiClient.put(`/${courseId}/lectures/${lectureId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};

export default courseService;
