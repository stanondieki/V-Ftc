import React, { useState } from 'react';
import Link from 'next/link';
import { HiChevronDown } from 'react-icons/hi';
import DropdownMenu from './dropdown';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 w-full h-35 bg-[#0c1f4a] shadow-md z-50">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-white flex items-center">
            <img src="/images/logos/logo-main.png" alt="V-FTC Logo" className="h-10 w-auto" />
          </Link>
        </div>
        <div className="hidden md:flex md:space-x-8 text-lg font-bold">
          <Link href="/" className="text-white hover:text-pink-500 px-3 py-2 rounded-md">
            Home
          </Link>
          <div
            className="relative group"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="text-white hover:text-pink-500 px-3 py-2 rounded-md flex items-center">
              Services
              <HiChevronDown className="ml-1" />
            </button>
            {activeDropdown === 'services' && (
              <div className="absolute mt-2 bg-white text-black rounded-md shadow-lg w-48">
                <Link
                  href="/services/service1"
                  className="block hover:text-pink-500 px-4 py-2 text-lg font-bold border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                >
                  Investment Support
                </Link>
                <Link
                  href="/services/service2"
                  className="block hover:text-pink-500 px-4 py-2 text-lg font-bold border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                >
                  Gold Investment
                </Link>
                <Link
                  href="/services/goldInvest"
                  className="block hover:text-pink-500 px-4 py-2 text-lg font-bold border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                >
                  Stock Investment
                </Link>
                <Link
                  href="/services/service4"
                  className="block hover:text-pink-500 px-4 py-2 text-lg font-bold border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                >
                  Forex Investment
                </Link>
                <Link
                  href="/services/service5"
                  className="block hover:text-pink-500 px-4 py-2 text-lg font-bold border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                >
                  Digital Currency
                </Link>
              </div>
            )}
          </div>
          <div
            className="relative group"
            onMouseEnter={() => setActiveDropdown('company')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="text-white hover:text-pink-500 px-3 py-2 rounded-md flex items-center">
              Company
              <HiChevronDown className="ml-1" />
            </button>
            {activeDropdown === 'company' && (
              <div className="absolute mt-2 bg-white text-black rounded-md shadow-lg w-48">
                <Link
                  href="/company/about"
                  className="block hover:text-pink-500 px-4 py-2 text-lg font-bold border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                >
                  About Us
                </Link>
                <Link
                  href="/company/team"
                  className="block hover:text-pink-500 px-4 py-2 text-lg font-bold border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                >
                  Privacy Policy
                </Link>
              </div>
            )}
          </div>
          <div
            className="relative group"
            onMouseEnter={() => setActiveDropdown('pages')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="text-white hover:text-pink-500 px-3 py-2 rounded-md flex items-center">
              Pages
              <HiChevronDown className="ml-1" />
            </button>
            {activeDropdown === 'pages' && (
              <div className="absolute mt-2 bg-white text-black rounded-md shadow-lg w-48">
                <Link
                  href="/Login"
                  className="block hover:text-pink-500 px-4 py-2 text-lg font-bold border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                >
                  Sign In
                </Link>
                <Link
                  href="/Register"
                  className="block hover:text-pink-500 px-4 py-2 text-lg font-bold border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
          <Link href="/contact" className="text-white hover:text-pink-500 px-3 py-2 rounded-md text-lg font-bold">
            Contact Us
          </Link>
          <Link href="/apps" className="text-white hover:text-pink-500 px-3 py-2 rounded-md text-lg font-bold">
            Apps Download
          </Link>
        </div>
        <div className="hidden md:flex items-center">
          <Link
            href="/Login"
            className="text-white px-5 py-2 rounded-full text-lg font-bold bg-gradient-to-r from-blue-500 to-pink-500 hover:from-pink-600 hover:to-blue-600"
          >
            LOGIN
          </Link>
        </div>
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
          >
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block text-white hover:text-pink-500 px-3 py-2 rounded-md text-lg font-bold">
              Home
            </Link>
            <DropdownMenu
              title="Services"
              items={[
                { label: 'Investment Support', href: '/services/service1' },
                { label: 'Gold Investment', href: '/services/service2' },
                { label: 'Stock Investment', href: '/services/service3' },
                { label: 'Forex Investment', href: '/services/service4' },
                { label: 'Digital Currency', href: '/services/service5' },
              ]}
            />
            <DropdownMenu
              title="Company"
              items={[
                { label: 'About Us', href: '/company/about' },
                { label: 'Privacy Policy', href: '/company/Policy' },
              ]}
            />
            <DropdownMenu
              title="Pages"
              items={[
                { label: 'Sign In', href: '/pages/page1' },
                { label: 'Sign Up', href: '/pages/page2' },
              ]}
            />
            <Link href="/contact" className="block text-white hover:text-pink-500 px-3 py-2 rounded-md text-lg font-bold">
              Contact Us
            </Link>
            <Link href="/apps" className="block text-white hover:text-pink-500 px-3 py-2 rounded-md text-lg font-bold">
              Apps Download
            </Link>
            <Link href="/Login" className="block bg-gradient-to-r from-blue-500 to-pink-500 text-white px-3 py-2 rounded-md text-lg font-bold">
              LOGIN
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
