import React, { useState } from 'react';
import Link from 'next/link';
import { HiChevronDown } from 'react-icons/hi';
import DropdownMenu from './dropdown';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 w-full h-35 bg-[#0c1f4a] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white flex items-center">
              <img src="/images/logos/logo-main.png" alt="V-FTC Logo" className="h-10 w-auto" />
            </Link>
          </div>
          <div className="hidden md:flex md:space-x-8">
            <Link href="/" className="text-white hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-white hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                Services
                <HiChevronDown className="ml-1" />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute mt-2 bg-white text-black rounded-md shadow-lg w-48 group-hover:block">
                  <Link
                    href="/services/service1"
                    className="block hover:text-pink-500 hover:underline px-4 py-2 text-sm border-b border-gray-300 last:border-none"
                  >
                    Service 1
                  </Link>
                  <Link
                    href="/services/service2"
                    className="block hover:text-pink-500 hover:underline px-4 py-2 text-sm border-b border-gray-300 last:border-none"
                  >
                    Service 2
                  </Link>
                  <Link
                    href="/services/service3"
                    className="block hover:text-pink-500 hover:underline px-4 py-2 text-sm border-b border-gray-300 last:border-none"
                  >
                    Service 3
                  </Link>
                </div>
              )}
            </div>
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('company')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-white hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                Company
                <HiChevronDown className="ml-1" />
              </button>
              {activeDropdown === 'company' && (
                <div className="absolute mt-2 bg-white text-black rounded-md shadow-lg w-48 group-hover:block">
                  <Link
                    href="/company/about"
                    className="block hover:text-pink-500 hover:underline px-4 py-2 text-sm border-b border-gray-300 last:border-none"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/company/team"
                    className="block hover:text-pink-500 hover:underline px-4 py-2 text-sm border-b border-gray-300 last:border-none"
                  >
                    Our Team
                  </Link>
                  <Link
                    href="/company/careers"
                    className="block hover:text-pink-500 hover:underline px-4 py-2 text-sm border-b border-gray-300 last:border-none"
                  >
                    Careers
                  </Link>
                </div>
              )}
            </div>
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('pages')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-white hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                Pages
                <HiChevronDown className="ml-1" />
              </button>
              {activeDropdown === 'pages' && (
                <div className="absolute mt-2 bg-white text-black rounded-md shadow-lg w-48 group-hover:block">
                  <Link
                    href="/pages/page1"
                    className="block hover:text-pink-500 hover:underline px-4 py-2 text-sm border-b border-gray-300 last:border-none"
                  >
                    Page 1
                  </Link>
                  <Link
                    href="/pages/page2"
                    className="block hover:text-pink-500 hover:underline px-4 py-2 text-sm border-b border-gray-300 last:border-none"
                  >
                    Page 2
                  </Link>
                  <Link
                    href="/pages/page3"
                    className="block hover:text-pink-500 hover:underline px-4 py-2 text-sm border-b border-gray-300 last:border-none"
                  >
                    Page 3
                  </Link>
                </div>
              )}
            </div>
            <Link href="/contact" className="text-white hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium">
              Contact Us
            </Link>
            <Link href="/apps" className="text-white hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium">
              Apps Download
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <Link
              href="/login"
              className="text-white px-5 py-2 rounded-full text-md font-bold bg-gradient-to-r from-blue-500 to-pink-500 hover:from-pink-600 hover:to-blue-600"
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
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block text-white hover:text-pink-500 px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <DropdownMenu
              title="Services"
              items={[
                { label: 'Service 1', href: '/services/service1' },
                { label: 'Service 2', href: '/services/service2' },
                { label: 'Service 3', href: '/services/service3' },
              ]}
            />
            <DropdownMenu
              title="Company"
              items={[
                { label: 'About Us', href: '/company/about' },
                { label: 'Our Team', href: '/company/team' },
                { label: 'Careers', href: '/company/careers' },
              ]}
            />
            <DropdownMenu
              title="Pages"
              items={[
                { label: 'Page 1', href: '/pages/page1' },
                { label: 'Page 2', href: '/pages/page2' },
                { label: 'Page 3', href: '/pages/page3' },
              ]}
            />
            <Link href="/contact" className="block text-white hover:text-pink-500 px-3 py-2 rounded-md text-base font-medium">
              Contact Us
            </Link>
            <Link href="/apps" className="block text-white hover:text-pink-500 px-3 py-2 rounded-md text-base font-medium">
              Apps Download
            </Link>
            <Link href="/login" className="block bg-gradient-to-r from-blue-500 to-pink-500 text-white px-3 py-2 rounded-md text-base font-medium">
              LOGIN
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
