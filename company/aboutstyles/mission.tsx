import React from 'react';

const MissionSection: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#050231' }}>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start', // Align mission content and images to the top
      padding: '40px 20px', // Add padding to top/bottom and left/right
      backgroundImage: 'url(/images/background/bg-features.png)', // Replace with your background image link
      backgroundSize: 'cover', // Ensure the background image covers the entire area
      backgroundPosition: 'center', // Center the background image
      width: 'calc(100vw - 40px)', // Full-width minus padding (20px on each side)
      boxSizing: 'border-box', // Ensure padding is included within the width
      borderRadius: '8px', // Optional: add rounded corners
      backgroundColor: '#130F40'
    }}>
      <div style={{
        flex: 0.5,
        color: 'white',
        padding: '20px',
        backgroundColor: 'rgba(19, 15, 64, 0.7)', // Slightly transparent background for better readability
        borderRadius: '8px', // Optional: add rounded corners
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Our Mission</h2>
        <p style={{ fontSize: '1.2rem' }}>
          At V-FTC, our mission is to empower investors by providing diverse, 
          high-quality investment opportunities and the necessary tools to achieve 
          financial success. We are dedicated to creating a secure, user-friendly 
          platform that caters to both novice and experienced investors.
        </p>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end', // Move images to the right side
        alignItems: 'flex-start', // Align images to the top
        flex: 1,
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          backgroundColor: 'transparent', // Make background transparent
          padding: '20px',
          borderRadius: '8px',
          border: '12px solid transparent', // Increase border thickness
          borderImage: 'url(/images/background/bg-iconbox.png) 10 stretch', // Adjust border image properties
          margin: '0 10px', // Adds space between the cards
        }}>
          <img src="path_to_image_1" alt="Buy and sell items easily" style={{ maxWidth: '60px', marginBottom: '10px' }} />
          <p style={{ color: 'white', marginTop: '10px', fontSize: '1rem' }}>Buy and sell items easily</p>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          backgroundColor: 'transparent', // Make background transparent
          padding: '20px',
          borderRadius: '8px',
          border: '12px solid transparent', // Increase border thickness
          borderImage: 'url(/images/background/bg-iconbox.png) 10 stretch', // Adjust border image properties
          margin: '0 10px', // Adds space between the cards
        }}>
          <img src="path_to_image_2" alt="Create collections & earn rewards" style={{ maxWidth: '60px', marginBottom: '10px' }} />
          <p style={{ color: 'white', marginTop: '10px', fontSize: '1rem' }}>Create collections & earn rewards</p>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          backgroundColor: 'transparent', // Make background transparent
          padding: '20px',
          borderRadius: '8px',
          border: '12px solid transparent', // Increase border thickness
          borderImage: 'url(/images/background/bg-iconbox.png) 10 stretch', // Adjust border image properties
          margin: '0 10px', // Adds space between the cards
        }}>
          <img src="path_to_image_3" alt="Chase limited edition V-FTC" style={{ maxWidth: '60px', marginBottom: '10px' }} />
          <p style={{ color: 'white', marginTop: '10px', fontSize: '1rem' }}>Chase limited edition V-FTC</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default MissionSection;
