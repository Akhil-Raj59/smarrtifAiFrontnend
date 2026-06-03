import { Download, Video, FileText } from "lucide-react";

const learningMaterials = [
  {
    title: "Week 8: Deep Learning Architectures",
    type: "PDF",
    size: "2.4 MB",
    downloadLink: "#",
  },
  {
    title: "PyTorch Tutorial Video Series",
    type: "Video",
    duration: "3h 45m",
    downloadLink: "#",
  },
  {
    title: "GPT-4 API Documentation",
    type: "PDF",
    size: "1.8 MB",
    downloadLink: "#",
  },
  {
    title: "Code Templates & Examples",
    type: "ZIP",
    size: "15.2 MB",
    downloadLink: "#",
  },
];

export const LearningMaterials = () => {
  return (
    <section className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Download className="h-6 w-6 text-[var(--brand-red)]" />
        Learning Materials
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {learningMaterials.map((material, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 hover:border-[var(--brand-red)] transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-[var(--brand-red-light)]">
                {material.type === "Video" ? (
                  <Video className="h-5 w-5 text-[var(--brand-red)]" />
                ) : (
                  <FileText className="h-5 w-5 text-[var(--brand-red)]" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {material.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {material.type} •{" "}
                  {material.size || material.duration}
                </p>
              </div>
              <button className="p-2 hover:bg-[var(--brand-red-light)] rounded-lg transition-colors">
                <Download className="h-5 w-5 text-[var(--brand-red)]" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
