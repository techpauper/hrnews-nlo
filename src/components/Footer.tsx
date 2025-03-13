
import { Link } from "react-router-dom";
import { Home, ScrollText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-10">
      <div className="newspaper-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center bg-primary rounded-lg p-2 mr-2">
                <Home className="h-5 w-5 text-primary-foreground" />
                <ScrollText className="h-5 w-5 text-primary-foreground ml-1" />
              </div>
              <span className="font-serif font-bold text-lg tracking-tight">
                Homeowners Rights
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Providing homeowners with valuable information about their rights, 
              responsibilities, and resources to protect their most valuable asset.
            </p>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Homeowners Rights. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Info</h3>
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
