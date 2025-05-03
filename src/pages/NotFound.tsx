
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedText from "../components/AnimatedText";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <AnimatedText 
              text="404" 
              className="text-8xl font-bold text-brand-purple" 
              animation="scale-in"
            />
          </div>
          
          <AnimatedText 
            text="Page Not Found" 
            className="text-3xl font-bold text-brand-blue mb-6" 
            animation="fade-in"
            delay={200}
          />
          
          <div className="mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <p className="text-lg text-gray-600 mb-2">
              We couldn't find the page you were looking for.
            </p>
            <p className="text-gray-600">
              The page might have been moved, deleted, or perhaps the URL was mistyped.
            </p>
          </div>
          
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <Link to="/">
              <Button className="flex items-center gap-2 bg-brand-blue hover:bg-brand-blue/90 text-white">
                <ArrowLeft size={16} />
                Return to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
