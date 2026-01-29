import React from 'react';
import { Link } from 'react-router-dom';

const Licensing = () => {
  return (
    <div className="bg-dark min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-5xl font-extrabold text-white sm:text-center">Licensing Plans</h1>
          <p className="mt-5 text-xl text-gray-400 sm:text-center">
            Flexible options for labs of all sizes. Transparent pricing, no hidden fees.
          </p>
        </div>
        <div className="mx-4 sm:mx-0 mt-12 space-y-4 sm:mt-16 sm:space-y-0 grid gap-6 lg:mx-auto xl:mx-0 md:grid-cols-3">
          {[
            {
              name: 'Solo',
              price: 'Free',
              description: 'For individual researchers on a single machine.',
              features: ['Single User', 'Local SQLite Database', 'Basic Inventory', 'Community Support', 'No Internet Required'],
              cta: 'Download',
              link: '/download',
              highlighted: false
            },
            {
              name: 'Hub',
              price: '$99',
              period: '/mo',
              description: 'For small labs and teams needing collaboration.',
              features: ['Team Collaboration', 'Local Network Sharing', 'Centralized Database', 'Priority Email Support', 'mDNS Discovery'],
              cta: 'Start Trial',
              link: '/trial',
              highlighted: true
            },
            {
              name: 'Enterprise',
              price: '$499',
              period: '/mo',
              description: 'For large institutions requiring cloud or scale.',
              features: ['Unlimited Users', 'Docker Container', 'SSO & Audit Logs', '24/7 Dedicated Support', 'Custom Integrations', 'SLA Guarantee'],
              cta: 'Start Trial',
              link: '/trial',
              highlighted: false
            }
          ].map((tier) => (
            <div key={tier.name} className={`rounded-lg shadow-lg divide-y divide-gray-800 ${tier.highlighted ? 'border-2 border-primary transform scale-105 z-10 bg-dark-lighter' : 'border border-gray-800 bg-dark-lighter'}`}>
              <div className="p-6">
                <h2 className="text-2xl leading-6 font-semibold text-white">{tier.name}</h2>
                <p className="mt-4 text-sm text-gray-400">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                  {tier.period && <span className="text-base font-medium text-gray-500">{tier.period}</span>}
                </p>
                <Link
                  to={tier.link}
                  className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium transition-colors ${tier.highlighted
                    ? 'bg-primary text-white hover:bg-primary-hover'
                    : 'bg-gray-800 text-primary hover:bg-gray-700'
                    }`}
                >
                  {tier.cta}
                </Link>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-white tracking-wide uppercase">What's included</h3>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <svg className="flex-shrink-0 h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Licensing;
