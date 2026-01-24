
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-32">
       <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-200">
          Uptime Monitoring, <br />
          <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text">Completely Free. Forever.</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-400">
          Join a decentralized network where you earn credits by monitoring peers. Use those credits to get your own servers monitored from around the globe. No catch, no credit card.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/login" className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-3 px-8 rounded-lg text-lg transition-transform duration-300 hover:scale-105">
            Start Monitoring in 60 Seconds
          </a>
          <a href="#how-it-works" className="w-full sm:w-auto bg-slate-700/50 hover:bg-slate-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
