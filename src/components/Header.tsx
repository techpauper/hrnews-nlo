
import { Link } from "react-router-dom";
import { Menu, X, Home } from "lucide-react";
import { useState } from "react";
import { categories } from "@/data/articles";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            {/* Home link removed from desktop view */}
            
            {categories.map((category) => (
              <Link 
                key={category.id}
                to={`/category/${category.id}`}
                className="text-gray-700 hover:text-black transition-colors font-sans text-sm uppercase tracking-wider"
              >
                {category.name}
              </Link>
            ))}
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
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
