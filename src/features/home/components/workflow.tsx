import { useState } from "react";
import { Users, Target, TrendingUp, BookOpen, Rocket, Phone } from "lucide-react";
import { useAppDispatch } from "@/store";
import { openComingSoonModal } from "@/store/slices/uiSlice";
import { Link } from "react-router-dom";

export const Workflow = () => {
  const dispatch = useAppDispatch();
  const [assessmentHovered, setAssessmentHovered] = useState(false);
  const [consultationHovered, setConsultationHovered] = useState(false);

  return (
    <section className="bg-[var(--brand-gray-light)] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
              Your Journey to AI Success
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow our proven 5-step process to transition into your dream AI role
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {[
            {
              step: "01",
              title: "Register",
              description: "Create your account and set your career goals",
              icon: Users,
            },
            {
              step: "02",
              title: "Take Assessment",
              description: "Evaluate your current skills and knowledge",
              icon: Target,
            },
            {
              step: "03",
              title: "Roadmap Generated",
              description: "Get your personalized learning path",
              icon: TrendingUp,
            },
            {
              step: "04",
              title: "Book Consultation",
              description: "Discuss your roadmap with our experts",
              icon: BookOpen,
            },
            {
              step: "05",
              title: "Start Training",
              description: "Begin your transformation journey",
              icon: Rocket,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl p-6 hover:shadow-[0_8px_30px_rgb(255,87,34,0.15)] transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-bold bg-gradient-to-br from-[var(--brand-red)]/30 to-[var(--brand-orange)]/30 bg-clip-text text-transparent">
                    {item.step}
                  </span>
                  <div className="p-3 rounded-lg bg-gradient-to-r from-[var(--brand-red-light)] to-[var(--brand-orange-light)]">
                    <item.icon className="h-6 w-6 text-[var(--brand-red)]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              {index < 4 && (
                <div className="hidden md:block absolute top-1/2 left-full w-8 h-0.5 bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
        
        {/* CTA Section Below Journey Cards */}
        <div className="mt-16 text-center space-y-6">
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Ready to take the next step? Discover your personalized AI career roadmap today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => dispatch(openComingSoonModal("Take Assessment"))}
              className="relative inline-flex items-center gap-2 px-6 py-3 rounded-lg overflow-hidden text-white hover:shadow-xl font-semibold transition-all cursor-pointer"
              style={{
                backgroundImage: 'linear-gradient(to right, var(--brand-red) 0%, var(--brand-orange) 30%, var(--brand-orange) 70%, var(--brand-red) 100%)',
                backgroundSize: '300% 100%',
                backgroundPosition: assessmentHovered ? 'right' : 'left',
                transition: 'background-position 1.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
              onMouseEnter={() => setAssessmentHovered(true)}
              onMouseLeave={() => setAssessmentHovered(false)}
            >
              <Target className="h-4 w-4" />
              Take Assessment
            </button>
            <Link
              to="/book-consultation"
              className="relative inline-flex items-center gap-2 px-6 py-3 rounded-lg overflow-hidden text-white hover:shadow-xl font-semibold transition-all cursor-pointer"
              style={{
                backgroundImage: 'linear-gradient(to right, var(--brand-red) 0%, var(--brand-orange) 30%, var(--brand-orange) 70%, var(--brand-red) 100%)',
                backgroundSize: '300% 100%',
                backgroundPosition: consultationHovered ? 'right' : 'left',
                transition: 'background-position 1.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
              onMouseEnter={() => setConsultationHovered(true)}
              onMouseLeave={() => setConsultationHovered(false)}
            >
              <Phone className="h-4 w-4" />
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
