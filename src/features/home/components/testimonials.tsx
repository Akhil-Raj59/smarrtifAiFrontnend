import { Users } from "lucide-react";

export const Testimonials = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-[var(--brand-red)]/5 via-[var(--brand-orange)]/3 to-white/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand-orange-light)] text-[var(--brand-orange)]">
            <Users className="h-4 w-4" />
            <span className="text-sm font-semibold">Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
              What Our Students Say
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real transformations from professionals who made the switch to AI careers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="relative bg-white/95 backdrop-blur-xl border border-white/80 rounded-xl p-8 hover:border-[var(--brand-red)] hover:shadow-xl transition-all duration-500 ease-in-out shadow-lg overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/40 before:via-transparent before:to-transparent before:pointer-events-none">
            <div className="relative z-10">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-5 w-5 text-yellow-500 fill-yellow-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-6 italic">
              "I transitioned from marketing to an AI Product Manager role in just 6 months. The personalized learning path and mentor support were game-changers. Now earning ₹22 LPA!"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--brand-red-light)] to-[var(--brand-orange-light)] flex items-center justify-center">
                <span className="text-lg font-bold text-[var(--brand-red)]">RK</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Rahul Kumar</div>
                <div className="text-sm text-gray-600">AI Product Manager @ TCS</div>
                <div className="text-xs text-[var(--brand-orange)] font-semibold">
                  ₹12L → ₹22L
                </div>
              </div>
            </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="relative bg-white/95 backdrop-blur-xl border border-white/80 rounded-xl p-8 hover:border-[var(--brand-red)] hover:shadow-xl transition-all duration-500 ease-in-out shadow-lg overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/40 before:via-transparent before:to-transparent before:pointer-events-none">
            <div className="relative z-10">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-5 w-5 text-yellow-500 fill-yellow-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-6 italic">
              "Being from a finance background, I was nervous about coding. The AI/ML Mastery program broke everything down perfectly. Landed a Data Scientist role at Wipro!"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--brand-red-light)] to-[var(--brand-orange-light)] flex items-center justify-center">
                <span className="text-lg font-bold text-[var(--brand-red)]">PM</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Priya Mehta</div>
                <div className="text-sm text-gray-600">Data Scientist @ Wipro</div>
                <div className="text-xs text-[var(--brand-orange)] font-semibold">
                  ₹8L → ₹18L
                </div>
              </div>
            </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="relative bg-white/95 backdrop-blur-xl border border-white/80 rounded-xl p-8 hover:border-[var(--brand-red)] hover:shadow-xl transition-all duration-500 ease-in-out shadow-lg overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/40 before:via-transparent before:to-transparent before:pointer-events-none">
            <div className="relative z-10">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-5 w-5 text-yellow-500 fill-yellow-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-6 italic">
              "The LLM & Prompt Engineering course was exactly what I needed. Built 3 AI projects during the program and got hired as an AI Engineer. Best investment ever!"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--brand-red-light)] to-[var(--brand-orange-light)] flex items-center justify-center">
                <span className="text-lg font-bold text-[var(--brand-red)]">AS</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Amit Sharma</div>
                <div className="text-sm text-gray-600">AI Engineer @ Infosys</div>
                <div className="text-xs text-[var(--brand-orange)] font-semibold">
                  ₹10L → ₹20L
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
