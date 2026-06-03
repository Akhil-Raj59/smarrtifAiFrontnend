import { useState } from "react";
import { BlogHero } from "../components/BlogHero";
import { BlogCategories } from "../components/BlogCategories";
import { FeaturedPost } from "../components/FeaturedPost";
import { BlogGrid } from "../components/BlogGrid";
import { BlogNewsletter } from "../components/BlogNewsletter";

export const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="bg-white">
      <BlogHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <BlogCategories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <FeaturedPost />
      <BlogGrid selectedCategory={selectedCategory} />
      <BlogNewsletter />
    </div>
  );
};
