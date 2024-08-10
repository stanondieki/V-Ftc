import React from 'react';

const Stock: React.FC = () => {
  return (
    <div className="bg-[#0c1f4a] min-h-screen flex flex-col justify-center items-center text-white">
      <div className="w-full max-w-4xl mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Stock Investment</h1>
          <p className="text-lg font-medium">
          Our Stock Investment Service is designed to help individuals and institutions achieve their financial goals 
          through strategic investments in the stock market. Leveraging our expertise, advanced analytics, 
          and comprehensive research, we provide tailored solutions to meet the diverse needs of our clients.
          </p>
        </div>

        <div className="mt-16 bg-[#111a34] p-8 rounded-md">
          <h2 className="text-2xl font-bold mb-4">Personalized Investment Plans</h2>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Risk Assessment:</h3>
            <p className="text-sm">
            We evaluate each client's risk tolerance, investment horizon, and financial goals to craft personalized investment strategies.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Portfolio Diversification:</h3>
            <p className="text-sm">
            Our experts design diversified portfolios to mitigate risks and maximize returns, investing across various sectors and industries.
            </p>
          </div>

          

          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default Stock;
