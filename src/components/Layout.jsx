import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Free Trial', path: '/trial' },
    { name: 'Purchase', path: '/licensing' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-white bg-dark">
      {/* Navbar */}
      <nav className="bg-dark-lighter border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <img
                  className="h-10 w-auto"
                  src="./logo-with-green-text-transparent.png"
                  alt="OpenBio-OS"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive
                      ? 'text-primary bg-gray-900'
                      : 'text-gray-300 hover:text-primary hover:bg-gray-800'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Link
                to="/download"
                className="ml-4 px-4 py-2 rounded-md text-sm font-bold bg-primary hover:bg-primary-hover text-white transition-colors"
              >
                Download
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-dark-lighter border-b border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${isActive
                      ? 'text-primary bg-gray-900'
                      : 'text-gray-300 hover:text-primary hover:bg-gray-700'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Link
                to="/download"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md font-bold bg-primary hover:bg-primary-hover text-white transition-colors"
              >
                Download
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <img
                className="h-8 w-auto mb-4 grayscale"
                src="./logo-with-green-text-tree.png"
                alt="OpenBio-OS"
              />
              <p className="text-gray-400 text-sm">
                The future of laboratory management and biological operating systems.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link to="/download" className="text-gray-400 hover:text-primary transition-colors">Download</Link></li>
                <li><Link to="/trial" className="text-gray-400 hover:text-primary transition-colors">Free Trial</Link></li>
                <li><Link to="/licensing" className="text-gray-400 hover:text-primary transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="https://github.com/openbio-os" className="text-gray-400 hover:text-primary transition-colors">Source Code</a></li>
                {/* <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Support</a></li> */}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Contact Support</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} OpenBio-OS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
