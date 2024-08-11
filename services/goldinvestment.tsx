import React from 'react';

const Gold = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center text-white">
      <div
        className="flex items-center justify-center"
        style={{
          backgroundImage: 'url(/images/background/Slider.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh',
        }}
      >
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Gold Investment</h1>
          <p className="text-lg font-medium">
          We offer a robust and comprehensive gold investment service, 
          catering to both novice and experienced investors. As a reliable and US 
          government-authorized sub-trading company under the US Federal Trade Commission, 
          we ensure that your investments are secure and profitable.
          </p>
        </div>
        </div>
        

        <div className="mt-16 bg-[#111a34] p-8 rounded-md">
          <h2 className="text-2xl font-bold mb-4">Gold Investment Services</h2>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Diverse Gold Investment Options:</h3>
            <p className="text-sm">
            We provide access to various forms of gold investments, 
            including physical gold, gold ETFs, and gold mining stocks. 
            This allows you to diversify your portfolio and choose the investment 
            type that best suits your financial goals.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Expert Market Analysis:</h3>
            <p className="text-sm">
            Our team of seasoned market analysts continuously monitors the gold market,
             providing you with up-to-date information and insights. 
             This ensures that you make informed decisions based on the latest market trends and forecasts.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Secure Transactions:</h3>
            <p className="text-sm">
            We implement stringent security measures to protect your investment transactions. 
            Our platform uses advanced encryption technologies to safeguard your personal and financial information.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Long-Term Growth:</h3>
            <p className="text-sm">
            Investing in gold is a proven strategy for long-term wealth preservation and growth. 
            Gold has historically been a stable asset, often increasing in value during economic downturns and providing a hedge against inflation.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Comprehensive Support:</h3>
            <p className="text-sm">
            Our dedicated customer support team is always available to assist you with any queries or concerns regarding your gold investments. 
            We also offer educational resources, including tutorials and webinars, to help you understand the intricacies of gold investment.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Flexible Investment Plans:</h3>
            <p className="text-sm">
            Whether you are interested in short-term trading to capitalize on market fluctuations or long-term investment for wealth accumulation,
             V-FTC offers flexible plans tailored to meet your specific needs.
            </p>
          </div>

          <div>
            <p>Choose V-FTC for a secure, informed, and profitable gold investment experience, and join our growing community of satisfied investors.</p>
          </div>

         
        </div>
      </div>
    
  );
};

export default Gold;
