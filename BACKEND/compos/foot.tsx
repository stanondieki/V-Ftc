import React from 'react';
import Link from 'next/link';

const Foot: React.FC = () => {
  return (
    <footer className="bg-dark-900 py-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side Logo */}
        <div className="flex items-center mb-4 lg:mb-0">
          <img
            src="/images/logo.png" // Replace with your logo path
            alt="V-FTC Logo"
            className="h-16"
          />
        </div>

        {/* Middle Text */}
        <div className="text-center lg:text-right text-gray-400 text-sm mb-4 lg:mb-0">
          <p>The Best Cryptocurrency Trading Platform</p>
          <p>Copyright © 2024 – V-FTC All rights reserved.</p>
        </div>

        {/* Right Side Navigation Links */}
        <div className="flex flex-row items-center space-x-8">
          <Link href="/about-us">
            <a className="text-white hover:text-gray-400">About us</a>
          </Link>
          <Link href="/privacy-policy">
            <a className="text-white hover:text-gray-400">Privacy Policy</a>
          </Link>
          <Link href="/contact-us">
            <a className="text-white hover:text-gray-400">Contact us</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Foot;
