import Link from 'next/link';
import React from 'react';
import { BsPhone } from 'react-icons/bs';
import { FaGlobe, FaUsers } from 'react-icons/fa6';
import Style from '@/styles/home.module.css';

// Card Component
const Card = ({
  
  title,
  content,
  iconSrc,
  link,
  className,
}: {
  title: string;
  content: string;
  iconSrc?: string; // Optional icon source
  link?: string;
  className: string;
}) => (
  <div className="relative p-6 border rounded-lg shadow-lg w-full max-w-xs mx-auto bg-transparent">
    {/* Icon Container */}
    {iconSrc && (
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2">
        <img src={iconSrc} alt="Icon" className="w-8 h-8" />
      </div>
    )}
    <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
    <p className="text-gray-700 text-center">{content}</p>
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
            <h1 className="text-5xl font-bold mb-6">Investment Support</h1>
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
      <section className=" py-16" style={{ backgroundColor: '#050231' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 mb-8 lg:mb-0">
            <img src="/images/layout/home.png" alt="Illustration" className="w-full h-full mr-6 animate-float" />
          </div>
          <div className="flex-1 lg:pl-15 relative">
            <h2 className="text-3xl font-medium text-white mb-6">
              What is V-FTC?
            </h2>
            <p className="text-md text-gray-300 mb-8">
              The world first platform to reward investors and traders build on Ventures Federal Trade Commission.
            </p>
            <div className="space-y-8 relative">
              {/* Vertical dotted line */}
              <div className="absolute left-6 top-12 h-[calc(100%-2.5rem)] w-0.5 border-l-2 border-dotted border-blue-500"></div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-r from-blue-500 to-pink-500 rounded-full h-12 w-12 flex justify-center items-center">
                    <Link href="/">
                      <FaUsers size={20} color="white" />
                    </Link>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">Financial Platform</h3>
                  <p className="mt-2 text-base text-gray-300">
                    V-FTC is an all-in-one investment platform that allows customers to invest in various asset classes including digital currencies, gold, stocks, and forex. It caters to diverse investment needs, providing a range of opportunities to grow and manage wealth.
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
                  <h3 className="text-xl font-semibold text-white">Advanced Technology And User-Friendly Interface</h3>
                  <p className="mt-2 text-base text-gray-300">
                    With advanced technology and a user-friendly interface, V-FTC offers sophisticated trading tools, real-time data, and robust analytics to help investors make informed decisions. The platform is designed to be accessible and efficient for both beginners and experienced traders.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-r from-blue-500 to-pink-500 rounded-full h-12 w-12 flex justify-center items-center">
                    <Link href="/">
                      <FaUsers size={20} color="white" />
                    </Link>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">Security And Support</h3>
                  <p className="mt-2 text-base text-gray-300">
                    V-FTC prioritizes security and transparency, employing strong security measures and competitive, clear pricing structures. Alongside comprehensive educational resources and responsive customer support, V-FTC ensures a secure and supportive environment for managing investments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Features Section */}
      <section>
  <div
    className="flex flex-col md:flex-row justify-between items-start p-8 bg-purple-700 mt-12"
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
          <h2 className="text-4xl font-bold mb-12 mt-12">ADVANCED TECHNOLOGY</h2>
        </div>
      </section>

      {/* Advanced Technology and Tools Section */}
      <section className="w-full text-white py-16 px-0" style={{ backgroundColor: '#130F40' }}>
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
          <h2 className="text-4xl font-bold mb-12 mt-12">Investment Options</h2>
        </div>
      </section>

      {/* Investment Options Section */}
      <section
        className="py-8"
        style={{
          backgroundImage: `url(${cardBackgroundImagePath})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '4rem 0', // Adjust padding as needed
        }}
      >
        <div className="text-center mb-8">
          <h2 className="text-5xl font-extrabold mb-4">Investment Options</h2> 
          <h5 className="text-lg font-medium">V-FTC offers a broad spectrum of investment opportunities, including:</h5>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-white">
          <Card
            title="Stocks"
            content="We provide access to a wide range of stocks, enabling investors to build diversified portfolios and benefit from market growth."
            iconSrc="/images/icons/icon1.png" // Update with your actual icon path
            className="text-white"
          />
          <Card
            title="Forex"
            content="Our forex trading services enable investors to trade major currency pairs, taking advantage of the liquidity and volatility in the foreign exchange market."
            iconSrc="/images/icons/icon2.png" // Update with your actual icon path
            className="text-white"
          />
          <Card
            title="Minerals"
            content="Gold and Other Minerals: In addition to gold, we offer investment opportunities in other valuable minerals such as silver, crude oil, and natural gas, providing a comprehensive suite of options for resource-based investments."
            iconSrc="/images/icons/icon3.png" // Update with your actual icon path
            className="text-red"
          />
        </div>
      </section>



      <section>
        <div>
          <h2 className="text-4xl font-bold mb-12 mt-12">Why Choose Us</h2>
        </div>
      </section>


      <section className=" py-16" style={{ backgroundColor: '#130F40' }}>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        <div className="flex-1 mb-8 lg:mb-0">
          <img src="/images/background/ab-video.jpg" alt="Illustration" className="w-full h-full mr-6" />
        </div>
        <div className="flex-1 lg:pl-15 relative">
          <h5 className="text-blue-400 text-bold" style={{color: 'blue' }}>ABOUT US</h5>
          <h2 className="text-4xl font-bold text-white mb-6">
          Why choose V-FTC?
          </h2>
          <div className="space-y-8 relative">
            {/* Vertical dotted line */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="bg-gradient-to-r from-blue-500 to-pink-500 rounded-full h-12 w-12 flex justify-center items-center">
                  <Link href="/">
                    <FaUsers size={20} color="white" />
                  </Link>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-white">Diverse Investment Opportunities</h3>
                <p className="mt-2 text-base text-gray-300">
                At Ventures Federal Trading Commission (V-FTC), we offer a comprehensive range of investment options,
                 including stocks, digital currencies, forex, gold, and other valuable minerals such as silver,
                  crude oil, and natural gas. Whether you're interested in short-term trading for quick gains or 
                  long-term strategies for sustained growth, our platform is designed to meet your diverse financial
                   needs.                
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
                <h3 className="text-xl font-semibold text-white">Trusted and Authorized</h3>
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

    <section>
        <div>
          <h2 className="text-4xl font-bold mb-12 mt-12">Investment Opportunities</h2>
        </div>
      </section>




      <section>
        <div>
          <h2 className="text-4xl font-bold mb-12 mt-12">What is V-FTC</h2>
        </div>
      </section>


{/*what is VFTC section main*/}

      <section
        className="py-8"
        style={{ 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '4rem 0', // Adjust padding as needed
          backgroundColor: '#130F40',
        }}
      >
        <div className="text-start mb-8">
          <h2 className="text-5xl font-bold mb-4"style={{ color: '#7CFC00' }}>What is V-FTC?</h2> 
          <h5 className="text-lg font-medium">V-FTC is a US government-authorized sub-trading company under the US Federal Trade Commission, ensuring our operations meet the<br />
             highest regulatory standards.</h5>
        </div>

        <div className="flex flex-wrap justify-start text-start gap-8 text-white">
          <Card
        
            title="What Is V-FTC"
            content="Ventures Federal Trading Commission (V-FTC) is an investment company established on May 10, 2018.
             As a US government-authorized sub-trading company under the US Federal Trade Commission, 
             V-FTC quickly grew to reach 10,000 users within its first year,
              demonstrating its reliability and trustworthiness in the investment industry."
              className="text-white"
           
          />
          <Card
            title="Diverse Investment Portfolio"
            content="V-FTC offers a wide array of investment opportunities, including stocks, digital currencies, 
            forex, gold, and other valuable minerals like silver, crude oil, and natural gas. 
            Our platform supports both short-term and long-term trading strategies, catering to various investment goals and preferences."
            className="text-white"
            
          />
          <Card
            title="Expertise in Trading and Mining"
            content="In addition to traditional investment options, 
            V-FTC excels in mining operations for valuable minerals and digital currencies. 
            Leveraging advanced technology and robust security measures, we provide a secure and efficient investment environment,
             ensuring our clients have the tools and support needed to succeed."
             className="text-white"
           
          />
        </div>
      </section>









      <section>
        <div>
          <h2 className="text-4xl font-bold mb-12 mt-12">Business Deal</h2>
        </div>
      </section>








      <section
        className="py-8"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '4rem 0', // Adjust padding as needed
          backgroundColor: '#130F40',
        }}
      >
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Business Deal With V-FTC?</h2> 
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-white">
          <Card
            title="digital currency Trading"
            content="V-FTC helps customers to deal with digital currency short and long term trade for standard profit margin"
            iconSrc="/images/icons/icon1.png" // Update with your actual icon path
            className="text-white"
          />
          <Card
            title="digital currency Mining"
            content="The platform helps investors to make easy to purchase and invest that in mining sector"
            iconSrc="/images/icons/icon2.png" // Update with your actual icon path
            className="text-white"
          />
          <Card
            title="Minerals trading"
            content="V-FTC has most popular Minerals trading like Gold, Silver, Crude Oil, Natural Gas"
            iconSrc="/images/icons/icon3.png" // Update with your actual icon path
            className="text-white"
          />
        </div>
      </section>


      
      <section
        className="py-8"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '4rem 0', // Adjust padding as needed
          backgroundColor: '#130F40',
        }}
      >
         <div className="flex flex-wrap justify-center gap-8 text-white">
          <Card
            title="Minerals Mining"
            content="The process of taking into account the collective opinion of a group."
            iconSrc="/images/icons/icon1.png" // Update with your actual icon path
            className="text-white"
          />
          <Card
            title="Stocks Investment"
            content="We have most popular Stocks investment like Tesla, Apple, Amazon, Google, Meta. The system pay a bonus for excillent individuals conveniently."
            iconSrc="/images/icons/icon2.png" // Update with your actual icon path
            className="text-white"
          />
          <Card
            title="Forex Trading"
            content="We provide our investors with safe and secure Forex trading with market analyst guidance."
            iconSrc="/images/icons/icon3.png" // Update with your actual icon path
            className="text-white"
          />
        </div>

       
        </section>


        <section>
        <div>
          <h2 className="text-4xl font-bold mb-12 mt-12">V-FTC Introduction</h2>
        </div>
      </section>

      <section className="py-12" style={{ backgroundColor: '#130F40', width: '100%' }}>
  <div className="flex flex-col lg:flex-row items-center justify-between">
    <div className="flex-1 mb-8 lg:mb-0">
      <h2 className="text-5xl font-bold mb-6 mt-4">Allow us to Introduce Ourselves</h2>
      <p>
        V-FTC (Ventures Federal Trading Commission) is an investment company, that was built on May 10, 2018. 
        V-FTC reached 10,000 users within one year. This is a US government-authorized sub-trading company of 
        the US Federal Trade Commission.
      </p>
      <div>
        <a href="/images/layout/item-01.jpg">
          <img src="/images/layout/item-01.jpg" alt="" />
        </a>
        <a href="/public/images/logos/logo-main.png">
          <img src="/public/images/logos/logo-main.png" alt="" />
        </a>
      </div>
    </div>
    <div className="flex-1 lg:pl-15 relative">
      <div className="space-y-8 relative">
        {/* Vertical dotted line */}
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="border-4 border-purple-600 rounded-lg h-16 w-16 flex justify-center items-center text-bold">
              <h6 className="text-bold font-bold text-5xl">01</h6>
            </div>
          </div>
          <div className="ml-4">
            <h6 className="text-bold text-3xl font-bold text-white">High-quality rendered and equally affordable artwork</h6>
          </div>
        </div>
        <hr className="border-t border-gray-400" />
        
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="border-4 border-purple-600 rounded-lg h-16 w-16 flex justify-center items-center">
              <h6 className="text-bold font-bold text-5xl">02</h6>
            </div>
          </div>
          <div className="ml-4">
            <h6 className="text-bold text-3xl font-bold text-white">Learning, researching, and studying the Digital Currency market daily</h6>
          </div>
        </div>
        <hr className="border-t border-gray-400" />
        
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="border-4 border-purple-600 rounded-lg h-16 w-16 flex justify-center items-center">
              <h6 className="text-bold font-bold text-5xl">03</h6>
            </div>
          </div>
          <div className="ml-4">
            <h6 className="text-3xl text-bold font-bold text-white">The immersive world of NFTs with all its collectors & projects</h6>
          </div>
        </div>
        <hr className="border-t border-gray-400" />
        
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="border-4 border-purple-600 rounded-lg h-16 w-16 flex justify-center items-center">
              <h6 className="text-bold font-bold text-5xl">04</h6>
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
