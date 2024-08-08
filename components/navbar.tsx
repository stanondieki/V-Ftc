import React, { useState } from 'react';
import Link from 'next/link';
import DropdownMenu from '../components/dropdown';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0c1f4a] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-white flex items-center">
                <img src="/logo.png" alt="" className="h-8 w-auto mr-2" />
                Ventures
              </Link>
            </div>
            <div className="hidden md:flex md:space-x-8 ml-40">
              <Link href="/" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
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
              <Link href="/contact" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                Contact Us
              </Link>
              <Link href="/apps" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                Apps Download
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-white px-5 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600"
            >
              LOGIN
            </Link>
          </div>
          <div className="flex md:hidden">
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
            <Link href="/" className="block text-white hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium">
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
            <Link href="/contact" className="block text-white hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium">
              Contact Us
            </Link>
            <Link href="/apps" className="block text-white hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium">
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
