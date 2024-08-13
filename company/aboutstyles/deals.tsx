import Link from "next/link";
import { FaShield } from 'react-icons/fa6';
import { FaArrowUpRightDots, FaCalendarDays } from "react-icons/fa6";


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
          <div className="bg-blue-500 rounded-full p-2">
            {icon}
          </div>
        </div>
      )}
      <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
      <p className="text-white text-center">{content}</p>
    </div>
  );


const DealsPage = () => {
    return (
        <div>
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

        </div>
    )
}
export default DealsPage;