import { Building2, CheckCircle2 } from "lucide-react";

export const CorporateHero = () => {
  return (
    <section className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white mb-6 justify-center">
            <Building2 className="h-4 w-4" />
            <span className="text-sm font-semibold">For Enterprises</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Transform Your Workforce with AI Training
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Customized AI training programs designed to upskill your teams and
            drive business innovation. From executives to technical teams, we
            deliver measurable results.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>2000+ Employees Trained</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>15+ Industries</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>Fortune 500 Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
