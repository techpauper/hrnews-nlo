
import { Link } from "react-router-dom";
import { Article, getCategoryById } from "@/data/articles";
import CategoryChip from "./CategoryChip";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

const ArticleCard = ({ article, featured = false }: ArticleCardProps) => {
  const category = getCategoryById(article.categoryId);
  
  if (featured) {
    return (
      <div className="group relative overflow-hidden border-b border-gray-200 pb-10 mb-10">
        <div className="flex flex-col md:flex-row gap-6">
          {article.imageUrl && (
            <Link to={`/article/${article.id}`} className="md:w-1/2 overflow-hidden">
              <img 
                src={article.imageUrl} 
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
          )}
          
          <div className={`${article.imageUrl ? 'md:w-1/2' : 'w-full'} space-y-4`}>
            {category && (
              <CategoryChip id={category.id} name={category.name} />
            )}
            
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mt-2">
              <Link to={`/article/${article.id}`} className="hover:text-gray-800 transition-colors">
                {article.title}
              </Link>
            </h2>
            
            {article.subtitle && (
              <p className="font-serif text-xl text-gray-700">{article.subtitle}</p>
            )}
            
            <p className="text-sm uppercase tracking-wider text-gray-500">
              {article.date} • by {article.author}
            </p>
            
            <p className="font-sans text-base md:text-lg text-gray-700 leading-relaxed">
              {article.excerpt}
            </p>
            
            <Link 
              to={`/article/${article.id}`}
              className="inline-block mt-4 font-serif italic text-black hover:underline"
            >
              Continue Reading →
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <article className="group border-b border-gray-200 pb-8 mb-8">
      <div className="space-y-3">
        {category && (
          <CategoryChip id={category.id} name={category.name} small />
        )}
        
        <h3 className="font-serif text-xl font-bold leading-tight">
          <Link to={`/article/${article.id}`} className="hover:text-gray-800 transition-colors">
            {article.title}
          </Link>
        </h3>
        
        <p className="text-xs uppercase tracking-wider text-gray-500">
          {article.date} • by {article.author}
        </p>
        
        <p className="font-sans text-gray-700 line-clamp-3">
          {article.excerpt}
        </p>
        
        <Link 
          to={`/article/${article.id}`}
          className="inline-block font-serif italic text-black hover:underline text-sm"
        >
          Continue Reading →
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
