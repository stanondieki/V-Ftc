// FAQSection.tsx
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
      { question: 'What Is V-FTC?', answer: 'V-FTC is ...' },
      { question: 'What Is Mining?', answer: 'Mining is ...' },
      { question: 'What Is Investment?', answer: 'Investment is ...' },
      { question: 'What Is Short-Term Trade?', answer: 'Short-term trade is ...' },
    ],
    'Gold': [
      { question: 'What Is Gold?', answer: 'Gold is ...' },
      { question: 'How To Invest In Gold?', answer: 'You can invest in gold by ...' },
      { question: 'What Is The Current Gold Price?', answer: 'The current gold price is ...' },
      { question: 'Is Gold A Good Investment?', answer: 'Gold is a good investment because ...' },
    ],
    'Forex': [
      { question: 'What Is Forex?', answer: 'Forex is ...' },
      { question: 'How To Trade Forex?', answer: 'You can trade forex by ...' },
      { question: 'What Are Forex Pairs?', answer: 'Forex pairs are ...' },
      { question: 'Is Forex Trading Profitable?', answer: 'Forex trading can be profitable if ...' },
    ],
    // Add more categories here...
  };

  return (
    <div className="bg-[#000435] min-h-screen flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl font-bold mb-4 text-white">Frequently Ask Question?</h1>
      <p className="text-white mb-8 text-center">
        If you have any question, please check these FAQ and contact us if you need more support
      </p>
      <div className="flex justify-center space-x-4 mb-8">
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
      <div className="w-full max-w-2xl">
        {faqData[activeTab].map((item, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full text-left bg-gray-800 text-white px-4 py-2 rounded flex justify-between items-center"
              onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
            >
              <span>{item.question}</span>
              <span>{activeQuestion === index ? '-' : '+'}</span>
            </button>
            {activeQuestion === index && (
              <div className="bg-gray-700 text-white p-4 rounded mt-2">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
