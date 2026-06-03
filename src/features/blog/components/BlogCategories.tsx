import { BookOpen, TrendingUp, Lightbulb, Code } from "lucide-react";

const categories = [
  { name: "all", label: "All Posts", icon: BookOpen },
  { name: "Career", label: "Career", icon: TrendingUp },
  { name: "LLM", label: "LLM & GPT", icon: Lightbulb },
  { name: "Tutorial", label: "Tutorials", icon: Code },
  { name: "MLOps", label: "MLOps", icon: null },
  { name: "AI Trends", label: "AI Trends", icon: null },
  { name: "Success Story", label: "Success Stories", icon: null },
];

interface BlogCategoriesProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export const BlogCategories = ({ selectedCategory, setSelectedCategory }: BlogCategoriesProps) => {
  return (
    <section className="py-8 border-b border-gray-200 sticky top-0 bg-white z-10 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                selectedCategory === cat.name
                  ? "bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat.icon && <cat.icon className="h-4 w-4" />}
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
