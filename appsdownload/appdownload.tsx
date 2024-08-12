import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const AppDownload: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#0d0f28', color: '#fff', minHeight: '40vh', py: 8 }}> {/* Further reduced screen height */}
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url("/images/background/Slider.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          textAlign: 'center',
          py: 15, // Further adjusted the height of the image section
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold' }}>
            App Download
          </Typography>
          <Typography variant="h6">
            Download your desired apps for better performance
          </Typography>
        </Box>
      </Box>

      {/* Download Buttons */}
      <Box sx={{ mt: 6, position: 'relative', height: '50px' }}>
        <Box sx={{ position: 'absolute', left: 20 }}> {/* Moved buttons slightly from the sides */}
          <Button
            variant="contained"
            sx={{
              background: 'linear-gradient(to right, #0000ff, #ff00ff)', // Blue to Pink
              color: '#fff',
              borderRadius: '8px',
              px: 4,
              py: 1,
              fontSize: '1.25rem',
              textTransform: 'none',
              transition: 'background 0.3s ease-in-out',
              '&:hover': {
                background: 'linear-gradient(to right, #ff00ff, #0000ff)', // Pink to Blue on hover
              },
            }}
          >
            Android
          </Button>
        </Box>
        <Box sx={{ position: 'absolute', right: 20 }}> {/* Moved buttons slightly from the sides */}
          <Button
            variant="contained"
            sx={{
              background: 'linear-gradient(to right, #0000ff, #ff00ff)', // Blue to Pink
              color: '#fff',
              borderRadius: '8px',
              px: 4,
              py: 1,
              fontSize: '1.25rem',
              textTransform: 'none',
              transition: 'background 0.3s ease-in-out',
              '&:hover': {
                background: 'linear-gradient(to right, #ff00ff, #0000ff)', // Pink to Blue on hover
              },
            }}
          >
            iOS
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AppDownload;
