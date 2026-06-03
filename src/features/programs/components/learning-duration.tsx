import { Link } from "react-router-dom";
import { useState } from "react";
import { Clock, CheckCircle2, ArrowRight } from "lucide-react";

const durationPlans = [
  {
    duration: "3 Months",
    path: "/programs/3-months",
    label: "3M",
    commitment: "15-20 hours/week",
    description: "Fast-track your AI career with intensive learning",
    features: [
      "One specialized program",
      "6 bi-weekly mentor sessions",
      "4-6 hands-on projects",
      "Job placement support",
      "Certificate of completion",
    ],
    popular: false,
  },
  {
    duration: "6 Months",
    path: "/programs/6-months",
    label: "6M",
    commitment: "12-15 hours/week",
    description: "Comprehensive learning with balanced pace",
    features: [
      "Two advanced programs",
      "12 weekly mentor sessions",
      "8-10 industry projects",
      "Portfolio development",
      "Interview preparation",
      "Dedicated job placement",
      "Certificate of completion",
    ],
    popular: true,
  },
  {
    duration: "9 Months",
    path: "/programs/9-months",
    label: "9M",
    commitment: "10-12 hours/week",
    description: "Deep mastery with flexible learning schedule",
    features: [
      "Three comprehensive programs",
      "18 weekly 1-on-1 sessions",
      "12+ projects + capstone",
      "Complete portfolio building",
      "Resume & personal branding",
      "Premium job placement",
      "Interview coaching",
      "Lifetime access & support",
    ],
    popular: false,
  },
];

export const LearningDuration = () => {
  const [explore3MHovered, setExplore3MHovered] = useState(false);
  const [explore6MHovered, setExplore6MHovered] = useState(false);
  const [explore9MHovered, setExplore9MHovered] = useState(false);

  return (
    <section className="py-16 sm:py-24 bg-[var(--brand-gray-light)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
              Choose Your Learning Duration
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select the timeline that fits your schedule and career goals. All plans include expert mentorship and job placement support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {durationPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-500 flex flex-col ${
                plan.popular
                  ? "bg-gradient-to-br from-[var(--brand-red)] to-[var(--brand-orange)] text-white shadow-2xl scale-105 hover:scale-[1.02] hover:shadow-2xl"
                  : "bg-white border-2 border-gray-200 hover:border-[var(--brand-orange)]/60 hover:shadow-lg hover:scale-[1.01]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white text-[var(--brand-red)] text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="space-y-6 flex-grow flex flex-col">
                <div>
                  <h3
                    className={`text-3xl font-bold mb-2 ${
                      plan.popular ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.duration}
                  </h3>
                  <p
                    className={`text-sm ${
                      plan.popular ? "text-white/90" : "text-gray-600"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                <div
                  className={`flex items-center gap-2 text-sm ${
                    plan.popular ? "text-white/90" : "text-gray-600"
                  }`}
                >
                  <Clock className="h-4 w-4" />
                  <span>{plan.commitment}</span>
                </div>

                <ul className="space-y-3 flex-grow">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <CheckCircle2
                        className={`h-5 w-5 flex-shrink-0 ${
                          plan.popular ? "text-white" : "text-[var(--brand-red)]"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.popular ? "text-white" : "text-gray-700"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.path}
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? "bg-white text-[var(--brand-red)] hover:shadow-lg hover:scale-105"
                      : "overflow-hidden text-white hover:shadow-xl"
                  }`}
                  style={!plan.popular ? {
                    backgroundImage: 'linear-gradient(to right, var(--brand-red) 0%, var(--brand-orange) 30%, var(--brand-orange) 70%, var(--brand-red) 100%)',
                    backgroundSize: '300% 100%',
                    backgroundPosition: index === 0 ? (explore3MHovered ? 'right' : 'left') : index === 2 ? (explore9MHovered ? 'right' : 'left') : 'left',
                    transition: 'background-position 1.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  } : undefined}
                  onMouseEnter={() => {
                    if (index === 0) setExplore3MHovered(true);
                    if (index === 2) setExplore9MHovered(true);
                  }}
                  onMouseLeave={() => {
                    if (index === 0) setExplore3MHovered(false);
                    if (index === 2) setExplore9MHovered(false);
                  }}
                >
                  Explore {plan.label} Programs
                  <ArrowRight className="inline h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
