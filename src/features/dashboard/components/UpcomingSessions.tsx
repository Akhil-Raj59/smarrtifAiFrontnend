import { Link } from "react-router-dom";
import { Calendar, Video } from "lucide-react";

const upcomingSessions = [
  {
    title: "1-on-1 Mentor Session",
    mentor: "Dr. Priya Mehta",
    date: "Mar 8, 2026",
    time: "10:00 AM - 11:00 AM",
    type: "Video Call",
    link: "/session/join",
  },
  {
    title: "Live Workshop: MLOps Basics",
    mentor: "Arjun Kumar",
    date: "Mar 10, 2026",
    time: "6:00 PM - 8:00 PM",
    type: "Group Session",
    link: "/workshop/join",
  },
  {
    title: "Project Review Session",
    mentor: "Dr. Priya Mehta",
    date: "Mar 15, 2026",
    time: "3:00 PM - 4:00 PM",
    type: "Video Call",
    link: "/session/join",
  },
];

export const UpcomingSessions = () => {
  return (
    <section className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Calendar className="h-5 w-5 text-[var(--brand-orange)]" />
        Upcoming Sessions
      </h2>

      <div className="space-y-4">
        {upcomingSessions.map((session, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-2 mb-2">
              <Video className="h-4 w-4 text-[var(--brand-red)] mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">
                  {session.title}
                </h3>
                <p className="text-xs text-gray-600">
                  with {session.mentor}
                </p>
              </div>
            </div>
            <div className="text-xs text-gray-600 mb-3">
              <div>{session.date}</div>
              <div>{session.time}</div>
            </div>
            <button className="w-full px-3 py-2 rounded-lg bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white text-sm hover:shadow-lg transition-all">
              Join Session
            </button>
          </div>
        ))}
      </div>

      <Link
        to="#"
        className="block text-center mt-4 text-[var(--brand-red)] hover:text-[var(--brand-orange)] text-sm font-semibold"
      >
        View Full Calendar
      </Link>
    </section>
  );
};
