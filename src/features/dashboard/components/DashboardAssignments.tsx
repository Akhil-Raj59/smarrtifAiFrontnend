import { FileText, CheckCircle2 } from "lucide-react";

const assignments = [
  {
    title: "Build a Classification Model",
    course: "AI/ML Fundamentals",
    dueDate: "Mar 5, 2026",
    status: "pending",
    points: 100,
  },
  {
    title: "Prompt Optimization Challenge",
    course: "Prompt Engineering",
    dueDate: "Mar 12, 2026",
    status: "in-progress",
    points: 75,
  },
  {
    title: "Project Proposal Submission",
    course: "AI/ML Fundamentals",
    dueDate: "Feb 28, 2026",
    status: "completed",
    points: 100,
    score: 95,
  },
];

export const DashboardAssignments = () => {
  return (
    <section className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <FileText className="h-6 w-6 text-[var(--brand-orange)]" />
        Assignments & Projects
      </h2>

      <div className="space-y-4">
        {assignments.map((assignment, index) => (
          <div
            key={index}
            className={`border-l-4 rounded-lg p-4 ${
              assignment.status === "completed"
                ? "border-green-500 bg-green-50"
                : assignment.status === "in-progress"
                ? "border-[var(--brand-orange)] bg-[var(--brand-orange-light)]"
                : "border-[var(--brand-red)] bg-[var(--brand-red-light)]"
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-gray-900">
                    {assignment.title}
                  </h3>
                  {assignment.status === "completed" && (
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  {assignment.course}
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-gray-600">
                    Due: {assignment.dueDate}
                  </span>
                  <span className="text-gray-600">
                    {assignment.points} points
                  </span>
                  {assignment.status === "completed" && (
                    <span className="font-semibold text-green-600">
                      Score: {assignment.score}/{assignment.points}
                    </span>
                  )}
                </div>
              </div>
              <div>
                {assignment.status === "pending" && (
                  <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white text-sm hover:shadow-lg transition-all">
                    Start
                  </button>
                )}
                {assignment.status === "in-progress" && (
                  <button className="px-4 py-2 rounded-lg border-2 border-[var(--brand-orange)] text-[var(--brand-orange)] text-sm hover:bg-[var(--brand-orange)] hover:text-white transition-all">
                    Continue
                  </button>
                )}
                {assignment.status === "completed" && (
                  <button className="px-4 py-2 rounded-lg border-2 border-green-600 text-green-600 text-sm">
                    View
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
