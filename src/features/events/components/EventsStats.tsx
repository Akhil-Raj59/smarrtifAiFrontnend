export const EventsStats = () => {
  return (
    <section className="py-12 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-1">45+</div>
            <div className="text-sm text-gray-600">Events Conducted</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-1">8,500+</div>
            <div className="text-sm text-gray-600">Total Participants</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-1">15</div>
            <div className="text-sm text-gray-600">Cities Covered</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-1">4.7/5</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};
