import { CheckCircle2, DollarSign, Heart, ShoppingCart, Factory, Smartphone, Code2 } from "lucide-react";

const useCases = [
  {
    industry: "Finance & Banking",
    icon: DollarSign,
    applications: [
      "Fraud detection systems",
      "Risk assessment models",
      "Automated trading algorithms",
    ],
  },
  {
    industry: "Healthcare",
    icon: Heart,
    applications: [
      "Medical image analysis",
      "Patient data analytics",
      "Predictive diagnostics",
    ],
  },
  {
    industry: "Retail & E-commerce",
    icon: ShoppingCart,
    applications: [
      "Recommendation engines",
      "Inventory optimization",
      "Customer behavior analysis",
    ],
  },
  {
    industry: "Manufacturing",
    icon: Factory,
    applications: [
      "Predictive maintenance",
      "Quality control automation",
      "Supply chain optimization",
    ],
  },
  {
    industry: "Marketing & Media",
    icon: Smartphone,
    applications: [
      "Content generation",
      "Campaign optimization",
      "Sentiment analysis",
    ],
  },
  {
    industry: "Technology",
    icon: Code2,
    applications: [
      "Product development",
      "Code automation",
      "DevOps optimization",
    ],
  },
];

export const CorporateUseCases = () => {
  return (
    <section className="bg-[var(--brand-gray-light)] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
              Industry-Specific Training Programs
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            AI solutions designed for your industry's unique challenges
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-red-light)] to-[var(--brand-orange-light)] mb-4">
                <useCase.icon className="h-6 w-6 text-[var(--brand-red)]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {useCase.industry}
              </h3>
              <ul className="space-y-2">
                {useCase.applications.map((app, appIndex) => (
                  <li key={appIndex} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[var(--brand-red)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
