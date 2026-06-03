import { Users, MessageSquare, AlertCircle } from "lucide-react";

export const DashboardCommunity = () => {
  return (
    <section className="bg-gradient-to-br from-[var(--brand-red)] to-[var(--brand-orange)] text-white rounded-xl p-6 shadow-sm relative overflow-hidden">
      {/* Coming Soon Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex flex-col items-center justify-center z-10">
        <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-white/30 flex items-center gap-2">
          <AlertCircle className="h-4 w-4 text-white" />
          <span className="text-sm font-bold text-white uppercase tracking-wide">Coming Soon</span>
        </div>
        <p className="text-xs text-white/90 mt-2 font-medium">Community is under development.</p>
      </div>

      <div className="opacity-40 pointer-events-none">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Users className="h-5 w-5" />
          Community
        </h2>
        <p className="text-sm text-white/90 mb-4">
          Connect with fellow learners, ask questions, and share your progress
        </p>
        <button className="w-full px-4 py-2 rounded-lg bg-white text-[var(--brand-red)] hover:shadow-lg transition-all font-semibold">
          <MessageSquare className="inline h-4 w-4 mr-2" />
          Join Discussion
        </button>
      </div>
    </section>
  );
};
