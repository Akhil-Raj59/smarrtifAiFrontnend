import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store";
import { fetchEnrolledCourses, fetchCourseLectures, clearSelectedLectures, Course, Lecture } from "@/store/slices/courseSlice";
import { DashboardHeader } from "./DashboardHeader";
import { PerformanceStats } from "./PerformanceStats";
import { Achievements } from "./Achievements";
import { DashboardCommunity } from "./DashboardCommunity";
import { DashboardCertificates } from "./DashboardCertificates";
import { CareerBoost } from "./CareerBoost";
import { BookOpen, Clock, PlayCircle, Video, AlertCircle, X, ChevronRight, User } from "lucide-react";
import { toast } from "sonner";

export const UserDashboard = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);
  const { enrolledCourses, selectedCourseLectures, status } = useAppSelector((state) => state.courses);

  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [activeLecture, setActiveLecture] = useState<Lecture | null>(null);
  const [isLecturesModalOpen, setIsLecturesModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchEnrolledCourses());
  }, [dispatch]);

  const handleOpenLectures = async (course: Course) => {
    setSelectedCourse(course);
    setIsLecturesModalOpen(true);
    setActiveLecture(null);
    try {
      await dispatch(fetchCourseLectures(course._id)).unwrap();
    } catch (err: any) {
      const errMsg = String(err).toLowerCase();
      const isForbidden = errMsg.includes("purchase") || errMsg.includes("permission") || errMsg.includes("unauthorized") || errMsg.includes("subscribe");
      if (isForbidden) {
        toast.error("Access Denied: Please purchase this course to view lectures.");
        setIsLecturesModalOpen(false);
        setSelectedCourse(null);
        navigate(`/programs/${course._id}`);
      } else {
        toast.error(err || "Failed to load course lectures.");
      }
    }
  };

  const handleCloseLectures = () => {
    setIsLecturesModalOpen(false);
    setSelectedCourse(null);
    setActiveLecture(null);
    dispatch(clearSelectedLectures());
  };

  // Safe wrapper for user details
  const headerData = {
    name: user?.fullName || "Student",
    plan: user?.role === "ADMIN" ? "Administrator" : (enrolledCourses.length > 0 ? "Premium Learner" : "Learner"),
    enrollment: user?.email || "Learning Journey",
    progress: enrolledCourses.length > 0 ? 65 : 0,
    avatarUrl: user?.avatar?.secure_url,
  };

  return (
    <div className="bg-gray-50/50 min-h-screen pb-16">
      <DashboardHeader userData={headerData} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Courses Section */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100">
              <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
                <h2 className="text-2xl font-black text-gray-900 flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-[var(--brand-orange)]" />
                  My Active Courses
                </h2>
                <span className="bg-orange-50 text-[var(--brand-orange)] text-xs font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  {enrolledCourses.length} Enrolled
                </span>
              </div>

              {status === "loading" && enrolledCourses.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4">
                  <div className="w-10 h-10 border-4 border-[var(--brand-orange)] border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-gray-500 text-sm">Fetching enrolled courses...</p>
                </div>
              ) : enrolledCourses.length === 0 ? (
                <div className="text-center py-16 px-4 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                  <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4 animate-pulse" />
                  <h3 className="text-lg font-bold text-gray-900 mb-1">No enrolled courses</h3>
                  <p className="text-gray-500 text-sm max-w-sm mx-auto mb-6">
                    You have not enrolled in any courses yet. Explore our program catalog to begin.
                  </p>
                  <a
                    href="/programs"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-bold bg-gradient-to-r from-orange-400 to-rose-400 hover:shadow-lg transition-all text-sm"
                  >
                    Browse Programs
                  </a>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-6">
                  {enrolledCourses.map((course) => (
                    <div
                      key={course._id}
                      className="group bg-white border border-gray-150 rounded-2xl overflow-hidden hover:border-[var(--brand-orange)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                    >
                      {/* Image / Banner */}
                      <div className="h-44 w-full bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden flex items-center justify-center">
                        {course.thumbnail?.secure_url ? (
                          <img
                            src={course.thumbnail.secure_url}
                            alt={course.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-red-500/20 to-rose-600/20 flex items-center justify-center">
                            <BookOpen className="h-10 w-10 text-[var(--brand-orange)]/60" />
                          </div>
                        )}
                        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[var(--brand-orange)] text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                          {course.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-5 flex-grow flex flex-col justify-between">
                        <div>
                          <h3 className="font-extrabold text-gray-900 text-lg line-clamp-1 mb-1">
                            {course.title}
                          </h3>
                          <p className="text-gray-500 text-xs line-clamp-2 mb-4 leading-relaxed">
                            {course.description}
                          </p>
                        </div>

                        <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                          <div className="flex items-center gap-1 text-gray-500 text-xs font-semibold">
                            <Video className="h-4 w-4 text-gray-400" />
                            <span>{course.numberOfLectures} lectures</span>
                          </div>
                          <button
                            onClick={() => handleOpenLectures(course)}
                            className="inline-flex items-center gap-1 text-xs font-bold text-[var(--brand-orange)] hover:text-[var(--brand-red)] transition-colors"
                          >
                            Start Learning
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Assignments Placeholder */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100">
              <h2 className="text-2xl font-black text-gray-900 flex items-center gap-2 mb-4 border-b border-gray-100 pb-4">
                Assignments & Projects
              </h2>
              <div className="p-6 bg-gray-50 rounded-2xl text-center border border-dashed border-gray-200">
                <p className="text-gray-500 text-sm">
                  No active assignments found for your current courses. Enjoy the break!
                </p>
              </div>
            </section>

            {/* Learning Materials Placeholder */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100">
              <h2 className="text-2xl font-black text-gray-900 flex items-center gap-2 mb-4 border-b border-gray-100 pb-4">
                Reference Learning Materials
              </h2>
              <div className="p-6 bg-gray-50 rounded-2xl text-center border border-dashed border-gray-200">
                <p className="text-gray-500 text-sm">
                  Resources, cheatsheets, and project templates will be uploaded by your mentors soon.
                </p>
              </div>
            </section>
          </div>

          {/* Right Sidebar Columns */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
              <h3 className="text-lg font-extrabold text-gray-900 mb-4 border-b border-gray-100 pb-3">
                Upcoming Mentoring Sessions
              </h3>
              <div className="p-4 bg-gray-50 rounded-xl text-center border border-dashed border-gray-200">
                <p className="text-gray-500 text-xs font-semibold">
                  No live sessions or mentor check-ins scheduled for this week.
                </p>
              </div>
            </div>

            <PerformanceStats />
            <Achievements />
            <DashboardCommunity />
            <DashboardCertificates progress={headerData.progress} />
            <CareerBoost />
          </div>
        </div>
      </div>

      {/* Lectures Viewer Modal */}
      {isLecturesModalOpen && selectedCourse && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white w-full max-w-5xl h-[85vh] rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl relative">
            
            {/* Close Button */}
            <button
              onClick={handleCloseLectures}
              className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-gray-800 hover:text-red-500 p-2 rounded-full transition-colors shadow-md cursor-pointer border border-gray-100"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Left Side: Video Player or Course Details */}
            <div className="w-full md:w-2/3 bg-gray-950 flex flex-col justify-center relative p-6">
              {activeLecture ? (
                <div className="w-full flex flex-col h-full justify-between">
                  <div className="flex-grow flex items-center justify-center overflow-hidden">
                    <video
                      key={activeLecture._id}
                      src={activeLecture.lecture?.secure_url || ""}
                      controls
                      controlsList="nodownload"
                      className="max-h-[50vh] max-w-full rounded-xl shadow-lg"
                    />
                  </div>
                  <div className="mt-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{activeLecture.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{activeLecture.description}</p>
                  </div>
                </div>
              ) : (
                <div className="text-center text-white py-12">
                  <PlayCircle className="h-16 w-16 text-[var(--brand-orange)] mx-auto mb-4 animate-bounce" />
                  <h3 className="text-xl font-bold mb-1">Select a lecture to play</h3>
                  <p className="text-gray-400 text-xs max-w-md mx-auto leading-relaxed">
                    Choose from the syllabus outline on the right to start watching lectures and working on hands-on modules.
                  </p>
                </div>
              )}
            </div>

            {/* Modal Right Side: Lecture Outline List */}
            <div className="w-full md:w-1/3 border-l border-gray-150 flex flex-col h-full bg-white">
              {/* Header */}
              <div className="p-5 border-b border-gray-150">
                <span className="text-[var(--brand-orange)] text-[10px] font-extrabold px-2.5 py-1.5 bg-orange-50 rounded-full uppercase tracking-wider mb-2 inline-block">
                  Syllabus Outline
                </span>
                <h3 className="text-lg font-extrabold text-gray-900 line-clamp-1">{selectedCourse.title}</h3>
                <p className="text-gray-500 text-xs mt-1">Instructor: {selectedCourse.createdBy}</p>
              </div>

              {/* Syllabus List */}
              <div className="flex-grow overflow-y-auto p-4 space-y-3">
                {status === "loading" && selectedCourseLectures.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 gap-3">
                    <div className="w-8 h-8 border-3 border-[var(--brand-orange)] border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-gray-400 text-xs">Loading syllabus...</p>
                  </div>
                ) : selectedCourseLectures.length === 0 ? (
                  <div className="text-center py-12 text-gray-400">
                    <AlertCircle className="h-8 w-8 mx-auto mb-2 text-gray-300" />
                    <p className="text-xs">No lectures published yet.</p>
                  </div>
                ) : (
                  selectedCourseLectures.map((lecture, lIndex) => {
                    const isActive = activeLecture?._id === lecture._id;
                    return (
                      <button
                        key={lecture._id}
                        onClick={() => setActiveLecture(lecture)}
                        className={`w-full flex items-start gap-3 p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                          isActive
                            ? "bg-orange-50/50 border-[var(--brand-orange)] shadow-sm"
                            : "bg-white hover:bg-gray-50 border-gray-150"
                        }`}
                      >
                        <div className={`p-2 rounded-lg ${isActive ? "bg-[var(--brand-orange)] text-white" : "bg-gray-100 text-gray-500"}`}>
                          <PlayCircle className="h-4 w-4" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] text-gray-400 font-extrabold uppercase">
                              Lecture {lIndex + 1}
                            </span>
                          </div>
                          <h4 className="text-sm font-bold text-gray-900 line-clamp-1 mt-0.5">{lecture.title}</h4>
                          <p className="text-gray-500 text-[11px] line-clamp-1 mt-0.5 leading-relaxed">{lecture.description}</p>
                        </div>
                      </button>
                    );
                  })
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
