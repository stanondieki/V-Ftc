import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';

const AppDownload: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#0d0f28', color: '#fff', py: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url("/path-to-your-background-image.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          textAlign: 'center',
          py: 6,
        }}
      >
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold' }}>
          App Download
        </Typography>
        <Typography variant="h6">
          Download your desired apps for better performance
        </Typography>
      </Box>

      {/* Download Buttons */}
      <Grid container justifyContent="center" sx={{ mt: 6 }}>
        <Grid item xs={6} sm={4} md={3} textAlign="center">
          <Button
            variant="contained"
            sx={{
              background: 'linear-gradient(to right, #ff416c, #ff4b2b)',
              color: '#fff',
              borderRadius: '50px',
              px: 4,
              py: 2,
              fontSize: '1.25rem',
              textTransform: 'none',
            }}
          >
            Android
          </Button>
        </Grid>
        <Grid item xs={6} sm={4} md={3} textAlign="center">
          <Button
            variant="contained"
            sx={{
              background: 'linear-gradient(to right, #5a00ff, #4b0082)',
              color: '#fff',
              borderRadius: '50px',
              px: 4,
              py: 2,
              fontSize: '1.25rem',
              textTransform: 'none',
            }}
          >
            iOS
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppDownload;
