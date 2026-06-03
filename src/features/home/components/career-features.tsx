import { Layout, Code2, Pencil } from "lucide-react";

export const CareerFeatures = () => {
  const features = [
    {
      title: "Modern Design",
      description: "Clean, professional layouts that impress recruiters",
      icon: Layout,
    },
    {
      title: "Project Showcase",
      description: "Highlight your AI projects with live demos",
      icon: Code2,
    },
    {
      title: "Easy Updates",
      description: "Simple CMS to update content anytime",
      icon: Pencil,
    },
  ];

  return (
    <section className="pt-8 sm:pt-12 pb-16 sm:pb-24 bg-[var(--brand-gray-light)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
            See What You'll Get
          </span>
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="p-4 rounded-xl bg-gradient-to-br from-[var(--brand-red-light)] to-[var(--brand-orange-light)] mb-6 flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-[var(--brand-red)]" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed max-w-[240px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
