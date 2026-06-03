export const WebinarStats = () => {
  return (
    <section className="py-8 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
            <div className="text-sm text-gray-600">Webinars Conducted</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-1">15K+</div>
            <div className="text-sm text-gray-600">Total Attendees</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-1">4.8/5</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-1">98%</div>
            <div className="text-sm text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};
