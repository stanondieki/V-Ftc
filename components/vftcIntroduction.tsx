import React from 'react';
import Image from 'next/image';
import introImage from 'path/to/your/image.png'; // Adjust the import path to your image file

const VFTCIntroduction: React.FC = () => {
    return (
      <div className="bg-[#0D0B1E] min-h-screen flex flex-col items-center justify-center py-8">
        <div className="text-white text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">V-FTC Introduction</h1>
          <p>V-FTC is one of the most trusted investment companies all around the world</p>
        </div>
        <div className="max-w-5xl mx-auto text-white flex flex-col lg:flex-row items-center lg:items-start">
          <div className="lg:w-1/2 p-4">
            <div className="bg-[#1C1B2B] rounded-lg p-6 shadow-lg">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-[#3D4DB7] to-[#A03D85] p-4 rounded-lg">
                  <h2 className="text-xl font-semibold">Inception</h2>
                  <p>V-FTC founded on May 10, 2018</p>
                </div>
                <div className="bg-[#2A283F] p-4 rounded-lg">
                  <h2 className="text-xl font-semibold">First Year Milestone</h2>
                  <p>Gain the trust of 10,000 investors</p>
                </div>
                <div className="bg-[#2A283F] p-4 rounded-lg">
                  <h2 className="text-xl font-semibold">Number Of Employees</h2>
                  <p>Assisting clients with 864 dedicated employees</p>
                </div>
                <div className="bg-[#2A283F] p-4 rounded-lg">
                  <h2 className="text-xl font-semibold">World Leading Co-Founders</h2>
                  <p>Elon Musk, Cristiano Ronaldo, Ashton Kutcher, Sheikh Sultan Al Qasimi</p>
                </div>
                <div className="bg-[#2A283F] p-4 rounded-lg">
                  <h2 className="text-xl font-semibold">Acceptable Currencies</h2>
                  <p>BTC, ETH, USDT</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 p-4 flex justify-center lg:justify-end">
            <img src='/images/tokendetails.png' alt="Introduction Image" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    );
  };
  

export default VFTCIntroduction;
