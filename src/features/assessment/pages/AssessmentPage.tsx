import { useState } from "react";
import { AssessmentForm } from "../components/AssessmentForm";
import { AssessmentResults } from "../components/AssessmentResults";

export const AssessmentPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    education: "",
    currentRole: "",
    careerGoal: "",
    techBackground: "",
    programmingKnowledge: "",
    aiKnowledge: "",
    learningStyle: "",
    timeCommitment: "",
    motivation: "",
  });

  const steps = [
    {
      title: "Personal Information",
      fields: ["fullName", "email", "phone"],
    },
    {
      title: "Background & Experience",
      fields: ["experience", "education", "currentRole"],
    },
    {
      title: "Career Goals",
      fields: ["careerGoal", "motivation"],
    },
    {
      title: "Technical Assessment",
      fields: ["techBackground", "programmingKnowledge", "aiKnowledge"],
    },
    {
      title: "Learning Preferences",
      fields: ["learningStyle", "timeCommitment"],
    },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepComplete = () => {
    const currentFields = steps[currentStep].fields;
    return currentFields.every((field) => formData[field as keyof typeof formData]);
  };

  if (showResults) {
    return <AssessmentResults formData={formData} />;
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            AI Career Assessment
          </h1>
          <p className="text-lg text-white/90">
            Answer a few questions to get your personalized learning roadmap
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-gray-700">
              Step {currentStep + 1} of {steps.length}
            </span>
            <span className="text-sm text-gray-600">
              {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <AssessmentForm
        currentStep={currentStep}
        steps={steps}
        formData={formData}
        handleInputChange={handleInputChange}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        isStepComplete={isStepComplete}
      />
    </div>
  );
};
