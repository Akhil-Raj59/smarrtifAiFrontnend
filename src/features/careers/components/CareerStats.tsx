export const CareerStats = () => {
  const stats = [
    { label: "Team Members", value: "50+" },
    { label: "Students Trained", value: "2000+" },
    { label: "Average Rating", value: "4.8/5" },
    { label: "Success Rate", value: "85%" },
  ];

  return (
    <section className="py-12 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl font-bold text-gray-900 mb-1">
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
