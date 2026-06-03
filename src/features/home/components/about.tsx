import { Link } from "react-router-dom";
import { Building2, ArrowRight, Target, Rocket, Users, Box } from "lucide-react";

export const About = () => {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Animated Gradient Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-[var(--brand-red)]/5 to-[var(--brand-orange)]/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-[var(--brand-orange)]/5 to-[var(--brand-red)]/5 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-br from-[var(--brand-red)]/4 to-[var(--brand-orange)]/4 rounded-full blur-3xl animate-float-slow"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6 flex flex-col lg:h-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand-orange-light)] text-[var(--brand-orange)] self-start">
              <Building2 className="h-4 w-4" />
              <span className="text-sm font-semibold">About Us</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
                  SMARRTIF AI
                </span>
              </h2>
              <p className="text-xl text-gray-700 font-semibold">
                Your Trusted EdTech Consulting Partner
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Incorporated on <span className="font-semibold text-gray-900">2nd February 2024</span>, 
                SMARRTIF AI is revolutionizing career transitions in the AI technology sector.
              </p>
              <p>
                We specialize in providing <span className="font-semibold text-gray-900">seamless career transitions</span> for 
                professionals moving from Non-Tech to Tech job roles through customized learning solutions 
                tailored to your unique background and career goals.
              </p>
              <p>
                At SMARRTIF AI, we don't just train—we make you <span className="font-semibold text-gray-900">job-ready</span> for 
                the rapidly changing AI job market with industry-relevant skills, real-world projects, 
                and personalized mentorship.
              </p>
              <p>
                Beyond education, we are actively <span className="font-semibold text-gray-900">developing cutting-edge AI products</span> that 
                solve real-world business challenges, combining our expertise in AI technology with practical 
                industry applications.
              </p>
              <p>
                Our approach is rooted in <span className="font-semibold text-gray-900">understanding your current skillset</span> and 
                building a strategic path forward. We believe every professional has unique strengths that can be 
                leveraged in the AI domain, and our mission is to help you discover and develop those capabilities.
              </p>
              <p>
                Through comprehensive assessments, one-on-one mentorship sessions, and hands-on project work, we ensure 
                that you're not just learning theory, but gaining <span className="font-semibold text-gray-900">practical experience</span> that 
                employers value. Our alumni have successfully transitioned into roles at leading tech companies and startups 
                across various industries.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 lg:mt-auto">
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-[var(--brand-red)] text-[var(--brand-red)] hover:bg-[var(--brand-red)] hover:text-white transition-all font-semibold"
              >
                Learn More About Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right Content - Stats & Highlights */}
          <div className="space-y-6">
            {/* Company Info Card & Value Propositions - Combined */}
            <div className="bg-gradient-to-br from-[var(--brand-red-light)] to-[var(--brand-orange-light)] rounded-2xl p-8 space-y-6 shadow-xl">
              {/* Company Info */}
              <div className="bg-white rounded-xl p-6 space-y-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] shadow-md">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">SMARRTIF AI (OPC) PRIVATE LIMITED</h3>
                    <p className="text-sm text-gray-600">EdTech Consulting Company</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  <div className="space-y-1">
                    <div className="text-sm text-gray-600">Established</div>
                    <div className="text-lg font-bold text-gray-900">Feb 2024</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-gray-600">Industry</div>
                    <div className="text-lg font-bold text-gray-900">EdTech</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-gray-600">Specialization</div>
                    <div className="text-lg font-bold text-gray-900">AI Training</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-gray-600">Focus</div>
                    <div className="text-lg font-bold text-gray-900">Career Transition</div>
                  </div>
                </div>
              </div>

              {/* Value Propositions */}
              <div className="space-y-4">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--brand-red)] hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-[var(--brand-red-light)]">
                      <Target className="h-6 w-6 text-[var(--brand-red)]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Seamless Transitions</h4>
                      <p className="text-sm text-gray-600">
                        Structured pathways from non-technical backgrounds to high-demand AI tech roles
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--brand-orange)] hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-[var(--brand-orange-light)]">
                      <Rocket className="h-6 w-6 text-[var(--brand-orange)]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Job Market Ready</h4>
                      <p className="text-sm text-gray-600">
                        Stay ahead with skills aligned to the rapidly evolving AI industry demands
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--brand-red)] hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-[var(--brand-red-light)]">
                      <Users className="h-6 w-6 text-[var(--brand-red)]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Personalized Approach</h4>
                      <p className="text-sm text-gray-600">
                        Custom learning solutions designed specifically for your career goals and experience
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[var(--brand-orange)] hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-[var(--brand-orange-light)]">
                      <Box className="h-6 w-6 text-[var(--brand-orange)]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">AI Product Innovation</h4>
                      <p className="text-sm text-gray-600">
                        Developing cutting-edge AI products that solve real-world business challenges
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
