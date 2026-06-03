import { Users, Award, GraduationCap, Target } from "lucide-react";

export const TeamStats = () => {
  const stats = [
    { icon: Users, label: "Team Members", value: "50+" },
    { icon: Award, label: "Years Combined Experience", value: "200+" },
    { icon: GraduationCap, label: "Students Mentored", value: "2000+" },
    { icon: Target, label: "Success Rate", value: "85%" },
  ];

  return (
    <section className="py-12 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--brand-red-light)] mb-4">
                <stat.icon className="h-6 w-6 text-[var(--brand-red)]" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
