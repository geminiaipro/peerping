
import React from 'react';

const FAQItem: React.FC<{ question: string; children: React.ReactNode }> = ({ question, children }) => (
  <details className="group border-b border-slate-700 py-4">
    <summary className="flex items-center justify-between cursor-pointer list-none">
      <span className="text-lg font-medium text-gray-200 group-hover:text-cyan-400 transition-colors">
        {question}
      </span>
      <span className="group-open:rotate-180 transition-transform">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </span>
    </summary>
    <div className="mt-4 text-gray-400">
      {children}
    </div>
  </details>
);

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Have questions? We have answers. If you don't see your question here, feel free to reach out.
          </p>
        </div>
        <div>
          <FAQItem question="Is this really, completely free? What's the catch?">
            Yes, it is 100% free. The "catch" is that you contribute your computer's idle resources to monitor other users on the network. This P2P model allows us to operate without charging any fees. It's a community-powered service where everyone benefits.
          </FAQItem>
          <FAQItem question="How is my data and privacy protected?">
            Our monitoring client is open-source and sandboxed. It only performs external HTTP/TCP checks and has no access to your file system or sensitive data. The only information shared is the result of the uptime check (e.g., success/failure, response time).
          </FAQItem>
           <FAQItem question="What if the peers monitoring me go offline?">
            This is the beauty of a decentralized network. Your service is never monitored by just one or two peers. We assign a pool of diverse peers to monitor each service. If some go offline, others are automatically rotated in to ensure continuous and reliable monitoring.
          </FAQItem>
          <FAQItem question="What types of services can I monitor?">
            You can monitor any service with a public endpoint. This includes websites (HTTP/HTTPS), APIs, servers (via TCP ports for services like SSH, databases, etc.), and any other network-accessible device.
          </FAQItem>
           <FAQItem question="What happens if I turn my computer off? Do I lose credits?">
            You only earn credits while your monitoring client is running and actively participating in the network. You don't lose any previously earned credits when you go offline. When you come back online, you'll resume earning.
          </FAQItem>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
