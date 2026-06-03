
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import courseService from "@/services/course.service";
import type { Course, Lecture } from "@/types/api";

interface CourseState {
  courses: Course[];
  enrolledCourses: Course[];
  selectedCourseLectures: Lecture[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CourseState = {
  courses: [],
  enrolledCourses: [],
  selectedCourseLectures: [],
  status: "idle",
  error: null,
};

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async (_, { rejectWithValue }) => {
    try {
      const response = await courseService.fetchCourses();
      if (response && response.success) {
        return response.courses as Course[];
      }
      return rejectWithValue(response?.message || "Failed to fetch courses.");
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || "Failed to fetch courses.";
      return rejectWithValue(message);
    }
  }
);

export const fetchEnrolledCourses = createAsyncThunk(
  "courses/fetchEnrolledCourses",
  async (_, { rejectWithValue }) => {
    try {
      const response = await courseService.fetchEnrolledCourses();
      if (response && response.success) {
        return response.courses as Course[];
      }
      return rejectWithValue(response?.message || "Failed to fetch enrolled courses.");
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || "Failed to fetch enrolled courses.";
      return rejectWithValue(message);
    }
  }
);

export const enrollInCourse = createAsyncThunk(
  "courses/enrollInCourse",
  async (courseId: string, { rejectWithValue }) => {
    try {
      const response = await courseService.enrollCourse(courseId);
      if (response && response.success) {
        return courseId;
      }
      return rejectWithValue(response?.message || "Failed to enroll in course.");
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || "Failed to enroll in course.";
      return rejectWithValue(message);
    }
  }
);

export const createNewCourse = createAsyncThunk(
  "courses/createNewCourse",
  async (formData: FormData, { rejectWithValue }) => {
    try {
      const response = await courseService.createCourse(formData);
      if (response && response.success && response.course) {
        return response.course as Course;
      }
      return rejectWithValue(response?.message || "Failed to create course.");
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || "Failed to create course.";
      return rejectWithValue(message);
    }
  }
);

export const updateCourse = createAsyncThunk(
  "courses/updateCourse",
  async ({ id, formData }: { id: string; formData: any }, { rejectWithValue }) => {
    try {
      const response = await courseService.updateCourse(id, formData);
      if (response && response.success && response.course) {
        return response.course as Course;
      }
      return rejectWithValue(response?.message || "Failed to update course.");
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || "Failed to update course.";
      return rejectWithValue(message);
    }
  }
);

export const deleteCourseById = createAsyncThunk(
  "courses/deleteCourseById",
  async (courseId: string, { rejectWithValue }) => {
    try {
      const response = await courseService.deleteCourse(courseId);
      if (response && response.success) {
        return courseId;
      }
      return rejectWithValue(response?.message || "Failed to delete course.");
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || "Failed to delete course.";
      return rejectWithValue(message);
    }
  }
);

export const fetchCourseLectures = createAsyncThunk(
  "courses/fetchCourseLectures",
  async (courseId: string, { rejectWithValue }) => {
    try {
      const response = await courseService.fetchCourseLectures(courseId);
      if (response && response.success) {
        return response.lectures as Lecture[];
      }
      return rejectWithValue(response?.message || "Failed to fetch lectures.");
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || "Failed to fetch lectures.";
      return rejectWithValue(message);
    }
  }
);

export const addLectureToCourse = createAsyncThunk(
  "courses/addLectureToCourse",
  async ({ courseId, formData }: { courseId: string; formData: FormData }, { rejectWithValue }) => {
    try {
      const response = await courseService.addLecture(courseId, formData);
      if (response && response.success && response.course) {
        return response.course as Course;
      }
      return rejectWithValue(response?.message || "Failed to add lecture.");
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || "Failed to add lecture.";
      return rejectWithValue(message);
    }
  }
);

export const removeLectureFromCourse = createAsyncThunk(
  "courses/removeLectureFromCourse",
  async ({ courseId, lectureId }: { courseId: string; lectureId: string }, { rejectWithValue }) => {
    try {
      const response = await courseService.removeLecture(courseId, lectureId);
      if (response && response.success) {
        return { courseId, lectureId };
      }
      return rejectWithValue(response?.message || "Failed to remove lecture.");
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || "Failed to remove lecture.";
      return rejectWithValue(message);
    }
  }
);

export const updateCourseLecture = createAsyncThunk(
  "courses/updateCourseLecture",
  async (
    { courseId, lectureId, title, description }: { courseId: string; lectureId: string; title: string; description: string },
    { getState, rejectWithValue }
  ) => {
    try {
      const state = getState() as any;
      const lectures = state.courses.selectedCourseLectures || [];
      const updatedLectures = lectures.map((l: any) => {
        if (l._id === lectureId) {
          return { ...l, title, description };
        }
        return l;
      });

      const response = await courseService.updateCourse(courseId, { lectures: updatedLectures });
      if (response && response.success && response.course) {
        return response.course as Course;
      }
      return rejectWithValue(response?.message || "Failed to update lecture.");
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || "Failed to update lecture.";
      return rejectWithValue(message);
    }
  }
);

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    clearCourseError: (state) => {
      state.error = null;
    },
    clearSelectedLectures: (state) => {
      state.selectedCourseLectures = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Courses
      .addCase(fetchCourses.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action: PayloadAction<Course[]>) => {
        state.status = "succeeded";
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      // Fetch Enrolled Courses
      .addCase(fetchEnrolledCourses.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchEnrolledCourses.fulfilled, (state, action: PayloadAction<Course[]>) => {
        state.status = "succeeded";
        state.enrolledCourses = action.payload;
      })
      .addCase(fetchEnrolledCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      // Enroll in Course
      .addCase(enrollInCourse.fulfilled, (state, action: PayloadAction<string>) => {
        // Just refetching or appending would work; here we just mark success.
      })
      // Create Course
      .addCase(createNewCourse.fulfilled, (state, action: PayloadAction<Course>) => {
        state.courses.push(action.payload);
      })
      // Update Course
      .addCase(updateCourse.fulfilled, (state, action: PayloadAction<Course>) => {
        const index = state.courses.findIndex((c) => c._id === action.payload._id);
        if (index !== -1) {
          state.courses[index] = action.payload;
        }
      })
      // Delete Course
      .addCase(deleteCourseById.fulfilled, (state, action: PayloadAction<string>) => {
        state.courses = state.courses.filter((c) => c._id !== action.payload);
      })
      // Fetch Lectures
      .addCase(fetchCourseLectures.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCourseLectures.fulfilled, (state, action: PayloadAction<Lecture[]>) => {
        state.status = "succeeded";
        state.selectedCourseLectures = action.payload;
      })
      .addCase(fetchCourseLectures.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      // Add Lecture
      .addCase(addLectureToCourse.fulfilled, (state, action: PayloadAction<Course>) => {
        const index = state.courses.findIndex((c) => c._id === action.payload._id);
        if (index !== -1) {
          state.courses[index] = action.payload;
        }
      })
      // Update Lecture
      .addCase(updateCourseLecture.fulfilled, (state, action: PayloadAction<Course>) => {
        const index = state.courses.findIndex((c) => c._id === action.payload._id);
        if (index !== -1) {
          state.courses[index] = action.payload;
        }
        if (action.payload.lectures) {
          state.selectedCourseLectures = action.payload.lectures;
        }
      })
      // Remove Lecture
      .addCase(removeLectureFromCourse.fulfilled, (state, action) => {
        state.selectedCourseLectures = state.selectedCourseLectures.filter(
          (l) => l._id !== action.payload.lectureId
        );
        const course = state.courses.find((c) => c._id === action.payload.courseId);
        if (course) {
          course.numberOfLectures = Math.max(0, course.numberOfLectures - 1);
        }
      });
  },
});

export const { clearCourseError, clearSelectedLectures } = courseSlice.actions;
export default courseSlice.reducer;
