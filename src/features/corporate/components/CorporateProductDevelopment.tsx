import { Cpu, TrendingUp, Award, Rocket, Shield, Users, Target, Lightbulb, Settings, ArrowRight } from "lucide-react";

export const CorporateProductDevelopment = () => {
  return (
    <section className="bg-[var(--brand-gray-light)] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--brand-red-light)] to-[var(--brand-orange-light)] text-[var(--brand-red)] mb-6">
            <Cpu className="h-4 w-4" />
            <span className="text-sm font-semibold">Product Development</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
              Custom AI Product Development
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Beyond training, we develop enterprise-grade AI products that drive real business value. Our flagship solutions combine cutting-edge technology with industry expertise.
          </p>
        </div>

        {/* Core Products Showcase */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* AI Analyzer Tools */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)]">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  AI Analyzer Tools
                </h3>
                <p className="text-gray-600">
                  Transform raw data into actionable insights with intelligent automation
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {[
                { title: "Data Analysis Automation", desc: "Automate complex data processing workflows and generate insights in real-time" },
                { title: "Pattern Recognition Systems", desc: "Identify trends, anomalies, and opportunities hidden in your data" },
                { title: "Business Intelligence Dashboards", desc: "Visualize KPIs and metrics with customizable, interactive dashboards" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="h-5 w-5 text-[var(--brand-red)] flex-shrink-0 mt-0.5">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Rocket className="h-4 w-4 text-[var(--brand-orange)]" />
                  <span>Cloud-Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[var(--brand-orange)]" />
                  <span>Enterprise Security</span>
                </div>
              </div>
            </div>
          </div>

          {/* LMS System */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)]">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  LMS (Learning Management System)
                </h3>
                <p className="text-gray-600">
                  Empower your organization with intelligent learning platforms
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {[
                { title: "Custom E-Learning Platforms", desc: "Tailored learning experiences with AI-driven content recommendations" },
                { title: "Progress Tracking & Analytics", desc: "Monitor learner performance with detailed insights and reports" },
                { title: "Interactive Course Management", desc: "Create, manage, and deliver engaging courses with multimedia support" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="h-5 w-5 text-[var(--brand-red)] flex-shrink-0 mt-0.5">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-[var(--brand-orange)]" />
                  <span>Multi-Tenant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-[var(--brand-orange)]" />
                  <span>AI-Powered</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            <span className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
              Why Choose Our AI Products?
            </span>
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Lightbulb, title: "End-to-End Development", description: "Complete product lifecycle from concept to deployment" },
              { icon: Settings, title: "Fully Customizable", description: "Tailored to your specific business requirements" },
              { icon: Rocket, title: "Scalable Architecture", description: "Built to grow with your organization" },
              { icon: Award, title: "Industry Expertise", description: "Proven solutions across multiple sectors" }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-2xl transition-all duration-300 hover:bg-orange-50/70 hover:shadow-md hover:scale-[1.02] border border-transparent hover:border-orange-100/50">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-[var(--brand-red-light)] to-[var(--brand-orange-light)] mb-4">
                  <feature.icon className="h-7 w-7 text-[var(--brand-red)]" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Development Process */}
        <div className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] rounded-2xl p-8 sm:p-12 text-white mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Our Development Process
          </h3>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Discovery", description: "Understanding your business needs" },
              { step: "02", title: "Design", description: "Solution architecture & planning" },
              { step: "03", title: "Development", description: "Building & training AI models" },
              { step: "04", title: "Testing", description: "Quality assurance & validation" },
              { step: "05", title: "Deployment", description: "Launch & continuous support" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white font-bold mb-4">
                  {phase.step}
                </div>
                <h4 className="font-bold mb-2">{phase.title}</h4>
                <p className="text-sm text-white/90">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white rounded-2xl p-8 sm:p-12 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
              Ready to Transform Your Business with AI?
            </span>
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI Analyzer Tools and LMS can drive innovation in your organization. Get a free consultation with our product experts.
          </p>
          <a
            href="#consultation"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white hover:shadow-xl transition-all font-semibold"
          >
            Schedule a Product Consultation
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
