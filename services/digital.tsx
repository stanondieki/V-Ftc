import React from 'react';

const Digital = () => {
  return (
    <div className="min-h-screen flex flex-col text-white">
      
      {/* First Division with Background Image */}
      <div
        className="flex justify-center items-center text-center relative"
        style={{
          height: '80vh',
          backgroundColor: '' // Fallback color for background image
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/background/Slider.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
            width: '100%',
            zIndex: -1, // Place image behind content
          }}
        />
        <div className="relative px-4">
          <h1 className="text-5xl font-bold mb-6">Digital Currency Investment Services</h1>
          <p className="text-lg font-medium" style={{ maxWidth: '700px' }}>
            In today's rapidly evolving financial landscape, digital currencies have emerged as a significant asset class, offering unique opportunities for growth and diversification. At [Your Company Name], we provide comprehensive digital currency investment services tailored to meet the diverse needs of our clients.
          </p>
        </div>
      </div>
      
      {/* Second Division with Custom Background Color */}
      <div className="mt-16 p-8" style={{ backgroundColor: '#050231' }}>
        <h2 className="text-2xl font-bold mb-4">Overview</h2>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Portfolio Management:</h3>
          <p className="text-sm">
            Our expert team develops customized digital currency portfolios based on your risk tolerance, investment goals, and market outlook. We leverage advanced analytics and industry insights to optimize your investments in leading digital currencies promising digital assets.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Market Analysis and Research:</h3>
          <p className="text-sm">
            Stay ahead of the curve with our in-depth market analysis and research reports. We provide timely updates on market trends, regulatory developments, and emerging technologies to help you make informed investment decisions.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Secure Trading Platforms:</h3>
          <p className="text-sm">
            We partner with reputable digital currency exchanges to offer secure and efficient trading platforms. Our platforms are equipped with state-of-the-art security features to protect your assets and ensure seamless transactions.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Risk Management:</h3>
          <p className="text-sm">
            Investing in digital currencies involves inherent risks. Our risk management strategies include portfolio diversification, stop-loss orders, and regular performance reviews to mitigate potential losses and enhance returns.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Educational Resources:</h3>
          <p className="text-sm">
            We believe in empowering our clients with knowledge. Our educational resources include webinars, workshops, and one-on-one consultations to help you understand the complexities of digital currency investments and stay updated with the latest market developments.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Expertise:</h3>
          <p className="text-sm">
            Our team of experienced professionals has a deep understanding of the digital currency market and a proven track record of successful investments.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Transparency:</h3>
          <p className="text-sm">
            We maintain full transparency in all our dealings, providing regular reports and updates on your investment performance.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Security:</h3>
          <p className="text-sm">
            Your investments are safeguarded with the highest level of security protocols to ensure the safety and integrity of your assets.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Customer Support:</h3>
          <p className="text-sm">
            Our dedicated support team is available around the clock to assist you with any queries or concerns.
          </p>
        </div>

        <div className="mb-6">
          <p className="font-bold">
            Embark on your digital currency investment journey with [Your Company Name]. Contact us today to schedule a consultation with one of our experts and discover how we can help you achieve your financial goals through strategic digital currency investments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Digital;
