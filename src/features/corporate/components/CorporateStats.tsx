export const CorporateStats = () => {
  const stats = [
    {
      value: "95%",
      title: "Employee Engagement",
      description: "High satisfaction across all training programs",
    },
    {
      value: "80%",
      title: "Productivity Increase",
      description: "Average improvement post-training",
    },
    {
      value: "90%",
      title: "Skill Retention",
      description: "Knowledge retained after 6 months",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
              Trusted by Leading Organizations
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join the companies transforming their workforce with AI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-[var(--brand-red-light)]/20 to-[var(--brand-orange-light)]/20 border border-orange-100/50 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-center text-center"
            >
              <span className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent mb-4 tracking-tight">
                {stat.value}
              </span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {stat.title}
              </h3>
              <p className="text-sm text-gray-600 max-w-[240px]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
