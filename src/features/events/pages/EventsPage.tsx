import { useState } from "react";
import { EventsHero } from "../components/EventsHero";
import { EventsStats } from "../components/EventsStats";
import { UpcomingEvents } from "../components/UpcomingEvents";
import { PastEvents } from "../components/PastEvents";
import { EventsCTA } from "../components/EventsCTA";

export const EventsPage = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="bg-white">
      <EventsHero />
      <EventsStats />

      {/* Tabs */}
      <section className="py-8 border-b border-gray-200 sticky top-0 bg-white z-10 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "upcoming"
                  ? "bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "past"
                  ? "bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Past Events
            </button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {activeTab === "upcoming" ? <UpcomingEvents /> : <PastEvents />}
        </div>
      </section>

      <EventsCTA />
    </div>
  );
};
