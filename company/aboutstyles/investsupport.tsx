

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
    );
}
export default Insupport;