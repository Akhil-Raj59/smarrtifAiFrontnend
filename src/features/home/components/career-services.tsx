import { Briefcase, FileText, Globe, CheckCircle2 } from "lucide-react";

export const CareerServices = () => {
  return (
    <section className="py-16 sm:py-24 bg-[var(--brand-gray-light)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand-orange-light)] text-[var(--brand-orange)]">
            <Briefcase className="h-4 w-4" />
            <span className="text-sm font-semibold">Career Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
              Professional Career Services
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stand out in your job search with our expert career support services
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* CV Creation Service */}
          <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow flex flex-col">
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-br from-[var(--brand-red-light)] to-[var(--brand-orange-light)]">
                <FileText className="h-8 w-8 text-[var(--brand-red)]" />
              </div>
              <div className="text-right">
                <div className="inline-flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-gray-900">₹1,499</span>
                  <span className="text-sm text-gray-600">+ GST</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">One-time fee</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Professional CV Creation
            </h3>
            <p className="text-gray-600 mb-6">
              Get an ATS-friendly, professionally designed CV that highlights your AI skills and experience
            </p>

            <ul className="space-y-3 mb-8 flex-grow">
              {[
                "ATS-optimized format",
                "Industry-specific keywords",
                "Achievement-focused content",
                "2 rounds of revisions",
                "PDF & Word formats",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[var(--brand-red)] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <button
              className="w-full px-6 py-3 rounded-lg overflow-hidden text-white hover:shadow-xl transition-all font-semibold"
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
              Order CV Service
            </button>
          </div>

          {/* Digital Portfolio Service */}
          <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow flex flex-col">
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-br from-[var(--brand-orange-light)] to-[var(--brand-red-light)]">
                <Globe className="h-8 w-8 text-[var(--brand-orange)]" />
              </div>
              <div className="text-right">
                <div className="inline-flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-gray-900">₹3,499</span>
                  <span className="text-sm text-gray-600">+ GST</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">One-time fee</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Digital Portfolio Website
            </h3>
            <p className="text-gray-600 mb-6">
              Showcase your AI projects with a stunning, responsive portfolio website
            </p>

            <ul className="space-y-3 mb-8 flex-grow">
              {[
                "Custom responsive design",
                "Project showcases",
                "About & skills sections",
                "Contact form integration",
                "Free hosting for 1 year",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[var(--brand-orange)] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <button
              className="w-full px-6 py-3 rounded-lg overflow-hidden text-white hover:shadow-xl transition-all font-semibold"
              style={{
                backgroundImage: 'linear-gradient(to right, var(--brand-orange) 0%, var(--brand-red) 30%, var(--brand-red) 70%, var(--brand-orange) 100%)',
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
              Order Portfolio Service
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
