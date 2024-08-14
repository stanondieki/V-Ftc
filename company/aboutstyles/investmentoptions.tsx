import Link from "next/link";
import { GoShieldLock, GoBrowser } from "react-icons/go";
import { FaMobileScreenButton } from "react-icons/fa6";

const Card = ({
    title,
    content,
    icon,
    className,
  }: {
    title: string;
    content: string;
    icon?: React.ReactNode;  // Optional icon source
    className: string;
  }) => (
    <div className={`relative p-6 rounded-lg shadow-lg w-full max-w-xs mx-auto bg-transparent ${className}`} style={{ minHeight: '300px' }}>
      {/* Icon Container at the top */}
      {icon && (
        <div className="flex justify-center mb-4">
          <div className="bg-gradient-to-r from-blue-500 to-pink-500 rounded-full p-4 flex justify-center items-center transition-transform duration-300 ease-in-out transform hover:rotate-360">
            {icon}
          </div>
        </div>
      )}
      <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
      <p className="text-white text-center">{content}</p>
    </div>
  );

const InvestPage = () => {
const cardBackgroundImagePath = '/images/background/platform-bg.jpg'; // Update with your actual image path

    return (
        <div style={{ backgroundColor: '#050231' }}>
            <section>
                <div>
                    <h2 className="text-4xl font-bold mb-12 mt-12 items-center flex justify-center" style={{ color: '#00B4D8' }}>Investment Options</h2>
                </div>
            </section>
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
                <h2 className="text-5xl font-extrabold mb-4 items-center flex justify-center" style={{ color: '#db2777' }}>Investment Options</h2> 
                <h5 className="text-lg font-medium">V-FTC offers a broad spectrum of investment opportunities, including:</h5>
                </div>
            
                <div className="flex flex-wrap justify-center gap-8 text-white py-8 px-4">
                <Card
                    title="Stocks"
                    content="We provide access to a wide range of stocks, enabling investors to build diversified portfolios and benefit from market growth."
                    icon={
                    <Link href="/">
                        <GoShieldLock size={50} color="white" className="transition-transform duration-300 ease-in-out transform hover:rotate-360" />
                    </Link>
                    }
                    className="text-white"
                />
                <Card
                    title="Forex"
                    content="Our forex trading services enable investors to trade major currency pairs, taking advantage of the liquidity and volatility in the foreign exchange market."
                    icon={
                    <Link href="/">
                        <GoBrowser size={50} color="white" className="transition-transform duration-300 ease-in-out transform hover:rotate-360" />
                    </Link>
                    }
                    className="text-white"
                />
                <Card
                    title="Minerals"
                    content="Gold and Other Minerals: In addition to gold, we offer investment opportunities in other valuable minerals such as silver, crude oil, and natural gas, providing a comprehensive suite of options for resource-based investments."
                    icon={
                    <Link href="/">
                        <FaMobileScreenButton size={50} color="white" className="transition-transform duration-700 ease-in-out transform hover:rotate-360" />
                    </Link>
                    }
                    className="text-red"
                />
                </div>
          </section>
        </div>
    )
}
export default InvestPage;
