import React from 'react';
import Image from 'next/image';
import Introimage from 'path/to/your/image.png'; // Adjust the import path to your image file

const VFTCIntroduction: React.FC = () => {
  return (
    <div className=" min-h-screen flex flex-col py-8" style={{ backgroundColor: '#130F40'}}>
      <div className="text-white text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">V-FTC Introduction</h1>
        <p>V-FTC is one of the most trusted investment companies all around the world</p>
      </div>
      <div className="text-white flex flex-col lg:flex-row">
        {/* Reduced Width Content Section */}
        <div className="lg:w-90 p-4"> {/* Changed width back to lg:w-1/3 */}
          <div className="bg-[#151B54] rounded-lg p-6 shadow-lg">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-[#3D4DB7] to-[#A03D85] p-4 rounded-lg">
                <h2 className="text-2xl font-semibold">Inception</h2>
                <p>V-FTC founded on May 10, 2018</p>
              </div>
              <div className="bg-[#2A283F] p-4 rounded-lg hover:bg-gradient-to-r hover:from-[#3D4DB7] hover:to-[#A03D85] transition-colors duration-300">
                <h2 className="text-2xl font-semibold">First Year Milestone</h2>
                <p>Gain the trust of 10,000 investors</p>
              </div>
              <div className="bg-[#2A283F] p-4 rounded-lg hover:bg-gradient-to-r hover:from-[#3D4DB7] hover:to-[#A03D85] transition-colors duration-300">
                <h2 className="text-2xl font-semibold">Number Of Employees</h2>
                <p>Assisting clients with 864 dedicated employees</p>
              </div>
              <div className="bg-[#2A283F] p-4 rounded-lg hover:bg-gradient-to-r hover:from-[#3D4DB7] hover:to-[#A03D85] transition-colors duration-300">
                <h2 className="text-2xl font-semibold">World Leading Co-Founders</h2>
                <p>Elon Musk, Cristiano Ronaldo, Ashton Kutcher, Sheikh Sultan Al Qasimi</p>
              </div>
              <div className="bg-[#2A283F] p-4 rounded-lg hover:bg-gradient-to-r hover:from-[#3D4DB7] hover:to-[#A03D85] transition-colors duration-300">
                <h2 className="text-2xl font-semibold">Acceptable Currencies</h2>
                <p>BTC, ETH, USDT</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Increased Size Image Section */}
<div className="lg:w-2/3 h-100 w-120 p-4 flex justify-end">
  <img 
    src='/images/layout/tokendetails home right.png' 
    alt="Introduction Image" 
    className="max-w-full h-auto animate-float lg:h-[700px] lg:w-[800px]" // Increased height and width
  />
</div>
      </div>
    </div>
  );
};

export default VFTCIntroduction;
