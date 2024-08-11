import React from 'react';
import { Box, Typography, Grid, Paper, IconButton } from '@mui/material';
import { MailOutline, Phone, Telegram } from '@mui/icons-material';

const ContactUs: React.FC = () => {
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
          Contact Us
        </Typography>
        <Typography variant="h6">
          Don't forget to contact us if you need support instantly
        </Typography>
      </Box>

      {/* Contact Info Section */}
      <Grid container justifyContent="center" sx={{ mt: 6 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Paper
            sx={{
              backgroundColor: '#11133b',
              p: 4,
              borderRadius: 2,
            }}
          >
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
              Contact Us
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              We are always open and we welcome any questions you have for our team. If you wish to get in touch, please fill out the form below.
            </Typography>

            {/* Email Section */}
            <Box display="flex" alignItems="center" sx={{ mb: 4 }}>
              <IconButton sx={{ color: '#f15a5b', mr: 2 }}>
                <MailOutline fontSize="large" />
              </IconButton>
              <Typography variant="h6">support@swoopventures.com</Typography>
            </Box>

            {/* Phone Section */}
            <Box display="flex" alignItems="center" sx={{ mb: 4 }}>
              <IconButton sx={{ color: '#f15a5b', mr: 2 }}>
                <Phone fontSize="large" />
              </IconButton>
              <Typography variant="h6">+1 305 705 5022</Typography>
            </Box>

            {/* Telegram Section */}
            <Box display="flex" alignItems="center" sx={{ mb: 4 }}>
              <IconButton sx={{ color: '#f15a5b', mr: 2 }}>
                <Telegram fontSize="large" />
              </IconButton>
              <Typography variant="h6">
                <a href="https://t.me/vftcofficial" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>
                  https://t.me/vftcofficial
                </a>
              </Typography>
            </Box>

            {/* Address Section */}
            <Box sx={{ mt: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                Addresses
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Headquarters
                </Typography>
                <Typography variant="body1">
                  600 Pennsylvania Avenue, NW Washington, DC 20580<br />
                  Telephone: (202) 326-2222
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Constitution Center
                </Typography>
                <Typography variant="body1">
                  400 7th St., SW Washington, DC 20024<br />
                  Telephone: (202) 326-2222
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
