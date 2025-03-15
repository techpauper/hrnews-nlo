
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Search, Home } from "lucide-react";
import { useState } from "react";
import { categories } from "@/data/articles";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="newspaper-container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="transform transition-transform hover:scale-[1.01] flex items-center">
            <div className="flex items-center justify-center bg-primary rounded-lg p-2 mr-2">
              <Home className="h-6 w-6 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <span className="font-serif font-bold text-xl tracking-tight uppercase">
              Homeowners Rights
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-black transition-colors font-sans text-sm uppercase tracking-wider"
            >
              Home
            </Link>
            
            {categories.map((category) => (
              <Link 
                key={category.id}
                to={`/category/${category.id}`}
                className="text-gray-700 hover:text-black transition-colors font-sans text-sm uppercase tracking-wider"
              >
                {category.name}
              </Link>
            ))}
            
            <div className="relative">
              <form onSubmit={handleSearchSubmit} className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-0 opacity-0 focus:w-44 focus:opacity-100 border-b border-transparent focus:border-gray-300 transition-all duration-300 outline-none px-2 py-1"
                />
                <button 
                  type="submit"
                  className="text-gray-700 hover:text-black transition-colors"
                  aria-label="Search"
                >
                  <Search size={20} />
                </button>
              </form>
            </div>
          </div>
          
          <button 
            className="md:hidden text-gray-700" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 border-t border-gray-200 animate-slide-in">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-black transition-colors font-sans text-sm uppercase tracking-wider"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            {categories.map((category) => (
              <Link 
                key={category.id}
                to={`/category/${category.id}`}
                className="text-gray-700 hover:text-black transition-colors font-sans text-sm uppercase tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
            
            <form onSubmit={handleSearchSubmit} className="relative mt-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full border border-gray-300 rounded-md py-2 px-4 pr-10 focus:outline-none focus:ring-1 focus:ring-black"
              />
              <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search size={18} />
              </button>
            </form>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
