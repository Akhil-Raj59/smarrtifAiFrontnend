import { Link } from "react-router-dom";
import { CheckCircle2, Target, Award, Brain, TrendingUp, ArrowRight } from "lucide-react";
import { useAppDispatch } from "@/store";
import { openComingSoonModal } from "@/store/slices/uiSlice";

interface AssessmentResultsProps {
  formData: any;
}

export const AssessmentResults = ({ formData }: AssessmentResultsProps) => {
  const dispatch = useAppDispatch();
  const skillLevel = formData.programmingKnowledge === "advanced" || formData.aiKnowledge === "intermediate" 
    ? "Advanced" 
    : formData.programmingKnowledge === "intermediate" || formData.aiKnowledge === "beginner"
    ? "Intermediate"
    : "Beginner";

  const recommendedPrograms = 
    skillLevel === "Advanced" 
      ? ["AI Agents", "LLMs", "Generative AI"]
      : skillLevel === "Intermediate"
      ? ["Prompt Engineering", "AI/ML", "Data Analytics"]
      : ["Data Analytics", "Prompt Engineering", "AI/ML"];

  const recommendedPlan = 
    formData.timeCommitment === "25+" 
      ? "Career 360"
      : formData.timeCommitment === "15-20" || formData.timeCommitment === "20-25"
      ? "Job Ready"
      : "Quick Starter";

  return (
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] mb-6">
            <CheckCircle2 className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Assessment Complete!
          </h1>
          <p className="text-lg text-gray-600">
            Here's your personalized AI learning roadmap, {formData.fullName}
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[var(--brand-red-light)]">
                <Target className="h-6 w-6 text-[var(--brand-red)]" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Your Current Skill Level
                </h2>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white">
                  <Award className="h-5 w-5" />
                  <span className="font-semibold">{skillLevel}</span>
                </div>
                <p className="text-gray-600 mt-4">
                  Based on your technical background and current knowledge, we've
                  identified your starting level. This helps us tailor the right
                  programs for your journey.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[var(--brand-red-light)] to-[var(--brand-orange-light)] rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-white">
                <Brain className="h-6 w-6 text-[var(--brand-red)]" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Recommended Programs
                </h2>
                <div className="grid gap-4">
                  {recommendedPrograms.map((program, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-white rounded-lg p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] flex items-center justify-center text-white font-semibold">
                          {index + 1}
                        </div>
                        <span className="font-semibold text-gray-900">
                          {program}
                        </span>
                      </div>
                      <Link
                        to="/programs"
                        className="text-[var(--brand-red)] hover:text-[var(--brand-orange)] transition-colors"
                      >
                        View Details →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-[var(--brand-red)] rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[var(--brand-orange-light)]">
                <TrendingUp className="h-6 w-6 text-[var(--brand-orange)]" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Recommended Training Plan
                </h2>
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white font-semibold text-lg mb-4">
                  {recommendedPlan}
                </div>
                <p className="text-gray-600 mb-4">
                  Based on your time commitment of {formData.timeCommitment} hours/week
                  and career goals, this plan offers the best balance of depth and
                  flexibility.
                </p>
                <Link
                  to="/training-plans"
                  className="inline-flex items-center gap-2 text-[var(--brand-red)] hover:text-[var(--brand-orange)] transition-colors font-semibold"
                >
                  View Full Plan Details
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Next Steps</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] flex items-center justify-center font-semibold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    Book a Free Consultation
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Discuss your roadmap with our experts and get personalized
                    advice
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] flex items-center justify-center font-semibold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Choose Your Plan</h3>
                  <p className="text-gray-300 text-sm">
                    Select the training plan that fits your schedule and goals
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] flex items-center justify-center font-semibold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Start Learning</h3>
                  <p className="text-gray-300 text-sm">
                    Begin your transformation journey with expert guidance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/book-consultation"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white hover:shadow-xl transition-all cursor-pointer font-semibold"
          >
            Book Free Consultation
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            to="/training-plans"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-gray-300 text-gray-900 hover:border-[var(--brand-red)] hover:text-[var(--brand-red)] transition-all"
          >
            View All Plans
          </Link>
        </div>

        <div className="mt-12 bg-gradient-to-br from-[var(--brand-red-light)] to-[var(--brand-orange-light)] border-2 border-[var(--brand-orange)] rounded-xl p-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-4">
              <Award className="h-8 w-8 text-[var(--brand-red)]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Get Your Complete Roadmap
            </h3>
            <p className="text-gray-700 mb-6">
              Access your detailed, personalized AI learning roadmap with step-by-step guidance, 
              resource recommendations, and milestone tracking.
            </p>
            
            <div className="bg-white rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">What's Included:</h4>
              <div className="grid md:grid-cols-2 gap-3 text-left">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Detailed week-by-week learning plan</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Curated resource recommendations</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Project milestones & checkpoints</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Skill progression tracker</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Industry certification paths</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Career transition timeline</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Downloadable PDF roadmap</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Access to student dashboard</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-3xl font-bold text-gray-900">₹99</span>
              <span className="text-gray-600">One-time payment</span>
            </div>

            <button className="w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white hover:shadow-xl transition-all font-semibold text-lg">
              Pay ₹99 & Download Roadmap
            </button>

            <p className="text-xs text-gray-600 mt-4">
              Secure payment • Instant access • 100% Money-back guarantee
            </p>
          </div>
        </div>

        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800 text-center">
            ℹ️ Your personalized roadmap has been generated and is ready. Complete the payment above to download and access your dashboard.
          </p>
        </div>
      </div>
    </div>
  );
};
