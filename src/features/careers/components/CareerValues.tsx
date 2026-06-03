import { Zap, Users, TrendingUp, Heart } from "lucide-react";

export const CareerValues = () => {
  const values = [
    {
      icon: Zap,
      title: "Impact First",
      description: "We measure success by the lives we transform, not just revenue",
    },
    {
      icon: Users,
      title: "Student-Centric",
      description: "Every decision starts with 'What's best for our students?'",
    },
    {
      icon: TrendingUp,
      title: "Continuous Learning",
      description: "We practice what we preach - always learning and growing",
    },
    {
      icon: Heart,
      title: "Empathy & Care",
      description: "We genuinely care about our team and our students",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[var(--brand-gray-light)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
              Our Values
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide how we work and make decisions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--brand-red-light)] to-[var(--brand-orange-light)] mb-4">
                <value.icon className="h-8 w-8 text-[var(--brand-red)]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
