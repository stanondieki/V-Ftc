import Link from "next/link";
import { FaGlobe, FaShield, FaUsers } from 'react-icons/fa6';
import { SiPluscodes } from "react-icons/si";
import { RiShieldUserLine } from "react-icons/ri";

const ChoosePage = () => {
    return (
        <div style={{ backgroundColor: '#050231', width: '100%' }}>
            <section>
                <div>
                    <h2 className="text-4xl font-bold mb-12 mt-12 items-center flex justify-center" style={{ color: '#00B4D8' }}>Why Choose Us</h2>
                </div>
            </section>
            <section className="py-16" style={{ backgroundColor: '#130F40', position: 'relative', width: '100%' }}>
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
                                    <div className="bg-gray-600 rounded-full h-12 w-12 flex justify-center items-center">
                                        <Link href="/">
                                            <SiPluscodes size={20} color="#60a5fa" /> {/* Light blue color */}
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
                                    <div className="bg-gray-600 rounded-full h-12 w-12 flex justify-center items-center">
                                        <Link href="/">
                                            <RiShieldUserLine size={20} color="#60a5fa" /> {/* Light blue color */}
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
        </div>
    );
}
export default ChoosePage;
