
import { Link } from "react-router-dom";
import { categories } from "@/data/articles";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-10">
      <div className="newspaper-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">The Homeowner's Chronicle</h3>
            <p className="text-gray-600 mb-4">
              Providing homeowners with valuable information about their rights, 
              responsibilities, and resources to protect their most valuable asset.
            </p>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} The Homeowner's Chronicle. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link 
                    to={`/category/${category.id}`}
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-black transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-black transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-black transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-black transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
