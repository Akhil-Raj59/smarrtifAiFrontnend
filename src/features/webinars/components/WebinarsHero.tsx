import { Video, CheckCircle2 } from "lucide-react";

export const WebinarsHero = () => {
  return (
    <section className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
            <Video className="h-4 w-4" />
            <span className="text-sm font-semibold">Free Webinars</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Learn from Industry Experts
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Join live sessions, ask questions, and get insights from AI professionals
            working at top tech companies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center gap-2 text-white/90">
              <CheckCircle2 className="h-5 w-5" />
              <span>100% Free</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <CheckCircle2 className="h-5 w-5" />
              <span>Live Q&A</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <CheckCircle2 className="h-5 w-5" />
              <span>Certificates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
