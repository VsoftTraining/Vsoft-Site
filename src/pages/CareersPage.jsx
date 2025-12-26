import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Box,
  Container,
  Typography,
  Link,
  Button,
  Breadcrumbs,
  Tabs,
  Tab,
  Grid,
  useTheme,
  useMediaQuery
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import WebIcon from '@mui/icons-material/Language';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CareerBanner from '../assets/careerpage.webp';
import Corporate from '../assets/corporateman.webp';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const CareersPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const vsoftPurple = '#803082';

  // Refs for animations
  const heroRef = useRef();
  const headingRef = useRef();
  const breadcrumbRef = useRef();
  const overviewRef = useRef();
  const whyVsoftRef = useRef();
  const tabsRef = useRef();
  const contentRef = useRef();
  const unityRef = useRef();
  const buttonsRef = useRef();

  const handleTabChange = (event, newValue) => {
    // Animate tab change
    gsap.to(contentRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: 'power2.out',
      onComplete: () => {
        setActiveTab(newValue);
        gsap.to(contentRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out'
        });
      }
    });
  };

  useEffect(() => {
    // Set initial states
    gsap.set(breadcrumbRef.current, { opacity: 0, y: -30 });
    gsap.set(headingRef.current, { opacity: 0, y: 50, scale: 0.9 });

    // Set up timeline for initial animations
    const tl = gsap.timeline({ delay: 0.3 });

    // Hero section animations
    tl.fromTo(breadcrumbRef.current, {
      opacity: 0,
      y: -30
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    })
      .fromTo(headingRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.9
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: 'power3.out'
      }, '-=0.4');

    // Overview section animations with ScrollTrigger
    gsap.fromTo(overviewRef.current?.children, {
      opacity: 0,
      y: 60,
      stagger: 0.2
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: overviewRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    // Buttons animation
    gsap.fromTo(buttonsRef.current?.children, {
      opacity: 0,
      scale: 0.8,
      y: 30
    }, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: buttonsRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });

    // Why VSoft section animation
    gsap.fromTo(whyVsoftRef.current, {
      opacity: 0,
      y: 80
    }, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: whyVsoftRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    });

    // Tabs animation
    gsap.fromTo(tabsRef.current, {
      opacity: 0,
      x: -50
    }, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: tabsRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });

    // Unity section with parallax effect
    gsap.fromTo(unityRef.current, {
      opacity: 0,
      y: 100
    }, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: unityRef.current,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse'
      }
    });

    // Parallax effect for unity background
    gsap.to(unityRef.current, {
      yPercent: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: unityRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    // Button hover animations
    const buttons = document.querySelectorAll('.animated-button');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Content update animation effect
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(contentRef.current, {
        opacity: 0,
        x: 30
      }, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    }
  }, [activeTab]);

  const tabContent = {
    0: { // Impact
      title: "Creating Real-World Impact",
      description: "At VSoft Solutions, we lead with purpose - empowering our team to craft technology - driven solutions that not only solve business challenges but also uplift communities. By combining innovation, empathy, and deep industry insight, we deliver meaningful digital experiences that drive progress and leave a lasting impact."
    },
    1: { // Development
      title: "Continuous Growth, Constant Evolution",
      description: "At VSoft Solutions, we believe learning never stops. We empower our team with access to hands-on projects, mentorship, and emerging technologies - ensuring they grow with the industry. From skill-building to leadership development, we nurture talent to stay ahead in a fast-evolving digital world."
    },
    2: { // Support
      title: "Empowering Every Step of the Way",
      description: "At VSoft Solutions, we support every individual's journey - whether they're just starting out or seeking new challenges. Through upskilling, reskilling, and cross-functional opportunities, we help our team unlock their full potential and grow into the professionals they aspire to be."
    },
    3: { // Progress
      title: "Progress Together, Grow Forever",
      description: "At VSoft Solutions, we believe in nurturing long-term relationships with our team. By investing in continuous career growth, mentorship, and forward - focused opportunities, we empower every individual to evolve, lead, and thrive - together with us."
    }
  };

  return (
    <>
      <SEO
        title="Careers at VSoft Solutions | Join Our Team"
        description="Join VSoft Solutions - a leading software development company in Tirunelveli. Explore career opportunities, internships, and be part of an innovative team shaping the future of technology."
        keywords="careers vSoft solutions, software jobs tirunelveli, internship opportunities, technology careers"
        canonical="/career"
      />
      {/* Hero Section */}
      <Box
        ref={heroRef}
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, overflow: 'hidden' }}>
          {/* Breadcrumbs */}
          <Box ref={breadcrumbRef} sx={{ opacity: 1 }}>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" sx={{ color: '#666' }} />}
              aria-label="breadcrumb"
              sx={{ justifyContent: 'center', display: 'flex', mb: 4 }}
            >
              <Link
                underline="hover"
                onClick={() => navigate('/')}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  color: '#333',
                  textDecoration: 'none',
                  fontSize: { xs: '14px', md: '16px' },
                  '&:hover': { color: '#ffbe01' }
                }}
              >
                <HomeIcon sx={{ mr: 0.5 }} fontSize="small" />
                Home
              </Link>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                color: '#666',
                fontSize: { xs: '14px', md: '16px' }
              }}>
                <WebIcon sx={{ mr: 0.5 }} fontSize="small" />
                Careers
              </Box>
            </Breadcrumbs>
          </Box>

          {/* Hero Content */}
          <Box sx={{ textAlign: 'center', px: { xs: 2, md: 0 } }}>
            <Typography
              variant={isMobile ? 'h4' : 'h2'}
              fontWeight="700"
              ref={headingRef}
              sx={{
                mb: 2,
                color: '#000',
                lineHeight: 1.2
              }}
            >
              Join Us in Making a Difference
            </Typography>

            <Typography
              variant="h6"
              sx={{
                mb: 3,
                color: '#ffbe01',
                fontSize: { xs: '2rem', md: '2.5rem' },
                lineHeight: 1.2,
                fontWeight: 700
              }}
            >
              Shape the Future of Technology
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 4,
                maxWidth: '700px',
                mx: 'auto',
                color: '#666',
                fontSize: { xs: '0.95rem', md: '1.1rem' },
                lineHeight: 1.7
              }}
            >
              At VSoft Solutions, we're more than just a tech company - we're a team of innovators, creators, and problem-solvers who believe in using technology to make an impact. Join our mission to transform businesses and create meaningful digital experiences.
            </Typography>

            {/* Buttons */}
            <Box
              ref={buttonsRef}
              sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}
            >
                <Button
                className="animated-button"
                variant="contained"
                size="large"
                sx={{
                  borderRadius: '24px',
                  px: 4,
                  py: 1.5,
                  fontWeight: 'bold',
                  color: '#111',
                  backgroundColor: '#ffbd28',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(128, 48, 130, 0.3)',
                  '&:hover': {
                    backgroundColor: '#ffbf28c5',
                    boxShadow: '0 6px 20px rgba(128, 48, 130, 0.4)',
                    transform: 'translateY(-2px)',
                  },
                }}
                onClick={() => navigate('/internship')}
              >
                Internships
              </Button>

                <Button
                className="animated-button"
                variant="outlined"
                size="large"
                sx={{
                  borderRadius: '24px',
                  px: 4,
                  py: 1.5,
                  fontWeight: 'bold',
                  color: '#ffbe01',
                  transition: 'all 0.3s ease',
                  backgroundColor: "black",
                  '&:hover': {
                    backgroundColor: 'rgba(128, 48, 130, 0.1)',
                    borderColor: '#ffbe01',
                    color: "#000",
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 15px rgba(128, 48, 130, 0.2)',
                  },
                }}
                onClick={() => navigate('/jobportal')}
              >
                View Openings
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#fefce8',
          color: '#000',
          height: 'auto',
          py: { xs: 4, md: 6 },
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            pb: { xs: 4, md: 6 }
          }}
        >
          {/* Header */}
          <Typography
            ref={whyVsoftRef}
            variant="h2"
            component="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
              fontWeight: 300,
              mb: { xs: 4, md: 8 },
              letterSpacing: '0.02em'
            }}
          >
            Why VSoft Solutions
          </Typography>

          {/* Navigation Tabs */}
          <Box ref={tabsRef} sx={{ mb: { xs: 4, md: 6 } }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              sx={{
                '& .MuiTabs-indicator': {
                  backgroundColor: '#ffbe01',
                  height: 3,
                  borderRadius: '2px'
                },
                '& .MuiTab-root': {
                  color: '#666',
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  fontWeight: 800,
                  textTransform: 'none',
                  minWidth: { xs: 80, md: 120 },
                  padding: { xs: '12px 16px', md: '16px 24px' },
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#ffbe01',
                    transform: 'translateY(-2px)'
                  }
                },
                '& .MuiTab-root.Mui-selected': {
                  color: '#000'
                }
              }}
              variant={isMobile ? "scrollable" : "standard"}
              scrollButtons="auto"
              allowScrollButtonsMobile
            >
              <Tab label="Impact" />
              <Tab label="Development" />
              <Tab label="Support" />
              <Tab label="Progress" />
            </Tabs>
          </Box>

          {/* Content Grid */}
          <Grid container spacing={{ xs: 4, md: 6, lg: 8 }}>
            {/* Content Section */}
            <Grid item xs={12} md={6}>
              <Box
                ref={contentRef}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  height: '100%',
                  minHeight: { xs: 200, md: 400 }
                }}
              >
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{
                    fontSize: { xs: '2rem', md: '3rem', lg: '3.5rem' },
                    fontWeight: 300,
                    mb: { xs: 3, md: 4 },
                    letterSpacing: '0.02em'
                  }}
                >
                  {tabContent[activeTab].title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.125rem', lg: '1.25rem' },
                    lineHeight: { xs: 1.6, md: 1.7 },
                    color: '#000',
                    maxWidth: { xs: '100%', lg: '90%' }
                  }}
                >
                  {tabContent[activeTab].description}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="xlg" disableGutters>
        <Box
          ref={unityRef}
          sx={{
            position: 'relative',
            minHeight: { xs: '60vh', md: '75vh', lg: '85vh' },
            backgroundImage: `url(${Corporate})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            display: 'flex',
            alignItems: 'center',
            color: '#fff',
            overflow: 'hidden',
          }}
        >
          {/* Dark overlay for readability */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              zIndex: 1,
            }}
          />

          {/* Content */}
          <Container maxWidth={false} sx={{ position: 'relative', zIndex: 2, px: { xs: 2, md: 6, lg: 12 } }}>
            <Box
              sx={{
                maxWidth: { xs: '100%', md: '80%', lg: '75%' },
                pl: { xs: 2, md: 4 },
                position: 'relative',
              }}
            >
              {/* Animated accent line */}
              <Box
                sx={{
                  width: 4,
                  height: { xs: 200, md: 280, lg: 320 },
                  backgroundColor: '#2196f3',
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 3,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '0%',
                    backgroundColor: '#fff',
                    animation: 'fillLine 2s ease-out forwards',
                    animationDelay: '1s'
                  },
                  '@keyframes fillLine': {
                    '0%': { height: '0%' },
                    '100%': { height: '100%' }
                  }
                }}
              />

              {/* Text Content */}
              <Box sx={{ pl: { xs: 5, md: 6 } }}>
                <Typography
                  variant="overline"
                  sx={{
                    fontSize: { xs: '0.75rem', md: '0.875rem' },
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    color: '#ffbd28',
                    mb: { xs: 2, md: 3 },
                    textTransform: 'uppercase',
                  }}
                >
                  Unity in Differences
                </Typography>

                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    fontSize: { xs: '1.75rem', sm: '2.2rem', md: '3.2rem', lg: '3.8rem' },
                    fontWeight: 300,
                    lineHeight: { xs: 1.3, md: 1.2 },
                    color: '#fff',
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                  }}
                >
                  Impact starts with people. We hire, embrace, and grow talent from every background — because unity in differences drives greatness.
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      </Container>
    </>
  );
};

export default CareersPage;