
import { useParams, Link } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import CategoryChip from "@/components/CategoryChip";
import ArticleCard from "@/components/ArticleCard";
import { getArticleById, getCategoryById, getRecentArticles } from "@/data/articles";

const Article = () => {
  const { id } = useParams<{ id: string }>();
  const article = id ? getArticleById(id) : undefined;
  const category = article ? getCategoryById(article.categoryId) : undefined;
  const relatedArticles = getRecentArticles(3);
  
  if (!article) {
    return (
      <MainLayout title="Article Not Found">
        <div className="newspaper-container py-16 text-center">
          <h1 className="newspaper-title mb-4">Article Not Found</h1>
          <p className="text-lg mb-8">The article you're looking for doesn't exist.</p>
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
    <MainLayout title={article.title}>
      <article className="newspaper-container py-10">
        <div className="max-w-4xl mx-auto">
          {/* Category and metadata */}
          <div className="mb-6">
            {category && (
              <CategoryChip id={category.id} name={category.name} />
            )}
            <h1 className="newspaper-title mt-4">{article.title}</h1>
            {article.subtitle && (
              <h2 className="newspaper-subtitle">{article.subtitle}</h2>
            )}
            <p className="newspaper-date">
              {article.date} • by {article.author}
            </p>
          </div>
          
          {/* Featured image */}
          {article.imageUrl && (
            <div className="my-8">
              <img 
                src={article.imageUrl} 
                alt={article.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
          
          {/* Article content */}
          <div 
            className="article-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
        
        {/* Related articles */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-serif font-bold mb-6">More Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((relatedArticle) => (
              <ArticleCard key={relatedArticle.id} article={relatedArticle} />
            ))}
          </div>
        </div>
      </article>
    </MainLayout>
  );
};

export default Article;
