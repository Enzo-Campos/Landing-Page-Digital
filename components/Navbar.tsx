import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Soluções', href: '#solutions' },
    { name: 'Sites', href: '#sites' },
    { name: 'Social', href: '#social' },
    { name: 'SEO & GEO', href: '#seo' },
    { name: 'Tráfego', href: '#ads' },
    { name: 'Sobre', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/40 backdrop-blur-xl border-b border-white/10 py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <img className="max-w-[200px]" src="https://iblanco.com.br/wp-content/uploads/2023/08/NOVA-MARCA-IBLANCO-2023-BRANCO-LARANJA-HORIZONTAL.png" alt="" />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-sm font-medium text-gray-300 hover:text-brand-orange transition-colors tracking-wide shadow-black drop-shadow-md"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="group flex items-center gap-2 px-6 py-2.5 bg-brand-orange text-white hover:bg-white hover:text-brand-orange text-sm font-bold rounded-md transition-all duration-300 shadow-lg shadow-orange-900/20 hover:shadow-white/20 transform hover:-translate-y-0.5"
          >
            Agendar reunião
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-neutral-900/95 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-gray-300 hover:text-white py-3 border-b border-white/5 font-medium"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-brand-orange font-bold py-3 flex items-center gap-2">
            Agendar reunião <ArrowRight size={16} />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;