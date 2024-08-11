import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 20, hours: 23, mins: 7, secs: 2 });

  useEffect(() => {
    const endDate = new Date(new Date().getTime() + 20 * 24 * 60 * 60 * 1000); // Set the end date for the timer (e.g., 20 days from now)
    const interval = setInterval(() => {
      const now = new Date();
      const distance = endDate.getTime() - now.getTime();
      
      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
        return;
      }
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((distance % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, mins, secs });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const raisedTokens = 1450;
  const targetTokens = 150000;
  const progressPercentage = Math.min((raisedTokens / targetTokens) * 100, 100); // Ensure it's at most 100%

  return (
    <div className="relative top-12 text-white mb-8 mt-8">
      {/* Background Image */}
      <div className="absolute inset-0 bg-no-repeat bg-cover opacity-100" 
           style={{ backgroundImage: 'url(/images/background/Slider.jpg)' }}>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
              Welcome To Ventures Federal Trading Commission (V-FTC)
            </h1>
            <p className="mt-4 text-lg lg:text-xl">
              Tomorrow's Success Begins With Today's Investment. Invest With Confidence, Live With Abundance. 
               </p>
               <Link 
  href="/Register"
  className="mt-6 inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-pink-500 hover:from-pink-600 hover:to-blue-600 text-white font-bold py-5 px-16 rounded-full text-lg"
>
  REGISTER & INVEST NOW
  <span className="inline-flex items-center justify-center w-8 h-8 bg-white rounded-full ml-4 text-blue-600 text-3xl" style={{ transform: 'translateY(1px)' }}>
    {''} {/* Right angle bracket */}
  </span>
</Link>
          </div>

          <div className="mt-12 lg:mt-0 lg:w-2/5 border border-cyan-400 rounded-lg">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg relative">
              <h2 className="text-4xl font-bold mb-6 text-center">Token Sale Ends In</h2>
              <div className="flex justify-between text-center mb-8">
                <div className="p-4 rounded-lg flex flex-col items-center" style={{ width: '80px' }}>
                  <p className="text-4xl font-bold text-white bg-gray-500 backdrop-blur-lg p-3 rounded-lg shadow-lg relative">{timeLeft.days}</p>
                  <p className="text-xl text-white mt-4">Days</p>
                </div>
                <div className="p-4 rounded-lg flex flex-col items-center" style={{ width: '80px' }}>
                  <p className="text-4xl font-bold text-white bg-gray-500 backdrop-blur-lg p-3 rounded-lg shadow-lg relative">{timeLeft.hours}</p>
                  <p className="text-xl text-white mt-4">Hours</p>
                </div>
                <div className="p-4 rounded-lg flex flex-col items-center" style={{ width: '80px' }}>
                  <p className="text-4xl font-bold text-white bg-gray-500 backdrop-blur-lg p-3 rounded-lg shadow-lg relative">{timeLeft.mins}</p>
                  <p className="text-xl text-white mt-4">Mins</p>
                </div>
                <div className="p-4 rounded-lg flex flex-col items-center" style={{ width: '80px' }}>
                  <p className="text-4xl font-bold text-white bg-gray-500 backdrop-blur-lg p-3 rounded-lg shadow-lg relative">{timeLeft.secs}</p>
                  <p className="text-xl text-white mt-4">Secs</p>
                </div>
              </div>
              
              <div className="relative mb-8 mt-6">
                <div className="absolute w-full top-6 left-0 flex justify-between px-4 text-sm text-gray-300">
                  <div className="relative">
                    Raised-
                    <span className="text-pink-700 font-bold">{raisedTokens} Tokens</span>
                    <span className="absolute left-0 top-0 w-px bg-white"></span>
                  </div>
                  <div className="relative">
                    Target-
                    <span className="text-pink-700 font-bold">{targetTokens} Tokens</span>
                    <span className="absolute left-1/2 transform -translate-x-1/4 top-0 w-px  bg-white"></span>
                  </div>
                  <div className="relative">
                    <span className="absolute right-0 top-0 w-px bg-white"></span>
                  </div>
                </div>
              </div>
              <div className="relative h-10 bg-gray-600 rounded-full w-full">
                <div style={{ width: `${50}%` }} className="h-full bg-gradient-to-r from-blue-500 to-pink-500 rounded-full mt-20"></div>
                
                <div
    className="absolute inset-0 flex items-center justify-center"
    style={{ left: '20%', transform: 'translateX(-20%)' }}
  >
    <span className="text-white font-bold">60,490</span>
              </div>
              </div>
              
              <div className="flex justify-between mt-4 text-xs text-white px-6">
                <div className="relative mb-4">
                  <span className="absolute bottom-7 left-6 w-px h-12 bg-white"></span>
                  <span>Soft cap</span>
                </div>
                <div className="relative mb-4">
                  <span className="absolute right-24 bottom-5 left-6 transform -translate-x-1/6 w-px h-12 bg-white"></span>
                  <span>Crowdsale</span>
                </div>
                <div className="relative mb-4">
                  <span className="absolute right-6 bottom-7 w-px h-12 bg-white "></span>
                  <span>Hard cap</span>
                </div>
              </div>

              {/* Horizontal Line */}
              <hr className="border-t-1 border-gray-500 my-1 w-full mt-8" style={{ position: 'relative', top: '-18px' }}/>

              {/* Icons Section with Blur */}
              <div className="flex items-center justify-between mt-4 text-white p-4 rounded-lg w-100 h-full bg-opacity-20 backdrop-filter backdrop-blur-md" style={{ marginTop: '-18px' }}>
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
