import { Link } from "react-router-dom";
import { Box, CheckCircle2, ArrowRight } from "lucide-react";

export const ProductDevelopment = () => {
  return (
    <section className="bg-gray-900 text-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="order-2 lg:order-1 flex items-stretch">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 space-y-6 w-full">
              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    title: "AI Analyzer Tools",
                    description:
                      "Custom analysis solutions powered by machine learning",
                  },
                  {
                    title: "LMS Systems",
                    description:
                      "Intelligent learning management platforms",
                  },
                  {
                    title: "Automation Platforms",
                    description:
                      "End-to-end workflow automation with AI",
                  },
                ].map((product, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] flex items-center justify-center">
                        <Box className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">
                        {product.title}
                      </h4>
                      <p className="text-sm text-gray-300">
                        {product.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex flex-col space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white self-start">
              <Box className="h-4 w-4" />
              <span className="text-sm font-semibold">AI Products</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold">
              <span className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
                Custom AI Product Development
              </span>
            </h2>
            <p className="text-lg text-gray-300">
              We build enterprise-grade AI products tailored to your business
              needs. From concept to deployment, our team delivers scalable
              solutions that drive real business value.
            </p>
            <ul className="space-y-4">
              {[
                "End-to-end product development",
                "Scalable and secure architecture",
                "Integration with existing systems",
                "Ongoing maintenance and support",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[var(--brand-orange)] flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/corporate-training"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-[var(--brand-red)] hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Request Demo
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
