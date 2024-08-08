import React from 'react';
import  Style  from '@/styles/home.module.css'; // Import your CSS file

const features = [
  {
    title: "Wide Range Of Investment Options",
    description: "V-FTC provides the opportunity to invest in a diverse array of assets, including digital currencies, gold, stocks, and forex. This variety allows you to diversify your portfolio and manage risk effectively, tailoring your investments to meet your financial goals.",
    icon: "path/to/icon1.png", // Replace with actual path or icon component
  },
  {
    title: "Strong Security Measures",
    description: "Security is a top priority at V-FTC. The platform employs state-of-the-art security protocols, including encryption and two-factor authentication, to safeguard your personal information and investments. Additionally, V-FTC adheres to regulatory standards, providing a secure and trustworthy environment for your investments.",
    icon: "path/to/icon2.png",
  },
  {
    title: "Responsive Customer Support",
    description: "With responsive and knowledgeable customer support, V-FTC ensures that you have the assistance you need whenever you need it. Whether you have questions about the platform or need help with a specific transaction, their support team is there to help.",
    icon: "path/to/icon3.png",
  },
  {
    title: "Customizable Investment Strategies",
    description: "V-FTC allows you to tailor your investment strategies to your specific goals and risk tolerance. Whether you're looking for long-term growth or short-term gains, the platform provides the flexibility to adjust your approach as needed.",
    icon: "path/to/icon4.png",
  },
  {
    title: "Cutting-Edge Technology",
    description: "The platform utilizes advanced technology to provide real-time data, sophisticated trading tools, and robust analytics. These features enable you to make well-informed investment decisions and stay ahead in the fast-paced financial markets.",
    icon: "path/to/icon5.png",
  },
  {
    title: "User-Friendly Interface",
    description: "V-FTC is designed with a user-friendly interface, making it easy for both novice and experienced investors to navigate and manage their investments. The platform's intuitive design ensures a smooth and efficient user experience.",
    icon: "path/to/icon6.png",
  },
  {
    title: "Mobile Accessibility",
    description: "V-FTC's mobile app ensures that you can manage your investments on the go. The app provides full functionality, allowing you to trade, monitor your portfolio, and access market information anytime, anywhere.",
    icon: "path/to/icon7.png",
  },
  {
    title: "Competitive And Transparent Fees",
    description: "V-FTC offers competitive fees and a transparent pricing structure, allowing you to maximize your returns without worrying about hidden costs. This ensures that you can invest with confidence, knowing exactly what you are paying for.",
    icon: "path/to/icon8.png",
  },
];

const WhyChooseVFTC: React.FC = () => {
  return (
    <div className={Style.bg}>
       <div className="text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Why Choose V-FTC?</h2>
        <p className="text-lg mb-12">Ventures Federal Trading Commission official characteristics</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#000435 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <img src={feature.icon} alt={feature.title} className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-base text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default WhyChooseVFTC;
