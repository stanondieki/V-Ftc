import React from 'react';

const InvestmentOpportunities = () => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#300D6B',
  };

  const leftSectionStyle: React.CSSProperties = {
    flex: 1,
    paddingRight: '20px',
    color: '#fff',
  };

  const rightSectionStyle: React.CSSProperties = {
    flex: 2,
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
  };

  const columnStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    gap: '20px',
    overflow: 'visible', // Ensure images stay within their column
  };

  const imageStyle: React.CSSProperties = {
    width: '200px', // Increased image size
    height: 'auto',
    transform: 'rotate(-30deg)', // Reduced tilt degree
    position: 'relative',
    zIndex: 1,
    borderRadius: '20px', // Apply rounded corners
  };

  const staticImageStyle: React.CSSProperties = {
    ...imageStyle,
    animation: 'none', // No animation for the static image
  };

  // Specific style for Image 2 to move it to the right
  const image2Style: React.CSSProperties = {
    ...staticImageStyle,
    left: '130px', // Adjust this value to move Image 2 to the right
  };

  const slidingImageStyle: React.CSSProperties = {
    ...imageStyle,
    animation: 'slide 10s linear infinite', // Add sliding animation
  };

  const staggeredImageStyle = (index: number, rightShift: number = 0): React.CSSProperties => {
    const topOffset = index * 10; // Customize the vertical offset
    const leftOffset = index * 20 + rightShift; // Customize the horizontal offset for overlap + independent right shift
    const zIndex = 10 - index; // Higher zIndex for earlier images to overlap later images

    return {
      ...slidingImageStyle,
      top: `${topOffset}px`,
      left: `${leftOffset}px`,
      zIndex,
      marginBottom: '-20px', // Reduced overlap for better spacing
    };
  };

  return (
    <div style={containerStyle}>
      <div style={leftSectionStyle}>
        <h1 className="text-5xl font-bold mb-6">Investment Opportunities at V-FTC</h1>
        <p className="text-medium font-semibold mb-6">
          At V-FTC, we offer a diverse range of investment opportunities to cater to the varied needs of our clients. Our platform provides access to stocks, digital currencies, forex, gold, and other valuable minerals like silver, crude oil, and natural gas. We specialize in both short-term and long-term trading strategies, enabling investors to capitalize on market fluctuations for quick gains or to build sustained growth over time. Additionally, our mining operations in valuable minerals and digital currencies further enhance our portfolio, ensuring a comprehensive and profitable investment experience for all our users.
        </p>
      </div>
      <div style={rightSectionStyle}>
        <div style={columnStyle}>
          {/* Static image 1 */}
          <img src="/images/item/item-banner-1.png" alt="Image 1" style={staticImageStyle} />
          {/* Static image 2 with adjusted position */}
          <img src="/images/item/item-banner-1.png" alt="Image 2" style={image2Style} />
        </div>
        <div style={columnStyle}>
          {/* Sliding images */}
          <img src="/images/item/item-banner-3.png" alt="Image 3" style={staggeredImageStyle(0, 45)} />
          <img src="/images/item/item-banner-7.png" alt="Image 4" style={staggeredImageStyle(1, 150)} />
          <img src="/images/item/item-banner-5.png" alt="Image 5" style={staggeredImageStyle(2, 255)} />
          <img src="/images/item/item-banner-6.png" alt="Image 6" style={staggeredImageStyle(3, 360)} />
        </div>
        <div style={columnStyle}>
          <img src="/images/item/item-banner-5.png" alt="Image 8" style={staggeredImageStyle(4, -110)} />
          <img src="/images/item/item-banner-3.png" alt="Image 9" style={staggeredImageStyle(5, -5)} />
          <img src="/images/item/item-banner-6.png" alt="Image 10" style={staggeredImageStyle(6, 100)} />
        </div>
      </div>
      <style>
        {`
          @keyframes slide {
            0% {
              transform: translateX(0) translateY(0) rotate(-30deg);
            }
            100% {
              transform: translateX(-100px) translateY(-100px) rotate(-30deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default InvestmentOpportunities;
