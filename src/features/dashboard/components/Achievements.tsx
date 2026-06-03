import { Award, AlertCircle } from "lucide-react";

const achievements = [
  { name: "First Module Complete", earned: true, icon: "🎯" },
  { name: "5 Projects Submitted", earned: true, icon: "🚀" },
  { name: "Perfect Attendance", earned: true, icon: "⭐" },
  { name: "Community Contributor", earned: false, icon: "🤝" },
  { name: "Course Completion", earned: false, icon: "🏆" },
];

export const Achievements = () => {
  return (
    <section className="bg-white rounded-xl p-6 shadow-sm relative overflow-hidden">
      {/* Coming Soon Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex flex-col items-center justify-center z-10">
        <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-white/30 flex items-center gap-2">
          <AlertCircle className="h-4 w-4 text-white" />
          <span className="text-sm font-bold text-white uppercase tracking-wide">Coming Soon</span>
        </div>
        <p className="text-xs text-white/90 mt-2 font-medium">Achievements are under development.</p>
      </div>

      <div className="opacity-40 pointer-events-none">
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Award className="h-5 w-5 text-[var(--brand-orange)]" />
          Achievements
        </h2>

        <div className="grid grid-cols-3 gap-3">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`aspect-square rounded-lg flex flex-col items-center justify-center p-2 transition-all ${
                achievement.earned
                  ? "bg-gradient-to-br from-[var(--brand-red-light)] to-[var(--brand-orange-light)] border-2 border-[var(--brand-orange)]"
                  : "bg-gray-100 opacity-50"
              }`}
            >
              <div className="text-3xl mb-1">{achievement.icon}</div>
              <div className="text-xs text-center text-gray-700 font-medium">
                {achievement.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
