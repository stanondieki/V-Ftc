import React from 'react';

const Forex: React.FC = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center text-white"
    style={{ backgroundImage: 'url(/images/background/Slider.jpg)' }}>
      <div className="w-full max-w-4xl mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Forex Investment Service</h1>
          <p className="text-lg font-medium">
            Our Forex Investment Service offers clients an opportunity to
            participate in the dynamic and potentially lucrative foreign
            exchange market. By leveraging our expertise, advanced trading
            technologies, and comprehensive market analysis, we provide
            tailored investment strategies to maximize returns while managing
            risks.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">
            Expert Analysis and Strategy Development
          </h2>
          <p className="text-sm">
            Our team of experienced forex traders and analysts continuously
            monitor global economic indicators, political events, and market
            trends to develop informed trading strategies.
          </p>
          <p>
            We employ both technical and fundamental analysis to identify
            profitable trading opportunities and make data-driven decisions.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Advanced Trading Technology</h2>
          <p className="text-sm">
            Utilization of cutting-edge trading platforms that provide real-time
            data, automated trading capabilities, and robust security features.
          </p>
          <p>
            Access to sophisticated trading tools such as algorithmic trading,
            signal services, and customizable charting tools.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Diverse Investment Options</h2>
          <p className="text-sm">
            Offering a variety of investment options, including spot trading,
            forward contracts, futures, options, and swaps.
          </p>
          <p>
            Tailored portfolios to match clients' risk tolerance, investment
            goals, and time horizons.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Client-Focused:</h2>
          <p className="text-sm">
            Implementation of comprehensive risk management strategies,
            including stop-loss orders, hedging techniques, and portfolio
            diversification.
          </p>
          <p>
            Regular portfolio reviews and adjustments to adapt to changing
            market conditions and mitigate potential losses.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Transparent Reporting</h2>
          <p className="text-sm">
            Providing clients with regular, detailed reports on their
            investments, including performance metrics, transaction histories,
            and market insights.
          </p>
          <p>
            Ensuring transparency and accountability through clear and open
            communication.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">
            Client Education and Support
          </h2>
          <p className="text-sm">
            Offering educational resources such as webinars, workshops, and
            one-on-one consultations to help clients understand the forex market
            and make informed decisions.
          </p>
          <p>
            Dedicated customer support team available to assist clients with
            their queries and provide ongoing guidance.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Benefits Of Forex Investment</h2>
          <div>
            <h3>High Liquidity:</h3>
            <p className="text-sm">
              The forex market is the largest and most liquid financial market
              in the world, enabling quick entry and exit from trades.
            </p>
          </div>

          <div>
            <h3>24/7 Market:</h3>
            <p className="text-sm">
              The forex market operates 24 hours a day, five days a week,
              allowing for trading flexibility and the ability to respond to
              market movements at any time.
            </p>
          </div>

          <div>
            <h3>Leverage Opportunities:</h3>
            <p className="text-sm">
              Forex trading often provides higher leverage compared to other
              financial markets, allowing investors to control larger positions
              with a smaller initial investment.
            </p>
          </div>

          <div>
            <h3>Diverse Currency Pairs:</h3>
            <p className="text-sm">
              Investors can trade a wide range of currency pairs, providing
              opportunities to profit from various economic conditions and
              geopolitical events.
            </p>
          </div>
        </div>

        {/* Getting Started Section */}
        <div>
          <h2 className="text-4xl font-bold mt-10">Getting Started</h2>
          <p className="text-xl font-semibold mt-4 mb-6">
            To Begin Your Forex Investment Journey With Us:
          </p>

          <div>
            <h3 className="text-2xl font-bold mb-2">Consultation:</h3>
            <p className="text-sm mb-4">
              Schedule a consultation with one of our forex investment advisors
              to discuss your financial goals and risk tolerance.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2">Account Setup:</h3>
            <p className="text-sm mb-4">
              Open a trading account with us, and complete the necessary
              documentation and KYC procedures.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2">Portfolio Development:</h3>
            <p className="text-sm mb-4">
              Work with our team to develop a personalized forex investment
              strategy.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2">Ongoing Management:</h3>
            <p className="text-sm mb-4">
              Monitor your portfolio's performance and make adjustments as
              needed with the support of our expert team.
            </p>
          </div>

          <div>
            <p className="text-sm">
              Investing in the forex market involves risk, and it's important to
              understand these risks before starting. Our goal is to help you
              navigate the complexities of forex trading and achieve your
              investment objectives with confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forex;
