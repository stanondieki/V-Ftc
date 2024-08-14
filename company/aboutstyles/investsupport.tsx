

const Insupport = () => {
    return(
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
            <h1 className="text-5xl font-bold mb-6" style={{ color: '#00B4D8' }}>About Us</h1>
            <p className="text-lg font-medium " style={{ maxWidth: '700px' }}>
            Ventures Federal Trading Commission (V-FTC) is a leading investment company established 
            on May 10, 2018. Authorized by the US Federal Trade Commission, we are a trusted sub-trading 
            company committed to delivering exceptional investment services. In just one year, we achieved 
            the remarkable milestone of reaching 10,000 users, reflecting the trust and satisfaction of our 
            growing client base.
            </p>
          </div>
        </div>
      </div>
    );
}
export default Insupport;