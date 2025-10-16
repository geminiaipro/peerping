
import React from 'react';
import { UserPlusIcon, ActivityIcon, CreditCardIcon } from './icons';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <UserPlusIcon className="h-10 w-10 mb-4 text-cyan-400" />,
      title: '1. Join the Network',
      description: 'Sign up for free and add the services you want to monitor. A lightweight monitoring client is all you need to get started.'
    },
    {
      icon: <ActivityIcon className="h-10 w-10 mb-4 text-cyan-400" />,
      title: '2. Monitor Peers & Earn Credits',
      description: 'Your client automatically and securely monitors other services in the P2P network, earning you credits for every check performed.'
    },
    {
      icon: <CreditCardIcon className="h-10 w-10 mb-4 text-cyan-400" />,
      title: '3. Spend Credits on Your Services',
      description: 'Use your earned credits to have your own services monitored by multiple peers across the globe, ensuring accurate, decentralized uptime data.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-slate-900/70">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Simple, Powerful, Peer-to-Peer
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Our credit-based system is a self-sustaining ecosystem. The more you contribute, the more you benefit.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-start">
                {step.icon}
                <h3 className="text-xl font-bold text-white mt-2">{step.title}</h3>
                <p className="mt-2 text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
