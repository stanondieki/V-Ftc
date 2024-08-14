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

const VftcPage = () => {
    return (
        <div style={{ backgroundColor: '#050231' }}>
            <section>
                <div>
                    <h2 className="text-4xl font-bold mb-12 mt-12 items-center flex justify-center" style={{ color: '#00B4D8' }}>What is V-FTC</h2>
                </div>
            </section>
            <section
  className="py-8 px-4"  // Add padding-left and padding-right
  style={{
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '4rem 2rem', // Adjust padding as needed
    backgroundColor: '#130F40',
  }}
>
  <div className="text-start mb-8">
    <h2 className="text-5xl font-bold mb-4" style={{ color: '#7CFC00' }}>What is V-FTC?</h2> 
    <h5 className="text-lg font-medium">
      V-FTC is a US government-authorized sub-trading company under the US Federal Trade Commission, ensuring our operations meet the<br />
      highest regulatory standards.
    </h5>
  </div>

  <div className="flex flex-wrap justify-start text-start gap-8 text-white">
    <Card
      title="What Is V-FTC"
      content="Ventures Federal Trading Commission (V-FTC) is an investment company established on May 10, 2018.
      As a US government-authorized sub-trading company under the US Federal Trade Commission, 
      V-FTC quickly grew to reach 10,000 users within its first year,
      demonstrating its reliability and trustworthiness in the investment industry."
      className="text-white"
      icon=""
    />
    <Card
      title="Diverse Investment Portfolio"
      content="V-FTC offers a wide array of investment opportunities, including stocks, digital currencies, 
      forex, gold, and other valuable minerals like silver, crude oil, and natural gas. 
      Our platform supports both short-term and long-term trading strategies, catering to various investment goals and preferences."
      className="text-white"
      icon=""
    />
    <Card
      title="Expertise in Trading and Mining"
      content="In addition to traditional investment options, 
      V-FTC excels in mining operations for valuable minerals and digital currencies. 
      Leveraging advanced technology and robust security measures, we provide a secure and efficient investment environment,
      ensuring our clients have the tools and support needed to succeed."
      className="text-white"
      icon=""
    />
  </div>
</section>
        </div>
    )
}
export default VftcPage;