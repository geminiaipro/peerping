
import React from 'react';
import { LogoIcon } from './icons';

const Footer: React.FC = () => {
  const links = ['How It Works', 'Features', 'Credits', 'FAQ', 'Contact'];

  return (
    <footer className="bg-slate-900 border-t border-slate-700/50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <a href="#" className="flex items-center space-x-2 text-xl font-bold text-white">
            <LogoIcon className="h-7 w-7 text-cyan-400" />
            <span>PeerPing</span>
          </a>
          <div className="flex flex-wrap justify-center mt-4 md:mt-0">
            {links.map((link, index) => (
              <a key={index} href={`#${link.toLowerCase().replace(' ', '-')}`} className="px-4 text-gray-400 hover:text-cyan-400 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
        <hr className="my-6 border-slate-700" />
        <p className="text-center text-gray-500">
          &copy; {new Date().getFullYear()} PeerPing. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
