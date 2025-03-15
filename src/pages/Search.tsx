
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import ArticleCard from "@/components/ArticleCard";
import { searchArticles } from "@/data/articles";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState(searchArticles(query));

  useEffect(() => {
    setResults(searchArticles(query));
  }, [query]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchQuery = formData.get("search") as string;
    setSearchParams({ q: searchQuery });
  };

  return (
    <MainLayout title={`Search: ${query}`}>
      <div className="newspaper-container py-10">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="newspaper-title mb-8">Search Articles</h1>
            
            <form onSubmit={handleSearch} className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  name="search"
                  placeholder="Search articles..."
                  defaultValue={query}
                  className="w-full border border-gray-300 rounded-md py-3 px-4 pr-12 focus:outline-none focus:ring-1 focus:ring-black"
                />
                <button 
                  type="submit" 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black"
                  aria-label="Search"
                >
                  <SearchIcon size={20} />
                </button>
              </div>
            </form>
            
            {query && (
              <p className="text-lg text-gray-600 mb-6">
                {results.length} {results.length === 1 ? 'result' : 'results'} for "{query}"
              </p>
            )}
          </header>
          
          {results.length > 0 ? (
            <div className="space-y-10">
              {results.map((article) => (
                <ArticleCard key={article.id} article={article} featured />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-lg text-gray-600">
                {query ? `No articles found matching "${query}".` : 'Enter a search term to find articles.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Search;
