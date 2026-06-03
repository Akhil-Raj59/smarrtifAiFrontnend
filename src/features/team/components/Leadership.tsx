import { Award, Linkedin } from "lucide-react";

const founder = {
  name: "Dr. Rajesh Kumar",
  role: "Founder & CEO",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  bio: "Visionary entrepreneur with 15+ years of experience in AI and EdTech. Former AI Lead at Google with a PhD in Computer Science from IIT Delhi. Founded SMARRTIF AI with the mission to democratize AI education and help non-technical professionals transition into high-paying AI careers. Has mentored over 500 professionals and built AI solutions used by millions globally.",
  expertise: ["AI Strategy", "Machine Learning", "EdTech Innovation", "Team Building"],
  linkedin: "https://linkedin.com/in/rajeshkumar",
  achievements: [
    "15+ years in AI & ML",
    "Ex-Google AI Lead",
    "PhD from IIT Delhi",
    "500+ professionals mentored"
  ]
};

export const Leadership = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-[var(--brand-red-light)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-[var(--brand-red)] mb-4">
            <Award className="h-4 w-4 text-[var(--brand-red)]" />
            <span className="text-sm font-semibold text-[var(--brand-red)]">Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
              Founder & CEO
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leading the vision to democratize AI education and empower professionals worldwide
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white border-2 border-[var(--brand-red)] rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-square md:aspect-auto overflow-hidden bg-gradient-to-br from-[var(--brand-red-light)] to-[var(--brand-orange-light)]">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {founder.name}
                </h3>
                <div className="text-xl text-[var(--brand-red)] font-semibold mb-6">
                  {founder.role}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {founder.bio}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {founder.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white text-sm font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                  {founder.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Award className="h-4 w-4 text-[var(--brand-orange)] flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0077B5] text-white hover:bg-[#006399] transition-colors w-fit"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="font-semibold">Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
