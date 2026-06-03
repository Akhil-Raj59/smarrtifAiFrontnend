import { useEffect, useState, ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  fetchCourses,
  createNewCourse,
  updateCourse,
  deleteCourseById,
  fetchCourseLectures,
  addLectureToCourse,
  removeLectureFromCourse,
  updateCourseLecture,
  Course,
  Lecture,
} from "@/store/slices/courseSlice";
import { getMockThumbnailUrl, getMockVideoUrl } from "@/services/api-client";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Plus,
  BookOpen,
  Edit2,
  Trash2,
  X,
  Upload,
  Video,
  User,
  Tags,
  AlertCircle,
  PlayCircle,
  PlusCircle,
  FileText,
} from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Course Zod validation schemas
const courseFormSchema = z.object({
  title: z
    .string()
    .min(8, "Title must be at least 8 characters")
    .max(50, "Title cannot be more than 50 characters"),
  description: z.string().min(20, "Description must be at least 20 characters long"),
  category: z.string().min(1, "Category is required"),
  createdBy: z.string().min(1, "Course instructor name is required"),
});

type CourseFormValues = z.infer<typeof courseFormSchema>;

// Lecture Zod validation schemas
const lectureFormSchema = z.object({
  title: z.string().min(1, "Lecture title is required"),
  description: z.string().min(1, "Lecture description is required"),
});

type LectureFormValues = z.infer<typeof lectureFormSchema>;

export const AdminDashboard = () => {
  const dispatch = useAppDispatch();
  const { courses, selectedCourseLectures, status } = useAppSelector((state) => state.courses);

  const [activeCourse, setActiveCourse] = useState<Course | null>(null);
  
  // Modal toggle states
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [isLecturesModalOpen, setIsLecturesModalOpen] = useState(false);
  const [isAddLectureOpen, setIsAddLectureOpen] = useState(false);
  const [editingLecture, setEditingLecture] = useState<Lecture | null>(null);
  
  // File states
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [lectureFile, setLectureFile] = useState<File | null>(null);
  
  // Loading sub-indicators
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  // Set up forms
  const courseForm = useForm<CourseFormValues>({
    resolver: zodResolver(courseFormSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      createdBy: "",
    },
  });

  const lectureForm = useForm<LectureFormValues>({
    resolver: zodResolver(lectureFormSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  // Handle course create/update submit
  const onCourseSubmit = async (data: CourseFormValues) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("category", data.category);
      formData.append("createdBy", data.createdBy);
      if (thumbnailFile) {
        formData.append("thumbnail", thumbnailFile);
      }

      if (editingCourse) {
        await dispatch(updateCourse({ id: editingCourse._id, formData })).unwrap();
        toast.success("Course updated successfully!");
      } else {
        await dispatch(createNewCourse(formData)).unwrap();
        toast.success("New course created successfully!");
      }

      closeCourseModal();
      dispatch(fetchCourses());
    } catch (err: any) {
      toast.error(err || "Failed to save course. Ensure thumbnail file is valid.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle lecture submit
  const onLectureSubmit = async (data: LectureFormValues) => {
    if (!lectureFile && !editingLecture) {
      toast.error("Please upload a lecture video file.");
      return;
    }
    if (!activeCourse) return;

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      if (lectureFile) {
        formData.append("lecture", lectureFile);
      }

      if (editingLecture) {
        if (lectureFile) {
          toast.warning("Changing the lecture video during editing is not supported. To replace the video, please remove the lecture and re-add it.");
        }
        await dispatch(updateCourseLecture({ courseId: activeCourse._id, lectureId: editingLecture._id, title: data.title, description: data.description })).unwrap();
        toast.success("Lecture details updated successfully!");
      } else {
        await dispatch(addLectureToCourse({ courseId: activeCourse._id, formData })).unwrap();
        toast.success("Lecture added to course syllabus outline!");
      }
      
      // Refresh list
      await dispatch(fetchCourseLectures(activeCourse._id)).unwrap();
      lectureForm.reset();
      setLectureFile(null);
      setEditingLecture(null);
      setIsAddLectureOpen(false);
    } catch (err: any) {
      toast.error(err || "Failed to save lecture.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenEdit = (course: Course) => {
    setEditingCourse(course);
    courseForm.reset({
      title: course.title,
      description: course.description,
      category: course.category,
      createdBy: course.createdBy,
    });
    if (course.thumbnail?.secure_url) {
      setThumbnailPreview(course.thumbnail.secure_url);
    }
    setIsCourseModalOpen(true);
  };

  const handleOpenCreate = () => {
    setEditingCourse(null);
    courseForm.reset({
      title: "",
      description: "",
      category: "",
      createdBy: "",
    });
    setThumbnailFile(null);
    setThumbnailPreview(null);
    setIsCourseModalOpen(true);
  };

  const closeCourseModal = () => {
    setIsCourseModalOpen(false);
    setEditingCourse(null);
    setThumbnailFile(null);
    setThumbnailPreview(null);
  };

  const handleOpenLectures = async (course: Course) => {
    setActiveCourse(course);
    setIsLecturesModalOpen(true);
    setIsAddLectureOpen(false);
    try {
      await dispatch(fetchCourseLectures(course._id)).unwrap();
    } catch (err: any) {
      toast.error(err || "Failed to load course lectures.");
    }
  };

  const closeLecturesModal = () => {
    setIsLecturesModalOpen(false);
    setActiveCourse(null);
    setIsAddLectureOpen(false);
    setLectureFile(null);
    setEditingLecture(null);
    lectureForm.reset();
  };

  const handleOpenEditLecture = (lecture: Lecture) => {
    setEditingLecture(lecture);
    setIsAddLectureOpen(true);
    lectureForm.reset({
      title: lecture.title,
      description: lecture.description,
    });
    setLectureFile(null);
  };

  const handleDeleteCourse = async (courseId: string) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        await dispatch(deleteCourseById(courseId)).unwrap();
        toast.success("Course deleted successfully!");
      } catch (err: any) {
        // Backend delete course route is missing in the router, catch and explain gracefully.
        toast.error("Deletion not supported. Course delete route not mapped by backend router configuration.");
      }
    }
  };

  const handleDeleteLecture = async (lectureId: string) => {
    if (!activeCourse) return;
    if (window.confirm("Are you sure you want to remove this lecture?")) {
      try {
        await dispatch(
          removeLectureFromCourse({ courseId: activeCourse._id, lectureId })
        ).unwrap();
        toast.success("Lecture deleted successfully!");
      } catch (err: any) {
        toast.error(err || "Failed to delete lecture.");
      }
    }
  };

  const handleThumbnailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnailFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLectureFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const isMp4 = file.name.toLowerCase().endsWith(".mp4") || file.type === "video/mp4";
      if (!isMp4) {
        toast.error("Unsupported file format! Only .mp4 video files are allowed.");
        e.target.value = "";
        setLectureFile(null);
        return;
      }
      
      const maxSize = 50 * 1024 * 1024; // 50MB
      if (file.size > maxSize) {
        toast.error("File size exceeds the 50MB limit!");
        e.target.value = "";
        setLectureFile(null);
        return;
      }

      setLectureFile(file);
    }
  };

  return (
    <div className="bg-gray-50/50 min-h-screen pb-16">
      {/* Admin Title Banner */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-10 shadow-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black tracking-tight">Admin Control Panel</h1>
            <p className="text-white/80 text-sm mt-1">Manage course syllabi, upload learning videos, and organize categories</p>
          </div>
          <button
            onClick={handleOpenCreate}
            className="inline-flex items-center gap-2 bg-white text-[var(--brand-red)] hover:bg-orange-50 font-bold px-5 py-3 rounded-xl transition-all shadow-md self-start sm:self-auto cursor-pointer"
          >
            <Plus className="h-5 w-5" />
            Create Course
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-gray-150 shadow-sm">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Courses</div>
            <div className="text-3xl font-black text-gray-900 mt-1">{courses.length}</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-gray-150 shadow-sm">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Lectures Published</div>
            <div className="text-3xl font-black text-gray-900 mt-1">
              {courses.reduce((acc, c) => acc + (c.numberOfLectures || 0), 0)}
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-gray-150 shadow-sm">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Instructors</div>
            <div className="text-3xl font-black text-gray-900 mt-1">
              {new Set(courses.map((c) => c.createdBy)).size}
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-gray-150 shadow-sm">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Role Status</div>
            <div className="text-sm font-extrabold text-[var(--brand-red)] uppercase mt-2">Administrator</div>
          </div>
        </div>

        {/* Courses Listing Block */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100">
          <h2 className="text-xl font-black text-gray-900 mb-6 border-b border-gray-100 pb-3 flex items-center gap-2">
            <BookOpen className="h-5.5 w-5.5 text-[var(--brand-red)]" />
            Active Courses Catalog
          </h2>

          {status === "loading" && courses.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 gap-4">
              <div className="w-10 h-10 border-4 border-[var(--brand-red)] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-500 text-sm">Loading catalog details...</p>
            </div>
          ) : courses.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-gray-200 rounded-2xl bg-gray-55/30">
              <AlertCircle className="h-10 w-10 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500 font-semibold text-sm">No courses have been created yet.</p>
              <button
                onClick={handleOpenCreate}
                className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow-md cursor-pointer"
              >
                Create Your First Course
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <div
                  key={course._id}
                  className="bg-white border border-gray-150 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="h-40 w-full bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden flex items-center justify-center">
                    {course.thumbnail?.secure_url || getMockThumbnailUrl(course._id, "") ? (
                      <img
                        src={getMockThumbnailUrl(course._id, course.thumbnail?.secure_url || "")}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-orange-600/10 flex items-center justify-center">
                        <BookOpen className="h-10 w-10 text-[var(--brand-red)]/50" />
                      </div>
                    )}
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[var(--brand-red)] text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {course.category}
                    </span>
                  </div>

                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-extrabold text-gray-900 line-clamp-1 mb-1">{course.title}</h3>
                      <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed mb-4">{course.description}</p>
                    </div>

                    <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
                      <div className="flex items-center justify-between text-xs font-semibold text-gray-500">
                        <span>Instructor: <strong>{course.createdBy}</strong></span>
                        <span>{course.numberOfLectures} lectures</span>
                      </div>

                      <div className="flex gap-2 pt-1 border-t border-gray-50">
                        <button
                          onClick={() => handleOpenLectures(course)}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-lg bg-orange-50 hover:bg-orange-100 text-[var(--brand-orange)] text-xs font-bold transition-colors cursor-pointer"
                        >
                          <Video className="h-3.5 w-3.5" />
                          Lectures
                        </button>
                        <button
                          onClick={() => handleOpenEdit(course)}
                          className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors cursor-pointer border border-gray-150"
                          title="Edit Details"
                        >
                          <Edit2 className="h-3.5 w-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteCourse(course._id)}
                          className="p-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 transition-colors cursor-pointer border border-red-100"
                          title="Delete Course"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Course Edit/Create Dialog Modal */}
      {isCourseModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl relative">
            
            <button
              onClick={closeCourseModal}
              className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-800 p-1.5 rounded-full transition-colors cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-black text-gray-900 mb-2">
                {editingCourse ? "Edit Course Details" : "Create New Course"}
              </h3>
              <p className="text-gray-500 text-xs mb-6">Course descriptions must be at least 20 characters and titles at least 8 characters.</p>

              <Form {...courseForm}>
                <form onSubmit={courseForm.handleSubmit(onCourseSubmit)} className="space-y-4">
                  
                  {/* Title */}
                  <FormField
                    control={courseForm.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-bold text-gray-500 uppercase">Course Title</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Prompt Engineering Advanced Bootcamp" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Description */}
                  <FormField
                    control={courseForm.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-bold text-gray-500 uppercase">Description</FormLabel>
                        <FormControl>
                          <textarea
                            placeholder="Enter a descriptive overview (at least 20 characters)..."
                            className="w-full min-h-[100px] p-3 border border-gray-200 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] focus:border-transparent text-sm text-gray-900"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    {/* Category */}
                    <FormField
                      control={courseForm.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-bold text-gray-500 uppercase">Category</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. AI / ML" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Instructor */}
                    <FormField
                      control={courseForm.control}
                      name="createdBy"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-bold text-gray-500 uppercase">Instructor</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. Dr. Priya Mehta" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Thumbnail File */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-gray-500 uppercase">
                      {editingCourse ? "Course Thumbnail (Upload to replace)" : "Course Thumbnail (Optional)"}
                    </label>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl border border-dashed border-gray-300 flex items-center justify-center overflow-hidden bg-gray-50 relative">
                        {thumbnailPreview ? (
                          <img src={thumbnailPreview} alt="Preview" className="w-full h-full object-cover" />
                        ) : (
                          <Upload className="h-5 w-5 text-gray-400" />
                        )}
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleThumbnailChange}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                      </div>
                      <div className="text-xs text-gray-400 leading-normal">
                        Upload a thumbnail image file. Recommended 16:9 aspect ratio. Max size 2MB.
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-end pt-4 border-t border-gray-100 mt-6">
                    <button
                      type="button"
                      onClick={closeCourseModal}
                      className="px-4 py-2.5 rounded-xl border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-bold cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-sm shadow-md hover:opacity-95 transition-opacity disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? "Saving..." : editingCourse ? "Save Changes" : "Create Course"}
                    </button>
                  </div>

                </form>
              </Form>
            </div>
          </div>
        </div>
      )}

      {/* Syllabus outline & Lecture Management Modal */}
      {isLecturesModalOpen && activeCourse && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white w-full max-w-5xl h-[85vh] rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl relative">
            
            <button
              onClick={closeLecturesModal}
              className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-gray-800 hover:text-red-500 p-2 rounded-full transition-colors shadow-md cursor-pointer border border-gray-150"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Left Side: Lectures syllabus outline list */}
            <div className="w-full md:w-2/3 bg-gray-50 flex flex-col h-full">
              <div className="p-6 border-b border-gray-150 flex items-center justify-between">
                <div>
                  <span className="text-[var(--brand-red)] text-[10px] font-extrabold px-2.5 py-1 bg-red-50 rounded-full uppercase tracking-wider mb-1.5 inline-block">
                    Course syllabus outline
                  </span>
                  <h3 className="text-xl font-black text-gray-900 line-clamp-1">{activeCourse.title}</h3>
                  <p className="text-gray-500 text-xs mt-0.5">Instructor: {activeCourse.createdBy}</p>
                </div>
                <button
                  onClick={() => {
                    if (isAddLectureOpen) {
                      setIsAddLectureOpen(false);
                      setEditingLecture(null);
                      lectureForm.reset();
                      setLectureFile(null);
                    } else {
                      setIsAddLectureOpen(true);
                      setEditingLecture(null);
                      lectureForm.reset({ title: "", description: "" });
                      setLectureFile(null);
                    }
                  }}
                  className="inline-flex items-center gap-1.5 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow-sm cursor-pointer"
                >
                  <Plus className="h-4 w-4" />
                  {isAddLectureOpen ? "View Syllabus" : "Add Lecture"}
                </button>
              </div>

              {/* Dynamic View: Lecture outline list OR Add lecture Form */}
              <div className="flex-grow overflow-y-auto p-6">
                {!isAddLectureOpen ? (
                  /* Lecture outline list view */
                  selectedCourseLectures.length === 0 ? (
                    <div className="text-center py-16 border border-dashed border-gray-200 rounded-2xl bg-white/50">
                      <AlertCircle className="h-10 w-10 text-gray-300 mx-auto mb-3" />
                      <p className="text-gray-500 text-sm font-semibold">No lectures uploaded to this course outline yet.</p>
                      <p className="text-gray-400 text-xs mt-1">Click the "Add Lecture" button above to publish your first video lecture.</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {selectedCourseLectures.map((lecture, lIndex) => (
                        <div
                          key={lecture._id}
                          className="bg-white border border-gray-150 rounded-2xl p-4 flex items-start justify-between gap-4 hover:shadow-sm transition-all"
                        >
                          <div className="flex items-start gap-3">
                            <div className="p-2.5 bg-red-50 rounded-xl text-[var(--brand-red)]">
                              <PlayCircle className="h-5 w-5" />
                            </div>
                            <div>
                              <span className="text-[10px] text-gray-400 font-extrabold uppercase">
                                Lecture {lIndex + 1}
                              </span>
                              <h4 className="font-extrabold text-gray-900 text-base mt-0.5">{lecture.title}</h4>
                              <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{lecture.description}</p>
                              {lecture.lecture?.secure_url || getMockVideoUrl(lecture._id, "") ? (
                                <a
                                  href={getMockVideoUrl(lecture._id, lecture.lecture?.secure_url || "")}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-1 text-[11px] text-[var(--brand-red)] font-bold hover:underline mt-2"
                                >
                                  <Video className="h-3 w-3" />
                                  Open Video File
                                </a>
                              ) : null}
                            </div>
                          </div>
                          <div className="flex gap-2 self-start md:self-auto">
                            <button
                              onClick={() => handleOpenEditLecture(lecture)}
                              className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors border border-blue-100 cursor-pointer"
                              title="Edit Lecture Details"
                            >
                              <Edit2 className="h-3.5 w-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteLecture(lecture._id)}
                              className="p-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 transition-colors border border-red-100 cursor-pointer"
                              title="Remove Lecture"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )
                ) : (
                  /* Add lecture form view */
                  <div className="bg-white border border-gray-150 rounded-2xl p-6 shadow-sm max-w-xl mx-auto">
                    <h4 className="text-lg font-black text-gray-900 mb-4 border-b border-gray-100 pb-2">
                      {editingLecture ? "Edit Video Lecture" : "Upload Video Lecture"}
                    </h4>

                    <Form {...lectureForm}>
                      <form onSubmit={lectureForm.handleSubmit(onLectureSubmit)} className="space-y-4">
                        
                        <FormField
                           control={lectureForm.control}
                          name="title"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-bold text-gray-500 uppercase">Lecture Title</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g. Introduction to Neural Networks" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={lectureForm.control}
                          name="description"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-bold text-gray-500 uppercase">Lecture Description</FormLabel>
                              <FormControl>
                                <textarea
                                  placeholder="Enter description outlines for this lecture module..."
                                  className="w-full min-h-[80px] p-3 border border-gray-200 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] focus:border-transparent text-sm text-gray-900"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* File Upload Component */}
                        <div className="space-y-1.5">
                          <label className="block text-xs font-bold text-gray-500 uppercase">
                            {editingLecture ? "Lecture Video File (Optional replacement)" : "Lecture Video File"}
                          </label>
                          <div className="flex items-center gap-3">
                            <div className="relative inline-flex items-center gap-2 bg-gradient-to-r from-red-50 to-orange-50 border border-dashed border-orange-300 text-[var(--brand-red)] font-bold px-4 py-3 rounded-xl hover:bg-orange-100 transition-colors cursor-pointer">
                              <Upload className="h-4 w-4" />
                              <span className="text-xs">Choose Video file</span>
                              <input
                                type="file"
                                accept="video/mp4"
                                onChange={handleLectureFileChange}
                                className="absolute inset-0 opacity-0 cursor-pointer"
                              />
                            </div>
                            <span className="text-xs text-gray-500 line-clamp-1 max-w-[200px]">
                              {lectureFile ? lectureFile.name : (editingLecture ? "Keep current video" : "No file selected (Max size 50MB, .mp4 only)")}
                            </span>
                          </div>
                        </div>

                        <div className="flex gap-3 justify-end pt-4 border-t border-gray-100 mt-6">
                          <button
                            type="button"
                            onClick={() => {
                              setIsAddLectureOpen(false);
                              setEditingLecture(null);
                              lectureForm.reset();
                            }}
                            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs font-bold cursor-pointer"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-xs shadow-md hover:opacity-95 disabled:opacity-50 cursor-pointer"
                          >
                            {isSubmitting ? "Uploading Video..." : (editingLecture ? "Save Changes" : "Upload & Save")}
                          </button>
                        </div>

                      </form>
                    </Form>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Right Side: Syllabus outline Summary statistics */}
            <div className="w-full md:w-1/3 border-l border-gray-150 flex flex-col justify-between p-6 bg-white">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-black text-gray-900 border-b border-gray-100 pb-2">Outline Summary</h4>
                  <p className="text-gray-500 text-xs leading-relaxed mt-2">{activeCourse.description}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm font-semibold">
                    <span className="text-gray-500">Lectures count:</span>
                    <span className="text-gray-900">{selectedCourseLectures.length}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-semibold">
                    <span className="text-gray-500">Category Tag:</span>
                    <span className="text-gray-900 uppercase">{activeCourse.category}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-semibold">
                    <span className="text-gray-500">Instructor:</span>
                    <span className="text-gray-900">{activeCourse.createdBy}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 border border-gray-150 rounded-2xl flex gap-3 items-start mt-6">
                <FileText className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <div className="text-[11px] text-gray-500 leading-normal">
                  <strong>Video Quality Notice:</strong> Uploaded lecture videos will be stored in our Cloudinary media catalog and converted automatically for standard browser playbacks.
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
