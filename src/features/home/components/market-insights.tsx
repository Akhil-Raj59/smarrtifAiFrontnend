import { useState } from "react";
import { TrendingUp, Briefcase, MapPin, Building2, Brain, Sparkles, Code, Database, Zap, IndianRupee, Award, ChevronDown, ChevronUp, Clock, Phone } from "lucide-react";
import { useAppDispatch } from "@/store";
import { openComingSoonModal } from "@/store/slices/uiSlice";
import { Link } from "react-router-dom";

const jobRoles = [
  {
    role: "AI/ML Engineer",
    description: "Design and deploy machine learning models and AI systems",
    avgSalary: "₹12-25 LPA",
    freshersalary: "₹6-10 LPA",
    experienceRange: "1-5 years",
    icon: Brain,
    color: "from-red-500 to-orange-500",
    demand: "Very High",
    growth: "+42%",
    skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
    companies: ["TCS", "Infosys", "Wipro"],
    workMode: "Hybrid/Remote"
  },
  {
    role: "Data Scientist",
    description: "Analyze complex data and build predictive models",
    avgSalary: "₹10-22 LPA",
    freshersalary: "₹5-9 LPA",
    experienceRange: "1-5 years",
    icon: TrendingUp,
    color: "from-orange-500 to-amber-500",
    demand: "High",
    growth: "+38%",
    skills: ["Python", "R", "SQL", "Statistics", "ML"],
    companies: ["Flipkart", "Amazon", "PayTM"],
    workMode: "Hybrid"
  },
  {
    role: "AI Product Manager",
    description: "Lead AI product strategy and development",
    avgSalary: "₹18-35 LPA",
    freshersalary: "₹10-15 LPA",
    experienceRange: "3-7 years",
    icon: Briefcase,
    color: "from-red-500 to-pink-500",
    demand: "High",
    growth: "+38%",
    skills: ["Product Strategy", "AI/ML", "Agile", "Data Analysis"],
    companies: ["Meta", "Google", "Freshworks"],
    workMode: "Hybrid/Remote"
  },
  {
    role: "Prompt Engineer",
    description: "Optimize AI prompts and fine-tune LLM responses",
    avgSalary: "₹8-18 LPA",
    freshersalary: "₹4-8 LPA",
    experienceRange: "0-3 years",
    icon: Sparkles,
    color: "from-amber-500 to-orange-500",
    demand: "Rapidly Growing",
    growth: "+120%",
    skills: ["LLMs", "NLP", "Prompt Design", "GPT APIs"],
    companies: ["OpenAI", "Anthropic", "Startups"],
    workMode: "Remote"
  },
  {
    role: "LLM Developer",
    description: "Build and fine-tune large language models",
    avgSalary: "₹15-30 LPA",
    freshersalary: "₹8-12 LPA",
    experienceRange: "2-6 years",
    icon: Code,
    color: "from-pink-500 to-red-500",
    demand: "Very High",
    growth: "+85%",
    skills: ["Transformers", "BERT", "GPT", "Python", "HuggingFace"],
    companies: ["Google", "Microsoft", "NVIDIA"],
    workMode: "Hybrid/Remote"
  },
  {
    role: "AI Research Scientist",
    description: "Conduct cutting-edge AI research and innovation",
    avgSalary: "₹20-40 LPA",
    freshersalary: "₹12-18 LPA",
    experienceRange: "3-8 years",
    icon: Brain,
    color: "from-orange-500 to-red-500",
    demand: "High",
    growth: "+35%",
    skills: ["Deep Learning", "Research", "Mathematics", "Publications"],
    companies: ["IIT Labs", "DRDO", "Google Research"],
    workMode: "Hybrid"
  },
  {
    role: "Computer Vision Engineer",
    description: "Develop image and video analysis AI systems",
    avgSalary: "₹12-28 LPA",
    freshersalary: "₹7-11 LPA",
    experienceRange: "2-6 years",
    icon: Zap,
    color: "from-red-500 to-orange-500",
    demand: "Very High",
    growth: "+50%",
    skills: ["OpenCV", "CNNs", "YOLO", "Image Processing"],
    companies: ["Tesla", "Bosch", "Samsung"],
    workMode: "Hybrid"
  },
  {
    role: "NLP Engineer",
    description: "Build natural language processing applications",
    avgSalary: "₹12-26 LPA",
    freshersalary: "₹6-10 LPA",
    experienceRange: "2-5 years",
    icon: Code,
    color: "from-amber-500 to-orange-500",
    demand: "High",
    growth: "+48%",
    skills: ["NLP", "NLTK", "spaCy", "Transformers", "Python"],
    companies: ["Google", "Amazon", "Flipkart"],
    workMode: "Hybrid/Remote"
  },
  {
    role: "AI Solutions Architect",
    description: "Design scalable AI infrastructure and systems",
    avgSalary: "₹22-45 LPA",
    freshersalary: "₹12-18 LPA",
    experienceRange: "5-10 years",
    icon: Database,
    color: "from-pink-500 to-red-500",
    demand: "High",
    growth: "+40%",
    skills: ["Cloud (AWS/Azure)", "MLOps", "Architecture", "AI/ML"],
    companies: ["Accenture", "Deloitte", "IBM"],
    workMode: "Hybrid"
  }
];

export const MarketInsights = () => {
  const dispatch = useAppDispatch();
  const [visibleRows, setVisibleRows] = useState(1);
  const [consultationHovered2, setConsultationHovered2] = useState(false);

  return (
    <section className="bg-[var(--brand-gray-light)] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand-red-light)] text-[var(--brand-red)]">
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm font-semibold">Market Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
              Trending AI Tech Job Roles in 2026
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We train you for high-demand AI roles with competitive salary packages in the Indian market
          </p>
        </div>

        {/* Market Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Job Openings", value: "50,000+", icon: Briefcase, gradient: "from-red-500/5 to-orange-500/5", iconColor: "text-red-600", hoverBorder: "hover:border-red-500/20" },
            { label: "Avg. Salary Growth", value: "35% YoY", icon: TrendingUp, gradient: "from-green-500/5 to-emerald-500/5", iconColor: "text-green-600", hoverBorder: "hover:border-green-500/20" },
            { label: "Remote Opportunities", value: "60%", icon: MapPin, gradient: "from-blue-500/5 to-cyan-500/5", iconColor: "text-blue-600", hoverBorder: "hover:border-blue-500/20" },
            { label: "Hiring Companies", value: "2,500+", icon: Building2, gradient: "from-purple-500/5 to-pink-500/5", iconColor: "text-purple-600", hoverBorder: "hover:border-purple-500/20" }
          ].map((stat, index) => (
            <div key={index} className={`bg-gradient-to-br ${stat.gradient} rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 ${stat.hoverBorder}`}>
              <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.iconColor}`} />
              <div className="text-3xl font-bold bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobRoles.slice(0, visibleRows * 3).map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 hover:shadow-xl transition-all border-2 border-transparent hover:border-[var(--brand-red)] group"
            >
              <div className="space-y-3">
                {/* Icon and Demand Badge */}
                <div className="flex items-center justify-between">
                  <div
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r ${job.color}`}
                  >
                    <job.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-700">
                      {job.demand}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                      {job.growth}
                    </span>
                  </div>
                </div>

                {/* Role Title */}
                <h3 className="text-lg font-bold text-gray-900">
                  {job.role}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-600 leading-relaxed">
                  {job.description}
                </p>

                {/* Salary Package */}
                <div className="pt-3 border-t border-gray-200 space-y-2">
                  <div>
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider">
                        Experienced
                      </span>
                      <span className="text-[10px] text-gray-500">
                        {job.experienceRange}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1.5">
                      <IndianRupee className="h-3.5 w-3.5 text-[var(--brand-red)]" />
                      <span className="text-lg font-bold bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
                        {job.avgSalary}
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider">
                      Freshers
                    </span>
                    <div className="flex items-baseline gap-1.5 mt-0.5">
                      <IndianRupee className="h-3 w-3 text-gray-400" />
                      <span className="text-sm font-semibold text-gray-700">
                        {job.freshersalary}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skills Required */}
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1.5">
                    Key Skills
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {job.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-1.5 py-0.5 rounded-md bg-gray-100 text-gray-700 border border-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Top Hiring Companies */}
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1.5">
                    Top Hiring Companies
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {job.companies.slice(0, 3).map((company, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-1.5 py-0.5 rounded-md bg-[var(--brand-red-light)] text-[var(--brand-red)] font-medium"
                      >
                        {company}
                      </span>
                    ))}
                    {job.companies.length > 3 && (
                      <span className="text-[10px] px-1.5 py-0.5 text-gray-500">
                        +{job.companies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Work Mode */}
                <div className="flex items-center gap-1.5 pt-1.5">
                  <MapPin className="h-3.5 w-3.5 text-gray-400" />
                  <span className="text-[10px] text-gray-600">{job.workMode}</span>
                  <div className="ml-auto">
                    <Award className="h-3.5 w-3.5 text-[var(--brand-orange)]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More/Less Buttons */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <p className="text-gray-600 text-center">
            Explore more AI career opportunities tailored for your transition
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {visibleRows < 3 ? (
              <button
                onClick={() => setVisibleRows(visibleRows + 1)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-[var(--brand-red)] text-[var(--brand-red)] rounded-lg hover:bg-[var(--brand-red)] hover:text-white transition-all duration-300 font-semibold"
              >
                View More Roles
                <ChevronDown className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={() => setVisibleRows(1)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:border-[var(--brand-red)] hover:text-[var(--brand-red)] transition-all duration-300 font-semibold"
              >
                View Less
                <ChevronUp className="h-4 w-4" />
              </button>
            )}
            <Link
              to="/book-consultation"
              className="relative inline-flex items-center gap-2 px-6 py-3 rounded-lg overflow-hidden text-white hover:shadow-xl font-semibold transition-all border-2 border-transparent cursor-pointer"
              style={{
                backgroundImage: 'linear-gradient(to right, var(--brand-red) 0%, var(--brand-orange) 30%, var(--brand-orange) 70%, var(--brand-red) 100%)',
                backgroundSize: '300% 100%',
                backgroundPosition: consultationHovered2 ? 'right' : 'left',
                transition: 'background-position 1.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
              onMouseEnter={() => setConsultationHovered2(true)}
              onMouseLeave={() => setConsultationHovered2(false)}
            >
              <Phone className="h-4 w-4" />
              Book Consultation
            </Link>
          </div>
        </div>

        {/* Additional Insights */}
        <div className="mt-10 text-center mb-8">
          <p className="text-gray-600">
            Why now is the perfect time to transition into AI careers
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div 
            className="rounded-lg p-4 border-2 border-[var(--brand-red)]/20 overflow-hidden"
            style={{
              backgroundImage: 'linear-gradient(to right, var(--brand-red-light) 0%, white 30%, white 70%, var(--brand-red-light) 100%)',
              backgroundSize: '300% 100%',
              backgroundPosition: 'left',
              transition: 'background-position 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundPosition = 'right';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundPosition = 'left';
            }}
          >
            <Clock className="h-6 w-6 text-[var(--brand-red)] mb-3" />
            <h4 className="text-base font-bold text-gray-900 mb-1">
              Average Hiring Time
            </h4>
            <div className="text-2xl font-bold bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent mb-1">
              45-60 Days
            </div>
            <p className="text-xs text-gray-600">
              From application to offer for qualified candidates with right skills
            </p>
          </div>

          <div 
            className="rounded-lg p-4 border-2 border-[var(--brand-orange)]/20 overflow-hidden"
            style={{
              backgroundImage: 'linear-gradient(to right, var(--brand-orange-light) 0%, white 30%, white 70%, var(--brand-orange-light) 100%)',
              backgroundSize: '300% 100%',
              backgroundPosition: 'left',
              transition: 'background-position 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundPosition = 'right';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundPosition = 'left';
            }}
          >
            <Award className="h-6 w-6 text-[var(--brand-orange)] mb-3" />
            <h4 className="text-base font-bold text-gray-900 mb-1">
              Certification Impact
            </h4>
            <div className="text-2xl font-bold bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent mb-1">
              +30% Salary
            </div>
            <p className="text-xs text-gray-600">
              Certified AI professionals earn significantly higher packages
            </p>
          </div>

          <div 
            className="rounded-lg p-4 border-2 border-green-200 overflow-hidden"
            style={{
              backgroundImage: 'linear-gradient(to right, #f0fdf4 0%, white 30%, white 70%, #f0fdf4 100%)',
              backgroundSize: '300% 100%',
              backgroundPosition: 'left',
              transition: 'background-position 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundPosition = 'right';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundPosition = 'left';
            }}
          >
            <TrendingUp className="h-6 w-6 text-green-600 mb-3" />
            <h4 className="text-base font-bold text-gray-900 mb-1">
              Job Market Growth
            </h4>
            <div className="text-2xl font-bold bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent mb-1">
              250% by 2027
            </div>
            <p className="text-xs text-gray-600">
              AI job openings projected to triple in the next 18 months
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
