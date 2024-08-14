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
  };

  const imageStyle: React.CSSProperties = {
    width: '150px',
    height: 'auto',
    transform: 'rotate(-45deg)',
    position: 'relative',
    zIndex: 1,
  };

  const overlappingImageStyle: React.CSSProperties = {
    ...imageStyle,
    zIndex: 2,
  };

  // Function to apply custom staggering with overlap and spacing
  const staggeredImageStyle = (index: number): React.CSSProperties => {
    const topOffset = index * 10; // Customize the vertical offset
    const leftOffset = index * 20; // Customize the horizontal offset for overlap
    const zIndex = 10 - index; // Higher zIndex for earlier images to overlap later images

    return {
      ...overlappingImageStyle,
      top: `${topOffset}px`,
      left: `${leftOffset}px`,
      zIndex,
      marginBottom: '-40px', // Reduced overlap for better spacing
    };
  };

  return (
    <div style={containerStyle}>
      <div style={leftSectionStyle}>
        <h1 className="text-5xl font-bold mb-6">Investment Opportunities at V-FTC</h1>
        <p className="text-2xl font-semibold mb-6">
          At V-FTC, we offer a diverse range of investment opportunities to cater to the varied needs of our clients. Our platform provides access to stocks, digital currencies, forex, gold, and other valuable minerals like silver, crude oil, and natural gas. We specialize in both short-term and long-term trading strategies, enabling investors to capitalize on market fluctuations for quick gains or to build sustained growth over time. Additionally, our mining operations in valuable minerals and digital currencies further enhance our portfolio, ensuring a comprehensive and profitable investment experience for all our users.
        </p>
      </div>
      <div style={rightSectionStyle}>
        <div style={columnStyle}>
          <img src="/images/item/item-banner-1.png" alt="Image 1" style={imageStyle} />
          <img src="/images/item/item-banner-2.png" alt="Image 2" style={staggeredImageStyle(1)} />
        </div>
        <div style={columnStyle}>
          <img src="/images/item/item-banner-3.png" alt="Image 3" style={imageStyle} />
          <img src="/images/item/item-banner-4.png" alt="Image 4" style={staggeredImageStyle(2)} />
          <img src="/images/item/item-banner-5.png" alt="Image 5" style={imageStyle} />
          <img src="/images/item/item-banner-6.png" alt="Image 6" style={staggeredImageStyle(3)} />
          <img src="/images/item/item-banner-7.png" alt="Image 7" style={imageStyle} />
        </div>
        <div style={columnStyle}>
          <img src="/images/item/item-banner-8.png" alt="Image 8" style={staggeredImageStyle(4)} />
          <img src="/images/item/item-banner-9.png" alt="Image 9" style={imageStyle} />
          <img src="/images/item/item-banner-10.png" alt="Image 10" style={staggeredImageStyle(5)} />
          <img src="/images/item/item-banner-11.png" alt="Image 11" style={imageStyle} />
          <img src="/images/item/item-banner-12.png" alt="Image 12" style={staggeredImageStyle(6)} />
        </div>
      </div>
    </div>
  );
};

export default InvestmentOpportunities;
