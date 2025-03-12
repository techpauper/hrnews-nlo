
import { useParams, Link } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import ArticleCard from "@/components/ArticleCard";
import { getArticlesByCategory, getCategoryById } from "@/data/articles";

const Category = () => {
  const { id } = useParams<{ id: string }>();
  const category = id ? getCategoryById(id) : undefined;
  const articles = id ? getArticlesByCategory(id) : [];
  
  if (!category) {
    return (
      <MainLayout title="Category Not Found">
        <div className="newspaper-container py-16 text-center">
          <h1 className="newspaper-title mb-4">Category Not Found</h1>
          <p className="text-lg mb-8">The category you're looking for doesn't exist.</p>
          <Link 
            to="/" 
            className="inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </MainLayout>
    );
  }
  
  return (
    <MainLayout title={category.name}>
      <div className="newspaper-container py-10">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="newspaper-title">{category.name}</h1>
            <p className="newspaper-subtitle mt-4">{category.description}</p>
          </header>
          
          {articles.length > 0 ? (
            <div className="space-y-10">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} featured />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-lg text-gray-600">No articles found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Category;
