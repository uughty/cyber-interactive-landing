import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#value-proposition', label: 'Solutions' },
    { href: '#why-choose-us', label: 'Why Us' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50'
        : 'bg-white/90 backdrop-blur-md'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8"> 
        <div className="flex justify-between items-center h-16 md:h-20">
         
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('#home')}>
            <div className="relative">
              <div className="relative bg-white rounded-xl p-2 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-100">
              
                <img
                  src="src/assets/WhatsApp Image 2025-05-28 at 15.24.03.jpeg"
                  alt="Cyber Interactive Logo"
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/40x40/E0E0E0/333333?text=Logo'; }}
                />
                <div className="absolute inset-0 bg-blue-400/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                Cyber Interactive
              </span>
              <span className="text-xs text-gray-500 hidden md:block font-medium">
                Interactive Defense, Proactive Security
              </span>
            </div>
          </div>

         
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium group py-3 px-4 rounded-lg hover:bg-blue-50/50"
              >
                {item.label}
                <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-300 group-hover:w-6 rounded-full"></span>
              </button>
            ))}

           
            <button
              onClick={() => scrollToSection('#contact')}
              className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ml-4 overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span>Get Started</span>
              </span>
             
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>

          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative p-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 rounded-lg hover:bg-blue-50/50"
          >
            <div className="relative">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </div>
          </button>
        </div>

        
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200/50 shadow-xl rounded-b-2xl py-4 animate-slide-down"> 
            <div className="space-y-1">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 rounded-lg"
                  style={{ animationDelay: `${index * 0.05}s` }} 

                >
                  {item.label}
                </button>
              ))}
              <div className="px-6 pt-4">
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Zap className="w-4 h-4" />
                  <span>Get Started</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
