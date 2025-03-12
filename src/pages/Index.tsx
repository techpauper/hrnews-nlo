
import MainLayout from "@/layouts/MainLayout";
import ArticleCard from "@/components/ArticleCard";
import CategoryChip from "@/components/CategoryChip";
import { getFeaturedArticles, getRecentArticles, categories } from "@/data/articles";

const Index = () => {
  const featuredArticles = getFeaturedArticles();
  const recentArticles = getRecentArticles(4);
  
  return (
    <MainLayout>
      <section className="newspaper-container py-10">
        {/* Featured Articles */}
        <div className="mb-16">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} featured />
          ))}
        </div>
        
        {/* Recent Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {recentArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        
        {/* Categories Section */}
        <div className="border-t border-gray-200 pt-10">
          <h2 className="font-serif text-2xl font-bold mb-6">Browse by Topic</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div key={category.id} className="border border-gray-200 p-6 hover:shadow-sm transition-shadow">
                <CategoryChip id={category.id} name={category.name} />
                <p className="mt-4 text-gray-700">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
