import { BookOpen, Search } from "lucide-react";

interface BlogHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const BlogHero = ({ searchQuery, setSearchQuery }: BlogHeroProps) => {
  return (
    <section className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
            <BookOpen className="h-4 w-4" />
            <span className="text-sm font-semibold">Blog & Resources</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Learn AI, One Article at a Time
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Expert insights, tutorials, career advice, and success stories from the
            world of AI
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
