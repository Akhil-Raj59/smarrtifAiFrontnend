import { Building2, CheckCircle2, ArrowRight } from "lucide-react";
import { useAppDispatch } from "@/store";
import { openComingSoonModal } from "@/store/slices/uiSlice";

export const CorporateTraining = () => {
  const dispatch = useAppDispatch();
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col">
            <div className="space-y-6 flex-grow">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand-red-light)] text-[var(--brand-red)]">
                <Building2 className="h-4 w-4" />
                <span className="text-sm font-semibold">For Enterprises</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold">
                <span className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
                  Corporate AI Training Programs
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                Upskill your teams with customized AI training programs designed
                for your organization's specific needs. From executives to
                technical teams, we deliver measurable results. Transform your workforce
                with industry-leading AI expertise and accelerate your digital transformation journey.
              </p>
              <ul className="space-y-4 mt-4">
                {[
                  "Customized curriculum tailored for your industry and business objectives",
                  "Flexible delivery options: On-site, remote, or hybrid learning models",
                  "Hands-on projects with real business impact and immediate ROI",
                  "Post-training support, consultation, and continuous learning resources",
                  "Executive workshops and technical deep-dives for all skill levels",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[var(--brand-red)] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => dispatch(openComingSoonModal("Book Consultation"))}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg overflow-hidden text-white hover:shadow-xl transition-all mt-6 cursor-pointer"
              style={{
                backgroundImage: 'linear-gradient(to right, var(--brand-red) 0%, var(--brand-orange) 30%, var(--brand-orange) 70%, var(--brand-red) 100%)',
                backgroundSize: '300% 100%',
                backgroundPosition: 'left',
                transition: 'background-position 1.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundPosition = 'right';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundPosition = 'left';
              }}
            >
              Book Corporate Consultation
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          <div className="bg-gradient-to-br from-[var(--brand-red-light)] to-[var(--brand-orange-light)] rounded-2xl p-8 lg:p-10 flex items-center">
            <div className="bg-white rounded-xl shadow-xl p-6 lg:p-8 space-y-6 w-full">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Trusted by Leading Companies
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { name: "Fortune 500", count: "10+" },
                  { name: "Startups", count: "50+" },
                  { name: "Employees Trained", count: "2000+" },
                  { name: "Industries", count: "15+" },
                ].map((stat, index) => (
                  <div key={index} className="space-y-1">
                    <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
                      {stat.count}
                    </div>
                    <div className="text-sm text-gray-600">{stat.name}</div>
                  </div>
                ))}
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-700 mb-4 italic">
                  "SMARRTIF AI transformed our team's capabilities. The ROI was evident within months."
                </p>
                <p className="text-sm text-gray-600">
                  — Tech Lead, Fortune 100 Company
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Training Formats:</h4>
                <div className="flex flex-wrap gap-2">
                  {["On-site", "Remote", "Hybrid", "Self-paced"].map((format, index) => (
                    <span key={index} className="px-3 py-1 bg-[var(--brand-red-light)] text-[var(--brand-red)] rounded-full text-sm">
                      {format}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
