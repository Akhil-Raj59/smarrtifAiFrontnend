import { Calendar, CheckCircle2 } from "lucide-react";

export const EventsHero = () => {
  return (
    <section className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
            <Calendar className="h-4 w-4" />
            <span className="text-sm font-semibold">Events & Workshops</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Connect, Learn & Grow
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Join our workshops, conferences, and networking events to accelerate your
            AI career journey
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>In-person & Online</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>Hands-on Learning</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>Networking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
