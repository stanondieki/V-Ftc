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
    overflow: 'hidden', // Hide images when they slide out of view
  };

  const columnStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    gap: '20px',
    overflow: 'visible',
  };

  const imageStyle: React.CSSProperties = {
    width: '250px', // Reduce size to match static images
    height: 'auto',
    transform: 'rotate(-30deg)',
    position: 'relative',
    zIndex: 1,
    borderRadius: '20px',
  };

  const staticImageStyle: React.CSSProperties = {
    ...imageStyle,
    left: '-3px', // Moved to the left by increasing negative value
    animation: 'none',
  };

  const image2Style: React.CSSProperties = {
    ...staticImageStyle,
    left: '160px', // Keep this one at the same position
  };

  const slidingImageStyle: React.CSSProperties = {
    ...imageStyle,
    animation: 'slide-upwards 20s linear infinite',
  };

  const slidingImageStyleDownwards: React.CSSProperties = {
    ...imageStyle,
    animation: 'slide-downwards 20s linear infinite',
  };

  const staggeredImageStyle = (index: number, rightShift: number = 0, isUpwards: boolean = true): React.CSSProperties => {
    const topOffset = index * 10;
    const leftOffset = index * 20 + rightShift;
    const zIndex = 10 - index;

    return {
      ...(isUpwards ? slidingImageStyle : slidingImageStyleDownwards),
      top: `${topOffset}px`,
      left: `${leftOffset}px`,
      zIndex,
      marginBottom: '-20px',
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
          {/* Static images */}
          <img src="/images/item/item-banner-1.png" alt="Image 1" style={staticImageStyle} />
          <img src="/images/item/item-banner-1.png" alt="Image 2" style={image2Style} />
        </div>
        <div style={columnStyle}>
          {/* Sliding images upwards */}
          <img src="/images/item/item-banner-3.png" alt="Image 3" style={staggeredImageStyle(0, 20, true)} />
          <img src="/images/item/item-banner-7.png" alt="Image 4" style={staggeredImageStyle(1, 150, true)} />
          <img src="/images/item/item-banner-5.png" alt="Image 5" style={staggeredImageStyle(2, 280, true)} />
        </div>
        <div style={columnStyle}>
          {/* Sliding images downwards */}
          <img src="/images/item/item-banner-5.png" alt="Image 8" style={staggeredImageStyle(4, -80, false)} />
          <img src="/images/item/item-banner-3.png" alt="Image 9" style={staggeredImageStyle(5, 40, false)} />
        </div>
      </div>
      <style>
        {`
          @keyframes slide-upwards {
            0% {
              transform: translateX(0) translateY(0) rotate(-30deg);
            }
            50% {
              transform: translateX(-100px) translateY(-100px) rotate(-30deg);
            }
            100% {
              transform: translateX(0) translateY(0) rotate(-30deg);
            }
          }

          @keyframes slide-downwards {
            0% {
              transform: translateX(0) translateY(0) rotate(-30deg);
            }
            50% {
              transform: translateX(100px) translateY(100px) rotate(-30deg);
            }
            100% {
              transform: translateX(0) translateY(0) rotate(-30deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default InvestmentOpportunities;
