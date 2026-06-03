import { useState } from "react";
import { CorporateHero } from "../components/CorporateHero";
import { CorporateClients } from "../components/CorporateClients";
import { CorporateBenefits } from "../components/CorporateBenefits";
import { CorporateUseCases } from "../components/CorporateUseCases";
import { TrainingFormats } from "../components/TrainingFormats";
import { CorporateProductDevelopment } from "../components/CorporateProductDevelopment";
import { CorporateConsultation } from "../components/CorporateConsultation";
import { CorporateStats } from "../components/CorporateStats";
import { CheckCircle2 } from "lucide-react";

export const CorporateTrainingPage = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    companySize: "",
    industry: "",
    trainingNeeds: "",
    timeline: "",
    additionalInfo: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (formSubmitted) {
    return (
      <div className="bg-white min-h-screen py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] mb-6">
            <CheckCircle2 className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Thank You for Your Interest!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            We've received your consultation request. Our enterprise team will
            reach out to you within 24 hours to discuss your training needs.
          </p>
          <div className="bg-[var(--brand-gray-light)] rounded-xl p-8 text-left">
            <h3 className="font-semibold text-gray-900 mb-4">
              What happens next?
            </h3>
            <ul className="space-y-3">
              {[
                "Initial consultation call to understand your needs",
                "Customized training proposal and timeline",
                "Pilot session and program kickoff"
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <a
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white hover:shadow-xl transition-all"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <CorporateHero />
      <CorporateClients />
      <CorporateBenefits />
      <CorporateUseCases />
      <TrainingFormats />
      <CorporateProductDevelopment />
      <CorporateConsultation 
        formData={formData} 
        handleInputChange={handleInputChange} 
        handleSubmit={handleSubmit} 
      />
      <CorporateStats />
    </div>
  );
};
