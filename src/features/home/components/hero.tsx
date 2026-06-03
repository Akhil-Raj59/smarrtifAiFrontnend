import { Link } from "react-router-dom";
import { useState } from "react";
import { useAppDispatch } from "@/store";
import { openComingSoonModal } from "@/store/slices/uiSlice";
import {
  ArrowRight,
  Target,
  BookOpen,
  TrendingUp,
  Globe,
  Code,
  Award,
  Sparkles,
  Database,
  Zap,
  Users,
  CheckCircle2,
  Layout,
  Briefcase,
  Rocket,
  Phone,
  Brain,
} from "lucide-react";

export const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-14">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Transition into{" "}
              <span className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
                AI Careers
              </span>{" "}
              with Structured Roadmaps
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Personalized learning paths designed for non-technical
              professionals. Start your AI journey with expert guidance and
              structured training programs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              onClick={() => dispatch(openComingSoonModal("Take Assessment"))}
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg overflow-hidden text-white transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-lg cursor-pointer"
              style={{
                backgroundImage: 'linear-gradient(to right, var(--brand-red) 0%, var(--brand-orange) 30%, var(--brand-orange) 70%, var(--brand-red) 100%)',
                backgroundSize: '300% 100%',
                backgroundPosition: isHovered ? 'right' : 'left',
                transition: 'background-position 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Take Free Assessment
              <ArrowRight className="h-5 w-5" />
            </button>
            <Link
              to="/programs"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-gray-900 text-gray-900 hover:border-[var(--brand-red)] hover:text-[var(--brand-red)] transition-all duration-300 ease-in-out"
            >
              Explore Programs
            </Link>
          </div>
          <div className="flex items-center gap-8 mt-20">
            <div>
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Successful Transitions</div>
            </div>
            <div className="h-12 w-px bg-gray-300" />
            <div>
              <div className="text-3xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="h-12 w-px bg-gray-300" />
            <div>
              <div className="text-3xl font-bold text-gray-900">6+</div>
              <div className="text-sm text-gray-600">Expert Programs</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-white backdrop-blur-sm p-6 sm:p-8 pt-4 sm:pt-6">
            <div className="aspect-square grid grid-cols-5 grid-rows-5 gap-2 sm:gap-2.5">
              {(() => {
                const icons = [
                  Users, Target, BookOpen, TrendingUp, Globe,
                  Code, Award, Sparkles, Database,
                  Zap, CheckCircle2, null, Layout, Briefcase,
                  Rocket, Phone, Users, Target, Code,
                  Database, Globe, Award, CheckCircle2, Zap
                ];

                const centerIndex = 12; // True center of 5x5 grid
                const gridSize = 5;

                return icons.map((IconComponent, index) => {
                  const isHighlighted = index === centerIndex;

                  // Calculate position in grid
                  const row = Math.floor(index / gridSize);
                  const col = index % gridSize;
                  const centerRow = Math.floor(centerIndex / gridSize);
                  const centerCol = centerIndex % gridSize;

                  // Calculate distance from center
                  const distance = Math.sqrt(
                    Math.pow(row - centerRow, 2) + Math.pow(col - centerCol, 2)
                  );

                  // Calculate opacity based on distance (closer = more visible)
                  const maxDistance = Math.sqrt(2 * Math.pow(gridSize - 1, 2));
                  const opacity = isHighlighted ? 1 : Math.max(0.12, 1 - (distance / maxDistance) * 0.88);

                  return (
                    <div
                      key={index}
                      className={`rounded-xl transition-all duration-300 flex items-center justify-center relative ${
                        isHighlighted
                          ? 'bg-white shadow-2xl scale-110 z-10'
                          : 'bg-transparent'
                      }`}
                      style={{ opacity: isHighlighted ? 1 : opacity }}
                    >
                      {isHighlighted ? (
                        <div className="p-4 sm:p-5">
                          <Brain className="h-8 w-8 sm:h-12 sm:w-12 text-[var(--brand-red)] animate-pulse"
                            style={{
                              filter: 'drop-shadow(0 0 8px rgba(239, 68, 68, 0.3))'
                            }}
                          />
                        </div>
                      ) : IconComponent ? (
                        <div className="p-2 sm:p-3 rounded-lg bg-[var(--brand-orange)]/5">
                          <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400" />
                        </div>
                      ) : null}
                    </div>
                  );
                });
              })()}
            </div>
          </div>
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
            <div className="bg-gradient-to-br from-[var(--brand-red)]/10 via-[var(--brand-orange)]/5 to-white/80 backdrop-blur-lg rounded-xl p-4 sm:p-6 shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                <span className="text-gray-900">
                  AI-Powered Learning
                </span>
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                Personalized roadmaps tailored to your skills and goals
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
