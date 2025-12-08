import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`fixed bottom-24 right-6 z-40 transition-all duration-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
      <button
        onClick={scrollToTop}
        className="group flex items-center justify-center w-12 h-12 rounded-full bg-[#232323] border border-white/10 text-white hover:bg-brand-orange hover:border-brand-orange shadow-lg transition-all duration-300"
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
      </button>
    </div>
  );
};

export default ScrollToTop;