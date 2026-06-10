import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useAppDispatch } from "@/store";
import { openComingSoonModal } from "@/store/slices/uiSlice";
import { Link } from "react-router-dom";

export const FinalCTA = () => {
  const dispatch = useAppDispatch();
  return (
    <section className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white py-16 sm:py-24 relative overflow-hidden">
      {/* Subtle background overlay */}
      <div className="absolute inset-0 bg-white/[0.02] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Ready to Start Your AI Career Journey?
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
          Take the first step today with a free assessment and discover your
          personalized learning roadmap
        </p>

        {/* Actions / Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <button
            onClick={() => dispatch(openComingSoonModal("Take Assessment"))}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[var(--brand-red)] hover:text-[var(--brand-orange)] font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            Start Free Assessment
            <ArrowRight className="h-5 w-5" />
          </button>
          
          <Link
            to="/book-consultation"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-white text-white hover:bg-white hover:text-[var(--brand-orange)] font-bold hover:scale-105 active:scale-95 transition-all duration-300 min-w-[200px] cursor-pointer"
          >
            Talk to an Expert
          </Link>
        </div>

        {/* Bullet Points */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 text-sm sm:text-base text-white/95">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-white" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-white" />
            <span>Free consultation</span>
          </div>
        </div>
      </div>
    </section>
  );
};
