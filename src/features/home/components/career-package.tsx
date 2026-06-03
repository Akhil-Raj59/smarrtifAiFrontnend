import { useAppDispatch } from "@/store";
import { openComingSoonModal } from "@/store/slices/uiSlice";
import { Sparkles } from "lucide-react";

export const CareerPackage = () => {
  const dispatch = useAppDispatch();
  return (
    <section className="pb-8 sm:pb-12 bg-[var(--brand-gray-light)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] p-8 sm:p-12 text-center text-white shadow-xl">
          {/* Subtle background overlay */}
          <div className="absolute inset-0 bg-white/[0.02] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Best Value Pill */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              Best Value
            </div>

            {/* Title */}
            <h3 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight">
              Complete Career Package
            </h3>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-white/90 mb-8 max-w-lg">
              Get both services together and save ₹500!
            </p>

            {/* Price Comparison */}
            <div className="flex items-center justify-center gap-6 sm:gap-10 mb-8">
              <div className="text-center">
                <p className="text-xs sm:text-sm text-white/80 mb-1 uppercase tracking-wider font-medium">
                  Regular Price
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-white/70 line-through decoration-white/50">
                  ₹4,998
                </p>
              </div>

              <div className="flex items-center justify-center">
                <span className="text-3xl sm:text-4xl font-light text-white/85">→</span>
              </div>

              <div className="text-center">
                <p className="text-xs sm:text-sm text-white/80 mb-1 uppercase tracking-wider font-medium">
                  Combo Price
                </p>
                <div className="flex flex-col items-center">
                  <p className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                     ₹4,499
                  </p>
                  <span className="text-[10px] text-white/80 mt-0.5 font-medium">
                    + GST
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => dispatch(openComingSoonModal("Career Services Combo Package Order"))}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[var(--brand-red)] hover:text-[var(--brand-orange)] font-bold rounded-xl shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 mb-5 cursor-pointer"
            >
              Get Combo Package
            </button>

            {/* Bottom highlight text */}
            <p className="text-xs sm:text-sm text-white/90 font-medium flex items-center gap-1.5">
              ✨ Save ₹500 + Get Priority Delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
