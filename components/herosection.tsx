import React from 'react';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-[#0c1f4a] top-12 text-white">
      {/* Add background pattern or image */}
      <div className="absolute inset-0 bg-no-repeat bg-cover opacity-100" 
           style={{ backgroundImage: 'url(/path-to-your-background-image.png)' }}>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl text-5xl font-bold leading-tight">
              Welcome To Ventures Federal Trading Commission (V-FTC)
            </h1>
            <p className="mt-4 text-10 lg:text-xl">
              Tomorrow's Success Begins With Today's Investment. Invest With Confidence, Live With Abundance.
            </p>
            <Link href="/register"
              className="mt-6 inline-block bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-full">
              REGISTER & INVEST NOW
            </Link>
          </div>

          <div className="mt-12 lg:mt-0 lg:w-1/2">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Token Sale End In</h2>
              <div className="flex justify-between text-center mb-4">
                <div>
                  <p className="text-3xl font-bold">20</p>
                  <p>Days</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">23</p>
                  <p>Hours</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">07</p>
                  <p>Mins</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">02</p>
                  <p>Secs</p>
                </div>
              </div>
              <p className="text-red-600 font-bold mb-2">Raised - 1,450 Tokens</p>
              <p className="text-gray-500">Target - 150,000 Tokens</p>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                  <div style={{ width: '40%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Soft cap</span>
                <span>Crowdsale</span>
                <span>Hard cap</span>
              </div>
              <div className="flex justify-between mt-4 text-gray-400">
                <i className="fab fa-bitcoin text-3xl"></i>
                <i className="fab fa-ethereum text-3xl"></i>
                <i className="fab fa-paypal text-3xl"></i>
                <i className="fab fa-stripe-s text-3xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
