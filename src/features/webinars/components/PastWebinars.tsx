import { useState } from "react";
import { Filter, Clock, Users, ArrowRight } from "lucide-react";

const pastWebinars = [
  {
    title: "AI Automation for Business Processes",
    date: "February 28, 2026",
    speaker: "Vikram Patel",
    views: "2,450",
    duration: "90 min",
    recording: "#",
    category: "Automation",
  },
  {
    title: "Deep Learning Fundamentals",
    date: "February 20, 2026",
    speaker: "Sneha Reddy",
    views: "3,120",
    duration: "75 min",
    recording: "#",
    category: "ML",
  },
  {
    title: "Prompt Engineering Masterclass",
    date: "February 15, 2026",
    speaker: "Dr. Rajesh Kumar",
    views: "4,890",
    duration: "120 min",
    recording: "#",
    category: "LLM",
  },
  {
    title: "Computer Vision Applications",
    date: "February 10, 2026",
    speaker: "Kavya Iyer",
    views: "1,890",
    duration: "85 min",
    recording: "#",
    category: "CV",
  },
  {
    title: "Cloud AI Services on AWS & Azure",
    date: "February 5, 2026",
    speaker: "Vikram Patel",
    views: "2,670",
    duration: "95 min",
    recording: "#",
    category: "Cloud",
  },
  {
    title: "Data Science for AI Engineers",
    date: "January 28, 2026",
    speaker: "Rahul Desai",
    views: "3,340",
    duration: "100 min",
    recording: "#",
    category: "ML",
  },
];

const categories = ["all", "LLM", "MLOps", "Career", "ML", "Cloud", "CV", "Automation"];

export const PastWebinars = () => {
  const [filterType, setFilterType] = useState("all");

  const filteredPastWebinars = filterType === "all" 
    ? pastWebinars 
    : pastWebinars.filter(w => w.category === filterType);

  return (
    <section className="py-16 sm:py-24 bg-[var(--brand-gray-light)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Past Webinars
            </h2>
            <p className="text-lg text-gray-600">
              Watch recordings of our previous sessions
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-600" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:border-[var(--brand-red)] focus:ring-2 focus:ring-[var(--brand-red-light)] outline-none"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "all" ? "All Categories" : cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPastWebinars.map((webinar, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[var(--brand-orange-light)] text-[var(--brand-orange)] text-xs font-semibold">
                  {webinar.category}
                </span>
                <span className="text-xs text-gray-600">{webinar.date}</span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {webinar.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">By {webinar.speaker}</p>

              <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{webinar.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{webinar.views} views</span>
                </div>
              </div>

              <a
                href={webinar.recording}
                className="inline-flex items-center gap-2 text-[var(--brand-red)] group-hover:text-[var(--brand-orange)] font-semibold text-sm"
              >
                Watch Recording
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
