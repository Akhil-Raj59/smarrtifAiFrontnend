import { Link } from "react-router-dom";
import { User, Calendar, Clock, ArrowRight } from "lucide-react";

const featuredPost = {
  title: "The Complete Guide to Transitioning into AI Careers in 2026",
  excerpt: "Everything you need to know about breaking into AI roles from non-technical backgrounds. Real success stories, salary insights, and step-by-step roadmap.",
  author: "Dr. Rajesh Kumar",
  date: "March 1, 2026",
  readTime: "12 min read",
  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
  category: "Career",
  views: "12.5K",
};

export const FeaturedPost = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Article</h2>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[var(--brand-red)] hover:shadow-2xl transition-all group">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="aspect-video lg:aspect-auto overflow-hidden bg-gray-100">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 rounded-full bg-[var(--brand-red-light)] text-[var(--brand-red)] text-xs font-semibold mb-4 w-fit">
                {featuredPost.category}
              </span>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {featuredPost.title}
              </h3>
              <p className="text-gray-600 mb-6 text-lg">{featuredPost.excerpt}</p>

              <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>

              <Link
                to="#"
                className="inline-flex items-center gap-2 text-[var(--brand-red)] group-hover:text-[var(--brand-orange)] font-semibold text-lg"
              >
                Read Full Article
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
