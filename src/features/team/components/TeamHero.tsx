import { Users } from "lucide-react";

export const TeamHero = () => {
  return (
    <section className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
            <Users className="h-4 w-4" />
            <span className="text-sm font-semibold">Meet Our Team</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            The Minds Behind Your Success
          </h1>
          <p className="text-xl text-white/90">
            Industry experts, passionate educators, and dedicated professionals committed to
            transforming your AI career journey
          </p>
        </div>
      </div>
    </section>
  );
};
