const IntroPage = () => {
    return (
        <div style={{ backgroundColor: '#050231' }}>
                    <section>
        <div>
          <h2 className="text-4xl font-bold mb-12 mt-12 items-center flex justify-center" style={{ color: '#00B4D8' }}>V-FTC Introduction</h2>
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
    )
}
export default IntroPage;