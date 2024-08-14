
const Missions = () => {
  const frameImagePath = '/images/background/bg-document.png'; // Update with your actual image path
    return (
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
    );
}
export default Missions;