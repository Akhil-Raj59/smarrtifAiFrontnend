import { TrendingUp } from "lucide-react";

export const EventsCTA = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <TrendingUp className="h-12 w-12 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Want to Host an Event with Us?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Partner with SMARRTIF AI to organize workshops, meetups, or conferences in
            your city
          </p>
          <button className="px-8 py-4 rounded-lg bg-white text-[var(--brand-red)] hover:shadow-2xl transition-all font-semibold">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};
