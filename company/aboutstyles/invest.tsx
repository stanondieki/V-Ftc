import React from 'react';

const InvestmentOpportunities: React.FC = () => {
  return (
    <section className="bg-purple-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">Investment Opportunities</h2>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h3 className="text-3xl font-bold mb-4">Investment Opportunities At V-FTC</h3>
            <p className="text-lg leading-relaxed mb-6">
              At V-FTC, we offer a diverse range of investment opportunities to cater to the varied needs of our clients. 
              Our platform provides access to stocks, digital currencies, forex, gold, and other valuable minerals like silver, 
              crude oil, and natural gas. We specialize in both short-term and long-term trading strategies, enabling investors 
              to capitalize on market fluctuations for quick gains or to build sustained growth over time. Additionally, our mining 
              operations in valuable minerals and digital currencies further enhance our portfolio, ensuring a comprehensive and 
              profitable investment experience for all our users.
            </p>
            <a href="#" className="inline-block bg-purple-700 text-white text-sm font-semibold uppercase px-6 py-3 rounded-md hover:bg-purple-800">
              SEE Latest Events
            </a>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            {/* Image cards */}
            <div className="col-span-1 bg-transparent">
              <div className="bg-gray-800 p-4 rounded-md flex items-center justify-center h-32">
                <img src="/images/mining.png" alt="Mining" className="h-full object-contain" />
              </div>
            </div>
            <div className="col-span-1 bg-transparent">
              <div className="bg-gray-800 p-4 rounded-md flex items-center justify-center h-32">
                <img src="/images/trading.png" alt="Trading" className="h-full object-contain" />
              </div>
            </div>
            <div className="col-span-1 bg-transparent">
              <div className="bg-gray-800 p-4 rounded-md flex items-center justify-center h-32">
                <img src="/images/mining.png" alt="Mining" className="h-full object-contain" />
              </div>
            </div>
            <div className="col-span-1 bg-transparent">
              <div className="bg-gray-800 p-4 rounded-md flex items-center justify-center h-32">
                <img src="/images/biogas.png" alt="Biogas" className="h-full object-contain" />
              </div>
            </div>
            <div className="col-span-1 bg-transparent">
              <div className="bg-gray-800 p-4 rounded-md flex items-center justify-center h-32">
                <img src="/images/gold.png" alt="Gold" className="h-full object-contain" />
              </div>
            </div>
            <div className="col-span-1 bg-transparent">
              <div className="bg-gray-800 p-4 rounded-md flex items-center justify-center h-32">
                <img src="/images/trading.png" alt="Trading" className="h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOpportunities;
