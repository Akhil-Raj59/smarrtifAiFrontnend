

export interface User {
  _id: string;
  fullName: string;
  email: string;
  role: "USER" | "ADMIN";
  avatar?: {
    public_id: string;
    secure_url: string;
  };
  subscription?: {
    id: string;
    status: string;
  };
}

export interface Lecture {
  _id: string;
  title: string;
  description: string;
  lecture: {
    public_id: string;
    secure_url: string;
  };
}

export interface Course {
  _id: string;
  title: string;
  description: string;
  category: string;
  createdBy: string;
  numberOfLectures: number;
  price: number;
  isPurchased?: boolean;
  thumbnail?: {
    public_id: string;
    secure_url: string;
  };
  lectures?: Lecture[];
  createdAt: string;
  updatedAt: string;
}

export interface ApiSuccessResponse<T> {
  success: boolean;
  message?: string;
  [key: string]: any; 
}

export interface AuthResponse extends ApiSuccessResponse<any> {
  user?: User;
}

export interface CoursesResponse extends ApiSuccessResponse<any> {
  courses?: Course[];
}

export interface CourseResponse extends ApiSuccessResponse<any> {
  course?: Course;
}

export interface LecturesResponse extends ApiSuccessResponse<any> {
  lectures?: Lecture[];
}

export interface AdminStatsResponse extends ApiSuccessResponse<any> {
  usersCount?: number;
  subscribedCount?: number;
}

export interface PaymentsResponse extends ApiSuccessResponse<any> {
  payments?: any[];
  count?: number;
}

export interface RazorpayKeyResponse extends ApiSuccessResponse<any> {
  key?: string;
}

export interface RazorpaySubscriptionResponse extends ApiSuccessResponse<any> {
  subscription_id?: string;
}
