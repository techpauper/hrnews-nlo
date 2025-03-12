
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const MainLayout = ({ children, title }: MainLayoutProps) => {
  useEffect(() => {
    // Update page title
    document.title = title 
      ? `${title} | The Homeowner's Chronicle` 
      : "The Homeowner's Chronicle";
    
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="flex flex-col min-h-screen page-transition">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
