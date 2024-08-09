import React, { useState } from 'react';

// Define the type for FAQ items
interface FAQItem {
  question: string;
  answer: string;
}

// Define the type for FAQ data structure
interface FAQData {
  [key: string]: FAQItem[];
}

const FAQSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('V-FTC');
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const faqData: FAQData = {
    'V-FTC': [
      { question: 'What Is V-FTC?', answer: 'Ventures Federal Trading Commission (V-FTC) is one of the most trusted investment company authorized by FINRA and Division of Investment Management' },
      { question: 'What Is Mining?', answer: 'Mining is the process of extracting valuable minerals or other geological materials from the earth, including metals, coal, and gemstones. In the context of Gold or other digital currencies mining involves using computers to solve complex mathematical problems to verify transactions and add them to a blockchain, earning new coins as a reward.' },
      { question: 'What Is Investment?', answer: 'Investment is the act of allocating money or resources into assets or ventures with the expectation of generating profit or income over time. This can include purchasing stocks, bonds, real estate, or starting a business.' },
      { question: 'What Is Short-Term Trade?', answer: 'Short-term trade involves buying and selling financial instruments such as stocks, digital currencies, minerals, or forex within a short time frame, ranging from seconds to a few minutes, to capitalize on price fluctuations.' },
    ],
    'Gold': [
      { question: 'What is Gold investment?', answer: 'Gold investment involves purchasing gold tokens, such as coins or bars, or investing in financial products linked to gold, like gold ETFs (exchange-traded funds) or gold mining stocks. Its often used as a hedge against inflation and economic uncertainty.' },
      { question: 'What is Gold mining?', answer: 'Gold mining is the process of extracting gold from the earth through various methods such as panning, sluicing, dredging, and using heavy machinery. It involves locating and mining gold ore deposits, then processing the ore to separate the gold.' },
      { question: 'How can I track my order?', answer: 'We try to keep returns and exchanges as simple as possible. As long as they meet our criteria, it should be no problem at all to return or exchange them.' },
      { question: 'How can I track my order?', answer: 'We try to keep returns and exchanges as simple as possible. As long as they meet our criteria, it should be no problem at all to return or exchange them.' },
    ],
    'Forex': [
      { question: 'How can I track my order?', answer: 'We try to keep returns and exchanges as simple as possible. As long as they meet our criteria, it should be no problem at all to return or exchange them.' },
      { question: 'What is Shopi. return/exchange policy?', answer: 'We try to keep returns and exchanges as simple as possible. As long as they meet our criteria, it should be no problem at all to return or exchange them.' },
      { question: 'How can I track my order?', answer: 'We try to keep returns and exchanges as simple as possible. As long as they meet our criteria, it should be no problem at all to return or exchange them.' },
      { question: 'How can I track my order?', answer: 'We try to keep returns and exchanges as simple as possible. As long as they meet our criteria, it should be no problem at all to return or exchange them.' },
    ],
    'Stock': [
      { question: 'How can I track my order?', answer: 'We try to keep returns and exchanges as simple as possible. As long as they meet our criteria, it should be no problem at all to return or exchange them.' },
      { question: 'What is Shopi. return/exchange policy?', answer: 'We try to keep returns and exchanges as simple as possible. As long as they meet our criteria, it should be no problem at all to return or exchange them.' },
      { question: 'How can I track my order?', answer: 'We try to keep returns and exchanges as simple as possible. As long as they meet our criteria, it should be no problem at all to return or exchange them.' },
      { question: 'How can I track my order?', answer: 'We try to keep returns and exchanges as simple as possible. As long as they meet our criteria, it should be no problem at all to return or exchange them.' },
    ],
    'New Coin': [
      { question: 'How can I track my order?', answer: 'We try to keep returns and exchanges as simple as possible. As long as they meet our criteria, it should be no problem at all to return or exchange them.' },
      { question: 'What is Shopi. return/exchange policy?', answer: 'We try to keep returns and exchanges as simple as possible. As long as they meet our criteria, it should be no problem at all to return or exchange them.' },
      { question: 'How can I track my order?', answer: 'We try to keep returns and exchanges as simple as possible. As long as they meet our criteria, it should be no problem at all to return or exchange them.' },
      { question: 'How can I track my order?', answer: 'We try to keep returns and exchanges as simple as possible. As long as they meet our criteria, it should be no problem at all to return or exchange them.' },
    ],
  };

  return (
    <div className="bg-[#000435] min-h-screen flex flex-col items-center justify-center py-12">
      <h1 className="text-3xl font-bold mb-4 text-white">Frequently Asked Questions</h1>
      <p className="text-white mb-8 text-center">
        If you have any questions, please check these FAQs and contact us if you need more support.
      </p>
      <div className="flex flex-col items-center space-y-4 mb-8 w-full">
        <div className="flex justify-center space-x-4 w-full">
          {Object.keys(faqData).map((tab) => (
            <button
              key={tab}
              className={`text-lg font-semibold px-4 py-2 rounded ${
                activeTab === tab ? 'text-white border-b-2 border-pink-600' : 'text-gray-400'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <hr className="border-t border-white w-full max-w-4xl" /> {/* White horizontal line */}
      </div>
      <div className="w-full max-w-4xl"> {/* Increased max width */}
        {faqData[activeTab].map((item, index) => (
          <div
            key={index}
            className="mb-6 border border-white rounded-lg" // Curved corners added to question box
          >
            <button
              className="w-full text-left text-white px-6 py-6 flex justify-between items-center text-xl"
              onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
            >
              <span className="font-bold">{item.question}</span> {/* Bold question text */}
              <svg
                className={`w-6 h-6 transform ${activeQuestion === index ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {activeQuestion === index && (
              <div className="text-white px-6 py-6 bg-opacity-70 rounded-lg border-t border-white mt-2"> {/* Border and curved corners added to answer */}
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
