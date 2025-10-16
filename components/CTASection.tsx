
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="relative isolate overflow-hidden bg-slate-800/80 px-6 pt-16 text-center shadow-2xl rounded-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="absolute -top-24 -left-1/2 -z-10 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#00d4ff] to-[#80ff89] opacity-20 blur-3xl"></div>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Stop Paying for Uptime Monitoring.
              <br />
              Join the Peer-Powered Future.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Get started in minutes and join a community dedicated to a free and open internet.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a href="#" className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-3 px-8 rounded-lg text-lg transition-transform duration-300 hover:scale-105">
                Sign Up for Free
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
