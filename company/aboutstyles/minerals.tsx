import Link from "next/link";
import { GoBrowser } from "react-icons/go";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaUsers } from 'react-icons/fa6';

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

const MineralPage = () =>{
    return (
        <div>
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

        </div>
    )
}
export default MineralPage;