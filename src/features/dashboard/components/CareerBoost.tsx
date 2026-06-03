import { Briefcase, FileText, Globe, Sparkles } from "lucide-react";
import { useAppDispatch } from "@/store";
import { openComingSoonModal } from "@/store/slices/uiSlice";

export const CareerBoost = () => {
  const dispatch = useAppDispatch();

  return (
    <section className="bg-gradient-to-br from-[var(--brand-orange-light)] to-[var(--brand-red-light)] rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
        <Briefcase className="h-5 w-5 text-[var(--brand-orange)]" />
        Career Boost
      </h2>
      <p className="text-sm text-gray-700 mb-4">
        Stand out to employers with professional services
      </p>
      
      <div className="space-y-3">
        {/* CV Service */}
        <div className="bg-white rounded-lg p-4">
          <div className="flex items-start gap-3 mb-2">
            <FileText className="h-5 w-5 text-[var(--brand-red)] flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">
                Professional CV
              </h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-lg font-bold text-gray-900">₹1,499</span>
                <span className="text-xs text-gray-600">+ GST</span>
              </div>
              <p className="text-xs text-gray-650 mb-3">
                ATS-optimized CV highlighting your AI skills
              </p>
              <button
                onClick={() => dispatch(openComingSoonModal("Professional CV Writing Service"))}
                className="w-full px-3 py-2 rounded-lg bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white text-sm hover:shadow-lg transition-all cursor-pointer"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>

        {/* Portfolio Service */}
        <div className="bg-white rounded-lg p-4 border-2 border-[var(--brand-orange)]">
          <div className="flex items-start gap-3 mb-2">
            <Globe className="h-5 w-5 text-[var(--brand-orange)] flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-gray-900 text-sm">
                  Digital Portfolio
                </h3>
                <span className="text-xs font-semibold text-[var(--brand-orange)] bg-[var(--brand-orange-light)] px-2 py-0.5 rounded-full">
                  Popular
                </span>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-lg font-bold text-gray-900">₹3,499</span>
                <span className="text-xs text-gray-600">+ GST</span>
              </div>
              <p className="text-xs text-gray-650 mb-3">
                Personal website with project showcases
              </p>
              <button
                onClick={() => dispatch(openComingSoonModal("Personal Digital Portfolio Builder"))}
                className="w-full px-3 py-2 rounded-lg bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-red)] text-white text-sm hover:shadow-lg transition-all cursor-pointer"
              >
                Build Portfolio
              </button>
            </div>
          </div>
        </div>

        {/* Combo Offer */}
        <div className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] rounded-lg p-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-4 w-4" />
            <span className="font-semibold text-sm">Combo Offer</span>
          </div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-xs line-through text-white/70">₹4,998</span>
            <span className="text-xl font-bold">₹4,499</span>
            <span className="text-xs">+ GST</span>
          </div>
          <p className="text-xs text-white/90 mb-3">
            Save ₹500 - Get both services!
          </p>
          <button
            onClick={() => dispatch(openComingSoonModal("Placement CV & Portfolio Combo Offer"))}
            className="w-full px-3 py-2 rounded-lg bg-white text-[var(--brand-red)] text-sm font-semibold hover:shadow-lg transition-all cursor-pointer"
          >
            Get Combo
          </button>
        </div>
      </div>
    </section>
  );
};

