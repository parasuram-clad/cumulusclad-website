import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Home, ArrowLeft, Construction } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center section-padding">
        <div className="text-center space-y-8 max-w-2xl mx-auto">
          {/* Icon */}
          <div className="w-32 h-32 bg-luxury-red/10 rounded-3xl flex items-center justify-center mx-auto animate-bounce">
            <Construction className="h-16 w-16 text-luxury-red" />
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold text-luxury-red font-space-grotesk">
                404
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold text-charcoal">
                Page Under Construction
              </h2>
            </div>
            
            <p className="text-xl text-dark-gray leading-relaxed">
              We're building something amazing for this page. Our team is working 
              hard to deliver the best experience for you.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-luxury">
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Go to Home
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="btn-luxury-outline">
              <button onClick={() => window.history.back()}>
                <ArrowLeft className="mr-2 h-5 w-5" />
                Go Back
              </button>
            </Button>
          </div>

          {/* Additional Info */}
          <div className="pt-8 border-t border-medium-gray/30">
            <p className="text-sm text-dark-gray">
              Need immediate assistance? Contact us at{' '}
              <a 
                href="mailto:hello@cumulusclad.com" 
                className="text-luxury-red hover:underline transition-colors duration-medium"
              >
                hello@cumulusclad.com
              </a>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
