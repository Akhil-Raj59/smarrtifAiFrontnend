import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { fetchCourses, enrollInCourse, fetchEnrolledCourses } from "@/store/slices/courseSlice";
import { checkAuthUser } from "@/store/slices/authSlice";
import {
  Brain,
  Sparkles,
  Code,
  TrendingUp,
  Database,
  Zap,
  BookOpen,
  Video,
  User,
  ArrowRight,
  Shield,
  Loader2
} from "lucide-react";
import { toast } from "sonner";

const getCategoryStyles = (category: string) => {
  const normalized = category.toLowerCase().trim();
  if (normalized.includes("agent")) {
    return {
      icon: Brain,
      color: "from-red-500 to-orange-500",
      gradient: "from-red-100 via-orange-100 to-amber-100",
    };
  } else if (normalized.includes("prompt")) {
    return {
      icon: Sparkles,
      color: "from-orange-500 to-amber-500",
      gradient: "from-orange-100 via-amber-100 to-yellow-100",
    };
  } else if (normalized.includes("large language") || normalized.includes("llm")) {
    return {
      icon: Code,
      color: "from-red-500 to-pink-500",
      gradient: "from-rose-100 via-red-100 to-orange-100",
    };
  } else if (normalized.includes("ai/ml") || normalized.includes("machine learning") || normalized.includes("ml")) {
    return {
      icon: TrendingUp,
      color: "from-orange-500 to-red-500",
      gradient: "from-pink-100 via-rose-100 to-red-100",
    };
  } else if (normalized.includes("data") || normalized.includes("analytics")) {
    return {
      icon: Database,
      color: "from-amber-500 to-orange-500",
      gradient: "from-amber-100 via-orange-100 to-red-100",
    };
  } else if (normalized.includes("generative") || normalized.includes("genai")) {
    return {
      icon: Zap,
      color: "from-pink-500 to-red-500",
      gradient: "from-orange-100 via-red-100 to-pink-100",
    };
  } else {
    return {
      icon: BookOpen,
      color: "from-red-500 to-orange-500",
      gradient: "from-red-50 via-orange-50 to-amber-50",
    };
  }
};


export const AvailablePrograms = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);
  const { courses, enrolledCourses, status } = useAppSelector((state) => state.courses);
  const [enrollingCourseId, setEnrollingCourseId] = useState<string | null>(null);

  useEffect(() => {
    dispatch(fetchCourses());
    if (user) {
      dispatch(fetchEnrolledCourses());
    }
  }, [dispatch, user]);

  const hasEnrolled = (courseId: string) => {
    if (user?.role === "ADMIN") return true;
    return enrolledCourses?.some((c: any) => c._id === courseId || c === courseId) || false;
  };

  const handleEnroll = async (courseId: string) => {
    if (!user) {
      toast.error("Please login to enroll in courses.");
      navigate("/login");
      return;
    }

    setEnrollingCourseId(courseId);
    try {
      await dispatch(enrollInCourse(courseId)).unwrap();
      toast.success("You have successfully enrolled in this program!");
      await dispatch(checkAuthUser()).unwrap();
      navigate("/dashboard");
    } catch (err: any) {
      toast.error(err || "Failed to initiate enrollment.");
    } finally {
      setEnrollingCourseId(null);
    }
  };

  return (
    <section className="py-12 sm:py-16 relative overflow-hidden">
      {/* Animated Gradient Background Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-[var(--brand-red)]/5 to-[var(--brand-orange)]/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-[var(--brand-orange)]/5 to-[var(--brand-red)]/5 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-br from-[var(--brand-red)]/4 to-[var(--brand-orange)]/4 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
              Available Programs
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Explore our professional AI training programs and start your learning journey today.
          </p>
        </div>

        {status === "loading" && courses.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="w-12 h-12 text-[var(--brand-orange)] animate-spin" />
            <p className="text-gray-500 text-sm">Loading programs catalog from database...</p>
          </div>
        ) : courses.length === 0 ? (
          <div className="text-center py-16 px-4 bg-gray-50 rounded-3xl border border-dashed border-gray-200 max-w-md mx-auto">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-1">No Programs Available</h3>
            <p className="text-gray-500 text-sm">Please ask your administrator to upload programs to the catalog.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => {
              const styles = getCategoryStyles(course.category);
              const CategoryIcon = styles.icon;
              const isProcessing = enrollingCourseId === course._id;
              const userEnrolled = hasEnrolled(course._id);

              return (
                <div key={course._id} className="scroll-mt-24 flex flex-col">
                  <div
                    className={`relative p-6 bg-gradient-to-br ${styles.gradient} shadow-md overflow-hidden rounded-3xl h-full flex flex-col justify-between border border-white/50`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-black/5 pointer-events-none"></div>
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

                    {/* Top Content */}
                    <div className="relative z-10">
                      {/* Header row */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r ${styles.color} shadow-sm`}>
                            <CategoryIcon className="h-5.5 w-5.5 text-white" />
                          </div>
                          <span className="text-[11px] font-extrabold tracking-wider uppercase bg-white/80 px-2.5 py-1 rounded-full text-gray-800 border border-black/5 shadow-2xs">
                            {course.category}
                          </span>
                        </div>
                        {userEnrolled && (
                          <span className="text-[10px] font-extrabold tracking-wider uppercase bg-emerald-500 px-2.5 py-1 rounded-full text-white border border-emerald-600 shadow-sm flex items-center gap-1.5 animate-pulse">
                            <Shield className="h-3.5 w-3.5" />
                            Enrolled
                          </span>
                        )}
                      </div>

                      {/* Course Card Thumbnail */}
                      <div className="w-full aspect-video rounded-2xl overflow-hidden bg-gray-900 shadow-sm mb-4 relative group border border-white/40">
                        {course.thumbnail?.secure_url ? (
                          <img
                            src={course.thumbnail.secure_url}
                            alt={course.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-950 flex items-center justify-center">
                            <BookOpen className="h-10 w-10 text-white/25" />
                          </div>
                        )}
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                        {course.title}
                      </h3>
                      <p className="text-sm text-gray-650 mb-6 leading-relaxed line-clamp-3">
                        {course.description}
                      </p>
                    </div>

                    {/* Bottom Metadata & CTA */}
                    <div className="relative z-10 mt-auto">
                      {/* Metas */}
                      <div className="grid grid-cols-2 gap-2 border-t border-black/5 pt-4 mb-5">
                        <div className="flex items-center gap-1.5 text-xs text-gray-600 font-semibold">
                          <User className="h-4 w-4 text-gray-400 flex-shrink-0" />
                          <span className="truncate">{course.createdBy}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-600 font-semibold justify-end">
                          <Video className="h-4 w-4 text-gray-400 flex-shrink-0" />
                          <span>{course.numberOfLectures} Lecture{course.numberOfLectures === 1 ? "" : "s"}</span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      {userEnrolled ? (
                        <Link
                          to="/dashboard"
                          className="w-full py-3 px-4 rounded-xl text-white font-bold bg-gradient-to-r from-emerald-500 to-teal-600 hover:shadow-md hover:scale-[1.01] transition-all text-xs flex items-center justify-center gap-1.5 shadow-sm"
                        >
                          <Shield className="h-4 w-4" />
                          Enrolled - Go to Dashboard
                        </Link>
                      ) : (
                        <button
                          onClick={() => handleEnroll(course._id)}
                          disabled={isProcessing}
                          className="w-full py-3 px-4 rounded-xl text-white font-bold bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-95 hover:shadow-md hover:scale-[1.01] transition-all text-xs flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-55 shadow-sm font-sans"
                        >
                          {isProcessing ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />
                              Processing Enrollment...
                            </>
                          ) : (
                            <>
                              Enrol in Program
                              <ArrowRight className="h-4 w-4" />
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
