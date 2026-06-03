import { MapPin, Clock, IndianRupee } from "lucide-react";

const openPositions = [
  {
    title: "Senior AI/ML Mentor",
    department: "Education",
    location: "Bangalore / Remote",
    type: "Full-time",
    experience: "5-8 years",
    salary: "₹15-25 LPA",
    description: "Guide students through their AI learning journey. Conduct live sessions, review projects, and provide career mentorship.",
    requirements: [
      "5+ years of hands-on ML/AI experience",
      "Experience with deep learning frameworks (TensorFlow/PyTorch)",
      "Excellent communication and teaching skills",
      "Prior mentoring or training experience preferred",
    ],
    skills: ["Python", "Machine Learning", "Deep Learning", "Teaching"],
  },
  {
    title: "LLM/Prompt Engineering Instructor",
    department: "Education",
    location: "Mumbai / Remote",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹12-20 LPA",
    description: "Develop and deliver curriculum for LLM and Prompt Engineering courses. Create hands-on projects and assessments.",
    requirements: [
      "3+ years working with LLMs (GPT, Claude, etc.)",
      "Experience with LangChain, vector databases",
      "Proven track record in curriculum development",
      "Passion for teaching and education",
    ],
    skills: ["LLMs", "Prompt Engineering", "RAG", "Curriculum Design"],
  },
  {
    title: "Content Creator - AI Education",
    department: "Content",
    location: "Remote",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹8-15 LPA",
    description: "Create engaging educational content including blogs, tutorials, videos, and course materials for AI learners.",
    requirements: [
      "Strong technical writing skills",
      "Understanding of AI/ML concepts",
      "Experience creating educational content",
      "Portfolio of published technical content",
    ],
    skills: ["Technical Writing", "AI/ML", "Video Production", "SEO"],
  },
  {
    title: "Full Stack Developer",
    department: "Technology",
    location: "Bangalore",
    type: "Full-time",
    experience: "3-6 years",
    salary: "₹12-22 LPA",
    description: "Build and maintain our learning management platform. Work on features that impact thousands of students.",
    requirements: [
      "3+ years of full-stack development experience",
      "Proficiency in React, Node.js, and databases",
      "Experience with cloud platforms (AWS/Azure)",
      "Understanding of EdTech products is a plus",
    ],
    skills: ["React", "Node.js", "PostgreSQL", "AWS", "TypeScript"],
  },
  {
    title: "Career Counselor - AI Roles",
    department: "Career Services",
    location: "Hyderabad / Remote",
    type: "Full-time",
    experience: "4-7 years",
    salary: "₹10-18 LPA",
    description: "Guide students in their career transition to AI roles. Conduct mock interviews, resume reviews, and job placement support.",
    requirements: [
      "4+ years in recruitment or career counseling",
      "Understanding of AI/ML job market",
      "Strong network with tech companies",
      "Excellent interpersonal skills",
    ],
    skills: ["Career Counseling", "Recruiting", "Interview Prep", "Networking"],
  },
  {
    title: "Marketing Manager - EdTech",
    department: "Marketing",
    location: "Mumbai",
    type: "Full-time",
    experience: "4-6 years",
    salary: "₹10-18 LPA",
    description: "Drive growth through digital marketing campaigns. Manage SEO, paid ads, content marketing, and social media.",
    requirements: [
      "4+ years of digital marketing experience",
      "Experience in EdTech or SaaS industry",
      "Proficiency in Google Ads, Facebook Ads, SEO",
      "Data-driven approach to marketing",
    ],
    skills: ["Digital Marketing", "SEO", "Paid Ads", "Analytics", "Content Marketing"],
  },
];

export const OpenPositions = () => {
  return (
    <section className="py-16 sm:py-24 bg-[var(--brand-gray-light)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
              Open Positions
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            {openPositions.length} opportunities to make an impact
          </p>
        </div>

        <div className="space-y-6">
          {openPositions.map((job, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 lg:p-8 hover:border-[var(--brand-red)] hover:shadow-xl transition-all group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[var(--brand-red-light)] text-[var(--brand-red)] text-xs font-semibold">
                      {job.department}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {job.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{job.description}</p>

                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <MapPin className="h-4 w-4 text-[var(--brand-orange)]" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Clock className="h-4 w-4 text-[var(--brand-orange)]" />
                      <span>{job.experience}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <IndianRupee className="h-4 w-4 text-[var(--brand-orange)]" />
                      <span>{job.salary}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                      Requirements:
                    </h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, rIndex) => (
                        <li key={rIndex} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-[var(--brand-red)] mt-1">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, sIndex) => (
                      <span
                        key={sIndex}
                        className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:w-48 flex-shrink-0">
                  <button className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white hover:shadow-lg transition-all font-semibold group-hover:scale-105">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
