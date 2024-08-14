const AdvancedPage = () => {

    const handlePlayClick = () => {
        window.open('https://youtu.be/Cbb3ri72nCw', '_blank');
        };

    return (
        <div>
            <section className="flex justify-center items-center h-[50vh] mt-10" >
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-12 mt-12" style={{ color: '#00B4D8' }}>ADVANCED TECHNOLOGY</h2>
                    </div>
            </section>
            <section className="w-full text-white py-16 px-0 " style={{ backgroundColor: '#130F40' }}>
                <div className="container mx-auto px-8 relative"> {/* Added relative positioning to the container */}
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
        </div>
    )
}
export default AdvancedPage;