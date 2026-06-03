import { Briefcase, Users, MapPin, Award } from "lucide-react";

export const CareersHero = () => {
  return (
    <section className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
            <Briefcase className="h-4 w-4" />
            <span className="text-sm font-semibold">Join Our Team</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Build the Future of AI Education
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Join a mission-driven team transforming careers through AI education. We're
            looking for passionate educators, technologists, and dreamers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-white/90">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>50+ Team Members</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Remote-First</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              <span>Best EdTech Company 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
