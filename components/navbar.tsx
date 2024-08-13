import React, { useState } from 'react';
import Link from 'next/link';
import { HiChevronDown } from 'react-icons/hi';

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [open, setOpen] = useState<boolean>(false); // Define the 'open' state here

  const handleMouseEnter = (menu: string) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setActiveDropdown(null);
    }, 5000); // Adjust this delay as needed
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-35  shadow-md z-50" style={{ backgroundColor: '#130F40'}}>
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-white flex items-center">
            <img src="/images/logos/logo-main.png" alt="V-FTC Logo" className="h-10 w-70" />
          </Link>
        </div>
        <div className="hidden md:flex md:space-x-8 text-base font-bold">
          <Link href="/" className="text-white hover:text-pink-500 px-3 py-2 rounded-md ml-8">
            Home
          </Link>

          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-white hover:text-pink-500 px-3 py-2 rounded-md flex items-center">
              Services
              <HiChevronDown className="ml-1" />
            </button>
            {activeDropdown === 'services' && (
              <div className="absolute mt-2 bg-white text-black rounded-md shadow-lg w-48">
                <Link
                  href="/Investiment"
                  className="block hover:text-pink-500 px-4 py-2 text-sm font-bold text-gray-800 border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                >
                  Investment Support
                </Link>
                <Link
                  href="/Goldinvestiment"
                  className="block hover:text-pink-500 px-4 py-2 text-sm font-bold text-gray-800 border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                >
                  Gold Investment
                </Link>
                <Link
                  href="/Stockinvestiment"
                  className="block hover:text-pink-500 px-4 py-2 text-sm font-bold text-gray-800 border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                >
                  Stock Investment
                </Link>
                <Link
                  href="/Forexinvestiment"
                  className="block hover:text-pink-500 px-4 py-2 text-lg font-bold border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                >
                  Forex Investment
                </Link>
                <Link
                  href="/Digital"
                  className="block hover:text-pink-500 px-4 py-2 text-sm font-bold text-gray-800 border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                >
                  Digital Currency
                </Link>
              </div>
            )}
          </div>

          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter('company')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-white hover:text-pink-500 px-3 py-2 rounded-md flex items-center">
              Company
              <HiChevronDown className="ml-1" />
            </button>
            {activeDropdown === 'company' && (
              <div className="absolute mt-2 bg-white text-black rounded-md shadow-lg w-48">
                <Link
                  href="/About"
                  className="block hover:text-pink-500 px-4 py-2 text-sm font-bold text-gray-800 border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                >
                  About Us
                </Link>
                <Link
                  href="/Privacy"
                  className="block hover:text-pink-500 px-4 py-2 text-sm font-bold text-gray-800 border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                >
                  Privacy Policy
                </Link>
              </div>
            )}
          </div>

          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter('pages')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-white hover:text-pink-500 px-3 py-2 rounded-md flex items-center">
              Pages
              <HiChevronDown className="ml-1" />
            </button>
            {activeDropdown === 'pages' && (
              <div className="absolute mt-2 bg-white text-black rounded-md shadow-lg w-48">
                <Link
                  href="/Login"
                  className="block hover:text-pink-500 px-4 py-2 text-sm font-bold text-gray-800 border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                >
                  Sign In
                </Link>
                <Link
                  href="/Register"
                  className="block hover:text-pink-500 px-4 py-2 text-sm font-bold text-gray-800 border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          <Link href="/Contact" className="text-white hover:text-pink-500 px-3 py-2 rounded-md text-base font-bold">
            Contact Us
          </Link>
          <Link href="/AppsDownload" className="text-white hover:text-pink-500 px-3 py-2 rounded-md text-base font-bold">
            Apps Download
          </Link>
        </div>
        <div className="hidden md:flex items-center">
          <Link
            href="/Login"
            className="text-white px-10 py-2 rounded-full text-lg font-bold bg-gradient-to-r from-blue-500 to-pink-500 hover:from-pink-600 hover:to-blue-600"
          >
            LOGIN
          </Link>
        </div>
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setOpen(!open)} // Toggle the 'open' state here
            className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
          >
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {open && ( // Conditionally render the mobile menu based on 'open' state
        <div className="md:hidden">
          <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block text-white hover:text-pink-500 px-3 py-2 rounded-md text-lg font-bold">
              Home
            </Link>
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-white hover:text-pink-500 px-3 py-2 rounded-md flex items-center">
                Services
                <HiChevronDown className="ml-1" />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute mt-2 bg-white text-black rounded-md shadow-lg w-48">
                  <Link
                    href="/Investiment"
                    className="block hover:text-pink-500 px-4 py-2 text-sm font-bold text-gray-800 border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                  >
                    Investment Support
                  </Link>
                  <Link
                    href="/Goldinvestiment"
                    className="block hover:text-pink-500 px-4 py-2 text-sm font-bold text-gray-800 border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                  >
                    Gold Investment
                  </Link>
                  <Link
                    href="/Stockinvestiment"
                    className="block hover:text-pink-500 px-4 py-2 text-sm font-bold text-gray-800 border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                  >
                    Stock Investment
                  </Link>
                  <Link
                    href="/Forexinvestiment"
                    className="block hover:text-pink-500 px-4 py-2 text-sm font-bold text-gray-800 border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                  >
                    Forex Investment
                  </Link>
                  <Link
                    href="/Digital"
                    className="block hover:text-pink-500 px-4 py-2 text-sm font-bold text-gray-800 border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                  >
                    Digital Currency
                  </Link>
                </div>
              )}
            </div>
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('company')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-white hover:text-pink-500 px-3 py-2 rounded-md flex items-center">
                Company
                <HiChevronDown className="ml-1" />
              </button>
              {activeDropdown === 'company' && (
                <div className="absolute mt-2 bg-white text-black rounded-md shadow-lg w-48">
                  <Link
                    href="/company/about"
                    className="block hover:text-pink-500 px-4 py-2 text-sm font-bold text-gray-800 border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/About"
                    className="block hover:text-pink-500 px-4 py-2 text-sm font-bold text-gray-800 border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                  >
                    Privacy Policy
                  </Link>
                </div>
              )}
            </div>
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('pages')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-white hover:text-pink-500 px-3 py-2 rounded-md flex items-center">
                Pages
                <HiChevronDown className="ml-1" />
              </button>
              {activeDropdown === 'pages' && (
                <div className="absolute mt-2 bg-white text-black rounded-md shadow-lg w-48">
                  <Link
                    href="/Login"
                    className="block hover:text-pink-500 px-4 py-2 text-sm font-bold text-gray-800 border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/Register"
                    className="block hover:text-pink-500 px-4 py-2 text-sm font-bold text-gray-800 border-b border-black hover:border-transparent hover:bg-gradient-to-r from-black via-pink-500 to-black transition-all duration-500 ease-linear"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
            <Link href="/Contact" className="block text-white hover:text-pink-500 px-3 py-2 rounded-md text-lg font-bold">
              Contact Us
            </Link>
            <Link href="/AppsDownload" className="block text-white hover:text-pink-500 px-3 py-2 rounded-md text-lg font-bold">
              Apps Download
            </Link>
          </div>
          <div className="px-5 pt-4 pb-3 border-t border-white">
            <Link
              href="/Login"
              className="block w-full text-center text-white bg-gradient-to-r from-blue-500 to-pink-500 hover:from-pink-600 hover:to-blue-600 px-3 py-2 rounded-full text-lg font-bold"
            >
              LOGIN
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
