import { GraduationCap, Award, AlertCircle } from "lucide-react";

interface DashboardCertificatesProps {
  progress: number;
}

export const DashboardCertificates = ({ progress }: DashboardCertificatesProps) => {
  return (
    <section className="bg-white rounded-xl p-6 shadow-sm relative overflow-hidden">
      {/* Coming Soon Overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm flex flex-col items-center justify-center z-10">
        <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-orange-100 flex items-center gap-2">
          <AlertCircle className="h-4 w-4 text-orange-500" />
          <span className="text-sm font-bold text-orange-600 uppercase tracking-wide">Coming Soon</span>
        </div>
        <p className="text-xs text-gray-500 mt-2 font-medium">Certificates are under development.</p>
      </div>

      <div className="opacity-40 pointer-events-none">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-[var(--brand-red)]" />
          Certificates
        </h2>
        <div className="text-center py-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--brand-gray-light)] mb-3">
            <Award className="h-8 w-8 text-gray-400" />
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Complete your courses to earn certificates
          </p>
          <div className="text-2xl font-bold text-[var(--brand-red)]">
            {progress}% Complete
          </div>
        </div>
      </div>
    </section>
  );
};
