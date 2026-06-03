import { Link } from "react-router-dom";
import { FileText, Linkedin, Github } from "lucide-react";

export const FreeTools = () => {
  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
            Free AI Tools
          </h3>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto mt-2">
            Get instant insights with our AI-powered analysis tools
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 sm:p-10 border border-gray-800 text-white text-center shadow-2xl flex flex-col items-center justify-center min-h-[220px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--brand-orange)_0%,_transparent_60%)] opacity-10 pointer-events-none" />
          
          <div className="relative z-10 space-y-3 max-w-lg">
            <span className="px-3.5 py-1 text-[10px] font-extrabold bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] rounded-full uppercase tracking-wider shadow-sm">
              MEGA AI Suite
            </span>
            <h4 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              AI Analysis Dashboard
            </h4>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Unlock a unified dashboard powered by advanced LLMs to analyze your LinkedIn profiles, audit repository contributions, and optimize resumes in real-time.
            </p>
            <div className="pt-2 flex items-center justify-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-gray-300">
                <span className="w-2 h-2 rounded-full bg-[var(--brand-orange)] animate-pulse" />
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
