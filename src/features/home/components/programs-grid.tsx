import { Link } from "react-router-dom";
import { Brain, Sparkles, Code, TrendingUp, Database, Zap, ArrowRight, ClipboardCheck } from "lucide-react";
import { useAppDispatch } from "@/store";
import { openComingSoonModal } from "@/store/slices/uiSlice";

const programs = [
  {
    title: "AI Agents",
    description:
      "Build intelligent autonomous agents using LangChain, AutoGPT, and modern frameworks",
    icon: Brain,
    color: "from-red-500 to-orange-500",
  },
  {
    title: "Prompt Engineering",
    description:
      "Master the art of crafting effective prompts for GPT models and AI systems",
    icon: Sparkles,
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Large Language Models",
    description:
      "Deep dive into LLMs, fine-tuning, and deploying custom language models",
    icon: Code,
    color: "from-red-500 to-pink-500",
  },
  {
    title: "AI/ML",
    description:
      "Comprehensive machine learning from foundations to advanced neural networks",
    icon: TrendingUp,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Data Analytics",
    description:
      "Transform data into insights with Python, SQL, and business intelligence tools",
    icon: Database,
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Generative AI",
    description:
      "Create with AI: image generation, text-to-image, and creative AI applications",
    icon: Zap,
    color: "from-pink-500 to-red-500",
  },
];

export const ProgramsGrid = () => {
  const dispatch = useAppDispatch();
  return (
    <section className="bg-[var(--brand-gray-light)] pt-4 sm:pt-8 pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-red-50/80 to-orange-50/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/70 shadow-lg">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent pb-1">
              Our Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized programs to make you job-ready in AI roles
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 hover:shadow-xl transition-all"
              >
                <div className="space-y-4">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${program.color}`}
                  >
                    <program.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {program.title}
                  </h3>
                  <p className="text-gray-600">{program.description}</p>
                  <Link
                    to="/programs"
                    className="inline-flex items-center gap-2 text-[var(--brand-red)] hover:text-[var(--brand-orange)] transition-colors"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="mb-6 text-sm text-gray-600">
              Discover your ideal AI career path and start your transformation journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg overflow-hidden text-white transition-all duration-500 ease-in-out hover:shadow-xl font-semibold"
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
                Explore Training Programs
                <ArrowRight className="h-5 w-5" />
              </Link>
              <button
                onClick={() => dispatch(openComingSoonModal("Take Assessment"))}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-[var(--brand-red)] text-[var(--brand-red)] hover:bg-[var(--brand-red)] hover:text-white transition-all font-semibold cursor-pointer"
              >
                <ClipboardCheck className="h-5 w-5" />
                Take Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
