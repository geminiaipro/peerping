
import React from 'react';
import { ZapIcon, GlobeIcon, AlertTriangleIcon, InfinityIcon, ShieldIcon, BarChartIcon } from './icons';

const Features: React.FC = () => {
  const features = [
    {
      icon: <InfinityIcon className="h-8 w-8 text-cyan-400" />,
      title: 'Truly Free Monitoring',
      description: 'No tiers, no trials, no credit cards. Our P2P credit system powers a genuinely free service for everyone.'
    },
    {
      icon: <ZapIcon className="h-8 w-8 text-cyan-400" />,
      title: 'High-Frequency Pinging',
      description: 'Monitor your services with checks as frequent as every 5 seconds for near-instant downtime detection.'
    },
    {
      icon: <GlobeIcon className="h-8 w-8 text-cyan-400" />,
      title: 'Global P2P Network',
      description: 'Get your services checked from multiple, geographically diverse nodes to avoid false positives and regional outages.'
    },
    {
      icon: <AlertTriangleIcon className="h-8 w-8 text-cyan-400" />,
      title: 'Instant, Configurable Alerts',
      description: 'Receive immediate notifications via Email, Slack, Discord, and Webhooks the moment an issue is detected.'
    },
    {
      icon: <ShieldIcon className="h-8 w-8 text-cyan-400" />,
      title: 'Decentralized & Resilient',
      description: 'With no central point of failure, our network is inherently more robust and reliable than traditional services.'
    },
    {
      icon: <BarChartIcon className="h-8 w-8 text-cyan-400" />,
      title: 'Scalable By Design',
      description: 'Need to monitor more services? Simply contribute more to the network to earn the credits you need. No limits.'
    }
  ];

  return (
    <section id="features" className="py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Everything You Need, Nothing You Don't
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            PeerPing offers enterprise-grade features powered by the community.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-slate-800 p-3 rounded-lg">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                <p className="mt-1 text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
