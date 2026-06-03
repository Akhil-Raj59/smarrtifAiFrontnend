import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useAppDispatch } from "@/store";
import { openComingSoonModal } from "@/store/slices/uiSlice";

export const ProgramsCTA = () => {
  const [takeAssessmentHovered, setTakeAssessmentHovered] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
            Not Sure Which Program to Choose?
          </span>
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Take our free assessment and get a personalized roadmap based on
          your current skills and career goals.
        </p>
        <button
          onClick={() => dispatch(openComingSoonModal("Take Assessment"))}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg overflow-hidden text-white hover:shadow-xl transition-all cursor-pointer"
          style={{
            backgroundImage: 'linear-gradient(to right, var(--brand-red) 0%, var(--brand-orange) 30%, var(--brand-orange) 70%, var(--brand-red) 100%)',
            backgroundSize: '300% 100%',
            backgroundPosition: takeAssessmentHovered ? 'right' : 'left',
            transition: 'background-position 1.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
          onMouseEnter={() => setTakeAssessmentHovered(true)}
          onMouseLeave={() => setTakeAssessmentHovered(false)}
        >
          Take Free Assessment
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};
