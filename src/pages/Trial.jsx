import React from 'react';
import { Link } from 'react-router-dom';

const Trial = () => {
  return (
    <div className="bg-dark min-h-[calc(100vh-10rem)]">
      <div className="relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 lg:mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                  <span className="block">Start your research</span>
                  <span className="block text-primary">risk-free today</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Experience the full power of OpenBio-OS with our comprehensive 3-month free trial. No credit card required, full feature access included.
                </p>
                <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                  <p className="text-base font-medium text-gray-300">
                    Sign up to get notified when trial slots open.
                  </p>
                  <form className="mt-3 sm:flex">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm ring-primary/55 border-primary/55 focus:ring-primary focus:border-primary sm:flex-1 bg-gray-900 text-white px-4"
                      placeholder="Enter your email"
                    />
                    <button
                      type="submit"
                      className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-hover shadow-sm sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto transition-colors cursor-pointer"
                    >
                      Join Waitlist
                    </button>
                  </form>
                  <p className="mt-3 text-sm text-gray-500">
                    We care about the protection of your data. Read our
                    <a href="#" className="font-medium text-white underline mx-1">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              </div>

              <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-1 lg:flex lg:items-center">
                <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                  <div className="relative block w-full bg-dark-lighter rounded-lg overflow-hidden border border-gray-800">
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-4">Trial Benefits</h3>
                      <ul className="space-y-4">
                        {[
                          '3 Months Full Access',
                          'Unlimited Cloud Storage',
                          'Priority Support',
                          'Advanced Analytics',
                          'Team Collaboration'
                        ].map((item, i) => (
                          <li key={i} className="flex items-center text-gray-300">
                            <svg className="h-5 w-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 p-4 bg-primary/10 rounded-md border border-primary/20">
                        <p className="text-center text-primary font-bold">Value of $1,497 provided FREE</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trial;
