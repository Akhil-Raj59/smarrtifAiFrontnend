import { Link } from "react-router-dom";
import { User, Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Understanding Large Language Models: A Beginner's Guide",
    excerpt: "Demystifying LLMs, GPT models, and how they're transforming industries. Learn the fundamentals without complex math.",
    author: "Anjali Gupta",
    date: "February 28, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1655635949384-f737c5133dfe?w=800&h=400&fit=crop",
    category: "LLM",
    views: "8.2K",
  },
  {
    title: "10 MLOps Best Practices Every Data Scientist Should Know",
    excerpt: "Production-ready ML deployment strategies used by Netflix, Uber, and Airbnb. Practical tips you can implement today.",
    author: "Karthik Menon",
    date: "February 25, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=400&fit=crop",
    category: "MLOps",
    views: "6.8K",
  },
  {
    title: "Prompt Engineering Techniques That Actually Work",
    excerpt: "Master the art of writing effective prompts for ChatGPT, Claude, and other AI models with these proven techniques.",
    author: "Dr. Rajesh Kumar",
    date: "February 22, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1676277791608-f3ee1e0c1bb9?w=800&h=400&fit=crop",
    category: "LLM",
    views: "15.3K",
  },
  {
    title: "Real Salaries in AI: What You'll Actually Earn in India",
    excerpt: "Comprehensive salary breakdown for AI roles across experience levels, cities, and companies. Data from 500+ professionals.",
    author: "Priya Mehta",
    date: "February 20, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=400&fit=crop",
    category: "Career",
    views: "22.1K",
  },
  {
    title: "Building Your First RAG System with LangChain",
    excerpt: "Step-by-step tutorial on creating Retrieval Augmented Generation systems. Includes code examples and best practices.",
    author: "Anjali Gupta",
    date: "February 18, 2026",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    category: "Tutorial",
    views: "9.4K",
  },
  {
    title: "Computer Vision in 2026: Trends and Opportunities",
    excerpt: "Latest developments in CV, from autonomous vehicles to medical imaging. Where the opportunities are.",
    author: "Kavya Iyer",
    date: "February 15, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=400&fit=crop",
    category: "AI Trends",
    views: "5.7K",
  },
  {
    title: "How I Went from Marketing to AI Engineer in 6 Months",
    excerpt: "Success story: My journey from non-technical background to landing a ₹18 LPA AI role. Resources and timeline included.",
    author: "Rahul Sharma",
    date: "February 12, 2026",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
    category: "Success Story",
    views: "18.9K",
  },
  {
    title: "AI Tools Every Professional Should Know in 2026",
    excerpt: "Comprehensive list of AI tools for productivity, content creation, coding, and automation. Most are free!",
    author: "Vikram Patel",
    date: "February 10, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop",
    category: "Tools",
    views: "11.2K",
  },
  {
    title: "Deep Learning Fundamentals Explained Simply",
    excerpt: "Neural networks, backpropagation, and gradient descent explained without intimidating math equations.",
    author: "Sneha Reddy",
    date: "February 8, 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=800&h=400&fit=crop",
    category: "ML Basics",
    views: "7.6K",
  },
];

interface BlogGridProps {
  selectedCategory: string;
}

export const BlogGrid = ({ selectedCategory }: BlogGridProps) => {
  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <section className="py-16 bg-[var(--brand-gray-light)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Latest Articles</h2>
          <p className="text-gray-600">
            {filteredPosts.length} article
            {filteredPosts.length !== 1 ? "s" : ""} found
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all group"
            >
              <div className="aspect-video overflow-hidden bg-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-[var(--brand-orange-light)] text-[var(--brand-orange)] text-xs font-semibold">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-600">{post.views} views</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-3 mb-4 text-xs text-gray-600 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600 flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                  <Link
                    to="#"
                    className="inline-flex items-center gap-1 text-[var(--brand-red)] group-hover:text-[var(--brand-orange)] font-semibold text-sm"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 rounded-lg border-2 border-gray-300 text-gray-900 hover:border-[var(--brand-red)] hover:text-[var(--brand-red)] transition-all font-semibold">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
};
