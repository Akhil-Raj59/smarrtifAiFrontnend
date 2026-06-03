import { IndianRupee, Home, Laptop, Heart, Coffee, Users, TrendingUp, Award } from "lucide-react";

export const CareerBenefits = () => {
  const benefits = [
    {
      icon: IndianRupee,
      title: "Competitive Salary",
      description: "Industry-leading compensation with performance bonuses",
    },
    {
      icon: Home,
      title: "Remote Flexibility",
      description: "Work from anywhere with flexible hours",
    },
    {
      icon: Laptop,
      title: "Learning Budget",
      description: "₹50,000/year for courses, books, and conferences",
    },
    {
      icon: Heart,
      title: "Health Insurance",
      description: "Comprehensive coverage for you and your family",
    },
    {
      icon: Coffee,
      title: "Unlimited PTO",
      description: "Take time off when you need it, no questions asked",
    },
    {
      icon: Users,
      title: "Inclusive Culture",
      description: "Diverse team that celebrates different perspectives",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear paths for advancement and skill development",
    },
    {
      icon: Award,
      title: "Stock Options",
      description: "Be an owner with equity participation",
    },
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
              Why Work With Us?
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We invest in our team's growth, well-being, and success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[var(--brand-red)] hover:shadow-lg transition-all"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[var(--brand-red-light)] mb-4">
                <benefit.icon className="h-6 w-6 text-[var(--brand-red)]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
