import Link from "next/link";
import { FaUsers, FaGlobe } from 'react-icons/fa6';


const WhatPage = () => {
    return (
        <section className=" py-16" style={{ backgroundColor: '#050231' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 mb-8 lg:mb-0">
            <img src="/images/layout/home.png" alt="Illustration" className="w-full h-full mr-6 animate-float" />
          </div>
          <div className="flex-1 lg:pl-15 relative" style={{ maxWidth: '600px', marginTop: '30px', marginRight: '20px' }}>
            <h2 className="text-3xl font-bold text-white mb-6" style={{ color: '#db2777' }}>
              What is V-FTC?
            </h2>
            <p className="text-md text-gray-300 mb-8" >
              The world first platform to reward investors and traders build on Ventures Federal Trade Commission.
            </p>
            <div className="space-y-8 relative">
              {/* Vertical dotted line */}
              <div className="absolute left-6 top-12 h-[calc(100%-2.5rem)] w-0.5 border-l-2 border-dotted border-blue-500"></div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-r from-blue-500 to-pink-500 rounded-full h-12 w-12 flex justify-center items-center">
                    <Link href="/">
                      <FaUsers size={20} color="white" />
                    </Link>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">Financial Platform</h3>
                  <p className="mt-2 text-base text-gray-300">
                    V-FTC is an all-in-one investment platform that allows customers to invest in various asset classes including digital currencies, gold, stocks, and forex. It caters to diverse investment needs, providing a range of opportunities to grow and manage wealth.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-r from-blue-500 to-pink-500 rounded-full h-12 w-12 flex justify-center items-center">
                    <Link href="/">
                      <FaGlobe size={20} color="white" />
                    </Link>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">Advanced Technology And User-Friendly Interface</h3>
                  <p className="mt-2 text-base text-gray-300">
                    With advanced technology and a user-friendly interface, V-FTC offers sophisticated trading tools, real-time data, and robust analytics to help investors make informed decisions. The platform is designed to be accessible and efficient for both beginners and experienced traders.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-r from-blue-500 to-pink-500 rounded-full h-12 w-12 flex justify-center items-center">
                    <Link href="/">
                      <FaUsers size={20} color="white" />
                    </Link>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">Security And Support</h3>
                  <p className="mt-2 text-base text-gray-300">
                    V-FTC prioritizes security and transparency, employing strong security measures and competitive, clear pricing structures. Alongside comprehensive educational resources and responsive customer support, V-FTC ensures a secure and supportive environment for managing investments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default WhatPage;