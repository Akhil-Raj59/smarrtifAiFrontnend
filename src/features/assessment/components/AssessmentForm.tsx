import { ArrowLeft, ArrowRight } from "lucide-react";

interface AssessmentFormProps {
  currentStep: number;
  steps: any[];
  formData: any;
  handleInputChange: (field: string, value: string) => void;
  handleNext: () => void;
  handlePrevious: () => void;
  isStepComplete: () => boolean;
}

export const AssessmentForm = ({
  currentStep,
  steps,
  formData,
  handleInputChange,
  handleNext,
  handlePrevious,
  isStepComplete,
}: AssessmentFormProps) => {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-200 rounded-xl p-8 sm:p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {steps[currentStep].title}
          </h2>

          <div className="space-y-6">
            {currentStep === 0 && (
              <>
                <div>
                  <label className="block text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] focus:border-transparent"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </>
            )}

            {currentStep === 1 && (
              <>
                <div>
                  <label className="block text-gray-700 mb-2">Years of Work Experience *</label>
                  <select
                    value={formData.experience}
                    onChange={(e) => handleInputChange("experience", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] focus:border-transparent"
                  >
                    <option value="">Select experience</option>
                    <option value="0-2">0-2 years</option>
                    <option value="2-5">2-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Highest Education *</label>
                  <select
                    value={formData.education}
                    onChange={(e) => handleInputChange("education", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] focus:border-transparent"
                  >
                    <option value="">Select education</option>
                    <option value="high-school">High School</option>
                    <option value="bachelor">Bachelor's Degree</option>
                    <option value="master">Master's Degree</option>
                    <option value="phd">PhD</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Current Role/Industry *</label>
                  <input
                    type="text"
                    value={formData.currentRole}
                    onChange={(e) => handleInputChange("currentRole", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] focus:border-transparent"
                    placeholder="e.g., Marketing Manager, Sales Executive"
                  />
                </div>
              </>
            )}

            {currentStep === 2 && (
              <>
                <div>
                  <label className="block text-gray-700 mb-2">Desired AI Career Role *</label>
                  <select
                    value={formData.careerGoal}
                    onChange={(e) => handleInputChange("careerGoal", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] focus:border-transparent"
                  >
                    <option value="">Select your goal</option>
                    <option value="ml-engineer">Machine Learning Engineer</option>
                    <option value="data-scientist">Data Scientist</option>
                    <option value="ai-engineer">AI Engineer</option>
                    <option value="prompt-engineer">Prompt Engineer</option>
                    <option value="data-analyst">Data Analyst</option>
                    <option value="ai-product">AI Product Manager</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">What motivates you to learn AI? *</label>
                  <textarea
                    value={formData.motivation}
                    onChange={(e) => handleInputChange("motivation", e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] focus:border-transparent"
                    placeholder="Share your motivation and career aspirations..."
                  />
                </div>
              </>
            )}

            {currentStep === 3 && (
              <>
                <div>
                  <label className="block text-gray-700 mb-2">Technical Background *</label>
                  <select
                    value={formData.techBackground}
                    onChange={(e) => handleInputChange("techBackground", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] focus:border-transparent"
                  >
                    <option value="">Select background</option>
                    <option value="non-technical">Non-technical (No coding experience)</option>
                    <option value="basic">Basic (Some coding exposure)</option>
                    <option value="intermediate">Intermediate (Can write simple programs)</option>
                    <option value="advanced">Advanced (Professional developer)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Programming Knowledge *</label>
                  <select
                    value={formData.programmingKnowledge}
                    onChange={(e) => handleInputChange("programmingKnowledge", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] focus:border-transparent"
                  >
                    <option value="">Select level</option>
                    <option value="none">No programming knowledge</option>
                    <option value="beginner">Beginner (Know basic syntax)</option>
                    <option value="intermediate">Intermediate (Can build applications)</option>
                    <option value="advanced">Advanced (Professional experience)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">AI/ML Knowledge *</label>
                  <select
                    value={formData.aiKnowledge}
                    onChange={(e) => handleInputChange("aiKnowledge", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] focus:border-transparent"
                  >
                    <option value="">Select level</option>
                    <option value="none">No AI/ML knowledge</option>
                    <option value="beginner">Beginner (Understand basic concepts)</option>
                    <option value="intermediate">Intermediate (Have done projects)</option>
                    <option value="advanced">Advanced (Professional experience)</option>
                  </select>
                </div>
              </>
            )}

            {currentStep === 4 && (
              <>
                <div>
                  <label className="block text-gray-700 mb-2">Preferred Learning Style *</label>
                  <select
                    value={formData.learningStyle}
                    onChange={(e) => handleInputChange("learningStyle", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] focus:border-transparent"
                  >
                    <option value="">Select style</option>
                    <option value="self-paced">Self-paced learning</option>
                    <option value="structured">Structured with deadlines</option>
                    <option value="hands-on">Hands-on projects</option>
                    <option value="mentorship">Heavy mentorship</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Time Commitment (hours/week) *</label>
                  <select
                    value={formData.timeCommitment}
                    onChange={(e) => handleInputChange("timeCommitment", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] focus:border-transparent"
                  >
                    <option value="">Select commitment</option>
                    <option value="5-10">5-10 hours/week</option>
                    <option value="10-15">10-15 hours/week</option>
                    <option value="15-20">15-20 hours/week</option>
                    <option value="20-25">20-25 hours/week</option>
                    <option value="25+">25+ hours/week</option>
                  </select>
                </div>
              </>
            )}
          </div>

          <div className="mt-8 flex justify-between gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-all ${
                currentStep === 0
                  ? "border-gray-200 text-gray-400 cursor-not-allowed"
                  : "border-gray-300 text-gray-900 hover:border-[var(--brand-red)] hover:text-[var(--brand-red)]"
              }`}
            >
              <ArrowLeft className="h-4 w-4" />
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={!isStepComplete()}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                isStepComplete()
                  ? "bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white hover:shadow-lg"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              {currentStep === steps.length - 1 ? "View Results" : "Next"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>🔒 Your information is secure and will never be shared</p>
          <p className="mt-2">⏱️ Takes only 5 minutes to complete</p>
        </div>
      </div>
    </section>
  );
};
