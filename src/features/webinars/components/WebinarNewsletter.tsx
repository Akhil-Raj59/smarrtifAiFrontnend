export const WebinarNewsletter = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Never Miss a Webinar
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Subscribe to get notified about upcoming sessions and exclusive content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-4 rounded-lg bg-white text-[var(--brand-red)] hover:shadow-2xl transition-all font-semibold whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
