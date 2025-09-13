import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
  Fade
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useLocation } from 'react-router-dom';
import StepUpLogo from '../assets/StepUp-final.avif';

export default function PromotionalPopup() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  useEffect(() => {
    // Reset popup state when route changes
    setOpen(false);

    // Show popup after 5 seconds delay on every route change/refresh
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000); // 5 seconds delay

    return () => clearTimeout(timer);
  }, [location.pathname]); // Trigger on route change

  const handleClose = () => {
    setOpen(false);
  };

  const handleGetStarted = () => {
    // Add your get started logic here
    console.log('Get started clicked');
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfYlwYK5_UcrvNH8d4jLYrQhOdUAspYQysPTYS_D8wbYfqDLA/viewform?usp=header', '_blank'); // Example: redirect to contact page
    handleClose();
  };

  const handleLearnMore = () => {
    // Add your learn more logic here
    console.log('Learn more clicked');
    window.open('/about', '_blank'); // Example: redirect to about page
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          overflow: 'hidden',
          maxWidth: isMobile ? '95vw' : '800px',
          margin: isMobile ? 1 : 2,
        }
      }}
      TransitionComponent={Fade}
      transitionDuration={300}
    >
      <DialogContent sx={{ p: 0, position: 'relative' }}>
        {/* Close Button */}
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 12,
            top: 12,
            zIndex: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 1)',
            }
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box
          sx={{
            backgroundColor: 'white',
          }}
        >
          {/* Free Orientation Program Marquee */}
          <Box
            sx={{
              backgroundColor: '#ffbd28',
              color: 'black',
              py: 1,
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                animation: 'marquee 5s linear infinite',
                '@keyframes marquee': {
                  '0%': { transform: 'translateX(100%)' },
                  '100%': { transform: 'translateX(-100%)' }
                }
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  px: 2
                }}
              >
                🎉 FREE ORIENTATION PROGRAM • Kickstart Your SAP Journey • Limited Seats Available 🎉
              </Typography>
            </Box>
          </Box>

          {/* Top Center Logo */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              pt: { xs: 4, md: 5 },
              pb: { xs: 2, md: 3 },
              px: 2
            }}
          >
            <Box
              component="img"
              src={StepUpLogo}
              alt="VStep Up"
              sx={{
                height: { xs: '50px', sm: '60px', md: '70px', lg: '80px' },
                maxWidth: '200px',
                objectFit: 'contain'
              }}
            />
          </Box>

          {/* Main Content */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              minHeight: { xs: 'auto', md: '350px' },
            }}
          >
            {/* Left Content */}
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-start' },
                textAlign: { xs: 'center', md: 'left' },
                p: { xs: 3, md: 5 },
                pt: { xs: 2, md: 3 }
              }}
            >
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontSize: { xs: '1.75rem', md: '2.5rem' },
                  fontWeight: 'bold',
                  color: 'text.primary',
                  mb: 3,
                  lineHeight: 1.2,
                }}
              >
                From College Bench to Corporate Edge! SAP BTP Workshop at VStepUp
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  maxWidth: '400px'
                }}
              >
                Join the SAP BTP Workshop by <b>VStepUp</b> at <b>VSoft Solutions</b> this <b>Saturday, 06/09/2025</b>. Gain practical skills, explore career opportunities, and future-proof your journey after college.
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                  alignItems: 'center',
                  width: { xs: '100%', sm: 'auto' }
                }}
              >
                <Button
                  variant="contained"
                  onClick={handleGetStarted}
                  sx={{
                    backgroundColor: '#ffbd28', // Using your theme color
                    '&:hover': {
                      backgroundColor: '#ce9b26ff',
                    },
                    px: 3.5,
                    py: 1.25,
                    color: 'black',
                    borderRadius: 1.5,
                    textTransform: 'none',
                    fontSize: '1rem',
                    fontWeight: 600,
                    boxShadow: 2,
                    '&:active': {
                      transform: 'scale(0.95)',
                    },
                    transition: 'all 0.2s ease-in-out',
                    minWidth: { xs: '200px', sm: 'auto' }
                  }}
                >
                  Register Now
                </Button>
              </Box>
            </Box>

            {/* Right Image */}
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: { xs: 2, md: 0 },
                pt: { xs: 2, md: 4 }
              }}
            >
              <Box
                component="img"
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/appDownload/excitedWomenImage.png"
                alt="Professional team ready to help"
                sx={{
                  maxWidth: { xs: '280px', sm: '320px', md: '375px' },
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}