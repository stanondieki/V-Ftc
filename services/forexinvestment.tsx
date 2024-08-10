import React from 'react';

const Forex: React.FC = () => {
  return (
    <div className="bg-[#0c1f4a] min-h-screen flex flex-col justify-center items-center text-white">
      <div className="w-full max-w-4xl mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Investment Support</h1>
          <p className="text-lg font-medium">
            We understand that successful investing requires more than just selecting the right assets.
            It involves ongoing support, expert guidance, and access to the right tools and resources. 
            Our comprehensive investment support services are designed to provide you with the assistance 
            you need to navigate the complexities of the financial markets and achieve your investment objectives.
          </p>
        </div>

        <div className="mt-16 bg-[#111a34] p-8 rounded-md">
          <h2 className="text-2xl font-bold mb-4">Investment Support Services</h2>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Dedicated Account Managers:</h3>
            <p className="text-sm">
              Each of our clients is paired with a dedicated account manager who provides personalized support and guidance.
              Your account manager is your primary point of contact, offering tailored advice, answering your questions, 
              and ensuring your investment strategy aligns with your goals.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Research And Analysis:</h3>
            <p className="text-sm">
              Make informed investment decisions with our in-depth research and analysis. 
              Our team of analysts provides regular reports on market trends, economic indicators, and emerging opportunities.
            </p>
          </div>

          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default Forex;
