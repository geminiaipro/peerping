
import React from 'react';
import { ActivityIcon, CreditCardIcon } from './icons';

const CreditSystem: React.FC = () => {
  return (
    <section id="credits" className="py-20 sm:py-24 bg-slate-900/70">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">The Heartbeat of the Network: Credits</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Credits are the currency of PeerPing. Our system is designed to be fair and balanced, rewarding participation to create a thriving, free monitoring ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Earn Credits */}
          <div className="bg-slate-800/50 p-8 rounded-xl border border-emerald-500/30 flex flex-col">
            <div className="flex items-center space-x-4 mb-4">
              <ActivityIcon className="h-10 w-10 text-emerald-400" />
              <h3 className="text-2xl font-bold text-white">How You Earn Credits</h3>
            </div>
            <p className="text-gray-400 mb-6 flex-grow">
              Your monitoring client runs in the background, performing checks on other network participants. You are rewarded for your contribution.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <div className="bg-emerald-500/20 text-emerald-400 rounded-full h-6 w-6 flex items-center justify-center font-bold text-xs">✓</div>
                <span className="text-gray-300">Monitor other servers to earn a steady stream of credits.</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="bg-emerald-500/20 text-emerald-400 rounded-full h-6 w-6 flex items-center justify-center font-bold text-xs">✓</div>
                <span className="text-gray-300">Higher uptime and reliability from your node earns bonus credits.</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="bg-emerald-500/20 text-emerald-400 rounded-full h-6 w-6 flex items-center justify-center font-bold text-xs">✓</div>
                <span className="text-gray-300">Credits are deposited to your account in real-time.</span>
              </li>
            </ul>
          </div>
          
          {/* Spend Credits */}
          <div className="bg-slate-800/50 p-8 rounded-xl border border-cyan-500/30 flex flex-col">
            <div className="flex items-center space-x-4 mb-4">
              <CreditCardIcon className="h-10 w-10 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">How You Spend Credits</h3>
            </div>
            <p className="text-gray-400 mb-6 flex-grow">
              When you add a service to be monitored, you simply set your desired check frequency, and credits are automatically deducted from your balance.
            </p>
             <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <div className="bg-cyan-500/20 text-cyan-400 rounded-full h-6 w-6 flex items-center justify-center font-bold text-xs">✓</div>
                <span className="text-gray-300">Pay-per-check model ensures you only use credits for what you need.</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="bg-cyan-500/20 text-cyan-400 rounded-full h-6 w-6 flex items-center justify-center font-bold text-xs">✓</div>
                 <span className="text-gray-300">Costs are transparent: 1 check @ 5-sec interval costs X credits.</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="bg-cyan-500/20 text-cyan-400 rounded-full h-6 w-6 flex items-center justify-center font-bold text-xs">✓</div>
                <span className="text-gray-300">Run out of credits? Your monitoring is paused, not deleted. Earn more to resume.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditSystem;
