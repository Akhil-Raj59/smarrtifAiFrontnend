import { Building2, Users, TrendingUp, CheckCircle2 } from "lucide-react";

const formats = [
  {
    title: "On-Site Training",
    icon: Building2,
    description:
      "Instructors at your location for immersive, hands-on training",
    features: [
      "Customized to your infrastructure",
      "Direct team collaboration",
      "Full-day intensive sessions",
    ],
  },
  {
    title: "Remote Training",
    icon: Users,
    description:
      "Live virtual sessions with interactive workshops and projects",
    features: [
      "Flexible scheduling",
      "Recorded sessions",
      "Global team access",
    ],
  },
  {
    title: "Hybrid Training",
    icon: TrendingUp,
    description:
      "Combination of on-site and remote for maximum flexibility",
    features: [
      "Best of both formats",
      "Phased implementation",
      "Ongoing support",
    ],
  },
];

export const TrainingFormats = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
              Flexible Training Formats
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the delivery method that works best for your team
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {formats.map((format, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[var(--brand-red)] transition-colors"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] mb-4">
                <format.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {format.title}
              </h3>
              <p className="text-gray-600 mb-4">{format.description}</p>
              <ul className="space-y-2">
                {format.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[var(--brand-red)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
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
