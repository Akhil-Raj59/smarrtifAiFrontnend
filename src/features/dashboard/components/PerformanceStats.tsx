import { BarChart3, Target, TrendingUp, Clock, AlertCircle } from "lucide-react";

export const PerformanceStats = () => {
  return (
    <section className="bg-white rounded-xl p-6 shadow-sm relative overflow-hidden">
      {/* Coming Soon Overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm flex flex-col items-center justify-center z-10">
        <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-orange-100 flex items-center gap-2">
          <AlertCircle className="h-4 w-4 text-orange-500" />
          <span className="text-sm font-bold text-orange-600 uppercase tracking-wide">Coming Soon</span>
        </div>
        <p className="text-xs text-gray-500 mt-2 font-medium">Performance tracking is under development.</p>
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <BarChart3 className="h-5 w-5 text-[var(--brand-red)]" />
        Performance
      </h2>

      <div className="space-y-4 opacity-40 pointer-events-none">
        <div className="flex items-center justify-between p-3 bg-[var(--brand-gray-light)] rounded-lg">
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-[var(--brand-orange)]" />
            <span className="text-sm text-gray-700">
              Assignments Completed
            </span>
          </div>
          <span className="font-bold text-gray-900">8/12</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-[var(--brand-gray-light)] rounded-lg">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-[var(--brand-orange)]" />
            <span className="text-sm text-gray-700">
              Average Score
            </span>
          </div>
          <span className="font-bold text-gray-900">92%</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-[var(--brand-gray-light)] rounded-lg">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[var(--brand-orange)]" />
            <span className="text-sm text-gray-700">
              Learning Hours
            </span>
          </div>
          <span className="font-bold text-gray-900">156h</span>
        </div>
      </div>
    </section>
  );
};
