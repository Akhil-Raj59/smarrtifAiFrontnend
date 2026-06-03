import { Link } from "react-router-dom";
import { BookOpen, Clock, PlayCircle } from "lucide-react";

const courses = [
  {
    name: "AI/ML Fundamentals",
    progress: 85,
    totalModules: 12,
    completedModules: 10,
    nextLesson: "Neural Networks - Part 2",
    timeRemaining: "2 weeks",
  },
  {
    name: "Prompt Engineering Mastery",
    progress: 45,
    totalModules: 8,
    completedModules: 4,
    nextLesson: "Chain-of-Thought Prompting",
    timeRemaining: "4 weeks",
  },
];

export const MyCourses = () => {
  return (
    <section className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-[var(--brand-red)]" />
          My Courses
        </h2>
        <Link
          to="/programs"
          className="text-[var(--brand-red)] hover:text-[var(--brand-orange)] text-sm font-semibold"
        >
          View All
        </Link>
      </div>

      <div className="space-y-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-6 hover:border-[var(--brand-red)] transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {course.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {course.completedModules} of {course.totalModules}{" "}
                  modules completed
                </p>
              </div>
              <span className="text-2xl font-bold text-[var(--brand-red)]">
                {course.progress}%
              </span>
            </div>

            <div className="mb-4">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] transition-all duration-300"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>{course.timeRemaining} remaining</span>
              </div>
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white hover:shadow-lg transition-all">
                <PlayCircle className="h-4 w-4" />
                Continue: {course.nextLesson}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
