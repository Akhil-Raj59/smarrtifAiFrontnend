import { Calendar, MapPin, Users, Ticket, CheckCircle2 } from "lucide-react";

const upcomingEvents = [
  {
    title: "AI Summit 2026",
    type: "Conference",
    date: "April 15-16, 2026",
    time: "9:00 AM - 6:00 PM",
    location: "Bangalore International Convention Centre",
    city: "Bangalore",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop",
    description: "India's largest AI conference bringing together 2000+ professionals, 50+ speakers, and leading tech companies.",
    attendees: "2000+",
    speakers: 50,
    price: "₹2,999",
    earlyBird: "₹1,999",
    highlights: [
      "Keynote by Google AI Lead",
      "50+ Technical Sessions",
      "Networking Dinner",
      "Job Fair with 100+ Companies",
    ],
    tags: ["Conference", "Networking", "Career"],
  },
  {
    title: "Prompt Engineering Workshop",
    type: "Workshop",
    date: "March 20, 2026",
    time: "10:00 AM - 5:00 PM",
    location: "SMARRTIF AI Training Center",
    city: "Mumbai",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=400&fit=crop",
    description: "Hands-on workshop on mastering prompt engineering techniques for GPT-4, Claude, and other LLMs.",
    attendees: "50",
    speakers: 3,
    price: "₹4,999",
    earlyBird: "₹3,499",
    highlights: [
      "Hands-on Coding Sessions",
      "Real-world Case Studies",
      "Certificate of Completion",
      "Lunch & Snacks Included",
    ],
    tags: ["Workshop", "Hands-on", "LLM"],
  },
  {
    title: "AI Career Fair 2026",
    type: "Career Fair",
    date: "April 5, 2026",
    time: "11:00 AM - 6:00 PM",
    location: "Hyderabad Tech Hub",
    city: "Hyderabad",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=400&fit=crop",
    description: "Connect with 80+ companies hiring for AI/ML roles. On-spot interviews, resume reviews, and career counseling.",
    attendees: "1500+",
    speakers: 0,
    price: "Free",
    earlyBird: null,
    highlights: [
      "80+ Hiring Companies",
      "On-spot Interviews",
      "Free Resume Review",
      "Career Counseling Sessions",
    ],
    tags: ["Career", "Networking", "Free"],
  },
  {
    title: "MLOps Bootcamp",
    type: "Bootcamp",
    date: "April 22-23, 2026",
    time: "9:00 AM - 6:00 PM",
    location: "Online + Delhi Hub",
    city: "Delhi / Online",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=400&fit=crop",
    description: "2-day intensive bootcamp on deploying ML models to production. Learn Docker, Kubernetes, and CI/CD for ML.",
    attendees: "100",
    speakers: 5,
    price: "₹8,999",
    earlyBird: "₹6,999",
    highlights: [
      "Live Deployment Projects",
      "Industry Tools Training",
      "Certificate + Badge",
      "Hybrid: Online + In-person",
    ],
    tags: ["Bootcamp", "MLOps", "Advanced"],
  },
];

export const UpcomingEvents = () => {
  return (
    <div className="space-y-8">
      {upcomingEvents.map((event, index) => (
        <div
          key={index}
          className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[var(--brand-red)] hover:shadow-xl transition-all group"
        >
          <div className="grid lg:grid-cols-3 gap-0">
            <div className="lg:col-span-1 aspect-video lg:aspect-auto overflow-hidden bg-gray-100">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="lg:col-span-2 p-6 lg:p-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {event.tags.map((tag, tIndex) => (
                  <span
                    key={tIndex}
                    className="px-3 py-1 rounded-full bg-[var(--brand-red-light)] text-[var(--brand-red)] text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {event.title}
              </h3>
              <p className="text-gray-600 mb-6">{event.description}</p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-[var(--brand-orange)] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {event.date}
                    </div>
                    <div className="text-xs text-gray-600">{event.time}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[var(--brand-orange)] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {event.location}
                    </div>
                    <div className="text-xs text-gray-600">{event.city}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-[var(--brand-orange)] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {event.attendees} Expected
                    </div>
                    <div className="text-xs text-gray-600">
                      {event.speakers > 0 && `${event.speakers} Speakers`}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Ticket className="h-5 w-5 text-[var(--brand-orange)] flex-shrink-0 mt-0.5" />
                  <div>
                    {event.earlyBird ? (
                      <>
                        <div className="font-semibold text-[var(--brand-red)] text-sm">
                          {event.earlyBird} Early Bird
                        </div>
                        <div className="text-xs text-gray-600 line-through">
                          {event.price}
                        </div>
                      </>
                    ) : (
                      <div className="font-semibold text-gray-900 text-sm">
                        {event.price}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm">
                  Event Highlights:
                </h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {event.highlights.map((highlight, hIndex) => (
                    <div
                      key={hIndex}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white hover:shadow-lg transition-all font-semibold">
                  Register Now
                </button>
                <button className="px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-900 hover:border-[var(--brand-red)] hover:text-[var(--brand-red)] transition-all font-semibold">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
