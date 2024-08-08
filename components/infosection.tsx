import React from 'react';

const InfoSection: React.FC = () => {
  return (
    <section className="bg-[#000435] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        <div className="flex-1 mb-8 lg:mb-0">
          <img src="/images/home.png" alt="Illustration" className="w-full h-auto" />
        </div>
        <div className="flex-1 lg:pl-10">
          <h2 className="text-3xl font-extrabold text-white mb-6">
            What is V-FTC?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            The world first platform to reward investors and traders build on Ventures Federal Trade Commission.
          </p>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V7h2v3z" />
                  </svg>
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
                <div className="h-12 w-12 rounded-full bg-pink-500 flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V7h2v3z" />
                  </svg>
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
                <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V7h2v3z" />
                  </svg>
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
  );
};

export default InfoSection;
