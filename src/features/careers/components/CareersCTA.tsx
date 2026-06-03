import { ArrowRight } from "lucide-react";

export const CareersCTA = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Don't See Your Role?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We're always looking for exceptional talent. Send us your resume and let's
            talk about how you can contribute.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-[var(--brand-red)] hover:shadow-2xl transition-all font-semibold">
            Send General Application
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
