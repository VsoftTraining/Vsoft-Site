import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Typography } from '@mui/material';
import ClientOne from '../assets/client/BULLET CRACKERS LOGO 001.webp';
import ClientTwo from '../assets/client/MKM LOGO 001.webp';
import ClientThree from '../assets/client/SMEC LOGO 002.webp';
import ClientFour from '../assets/client/DARC LOGO.webp';
import ClientFive from '../assets/client/CNI.webp';
import ClientSix from '../assets/client/RAJALAKSHMI LOGO 001.webp';
import ClientSeven from '../assets/client/MAHARAJA LOGO 001.webp';
import ClientEight from '../assets/client/GAYRA LOGO 001.webp';
import ClientNine from '../assets/client/Nivedha LOGO 002.webp';
import ClientTen from '../assets/client/thanporunai-logo.webp';
import ClientEleven from '../assets/client/4Tlogo.webp';
import ClientTwelve from '../assets/client/Friends Logo.webp';

const ClientLogoSlider = () => {
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);

  // Sample client data - replace with your actual logos
  const clients = [
    { id: 1, name: "Bullet Crackers", logo: ClientOne },
    { id: 2, name: "MKM", logo: ClientTwo },
    { id: 3, name: "SMEC", logo: ClientThree },
    { id: 4, name: "DARC", logo: ClientFour },
    { id: 5, name: "CNI", logo: ClientFive },
    { id: 6, name: "Rajalakshmi", logo: ClientSeven },
    { id: 7, name: "Maharaja", logo: ClientSix },
    { id: 8, name: "Gayra", logo: ClientEight },
    { id: 9, name: "Nivedha", logo: ClientNine },
    { id: 10, name: "Thanporunai", logo: ClientTen },
    { id: 11, name: "4T", logo: ClientEleven },
    { id: 12, name: "Friends", logo: ClientTwelve },
  ];

  // Duplicate clients array for seamless loop
  const duplicatedClients = [...clients, ...clients, ...clients];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || isPaused) return;

    let animationId;
    let position = 0;
    const speed = 0.8; // Adjust speed (pixels per frame)

    const animate = () => {
      position += speed;
      
      // Calculate the width of one complete set
      const singleSetWidth = slider.scrollWidth / 3;
      
      // Reset position when we've scrolled past one complete set
      if (position >= singleSetWidth) {
        position = 0;
      }
      
      slider.style.transform = `translateX(-${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused]);

  return (
    <Box
      sx={{
        py: { xs: 8, sm: 10, md: 12 },
        background: 'linear-gradient(180deg, #f9fafb 0%, #ffffff 100%)',
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="overline"
            sx={{
              color: '#6b7280',
              fontWeight: 700,
              letterSpacing: '2px',
              fontSize: '0.875rem',
              display: 'block',
              mb: 1
            }}
          >
            Trusted Partners
          </Typography>

          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              mb: 2,
              background: 'linear-gradient(45deg, #1f2937 0%, #4b5563 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Our Successful Clients
          </Typography>

          <Box
            sx={{
              width: 80,
              height: 4,
              background: 'linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%)',
              mx: 'auto',
              borderRadius: 2,
              mb: 3
            }}
          />

          <Typography
            variant="body1"
            sx={{
              color: '#6b7280',
              fontSize: { xs: '1rem', md: '1.125rem' },
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Partnering with industry leaders who trust our expertise for their digital transformation journey
          </Typography>
        </Box>

        {/* Infinite Slider */}
        <Box 
          sx={{
            position: 'relative',
            overflow: 'hidden',
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Box
            ref={sliderRef}
            sx={{
              display: 'flex',
              width: 'fit-content',
            }}
          >
            {duplicatedClients.map((client, index) => (
              <Box
                key={`${client.id}-${index}`}
                sx={{
                  flexShrink: 0,
                  width: 200,
                  px: { xs: 2, md: 3 }
                }}
              >
                <Box
                  sx={{
                    bgcolor: 'white',
                    borderRadius: 3,
                    p: 3,
                    height: 120,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid',
                    borderColor: 'grey.100',
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                      '& img': {
                        filter: 'grayscale(0%) brightness(1.1)',
                        transform: 'scale(1.05)'
                      }
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={client.logo}
                    alt={`${client.name} logo`}
                    sx={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      filter: 'grayscale(20%) brightness(0.9)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
          
          {/* Gradient Overlays */}
          <Box
            sx={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: 96,
              background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
              pointerEvents: 'none'
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: 96,
              background: 'linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
              pointerEvents: 'none'
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default ClientLogoSlider;