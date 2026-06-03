import { Shield, Clock, Briefcase, ArrowRight } from "lucide-react";

interface CorporateConsultationProps {
  formData: any;
  handleInputChange: (field: string, value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export const CorporateConsultation = ({
  formData,
  handleInputChange,
  handleSubmit,
}: CorporateConsultationProps) => {
  return (
    <section className="bg-gray-900 text-white py-16 sm:py-24" id="consultation">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
              Request a Corporate Consultation
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Schedule a free consultation with our enterprise team to discuss
            your training needs and get a customized proposal.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div className="space-y-6">
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30 space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white flex-shrink-0">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Enterprise Security</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Your data is secure with enterprise-grade protection
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Quick Response</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Our team responds within 24 hours
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white flex-shrink-0">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Custom Solutions</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Training programs tailored to your business goals
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl p-8 text-gray-900 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-1.5 text-sm font-semibold">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) =>
                      handleInputChange("companyName", e.target.value)
                    }
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-orange)] focus:border-transparent text-sm bg-gray-50/50"
                    placeholder="Your company"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1.5 text-sm font-semibold">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    value={formData.contactName}
                    onChange={(e) =>
                      handleInputChange("contactName", e.target.value)
                    }
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-orange)] focus:border-transparent text-sm bg-gray-50/50"
                    placeholder="Your name"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-1.5 text-sm font-semibold">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-orange)] focus:border-transparent text-sm bg-gray-50/50"
                    placeholder="you@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1.5 text-sm font-semibold">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-orange)] focus:border-transparent text-sm bg-gray-50/50"
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-1.5 text-sm font-semibold">
                    Company Size *
                  </label>
                  <select
                    value={formData.companySize}
                    onChange={(e) =>
                      handleInputChange("companySize", e.target.value)
                    }
                    className="w-full px-4 py-2.5 border border-gray-200 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-orange)] focus:border-transparent text-sm text-gray-700 appearance-none pr-10 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20fill=%22none%22%20viewBox=%220%200%2024%2024%22%20stroke=%22%236b7280%22%20stroke-width=%222%22%3E%3Cpath%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20d=%22M8.25%2015L12%2018.75%2015.75%2015m0-6L12%205.25%208.25%209%22%20/%3E%3C/svg%3E')] bg-[position:right_12px_center] bg-[size:16px_16px] bg-no-repeat cursor-pointer transition-all duration-200 hover:border-gray-300 shadow-sm"
                    required
                  >
                    <option value="">Select size</option>
                    <option value="1-50">1-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-1000">201-1000 employees</option>
                    <option value="1000+">1000+ employees</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-1.5 text-sm font-semibold">
                    Industry *
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) =>
                      handleInputChange("industry", e.target.value)
                    }
                    className="w-full px-4 py-2.5 border border-gray-200 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-orange)] focus:border-transparent text-sm text-gray-700 appearance-none pr-10 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20fill=%22none%22%20viewBox=%220%200%2024%2024%22%20stroke=%22%236b7280%22%20stroke-width=%222%22%3E%3Cpath%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20d=%22M8.25%2015L12%2018.75%2015.75%2015m0-6L12%205.25%208.25%209%22%20/%3E%3C/svg%3E')] bg-[position:right_12px_center] bg-[size:16px_16px] bg-no-repeat cursor-pointer transition-all duration-200 hover:border-gray-300 shadow-sm"
                    required
                  >
                    <option value="">Select industry</option>
                    <option value="finance">Finance & Banking</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="retail">Retail & E-commerce</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="technology">Technology</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-1.5 text-sm font-semibold">
                  Training Needs *
                </label>
                <input
                  type="text"
                  value={formData.trainingNeeds}
                  onChange={(e) =>
                    handleInputChange("trainingNeeds", e.target.value)
                  }
                  className="w-full px-4 py-2.5 border border-gray-200 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-orange)] focus:border-transparent text-sm text-gray-900 shadow-sm"
                  placeholder="e.g., AI fundamentals for executives"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1.5 text-sm font-semibold">
                  Preferred Timeline *
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) =>
                    handleInputChange("timeline", e.target.value)
                  }
                  className="w-full px-4 py-2.5 border border-gray-200 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-orange)] focus:border-transparent text-sm text-gray-700 appearance-none pr-10 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20fill=%22none%22%20viewBox=%220%200%2024%2024%22%20stroke=%22%236b7280%22%20stroke-width=%222%22%3E%3Cpath%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20d=%22M8.25%2015L12%2018.75%2015.75%2015m0-6L12%205.25%208.25%209%22%20/%3E%3C/svg%3E')] bg-[position:right_12px_center] bg-[size:16px_16px] bg-no-repeat cursor-pointer transition-all duration-200 hover:border-gray-300 shadow-sm"
                  required
                >
                  <option value="">Select timeline</option>
                  <option value="Immediate">Immediate (within 1 month)</option>
                  <option value="1-3-months">1-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-1.5 text-sm font-semibold">
                  Additional Information
                </label>
                <textarea
                  value={formData.additionalInfo || ""}
                  onChange={(e) =>
                    handleInputChange("additionalInfo", e.target.value)
                  }
                  rows={3}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-orange)] focus:border-transparent text-sm bg-gray-50/50"
                  placeholder="Tell us more about your training requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3.5 rounded-lg bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white hover:shadow-xl hover:scale-[1.01] transition-all font-semibold flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                Request Consultation
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
