import { Calendar, Clock, Users } from "lucide-react";

const upcomingWebinars = [
  {
    title: "Getting Started with Large Language Models",
    description: "Learn the fundamentals of LLMs, GPT models, and how to build your first AI application using OpenAI API.",
    date: "March 15, 2026",
    time: "6:00 PM - 7:30 PM IST",
    speaker: "Dr. Rajesh Kumar",
    speakerRole: "Founder & CEO, SMARRTIF AI",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
    category: "LLM",
    seats: "145 seats left",
    level: "Beginner",
    registered: 355,
  },
  {
    title: "MLOps Best Practices for Production",
    description: "Discover how to deploy and monitor ML models at scale. Real-world case studies from Netflix and Uber.",
    date: "March 18, 2026",
    time: "7:00 PM - 8:30 PM IST",
    speaker: "Arjun Sharma",
    speakerRole: "Head of Technology",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop",
    category: "MLOps",
    seats: "89 seats left",
    level: "Advanced",
    registered: 411,
  },
  {
    title: "Career Transition to AI: A Complete Roadmap",
    description: "Step-by-step guide for non-technical professionals to break into AI roles. Q&A with career coaches.",
    date: "March 22, 2026",
    time: "5:00 PM - 6:30 PM IST",
    speaker: "Priya Mehta",
    speakerRole: "Chief Learning Officer",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=400&fit=crop",
    category: "Career",
    seats: "220 seats left",
    level: "Beginner",
    registered: 280,
  },
  {
    title: "Building RAG Systems with LangChain",
    description: "Hands-on workshop on building Retrieval Augmented Generation systems for enterprise applications.",
    date: "March 25, 2026",
    time: "6:00 PM - 8:00 PM IST",
    speaker: "Anjali Gupta",
    speakerRole: "LLM Specialist",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=400&fit=crop",
    category: "LLM",
    seats: "67 seats left",
    level: "Intermediate",
    registered: 433,
  },
];

export const UpcomingWebinars = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Upcoming Webinars
          </h2>
          <p className="text-lg text-gray-600">
            Register now - seats are filling fast!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {upcomingWebinars.map((webinar, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[var(--brand-red)] hover:shadow-xl transition-all group"
            >
              <div className="aspect-video overflow-hidden bg-gray-100">
                <img
                  src={webinar.image}
                  alt={webinar.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-[var(--brand-red-light)] text-[var(--brand-red)] text-xs font-semibold">
                    {webinar.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold">
                    {webinar.level}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {webinar.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {webinar.description}
                </p>

                <div className="mb-4 pb-4 border-b border-gray-200">
                  <div className="text-sm font-semibold text-gray-900">
                    {webinar.speaker}
                  </div>
                  <div className="text-xs text-gray-600">
                    {webinar.speakerRole}
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Calendar className="h-4 w-4 text-[var(--brand-orange)]" />
                    <span>{webinar.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Clock className="h-4 w-4 text-[var(--brand-orange)]" />
                    <span>{webinar.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Users className="h-4 w-4 text-[var(--brand-orange)]" />
                    <span>{webinar.registered} registered • {webinar.seats}</span>
                  </div>
                </div>

                <button className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white hover:shadow-lg transition-all font-semibold">
                  Register for Free
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
