import { Target, Users, Award, TrendingUp } from "lucide-react";

export const CorporateBenefits = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
              Why Choose SMARRTIF AI for Corporate Training
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enterprise-grade training programs with proven ROI
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Target,
              title: "Customized Curriculum",
              description:
                "Training programs tailored to your industry and business objectives",
            },
            {
              icon: Users,
              title: "Scalable Delivery",
              description:
                "Train teams from 10 to 1000+ employees with flexible formats",
            },
            {
              icon: Award,
              title: "Expert Instructors",
              description:
                "Industry professionals with real-world AI implementation experience",
            },
            {
              icon: TrendingUp,
              title: "Measurable Results",
              description:
                "Track progress with assessments and performance metrics",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 transition-all duration-300 animate-glow-card"
              style={{ animationDelay: `${index * 2}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-[var(--brand-red-light)] to-[var(--brand-orange-light)] mb-4">
                <benefit.icon className="h-6 w-6 text-[var(--brand-red)]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
