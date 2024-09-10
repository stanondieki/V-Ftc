import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0c1f4a] text-white py-8 relative">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-start">
        <div className="flex flex-col items-start space-y-4 lg:space-y-6 lg:items-start lg:mr-8">
          <img src="/images/logos/logo-main.png" alt="V-FTC Logo" className="h-10" />
          <div className="flex space-x-2 mt-6 h-16"> {/* Adjusted margin-top and height */}
            {socialIcons.map((icon, index) => (
              <a href={icon.href} key={index} className="bg-gray-600 py-4 px-4 rounded-md hover:bg-gray-500"> {/* Increased padding */}
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="w-8 h-8 filter invert" 
                />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 lg:mt-0 text-left"> {/* Updated text alignment and grid */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-teal-300 mb-2 text-xl lg:text-2xl">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="text-lg hover:underline">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-600 mt-8 py-4 text-center h-40">
        <p>© 2024. All rights reserved by MSOW CHOIR</p>
      </div>

      <a href="#top" className="absolute bottom-8 right-8 bg-pink-600 p-3 rounded-full shadow-lg hover:bg-pink-500">
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 15l7-7 7 7"></path>
        </svg>
      </a>
    </footer>
  );
};

const socialIcons = [
  { href: 'https://twitter.com', src: '/icons/twitter.png', alt: 'Twitter' },
  { href: 'https://facebook.com', src: '/icons/fb.png', alt: 'Facebook' },
  { href: 'https://telegram.org', src: '/icons/telegram.png', alt: 'Telegram' },
  { href: 'https://youtube.com', src: '/icons/youtube.png', alt: 'YouTube' },
  { href: 'https://tiktok.com', src: '/icons/tiktok.png', alt: 'TikTok' },
  { href: 'https://discord.com', src: '/icons/discord.png', alt: 'Discord' },
];

const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About US', href: '/About' },
      { label: 'Contact US', href: '/Contact' },
    ],
  },
  {
    title: 'Useful Links',
    links: [
      { label: 'Our Services', href: '/About' },
      { label: 'FAQs', href: '/About' },
    ],
  },
  {
    title: 'Privacy',
    links: [
      { label: 'Privacy Policy', href: '/Privacy' },
      { label: 'Terms & Conditions', href: '/Privacy' },
    ],
  },
];

export default Footer;
