import { Linkedin, UserCheck, Code } from "lucide-react";

const hrTeam = [
  {
    name: "Samaggi Singh",
    role: "HR Manager",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    bio: "Samaggi is the HR Manager at SMARRTIF AI leading HR operations, policy development, talent acquisition, and employee management initiatives. With a structured and people-centric approach, Samaggi focuses on building efficient workplace systems, strengthening organizational culture, and supporting the company’s overall growth and operational excellence.",
    linkedin: "https://www.linkedin.com/in/samaggi",
  },
  {
    name: "Pallavi Parasher",
    role: "HR Executive",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    bio: "Pallavi is an accomplished HR Executive leading Recruitment, Talent Acquisition, and Employee Management functions. She specializes in identifying top talent, streamlining hiring processes, and fostering a productive work environment.",
    linkedin: "https://www.linkedin.com/in/pallavi-parasher-6b7562223",
  },
];

const techTeam = [
  {
    name: "Akshat Arya",
    role: "AI Tool Developer Intern",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Motivated AI Tool Developer Intern at Smarrtif AI with a strong foundation in AI/ML. Focused on designing, testing, and deploying cutting-edge AI tools to solve real-world problems and enhance product ecosystems at SmarrtifAI.",
    linkedin: "https://www.linkedin.com/in/akshat--arya/",
  },
  {
    name: "Rishit Thakur",
    role: "Web Developer Intern",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
    bio: "Web Developer Intern with a strong foundation in modern web technologies and responsive design. Focused on building, testing, and deploying scalable web applications that deliver seamless user experiences and solve real-world problems through innovative digital solutions.",
    linkedin: "https://www.linkedin.com/in/iamrishit8/",
  },
  {
    name: "Aaryan Khattar",
    role: "General Manager Intern",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bio: "General Manager Intern focused on KPI tracking, reporting, and cross-team coordination to support effective business operations.",
    linkedin: "https://www.linkedin.com/in/aaryan-khattar-6a6ba62a8",
  },
  {
    name: "Naman Mudgal",
    role: "Associate Consultant Intern",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Naman is an Associate Consultant Intern at SMARRTIF AI, where he works on turning data into practical solutions for real business problems. He collaborates on AI-driven projects, focusing on extracting insights and supporting decision-making. With a strong interest in machine learning, he enjoys applying technical skills to create meaningful, real-world impact.",
    linkedin: "https://www.linkedin.com/in/naman-mudgal/",
  },
];

const MemberCard = ({ member, borderColor }: any) => {
  const colorMap: Record<string, { text: string; border: string }> = {
    "[var(--brand-red)]": { text: "text-[var(--brand-red)]", border: "hover:border-[var(--brand-red)]" },
    "[var(--brand-orange)]": { text: "text-[var(--brand-orange)]", border: "hover:border-[var(--brand-orange)]" },
  };
  const colors = colorMap[borderColor] || { text: "text-gray-600", border: "hover:border-gray-300" };

  return (
    <div className={`bg-white border-2 border-gray-200 rounded-xl overflow-hidden ${colors.border} hover:shadow-xl transition-all duration-300 group flex flex-col h-full text-center items-center justify-between`}>
      <div className="w-full flex flex-col h-full">
        <div className="aspect-square overflow-hidden bg-gray-100 flex-shrink-0">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6 flex flex-col items-center flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-1">{member.name}</h3>
          <div className={`${colors.text} font-semibold mb-4 line-clamp-1`}>{member.role}</div>
          <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-[280px] line-clamp-5 flex-1">{member.bio}</p>
        </div>
        <div className="px-6 pb-6 w-full flex justify-center mt-auto flex-shrink-0">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#0077B5] text-white hover:bg-[#006399] hover:scale-[1.02] active:scale-95 transition-all text-sm font-semibold w-full max-w-[200px]"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export const TeamDepartments = () => {
  return (
    <div className="space-y-16 py-16 sm:py-24">
      {/* HR Team */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="p-3 rounded-xl bg-[var(--brand-red-light)] mb-4">
            <UserCheck className="h-8 w-8 text-[var(--brand-red)]" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2">
              <span className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
                Human Resources
              </span>
            </h2>
            <p className="text-gray-600">Building and nurturing our talent</p>
          </div>
        </div>
        {/* Centered cards layout for Human Resources */}
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {hrTeam.map((member, i) => (
            <div key={i} className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] max-w-sm">
              <MemberCard member={member} borderColor="[var(--brand-red)]" />
            </div>
          ))}
        </div>
      </section>

      {/* Tech Team */}
      <section className="bg-[var(--brand-gray-light)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="p-3 rounded-xl bg-[var(--brand-orange-light)] mb-4">
              <Code className="h-8 w-8 text-[var(--brand-orange)]" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">
                <span className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
                  Technology Team
                </span>
              </h2>
              <p className="text-gray-600">Building the future of AI education</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techTeam.map((member, i) => (
              <MemberCard key={i} member={member} borderColor="[var(--brand-orange)]" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
