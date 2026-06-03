import { Calendar, MapPin, Users, Star, ArrowRight } from "lucide-react";

const pastEvents = [
  {
    title: "Deep Learning Workshop",
    date: "February 15, 2026",
    location: "Pune",
    attendees: "120",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=300&fit=crop",
    gallery: "#",
  },
  {
    title: "AI Networking Meetup",
    date: "February 8, 2026",
    location: "Bangalore",
    attendees: "200",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop",
    gallery: "#",
  },
  {
    title: "Computer Vision Summit",
    date: "January 25, 2026",
    location: "Chennai",
    attendees: "350",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
    gallery: "#",
  },
  {
    title: "Career Transition Workshop",
    date: "January 18, 2026",
    location: "Mumbai",
    attendees: "80",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop",
    gallery: "#",
  },
];

export const PastEvents = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {pastEvents.map((event, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group"
        >
          <div className="aspect-video overflow-hidden bg-gray-100">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-5">
            <h3 className="font-bold text-gray-900 mb-2">{event.title}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <Calendar className="h-4 w-4" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
              <MapPin className="h-4 w-4" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-200">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4 text-[var(--brand-orange)]" />
                <span className="text-sm text-gray-700">
                  {event.attendees}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-semibold text-gray-900">
                  {event.rating}
                </span>
              </div>
            </div>
            <a
              href={event.gallery}
              className="inline-flex items-center gap-2 text-[var(--brand-red)] hover:text-[var(--brand-orange)] font-semibold text-sm"
            >
              View Gallery
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
