import React, { useLayoutEffect, useRef } from 'react';
import {
    Box,
    Container,
    Typography,
    Breadcrumbs,
    Link,
    Button,
    Paper,
    Grid,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import SEO from '../components/SEO';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WhyApp from '../assets/whyusapp.avif';
import { SiAndroid } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import { FaApple, FaLaptopCode, FaLayerGroup, FaStore, FaMobileAlt, FaClone, FaPlay } from "react-icons/fa";
import HomeIcon from '@mui/icons-material/Home';
import WebIcon from '@mui/icons-material/Language';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AppBack from '../assets/AppBck.webp';
import AppBanner from '../assets/AppBanner.webp';
import HTML from '../assets/HTML.avif';
import CSS from '../assets/CSS.avif';
import JS from '../assets/javascript.avif';
import ReactNative from '../assets/Reac-Native.avif';
import Nodejs from '../assets/node-js.avif';
import MongoDB from '../assets/MongoDB.avif';
import Bootstrap from '../assets/Bootstrap.avif';
import Mui from '../assets/MUI.avif';
import Flutter from '../assets/Flutter.avif';
import Kotlin from '../assets/kotlin.avif';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ApplicationDevelopment = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

    // Refs for all animated elements
    const heroHeadingRef = useRef();
    const solutionsHeadingRef = useRef();
    const techSolutionsHeadingRef = useRef();
    const missionHeadingRef = useRef();
    const techStackHeadingRef = useRef();
    const subtitleRef = useRef();
    const descriptionRef = useRef();

    const handleContactClick = () => {
        navigate('/contact');
    };

    useLayoutEffect(() => {
  // Defer all GSAP animations to next frame to reduce forced reflows
  requestAnimationFrame(() => {
    // ✅ Hero heading animation (on load)
    gsap.fromTo(
      heroHeadingRef.current,
      {
        opacity: 0,
        y: isMobile ? 20 : 50,
        scale: isMobile ? 0.98 : 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.8,
        ease: 'power3.out',
      }
    );

    // ✅ Solutions heading animation
    gsap.fromTo(
      solutionsHeadingRef.current,
      {
        opacity: 0,
        x: isMobile ? -20 : isTablet ? -50 : -100,
        rotationY: isMobile ? 5 : isTablet ? 20 : 45,
      },
      {
        opacity: 1,
        x: 0,
        rotationY: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: solutionsHeadingRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // ✅ Tech solutions timeline
    const techSolutionsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: techSolutionsHeadingRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });

    techSolutionsTimeline
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: isMobile ? -15 : -30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      )
      .fromTo(
        techSolutionsHeadingRef.current,
        {
          opacity: 0,
          y: isMobile ? 20 : 50,
          scale: isMobile ? 0.95 : 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'back.out(1.7)',
        },
        '-=0.4'
      )
      .fromTo(
        descriptionRef.current,
        { opacity: 0, y: isMobile ? 15 : 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
      );

    // ✅ Mission heading animation
    gsap.fromTo(
      missionHeadingRef.current,
      {
        opacity: 0,
        x: isMobile ? 20 : isTablet ? 50 : 100,
        rotationX: isMobile ? 5 : isTablet ? 20 : 45,
      },
      {
        opacity: 1,
        x: 0,
        rotationX: 0,
        duration: 1.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: missionHeadingRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // ✅ Tech stack heading animation
    gsap.fromTo(
      techStackHeadingRef.current,
      {
        opacity: 0,
        y: isMobile ? 25 : 60,
        scale: isMobile ? 0.95 : 0.7,
        rotation: isMobile ? 1 : 5,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 1.6,
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: {
          trigger: techStackHeadingRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });

  // ✅ Cleanup all scroll triggers
  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, [isMobile, isTablet]); // Add responsive dependencies

    const techServices = [
        { name: "iOS Development", icon: <FaApple className="text-white text-3xl" /> },
        { name: "Android Development", icon: <SiAndroid className="text-white text-3xl" /> },
        { name: "Web Development", icon: <FaLaptopCode className="text-white text-3xl" /> },
        { name: "Cross-Platform Development", icon: <FaLayerGroup className="text-white text-3xl" /> },
        { name: "E-Commerce Development", icon: <FaStore className="text-white text-3xl" /> },
        { name: "Responsive UI/UX Designing", icon: <FaMobileAlt className="text-white text-3xl" /> },
        { name: "Clone App Development", icon: <FaClone className="text-white text-3xl" /> },
        { name: "On-Demand App Development", icon: <FaPlay className="text-white text-3xl" /> },
    ];

    const stacks = [
        { name: 'React Native', icon: ReactNative },
        { name: 'Flutter', icon: Flutter },
        { name: 'Kotlin', icon: Kotlin },
        { name: 'HTML', icon: HTML },
        { name: 'CSS', icon: CSS },
        { name: 'JavaScript', icon: JS },
        { name: 'Node.js', icon: Nodejs },
        { name: 'MongoDB', icon: MongoDB },
        { name: 'BootStrap', icon: Bootstrap },
        { name: 'MUI', icon: Mui },
    ]

    return (
        <>
            <SEO
                title="Mobile App Development | VSoft Solutions"
                description="Expert mobile app development services for Android and iOS. Custom mobile applications, cross-platform development using React Native and Flutter. Transform your business with VSoft Solutions."
                keywords="mobile app development, android app development, ios app development, react native, flutter development"
                canonical="/app-development"
            />
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
                            Application Development
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
                            Power Up Your Business with
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
                            VSoft App Excellence!
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
                            Smart applications. Seamless workflows. Scalable results. Transform your business with custom-built software solutions that deliver exceptional user experiences and drive growth.
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

                            <Button
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
                                href="#services"
                            >
                                View Services
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Container
                maxWidth="lg"
                sx={{
                    py: 8,
                    overflow: 'hidden' // Prevent horizontal overflow
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        gap: { xs: 4, md: 10 },
                    }}
                >
                    {/* Content on the right */}
                    <Box sx={{ flex: 1, mr: { md: 6 } }}>
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            gutterBottom
                            ref={solutionsHeadingRef}
                            sx={{
                                transform: `translateX(${isMobile ? '-20px' : (isTablet ? '-50px' : '-100px')})`,
                                opacity: 0
                            }}
                        >
                            Future-Ready App Development Solutions by VSoft
                        </Typography>
                        <Typography variant="body1" paragraph>
                            At <b>VSoft Solutions</b>, our mission is to build powerful, intuitive, and future-ready applications that solve real business problems. We strive to turn your unique ideas into seamless digital experiences—whether it's a mobile app, web platform, or enterprise-grade solution.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            We're not just developers, we're your innovation partners-committed to crafting scalable, secure, and user-centric applications that help you grow faster, serve better, and stand out in today's competitive digital world.
                        </Typography>
                    </Box>

                    {/* Image on the left */}
                    <Box sx={{ flex: 1 }}>
                        <Box
                            component="img"
                            src={AppBanner}
                            alt="Team working together"
                            sx={{
                                width: '85%',
                                height: 'auto'
                            }}
                        />
                    </Box>
                </Box>
            </Container>

            <Box
                sx={{
                    px: 2,
                    py: 6,
                    textAlign: "center",
                    backgroundColor: "#fff",
                    overflow: 'hidden' // Prevent horizontal overflow
                }}
            >
                <Typography
                    variant="subtitle2"
                    color="black"
                    sx={{
                        textTransform: "uppercase",
                        mb: 1,
                        fontFamily: "Open Sans, sans-serif",
                        transform: `translateY(${isMobile ? '-15px' : '-30px'})`,
                        opacity: 0
                    }}
                    ref={subtitleRef}
                >
                    Inventing What's Next.
                </Typography>

                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        mb: 2,
                        transform: `translateY(${isMobile ? '20px' : '50px'})`,
                        opacity: 0
                    }}
                    ref={techSolutionsHeadingRef}
                >
                    Technological Solutions We Offer
                </Typography>

                <Typography
                    variant="body1"
                    color="black"
                    sx={{
                        maxWidth: "700px",
                        mx: "auto",
                        mb: 5,
                        fontFamily: "Open Sans, sans-serif",
                        transform: `translateY(${isMobile ? '15px' : '30px'})`,
                        opacity: 0
                    }}
                    ref={descriptionRef}
                >
                    We offer industry specialization business and technology solutions to a wide spectrum of industries across the globe to reach the market.
                </Typography>

                <Grid container spacing={6} justifyContent="center">
                    {techServices.map((service, index) => (
                        <Grid item xs={12} sm={3} md={3} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    textAlign: 'center',
                                    p: 3,
                                    borderRadius: 0,
                                    backgroundColor: 'transparent',
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        margin: '0 auto',
                                        borderRadius: '50%',
                                        backgroundColor: '#ffbd28',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mb: 2,
                                    }}
                                >
                                    <Box sx={{ color: '#111', fontSize: 40 }}>
                                        {service.icon}
                                    </Box>
                                </Box>
                                <Typography
                                    variant="subtitle1"
                                    sx={{ fontWeight: 500, color: '#000' }}
                                >
                                    {service.name}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Container
                maxWidth="lg"
                sx={{
                    py: 8,
                    overflow: 'hidden' // Prevent horizontal overflow
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        gap: { xs: 4, md: 10 },
                    }}
                >
                    {/* Content on the right */}
                    <Box sx={{ flex: 1, mr: { md: 6 } }}>
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            gutterBottom
                            ref={missionHeadingRef}
                            sx={{
                                transform: `translateX(${isMobile ? '20px' : (isTablet ? '50px' : '100px')})`,
                                opacity: 0
                            }}
                        >
                            Our Mission
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <b>VSoft</b> Solutions is a trusted name in mobile and web app development, backed by a dedicated team with years of industry experience. We specialize in delivering cutting-edge, customized application solutions that align with your business vision.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            Our mission is to become a trusted partner for every brand we work with—helping them succeed, scale, and shine in the digital space
                        </Typography>

                        <Typography variant="body1" paragraph>
                            From intuitive UI/UX design to powerful backend development, our full-cycle services are tailored to meet your business goals. We offer:
                        </Typography>

                        <ul style={{ paddingLeft: '1rem', color: '#555' }}>
                            <li>Timely delivery with transparent progress tracking</li>
                            <li>Round-the-clock customer support</li>
                            <li>Competitive pricing tailored to your needs</li>
                            <li>Expertise in e-commerce, on-demand & clone apps</li>
                            <li>Reliable post-launch maintenance & upgrades</li>
                        </ul>
                    </Box>

                    {/* Image on the left */}
                    <Box sx={{ flex: 1 }}>
                        <Box
                            component="img"
                            src={WhyApp}
                            alt="Team working together"
                            sx={{
                                width: '85%',
                                height: 'auto',
                                borderRadius: '8px',
                                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                            }}
                        />
                    </Box>
                </Box>
            </Container>

            <Box
                sx={{
                    py: { xs: 4, sm: 6, md: 8 },
                    overflow: 'hidden' // Prevent horizontal overflow
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        variant="h4"
                        align="center"
                        sx={{
                            mb: { xs: 4, sm: 5, md: 6 },
                            fontWeight: 'bold',
                            color: 'text.primary',
                            transform: `translateY(${isMobile ? '25px' : '60px'})`,
                            opacity: 0
                        }}
                        ref={techStackHeadingRef}
                    >
                        Technology Stack
                    </Typography>
                    <Grid
                        container
                        spacing={{ xs: 2, sm: 3, md: 4 }}
                        justifyContent="center"
                        alignItems="center"
                    >
                        {stacks.map((stack, index) => (
                            <Grid
                                item
                                xs={4}
                                sm={3}
                                md={2}
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
                                        p: { xs: 1, sm: 2 }
                                    }}
                                >
                                    <img
                                        src={stack.icon}
                                        alt={`${stack.name} logo`}
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
    )
}

export default ApplicationDevelopment