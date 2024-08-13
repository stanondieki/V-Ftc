import Link from 'next/link';
import React from 'react';
import { BsPhone } from 'react-icons/bs';
import { FaGlobe, FaShield, FaUsers } from 'react-icons/fa6';
import Style from '@/styles/home.module.css';
import InvestmentOpportunities from './aboutstyles/invest';
import InfoSection from '@/components/infosection';
import { GoShieldLock, GoBrowser } from "react-icons/go";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaArrowUpRightDots, FaCalendarDays } from "react-icons/fa6";
import { BiHive } from "react-icons/bi";
import { ArrowUpward } from '@mui/icons-material';

// Card Component
const Card = ({
  
  title,
  content,
  icon,
  link,
  className,
}: {
  title: string;
  content: string;
  icon?: React.ReactNode;  // Optional icon source
  link?: string;
  className: string;
}) => (
  <div className={`relative p-6 rounded-lg shadow-lg w-full max-w-xs mx-auto bg-transparent ${className}`} style={{ minHeight: '300px' }}>
    {/* Icon Container at the top */}
    {icon && (
      <div className="flex justify-center mb-4">
        <div className="bg-blue-500 rounded-full p-2">
          {icon}
        </div>
      </div>
    )}
    <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
    <p className="text-white text-center">{content}</p>
  </div>
);

const About = () => {
  const frameImagePath = '/images/background/bg-document.png'; // Update with your actual image path
  const cardBackgroundImagePath = '/images/background/platform-bg.jpg'; // Update with your actual image path

  const handlePlayClick = () => {
    window.open('https://youtu.be/Cbb3ri72nCw', '_blank');
  };

  return (
    <div className=" min-h-screen flex flex-col justify-center items-center text-white"style={{ backgroundColor: '#050231' }} >
      {/* Image Background Section */}
      <div
        className="w-full max-w-none mx-auto px-4 py-12 relative"
        style={{
          backgroundImage: 'url(/images/background/Slider.jpg)',
          backgroundSize: '300% auto',
          backgroundPosition: 'center',
          height: '80vh',
        }}
      >
        {/* Text Container */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-center bg-opacity-70 p-6 rounded-md ">
            <h1 className="text-5xl font-bold mb-6" style={{ color: '#00B4D8' }}>Investment Support</h1>
            <p className="text-lg font-medium " style={{ maxWidth: '700px' }}>
              We understand that successful investing requires more than just selecting the right assets.
              It involves ongoing support, expert guidance, and access to the right tools and resources.
              Our comprehensive investment support services are designed to provide you with the assistance
              you need to navigate the complexities of the financial markets and achieve your investment objectives.
            </p>
          </div>
        </div>
      </div>

      {/* What is VFTC Section */}
        <InfoSection/>
      {/* Mission and Features Section */}
      <section>
        <div
          className="flex flex-col md:flex-row justify-between items-start p-8 mt-12 py-8 px-4"
        style={{
          backgroundImage: `url(${frameImagePath})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          borderRadius: '10px',
          backgroundColor: '#130F40',
        }}
  >
          {/* Our Mission Section */}
    <div className="flex-none" style={{ maxWidth: '40%', maxHeight:'30%' }}>
      <h2 className="text-5xl font-bold mb-4">Our Mission</h2>
      <p className="text-lg font-medium leading-relaxed">
        At V-FTC, our mission is to empower investors by providing diverse, high-quality investment opportunities 
        and the necessary tools to achieve financial success. We are dedicated to creating a secure, user-friendly 
        platform that caters to both novice and experienced investors.
      </p>
    </div>

    {/* Features Section */}
    <div className="flex flex-1 justify-between items-center space-x-4 mt-8 md:mt-0">
      {/* Feature 1 */}
      <div className="relative text-center">
        <img 
          src="/images/background/bg-iconbox.png" 
          alt="Buy and Sell" 
          className="w-full h-32" 
          style={{ height: '150px' }}  
        />
        <h3 className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-white">
          Buy and sell items easily
        </h3>
      </div>
      {/* Feature 2 */}
      <div className="relative text-center">
        <img 
          src="/images/background/bg-iconbox.png" 
          alt="Create Collections" 
          className="w-full h-32" 
          style={{ height: '150px' }}  
        />
        <h3 className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-white">
          Create collections & earn rewards
        </h3>
      </div>
      {/* Feature 3 */}
      <div className="relative text-center">
        <img 
          src="/images/background/bg-iconbox.png" 
          alt="Chase Limited Edition" 
          className="w-full h-32" 
          style={{ height: '150px' }}  
        />
        <h3 className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-white">
          Chase limited edition V-FTC
        </h3>
      </div>
    </div>
  </div>
</section>

      <section className="flex justify-center items-center h-[50vh] mt-10" >
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12 mt-12" style={{ color: '#00B4D8' }}>ADVANCED TECHNOLOGY</h2>
        </div>
      </section>

      {/* Advanced Technology and Tools Section */}
      <section className="w-full text-white py-16 px-0 " style={{ backgroundColor: '#130F40' }}>
  <div className="container mx-auto px-8 relative"> {/* Added relative positioning to the container */}
    
    {/* Top Left Image */}
    <div className="absolute top-0 left-0 mt-4 ml-4"> {/* Adjust margin as needed */}
      <img src="/images/logos/logo-main.png" alt="Logo" className="h-12 w-auto" /> {/* Replace with your image path */}
    </div>

    <div className="flex justify-between items-start space-x-8">
      {/* Play Button */}
      <div className="flex-1 flex justify-center items-center relative">
        {/* Outward black ring */}
        <div className="absolute rounded-full border-4 border-black ${styles.animate-ring}" style={{ width: '100px', height: '100px', top: '80%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>

        {/* Play Button */}
        <div
          className="absolute flex justify-center items-center rounded-full cursor-pointer transform transition-transform hover:scale-110 hover:bg-pink-500"
          onClick={handlePlayClick}
          style={{
            width: '80px',   // Increased size
            height: '80px',  // Increased size
            top: '85%',      // Move the button further downwards
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(128, 128, 128, 0.5)', // Semi-transparent grey background
            transition: 'background-color 0.3s', // Smooth transition for background color
          }}
        >
          <div className="absolute inset-0 rounded-full border-4 border-gray-300 ring-animation"></div>
          <div
            style={{
              width: '0',
              height: '0',
              borderLeft: '25px solid white', // Increased size
              borderTop: '12.5px solid transparent', // Adjusted size
              borderBottom: '12.5px solid transparent', // Adjusted size
            }}
          ></div>
        </div>
      </div>

      {/* Advanced Technology and Tools Text */}
      <div className="flex-1 pl-20 text-left" style={{ maxWidth: '500px', marginTop: '30px', marginRight: '20px' }}>
        <h5 className="font-bold text-2xl mt-12" style={{ color: '#9e219e' }}>ABOUT US</h5>
        <h3 className="text-4xl font-bold mb-4">ADVANCED TECHNOLOGY AND TOOLS</h3>
        <p className="text-lg font-medium mb-12" style={{ margin: '0' }}>
          We leverage cutting-edge technology to offer real-time data, advanced trading tools, and comprehensive market analysis. Our platform is designed to be intuitive and accessible, ensuring that users can make informed decisions and execute trades efficiently.
        </p>
      </div>
    </div>
  </div>
</section>

      <section>
        <div >
          <h2 className="text-4xl font-bold mb-12 mt-12" style={{ color: '#00B4D8' }}>Investment Options</h2>
        </div>
      </section>

      {/* Investment Options Section */}
      <section
  className=""
  style={{
    backgroundImage: `url(${cardBackgroundImagePath})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '4rem 0', // Adjust padding as needed
  }}
>
  <div className="text-center mb-8">
    <h2 className="text-5xl font-extrabold mb-4" style={{ color: '#db2777' }}>Investment Options</h2> 
    <h5 className="text-lg font-medium">V-FTC offers a broad spectrum of investment opportunities, including:</h5>
  </div>

  <div className="flex flex-wrap justify-center gap-8 text-white py-8 px-4">
    <Card
      title="Stocks"
      content="We provide access to a wide range of stocks, enabling investors to build diversified portfolios and benefit from market growth."
      icon={
        <Link href="/">
          <GoShieldLock size={50} color="white" />
        </Link>
      }
      className="text-white"
    />
    <Card
      title="Forex"
      content="Our forex trading services enable investors to trade major currency pairs, taking advantage of the liquidity and volatility in the foreign exchange market."
      icon={
        <Link href="/">
          <GoBrowser size={50} color="white" />
        </Link>
      }
      className="text-white"
    />
    <Card
      title="Minerals"
      content="Gold and Other Minerals: In addition to gold, we offer investment opportunities in other valuable minerals such as silver, crude oil, and natural gas, providing a comprehensive suite of options for resource-based investments."
      icon={
        <Link href="/">
          <FaMobileScreenButton size={50} color="white" />
        </Link>
      }
      className="text-red"
    />
  </div>
</section>


      <section>
        <div>
          <h2 className="text-4xl font-bold mb-12 mt-12" style={{ color: '#00B4D8' }}>Why Choose Us</h2>
        </div>
      </section>


      <section className="py-16" style={{ backgroundColor: '#130F40', position: 'relative' }}>
  <div className="flex flex-col lg:flex-row items-start w-full">
    <div className="flex-1" style={{ maxWidth: '500px', position: 'relative', top: '40px', left: '20px' }}>
      <div className="relative">
        <img src="/images/background/ab-video.jpg" alt="Illustration" className="w-full h-auto" />
        <button
          onClick={() => window.open('https://www.youtube.com/watch?v=YOUR_VIDEO_ID', '_blank')}
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: 'white', borderRadius: '50%', width: '80px', height: '80px' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16 text-blue-500">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-4.505 2.597A1 1 0 019 12.82V9.182a1 1 0 011.247-.968l4.505 2.597a1 1 0 010 1.737z" />
          </svg>
        </button>
      </div>
    </div>
    <div className="flex-1 lg:pl-15 relative" style={{ maxWidth: '50%', marginTop: '30px', marginRight: '20px', marginLeft: '320px' }}>
      <h5 className="text-blue-400 text-bold" style={{ color: 'cyan' }}>ABOUT US</h5>
      <h2 className="text-4xl font-bold text-white mb-6" style={{ color: '#db2777' }}>Why choose V-FTC?</h2>
      <div className="space-y-8 relative">
        {/* Content sections */}
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="bg-gradient-to-r from-blue-500 to-pink-500 rounded-full h-12 w-12 flex justify-center items-center">
              <Link href="/">
                <FaUsers size={20} color="white" />
              </Link>
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-bold text-white">Diverse Investment Opportunities</h3>
            <p className="mt-2 text-base text-gray-300">
              At Ventures Federal Trading Commission (V-FTC), we offer a comprehensive range of investment options,
              including stocks, digital currencies, forex, gold, and other valuable minerals such as silver,
              crude oil, and natural gas. Whether you're interested in short-term trading for quick gains or 
              long-term strategies for sustained growth, our platform is designed to meet your diverse financial needs.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="bg-gradient-to-r from-blue-500 to-pink-500 rounded-full h-12 w-12 flex justify-center items-center">
              <Link href="/">
                <FaGlobe size={20} color="white" />
              </Link>
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-bold text-white">Trusted and Authorized</h3>
            <p className="mt-2 text-base text-gray-300">
              V-FTC is a US government-authorized sub-trading company under the US Federal Trade Commission,
              ensuring our operations meet the highest regulatory standards. Established on May 10, 2018, 
              we quickly gained the trust of our clients, reaching 10,000 users within our first year. 
              This rapid growth underscores our commitment to reliability, transparency, and security in all
              our investment services.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<div>
<InvestmentOpportunities/>
</div>

      <section>
        <div>
          <h2 className="text-4xl font-bold mb-12 mt-12" style={{ color: '#00B4D8' }}>What is V-FTC</h2>
        </div>
      </section>


{/*what is VFTC section main*/}

<section
  className="py-8 px-4"  // Add padding-left and padding-right
  style={{
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '4rem 2rem', // Adjust padding as needed
    backgroundColor: '#130F40',
  }}
>
  <div className="text-start mb-8">
    <h2 className="text-5xl font-bold mb-4" style={{ color: '#7CFC00' }}>What is V-FTC?</h2> 
    <h5 className="text-lg font-medium">
      V-FTC is a US government-authorized sub-trading company under the US Federal Trade Commission, ensuring our operations meet the<br />
      highest regulatory standards.
    </h5>
  </div>

  <div className="flex flex-wrap justify-start text-start gap-8 text-white">
    <Card
      title="What Is V-FTC"
      content="Ventures Federal Trading Commission (V-FTC) is an investment company established on May 10, 2018.
      As a US government-authorized sub-trading company under the US Federal Trade Commission, 
      V-FTC quickly grew to reach 10,000 users within its first year,
      demonstrating its reliability and trustworthiness in the investment industry."
      className="text-white"
      icon=""
    />
    <Card
      title="Diverse Investment Portfolio"
      content="V-FTC offers a wide array of investment opportunities, including stocks, digital currencies, 
      forex, gold, and other valuable minerals like silver, crude oil, and natural gas. 
      Our platform supports both short-term and long-term trading strategies, catering to various investment goals and preferences."
      className="text-white"
      icon=""
    />
    <Card
      title="Expertise in Trading and Mining"
      content="In addition to traditional investment options, 
      V-FTC excels in mining operations for valuable minerals and digital currencies. 
      Leveraging advanced technology and robust security measures, we provide a secure and efficient investment environment,
      ensuring our clients have the tools and support needed to succeed."
      className="text-white"
      icon=""
    />
  </div>
</section>










      <section>
        <div>
          <h2 className="text-4xl font-bold mb-12 mt-12" style={{ color: '#00B4D8' }}>Business Deal</h2>
        </div>
      </section>








      <section
  className="py-8 px-6"
  style={{
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: '#130F40',
  }}
>
  <div className="text-center mb-8">
    <h2 className="text-4xl font-bold mb-4" style={{ color: '#db2777' }}>
      Business Deal With V-FTC?
    </h2>
  </div>

  <div className="flex flex-wrap justify-center gap-8 text-white">
    <Card
      title="Digital Currency Trading"
      content="V-FTC helps customers to deal with digital currency short and long term trade for standard profit margin"
      icon={
        <Link href="/">
          <FaShield size={50} color="white" />
        </Link>
      }
      className="text-white"
    />
    <Card
      title="Digital Currency Mining"
      content="The platform helps investors to make it easy to purchase and invest in the mining sector"
      icon={
        <Link href="/">
          <FaArrowUpRightDots size={50} color="white" />
        </Link>
      }
      className="text-white"
    />
    <Card
      title="Minerals Trading"
      content="V-FTC has most popular Minerals trading like Gold, Silver, Crude Oil, Natural Gas"
      icon={
        <Link href="/">
          <FaCalendarDays size={50} color="white" />
        </Link>
      }
      className="text-white"
    />
  </div>
</section>

<section
  className="py-8 px-6"
  style={{
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: '#130F40',
  }}
>
  <div className="flex flex-wrap justify-center gap-8 text-white">
    <Card
      title="Minerals Mining"
      content="The process of taking into account the collective opinion of a group."
      icon={
        <Link href="/">
          <FaMobileScreenButton size={50} color="white" />
        </Link>
      }
      className="text-white"
    />
    <Card
      title="Stocks Investment"
      content="We have the most popular Stocks investment like Tesla, Apple, Amazon, Google, Meta. The system pays a bonus for excellent individuals conveniently."
      icon={
        <Link href="/">
          <FaUsers size={50} color="white" />
        </Link>
      }
      className="text-white"
    />
    <Card
      title="Forex Trading"
      content="We provide our investors with safe and secure Forex trading with market analyst guidance."
      icon={
        <Link href="/">
          <GoBrowser size={50} color="white" />
        </Link>
      }
      className="text-white"
    />
  </div>
</section>



        <section>
        <div>
          <h2 className="text-4xl font-bold mb-12 mt-12" style={{ color: '#00B4D8' }}>V-FTC Introduction</h2>
        </div>
      </section>

      <section className="py-12 px-4" style={{ backgroundColor: '#130F40', width: '100%' }}>
  <div className="flex flex-col lg:flex-row items-center justify-between">
    <div className="flex-1 mb-8 lg:mb-0 relative">
      <h2 className="text-5xl font-bold mb-6 mt-4">Allow us to Introduce Ourselves</h2>
      <p className="text-2xl">
        V-FTC (Ventures Federal Trading Commission) is an investment company, that was built on May 10, 2018. 
        V-FTC reached 10,000 users within one year. This is a US government-authorized sub-trading company of 
        the US Federal Trade Commission.
      </p>
      <div className="relative flex items-center">
        <a href="/images/layout/item-01.jpg">
          <img src="/images/layout/item-01.jpg" alt="" />
        </a>
        <a href="/images/logos/logo-main.png" className="relative top-0 left-0 transform translate-x-1/2 justify-center">
          <img src="/images/logos/logo-main.png" alt="" className="w-16 h-12" />
        </a>
      </div>
    </div>
    <div className="flex-1 lg:pl-15 relative">
      <div className="space-y-8 relative">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="border-4 border-pink-600 rounded-lg h-16 w-16 flex justify-center items-center text-bold">
              <h6 className="text-bold font-bold text-5xl" style={{ color: '#db2777' }}>01</h6>
            </div>
          </div>
          <div className="ml-4">
            <h6 className="text-bold text-3xl font-bold text-white">High-quality rendered and equally affordable artwork</h6>
          </div>
        </div>
        <hr className="border-t border-gray-400" />
        
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="border-4 border-pink-600 rounded-lg h-16 w-16 flex justify-center items-center">
              <h6 className="text-bold font-bold text-5xl" style={{ color: '#db2777' }}>02</h6>
            </div>
          </div>
          <div className="ml-4">
            <h6 className="text-bold text-3xl font-bold text-white">Learning, researching, and studying the Digital Currency market daily</h6>
          </div>
        </div>
        <hr className="border-t border-gray-400" />
        
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="border-4 border-pink-600 rounded-lg h-16 w-16 flex justify-center items-center">
              <h6 className="text-bold font-bold text-5xl" style={{ color: '#db2777' }}>03</h6>
            </div>
          </div>
          <div className="ml-4">
            <h6 className="text-3xl text-bold font-bold text-white">The immersive world of NFTs with all its collectors & projects</h6>
          </div>
        </div>
        <hr className="border-t border-gray-400" />
        
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="border-8 border-pink-600 rounded-lg flex justify-center items-center font-bold h-16 w-16 text-5xl">
              <h6 className="text-bold" style={{ color: '#db2777' }}>04</h6>
            </div>
          </div>
          <div className="ml-4">
            <h6 className="text-3xl text-bold font-bold text-white">Slow, steady, and natural community growth within the Lazy Lounge Club</h6>
          </div>
        </div>
        <hr className=" border-gray-400" />
      </div>
    </div>
  </div>
</section>









      

      
    </div>
  );
};

export default About;
