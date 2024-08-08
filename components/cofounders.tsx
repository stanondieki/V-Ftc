// CoFoundersSection.tsx
import React from 'react';

const CoFoundersSection: React.FC = () => {
  const coFounders = [
    {
      name: 'Elon Musk',
      title: 'Co-founder & COO',
      imageUrl: '/images/elon.jpg',
    },
    {
      name: 'Cristiano Ronaldo',
      title: 'Brand Ambassador - Investor',
      imageUrl: '/images/cr7.jpg',
    },
    {
      name: 'Ashton Kutcher',
      title: 'Core-Member',
      imageUrl: '/images/ashton.jpg',
    },
    {
      name: 'Sheikh Sultan Al Qasimi',
      title: 'Board Member',
      imageUrl: '/images/sultan.jpg',
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl font-bold mb-4 text-white">World Leading Co-Founders</h1>
      <p className="text-white mb-8 text-center">
        We are supported and guided by world leaders who have been in this field for several years
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-0">
        {coFounders.map((founder) => (
          <div key={founder.name} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img src={founder.imageUrl} alt={founder.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-white">{founder.name}</h2>
              <p className="text-gray-400">{founder.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoFoundersSection;
