import React, { useState, useEffect } from 'react';
import TuxIcon from '../components/TuxIcon';

const Download = () => {
  const [detectedOS, setDetectedOS] = useState(null);
  const [version, setVersion] = useState('v0.1.17'); // Fallback version
  const [isLoading, setIsLoading] = useState(true);
  const baseUrl = `https://github.com/OpenBio-OS/Laboratory-Information-Management-System/releases/download/${version}`;

  useEffect(() => {
    const platform = window.navigator.platform.toLowerCase();
    const userAgent = window.navigator.userAgent.toLowerCase();

    // Check if device is mobile
    const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);

    // Only detect OS for desktop devices
    if (!isMobile) {
      if (platform.includes('mac') || userAgent.includes('mac')) {
        setDetectedOS('macOS');
      } else if (platform.includes('win') || userAgent.includes('win')) {
        setDetectedOS('Windows');
      } else if (platform.includes('linux') || userAgent.includes('linux')) {
        setDetectedOS('Linux');
      }
    }

    // Fetch latest release version from GitHub API
    fetch('https://api.github.com/repos/OpenBio-OS/Laboratory-Information-Management-System/releases/latest')
      .then(response => response.json())
      .then(data => {
        if (data.tag_name) {
          setVersion(data.tag_name);
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Failed to fetch latest version:', error);
        setIsLoading(false);
      });
  }, []);

  // Remove 'v' prefix from version for filenames
  const versionNumber = version.replace(/^v/, '');

  const versions = [
    {
      os: 'macOS',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.07-3.11-1.05.05-2.31.74-3.03 1.59-.67.79-1.25 2.05-1.09 3.2 1.17.09 2.35-.84 3.05-1.68" />
        </svg>
      ),
      description: 'Apple Silicon',
      link: `${baseUrl}/openbio_${versionNumber}_aarch64.dmg`,
      note: 'For macOS 11+',
      id: 'macOS'
    },
    {
      os: 'Windows',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4h-13.051M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
        </svg>
      ),
      description: 'Windows 11 (64-bit)',
      link: `${baseUrl}/openbio_${versionNumber}_x64-setup.exe`,
      note: '.exe installer',
      id: 'Windows'
    },
    {
      os: 'Linux',
      icon: <TuxIcon className="w-12 h-12" />,
      description: 'AppImage & .deb',
      link: `${baseUrl}/openbio_${versionNumber}_amd64.AppImage`,
      note: 'Works on Ubuntu, Fedora, etc.',
      id: 'Linux'
    },
  ];

  return (
    <div className="py-20 bg-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Download OpenBio-OS
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-400">
            Get the latest version ({version}) of the scientific operating system for your platform.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3 lg:gap-x-8">
          {versions.map((version) => (
            <div
              key={version.os}
              className={`relative p-8 bg-dark-lighter border rounded-2xl shadow-sm flex flex-col items-center text-center transition-all hover:scale-105 ${detectedOS === version.id
                ? 'border-primary ring-2 ring-primary ring-opacity-50 scale-105 z-10'
                : 'border-gray-800 hover:border-gray-600'
                }`}
            >
              {detectedOS === version.id && (
                <div className="absolute top-0 transform -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Recommended for You
                </div>
              )}
              <div className={`p-4 rounded-full ${detectedOS === version.id ? 'bg-primary/20 text-primary' : 'bg-gray-800 text-gray-400'}`}>
                {version.icon}
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">{version.os}</h3>
              <p className="mt-2 text-gray-400">{version.description}</p>

              <a
                href={version.link}
                className={`mt-8 w-full block px-6 py-3 border border-transparent text-base font-medium rounded-md text-center transition-colors ${detectedOS === version.id
                  ? 'bg-primary hover:bg-primary-hover text-white'
                  : 'bg-gray-800 hover:bg-gray-700 text-white'
                  }`}
              >
                Download
              </a>
              <p className="mt-4 text-xs text-gray-500">{version.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Looking for other versions? <a href="https://github.com/OpenBio-OS/Laboratory-Information-Management-System/releases" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">View all releases on GitHub</a></p>
        </div>
      </div>
    </div>
  );
};

export default Download;
