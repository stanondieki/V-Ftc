import React from 'react';

const CoFoundersSection: React.FC = () => {
  const coFounders = [
    {
      name: 'Elon Musk',
      title: 'Co-founder & COO',
      imageUrl: '/images/avt/team-main-01.png',
    },
    {
      name: 'Cristiano Ronaldo',
      title: 'Brand Ambassador - Investor',
      imageUrl: '/images/avt/team-main-02.png',
    },
    {
      name: 'Ashton Kutcher',
      title: 'Core-Member',
      imageUrl: '/images/avt/team-main-03.png',
    },
    {
      name: 'Sheikh Sultan Al Qasimi',
      title: 'Board Member',
      imageUrl: '/images/avt/team-main-04.png',
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center py-12">
      <h1 className="text-5xl font-md mb-4 text-white">World Leading Co-Founders</h1>
      <p className="text-white mb-8 text-center">
        We are supported and guided by world leaders who have been in this field for several years
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-0">
        {coFounders.map((founder) => (
          <div
            key={founder.name}
            className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:translate-y-[-10px]" // Hover effect
          >
            <img
              src={founder.imageUrl}
              alt={founder.name}
              className="w-full h-[450px] object-cover" // Increased height
            />
            <div className="absolute bottom-0 inset-x-0 p-6 mx-4 mb-4 backdrop-blur-sm bg-white bg-opacity-60 rounded-lg border-transparent group"> {/* Invisible border and text color on hover */}
              <h2 className="text-xl font-semibold text-white group-hover:text-pink-500">{founder.name}</h2> {/* Name changes to pink on hover */}
              <p className="text-white">{founder.title}</p> {/* Title remains white */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoFoundersSection;
