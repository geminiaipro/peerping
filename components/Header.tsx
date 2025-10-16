
import React, { useState } from 'react';
import { LogoIcon } from './icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'Credits', href: '#credits' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2 text-2xl font-bold text-white">
            <LogoIcon className="h-8 w-8 text-cyan-400" />
            <span>PeerPing</span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                {link.name}
              </a>
            ))}
          </div>
          <div className="hidden md:block">
            <a href="#" className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-2 px-4 rounded-lg transition-transform duration-300 hover:scale-105">
              Get Started Free
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 block text-center py-2">
                  {link.name}
                </a>
              ))}
              <a href="#" className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-2 px-4 rounded-lg transition-transform duration-300 hover:scale-105 text-center">
                Get Started Free
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
