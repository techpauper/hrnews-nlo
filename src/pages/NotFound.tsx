
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import MainLayout from "@/layouts/MainLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout title="Page Not Found">
      <div className="newspaper-container py-16 text-center">
        <h1 className="newspaper-title mb-4">404</h1>
        <p className="newspaper-subtitle mb-8">Oops! The page you're looking for doesn't exist.</p>
        <Link 
          to="/" 
          className="inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </MainLayout>
  );
};

export default NotFound;
