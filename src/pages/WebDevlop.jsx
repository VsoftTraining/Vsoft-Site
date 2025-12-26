import React, { useState, useLayoutEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Breadcrumbs,
  Link,
  Button,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  useTheme,
} from '@mui/material';
import SEO from '../components/SEO';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HomeIcon from '@mui/icons-material/Home';
import WebDev from '../assets/web_development-01.avif';
import Customdev from '../assets/custom_web_development-01.avif';
import Ecommerce from '../assets/ecommerce_development-01.avif';
import Responsive from '../assets/Responsive Web Design-01.avif';
import Support from '../assets/Support and Maintenance-01.avif';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import WebIcon from '@mui/icons-material/Language';
import { useNavigate } from 'react-router-dom';
import WebsiteHero from '../assets/WebsiteHerobck.webp';
import WebDevHero from '../assets/WebDeveloper-Hero.webp';
import Stepper from '../Animations/Stepper';
import HTML from '../assets/HTML.avif';
import CSS from '../assets/CSS.avif';
import JS from '../assets/javascript.avif';
import Reactjs from '../assets/React.avif';
import Angular from '../assets/angular.avif';
import Nodejs from '../assets/node-js.avif';
import MongoDB from '../assets/MongoDB.avif';
import Bootstrap from '../assets/Bootstrap.avif';
import FireBase from '../assets/firebase.avif';
import NextJs from '../assets/nextjs.avif';
import Mui from '../assets/MUI.avif';
import WordPress from "../assets/wordpressLogo.avif";
import ProjectDurga from '../assets/ProjectWeb1.webp';
import ProjectMKM from '../assets/ProjectWeb2.webp';
import ProjectCrackers from '../assets/ProjectWeb3.webp';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WebDevlop = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  
  // Refs for all animated elements
  const heroHeadingRef = useRef();
  const growthPartnerHeadingRef = useRef();
  const developmentServicesHeadingRef = useRef();
  const projectsHeadingRef = useRef();
  const techStackHeadingRef = useRef();
  const growthDescriptionRef = useRef();
  const growthSubtitleRef = useRef();

  useLayoutEffect(() => {
  // Run animation logic on next frame to prevent layout jank
  requestAnimationFrame(() => {
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    // Hero heading animation
    gsap.fromTo(
      heroHeadingRef.current,
      {
        opacity: 0,
        y: isMobile ? 30 : 50,
        scale: isMobile ? 0.95 : 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: isMobile ? 1.2 : 1.8,
        ease: 'power3.out',
      }
    );

    // Growth Partner animation
    const growthPartnerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: growthPartnerHeadingRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });

    growthPartnerTimeline
      .fromTo(
        growthPartnerHeadingRef.current,
        {
          opacity: 0,
          x: isMobile ? -30 : -100,
          rotationY: isMobile ? 0 : 45,
        },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: isMobile ? 1 : 1.5,
          ease: 'power2.out',
        }
      )
      .fromTo(
        growthSubtitleRef.current,
        { opacity: 0, y: isMobile ? 20 : 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.8'
      )
      .fromTo(
        growthDescriptionRef.current,
        { opacity: 0, y: isMobile ? 20 : 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
      );

    // Development services heading animation
    gsap.fromTo(
      developmentServicesHeadingRef.current,
      {
        opacity: 0,
        y: isMobile ? 30 : 60,
        scale: isMobile ? 0.9 : 0.7,
        rotation: isMobile ? 0 : 5,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: isMobile ? 1.2 : 1.6,
        ease: isMobile ? 'power2.out' : 'elastic.out(1, 0.5)',
        scrollTrigger: {
          trigger: developmentServicesHeadingRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Projects heading animation
    gsap.fromTo(
      projectsHeadingRef.current,
      {
        opacity: 0,
        x: isMobile ? 30 : 100,
        rotationX: isMobile ? 0 : 45,
      },
      {
        opacity: 1,
        x: 0,
        rotationX: 0,
        duration: isMobile ? 1 : 1.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: projectsHeadingRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Tech stack heading animation
    gsap.fromTo(
      techStackHeadingRef.current,
      {
        opacity: 0,
        y: isMobile ? 30 : 50,
        scale: isMobile ? 0.9 : 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: isMobile ? 1 : 1.2,
        ease: isMobile ? 'power2.out' : 'back.out(1.7)',
        scrollTrigger: {
          trigger: techStackHeadingRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });

  // Cleanup ScrollTriggers
  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);

  const handleContactClick = () => {
    navigate('/contact');
  };

  const developmentCard = [
    {
      icon: WebDev,
      title: 'Web Development',
      description: 'Web development involves designing and building websites, ensuring functionality, responsiveness, and user-friendly experiences.'
    },
    {
      icon: Ecommerce,
      title: 'E-Commerce Development',
      description: 'E-commerce development refers to the creation of online stores that enable users to buy and sell products or services over the internet.'
    },
    {
      icon: Responsive,
      title: 'Responsive Web Design',
      description: 'Responsive web design is a technique used to make websites look and function well on different screen sizes and devices.'
    },
    {
      icon: Customdev,
      title: 'Custom Software Development',
      description: 'Custom software development involves creating software solutions tailored to specific business needs and requirements.'
    },
    {
      icon: Support,
      title: 'Support and Maintenance',
      description: 'Support and maintenance services involve providing ongoing technical assistance and maintenance to ensure the smooth operation of software systems.'
    },
    {
      title: 'WordPress Development',
      description: 'Professional WordPress development services including custom themes, plugins, e-commerce solutions, and responsive design.',
      icon: WordPress
    },
    {
      title: 'WordPress Installation & Setup',
      description: 'Complete WordPress installation and configuration with optimal performance settings for your business.',
      icon: WordPress
    },
    {
      title: 'WordPress Migration',
      description: 'Seamless migration of your WordPress site to a new host without downtime or data loss.',
      icon: WordPress
    },
    {
      title: 'WordPress eCommerce',
      description: 'Launch your online store with powerful WooCommerce integration and advanced e-commerce features.',
      icon: WordPress
    }
  ];

  const techstack = [
    { name: 'HTML', logo: HTML },
    { name: 'CSS', logo: CSS },
    { name: 'JavaScript', logo: JS },
    { name: 'React Js', logo: Reactjs },
    { name: 'Next Js', logo: NextJs },
    { name: 'Angular', logo: Angular },
    { name: 'Node Js', logo: Nodejs },
    { name: 'Mongo DB', logo: MongoDB },
    { name: 'Firebase', logo: FireBase },
    { name: 'Bootstrap', logo: Bootstrap },
    { name: 'Material UI', logo: Mui },
    { name: 'WordPress', logo: WordPress },
  ];

  return (
    <>
      <SEO
        title="Website Development Services | VSoft Solutions"
        description="Professional website development services by VSoft Solutions. Custom web development, e-commerce solutions, responsive design, and website maintenance services in Tirunelveli."
        keywords="website development, web development services, custom website, e-commerce development, responsive web design"
        canonical="/website-development"
      />
      {/* Add CSS to prevent horizontal overflow */}
      <style jsx global>{`
        html, body {
          overflow-x: hidden;
          max-width: 100%;
        }
        
        * {
          box-sizing: border-box;
        }
        
        .MuiContainer-root {
          max-width: 100% !important;
          overflow-x: hidden;
        }
        
        /* Prevent GSAP animations from causing overflow */
        [style*="transform"] {
          max-width: 100%;
        }
      `}</style>

      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, overflow: 'hidden' }}>
          {/* Breadcrumbs */}
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
              Web Development
            </Box>
          </Breadcrumbs>

          {/* Hero Content */}
          <Box sx={{ textAlign: 'center', px: { xs: 2, md: 0 } }}>
            <Typography
              variant="h4"
              component="h1"
              fontWeight="bold"
              ref={heroHeadingRef}
              sx={{
                mb: 2,
                color: '#000',
                lineHeight: 1.2
              }}
            >
              Empowering Businesses Through
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
              Innovative Web Solutions
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
              Transform your vision into reality with our comprehensive web development services. From responsive websites to complex web applications, we deliver scalable, high-performance solutions that drive business growth.
            </Typography>

            {/* Buttons */}
            <Box
              sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}
            >
              <Button
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
                onClick={handleContactClick}
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Growth Partner Section */}
      <Container 
        maxWidth="lg" 
        sx={{ 
          py: { xs: 6, md: 8 },
          maxWidth: '100%',
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 4, md: 8 },
            maxWidth: '100%',
            overflow: 'hidden'
          }}
        >
          {/* Content */}
          <Box 
            sx={{ 
              flex: 1, 
              order: { xs: 2, md: 1 },
              maxWidth: '100%',
              overflow: 'hidden'
            }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              ref={growthPartnerHeadingRef}
              sx={{
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem', lg: '2.25rem' },
                lineHeight: { xs: 1.1, sm: 1.2, md: 1.3 },
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
                hyphens: 'auto',
                transform: 'translateX(-30px)', // Reduced initial transform
                opacity: 0,
                maxWidth: '100%',
                width: '100%'
              }}
            >
              Your Growth Partner in the Digital World
            </Typography>

            <Typography
              variant="body1"
              paragraph
              ref={growthSubtitleRef}
              sx={{
                fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1.05rem', lg: '1.1rem' },
                lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 },
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
                hyphens: 'auto',
                transform: 'translateY(20px)', // Reduced initial transform
                opacity: 0,
                maxWidth: '100%',
                width: '100%'
              }}
            >
              From Website Creation to Digital Campaigns, We Help You Succeed Online.
            </Typography>

            <Typography
              variant='body1'
              paragraph
              ref={growthDescriptionRef}
              sx={{
                fontSize: { xs: '0.8125rem', sm: '0.875rem', md: '0.9375rem', lg: '1rem' },
                lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 },
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
                hyphens: 'auto',
                transform: 'translateY(20px)', // Reduced initial transform
                opacity: 0,
                maxWidth: '100%',
                width: '100%'
              }}
            >
              Since 2024, our Tirunelveli-based company has delivered custom web applications for enterprises. As a trusted offshore partner, we build innovative, scalable solutions tailored to your business goals. Let's shape the future of web technology together.
            </Typography>
          </Box>

          {/* Image */}
          <Box
            sx={{
              flex: 1,
              order: { xs: 1, md: 2 },
              display: 'flex',
              justifyContent: 'center',
              maxWidth: '100%',
              overflow: 'hidden'
            }}
          >
            <Box
              component="img"
              src={WebDevHero}
              alt="Team working together"
              sx={{
                width: { xs: '100%', md: '85%' },
                maxWidth: '500px',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              }}
            />
          </Box>
        </Box>
      </Container>

      {/* Development Services Section */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          backgroundColor: '#fefce8',
          maxWidth: '100%',
          overflow: 'hidden'
        }}
      >
        <Container 
          maxWidth="lg"
          sx={{
            maxWidth: '100%',
            overflow: 'hidden'
          }}
        >
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            gutterBottom
            ref={developmentServicesHeadingRef}
            sx={{
              mb: { xs: 4, md: 6 },
              fontSize: { xs: '1.5rem', sm: '1.2rem', md: '2rem', lg: '2.25rem' },
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              hyphens: 'auto',
              transform: 'translateY(30px)', // Reduced initial transform
              opacity: 0,
              maxWidth: '100%',
              width: '100%'
            }}
          >
            Our Best Development Services
          </Typography>

          <Grid container spacing={{ xs: 2, md: 8 }} justifyContent="center">
            {developmentCard.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={5}
                lg={5}
                key={index}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <Card
                  elevation={0}
                  sx={{
                    width: '100%',
                    maxWidth: { xs: '100%', sm: '340px' },
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: { xs: 3, md: 4 },
                    height: '100%'
                  }}>
                    <Box
                      sx={{
                        position: 'relative',
                        mb: 3,
                        height: { xs: 150, md: 200 },
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 3,
                        backgroundColor: '#ffbe01',
                        overflow: 'hidden'
                      }}
                    >
                      <Box
                        component="img"
                        src={item.icon}
                        alt={item.title}
                        sx={{
                          height: { xs: 80, md: 100 },
                          width: 'auto',
                          objectFit: 'contain',
                        }} 
                      />
                    </Box>

                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: '#1a237e',
                        fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.375rem', lg: '1.5rem' },
                        lineHeight: 1.2,
                        wordBreak: 'break-word',
                        overflowWrap: 'break-word',
                        hyphens: 'auto'
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        fontSize: { xs: '0.8125rem', sm: '0.875rem', md: '0.9375rem', lg: '1rem' },
                        lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 },
                        wordBreak: 'break-word',
                        overflowWrap: 'break-word',
                        hyphens: 'auto'
                      }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Stepper />

      {/* Technology Stack Section */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          maxWidth: '100%',
          overflow: 'hidden'
        }}
      >
        <Container 
          maxWidth="lg"
          sx={{
            maxWidth: '100%',
            overflow: 'hidden'
          }}
        >
          <Typography
            variant="h4"
            align="center"
            ref={techStackHeadingRef}
            sx={{
              mb: { xs: 4, md: 6 },
              fontWeight: 'bold',
              color: 'text.primary',
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem', lg: '2.25rem' },
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              hyphens: 'auto',
              transform: 'translateY(30px)', // Reduced initial transform
              opacity: 0,
              maxWidth: '100%',
              width: '100%'
            }}
          >
            Technology Stack
          </Typography>

          <Grid
            container
            spacing={{ xs: 2, sm: 3, md: 4 }}
            justifyContent="center"
            alignItems="center"
            sx={{
              maxWidth: '100%',
              overflow: 'hidden'
            }}
          >
            {techstack.map((tech, index) => (
              <Grid
                item
                xs={6}
                sm={4}
                md={2.4}
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Box
                  sx={{
                    width: { xs: 60, sm: 80, md: 100 },
                    height: { xs: 60, sm: 80, md: 100 },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: { xs: 1, sm: 2 },
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.1)'
                    }
                  }}
                >
                  <img
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default WebDevlop;