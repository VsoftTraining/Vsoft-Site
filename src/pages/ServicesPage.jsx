import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import SEO from '../components/SEO';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Avatar,
  Breadcrumbs,
  Link,
  Rating,
  useTheme,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

// Import images
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
import Shopify from "../assets/shopifyLogo.avif";
import ReactNative from '../assets/Reac-Native.avif';
import Flutter from '../assets/Flutter.avif';
import Kotlin from '../assets/kotlin.avif';
import Canva from '../assets/canva-pro.png';
import CapCut from "../assets/capcut-Logo.avif";
import FilmoraLogo from "../assets/Filmora-Logo.png";
import PSlogo from "../assets/PS-Logo.png";

gsap.registerPlugin(ScrollTrigger);

// Service Section Component
const ServiceSection = ({ title, description, services, technologies, link, reverse = false }) => {
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const contentRef = useRef(null);
  const techRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const tech = techRef.current;
 
    gsap.fromTo(content,
      { opacity: 0, x: reverse ? 50 : -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(tech,
      { opacity: 0, x: reverse ? -50 : 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate tech logos
    const techBoxes = tech.querySelectorAll('.tech-box');
    gsap.fromTo(techBoxes,
      { opacity: 0, scale: 0.8, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: tech,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, [reverse]);

  return (
    <Box ref={sectionRef} sx={{ mb: 10 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: reverse ? "row-reverse" : "row" },
          alignItems: "stretch",
          gap: 4,
        }}
      >
        {/* Content Side */}
        <Box ref={contentRef} sx={{ flex: 1 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {title}
          </Typography>

          <Typography variant="body1" sx={{ mb: 3, color: "#555", lineHeight: 1.8 }}>
            {description}
          </Typography>

          {/* Services List */}
          <Box sx={{ mb: 3 }}>
            {services.map((item, index) => (
              <Box
                key={index}
                sx={{ display: "flex", alignItems: "flex-start", mb: 1.5 }}
              >
                <CheckCircleIcon sx={{ color: "#ffbe01", mr: 1, mt: "3px", flexShrink: 0 }} />
                <Typography variant="body1" sx={{ fontWeight: 500, color: "#333" }}>
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* CTA Button */}
          <Button
            variant="contained"
            href={link}
            sx={{
              bgcolor: "#ffbe01",
              color: "#000",
              borderRadius: "50px",
              px: 3,
              py: 1.2,
              fontWeight: 600,
              textTransform: "none",
              "&:hover": {
                bgcolor: "#e5ab01",
                transform: "translateY(-2px)",
                boxShadow: "0 6px 20px rgba(255, 190, 1, 0.3)"
              },
              transition: "all 0.3s ease"
            }}
          >
            View More Details →
          </Button>
        </Box>

        {/* Technologies Side */}
        <Box
          ref={techRef}
          sx={{
            flex: 1,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "center",
            gap: 2,
          }}
        >
          {technologies.map((tech, index) => (
            <Box
              key={index}
              className="tech-box"
              sx={{
                width: "100px",
                height: "100px",
                borderRadius: "12px",
                bgcolor: "#fefce8",
                border: "1px solid #f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 1,
                boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px) scale(1.05)",
                  borderColor: "#ffbe01",
                  boxShadow: "0 8px 20px rgba(255, 190, 1, 0.2)",
                },
              }}
            >
              <img
                src={tech.logo}
                alt={tech.name}
                style={{
                  width: "80%",
                  height: "80%",
                  objectFit: "contain",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

// Marketing Channels Component
const MarketingSection = ({ marketingChannels }) => {
  const channelsRef = useRef(null);

  useEffect(() => {
    const cards = channelsRef.current.querySelectorAll('.marketing-card');
    gsap.fromTo(cards,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: channelsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <Box ref={channelsRef} sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
      {marketingChannels.map((item, index) => (
        <Box
          key={index}
          className="marketing-card"
          sx={{
            bgcolor: "#fffbea",
            borderRadius: "12px",
            border: "1px solid #f4e5a8",
            p: 2.5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateX(-4px)",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              borderColor: "#ffbe01",
            },
          }}
        >
          <Box>
            <Typography fontWeight="bold" fontSize="16px" gutterBottom>
              {item.title}
            </Typography>
            <Typography fontSize="14px" color="text.secondary">
              {item.subtitle}
            </Typography>
          </Box>
          <Typography fontWeight="bold" fontSize="18px" sx={{ color: "#ff8c00" }}>
            {item.growth}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

const ServicesPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const heroRef = useRef(null);
  const feedbackRef = useRef(null);
  const industriesRef = useRef(null);

  // Data
  const technologies = [
    { name: "React", logo: Reactjs },
    { name: "Node.js", logo: Nodejs },
    { name: "Angular", logo: Angular },
    { name: "JavaScript", logo: JS },
    { name: "Bootstrap", logo: Bootstrap },
    { name: "Firebase", logo: FireBase },
    { name: "Next.js", logo: NextJs },
    { name: "Material-UI", logo: Mui },
    { name: "MongoDB", logo: MongoDB },
    { name: "WordPress", logo: WordPress },
    { name: "Shopify", logo: Shopify },
  ];

  const appTechnologies = [
    { name: "React Native", logo: ReactNative },
    { name: "Flutter", logo: Flutter },
    { name: "Kotlin", logo: Kotlin },
    { name: "Node.js", logo: Nodejs },
    { name: "Firebase", logo: FireBase },
    { name: "MongoDB", logo: MongoDB },
  ];

  const graphicsTools = [
    { name: "Canva Pro", logo: Canva },
    { name: "CapCut", logo: CapCut },
    { name: "Filmora", logo: FilmoraLogo },
    { name: "Adobe Photoshop", logo: PSlogo },
  ];

  const marketingChannels = [
    { title: "SEO Optimization", subtitle: "Organic Search Growth", growth: "+150%" },
    { title: "Social Media Management", subtitle: "Engagement & Community", growth: "+200%" },
    { title: "Meta Ads (FB & Insta)", subtitle: "Lead Generation & Retargeting", growth: "+180%" },
    { title: "Google Ads", subtitle: "Targeted PPC Campaigns", growth: "+170%" },
    { title: "Content Marketing", subtitle: "Authority & Brand Trust", growth: "+130%" },
  ];

  const feedbackData = [
    {
      name: "Krishna Samy",
      feedback: "Fast and perfect in developing my company website more active in Resolving issues to achieve the end result and customer satisfaction."
    },
    {
      name: "Shanmuganathan Kadarkaraiyandi",
      feedback: "Works very neat and High class staff are good, friendly and peaceful persons."
    },
    {
      name: "Mohamed Navas",
      feedback: "Good and satisfied service. We got our company new logo with promo video as we expected .. we will recommend to our friends and relatives for sure"
    },
  ];

  const webDevServices = [
    'Custom Website Design & Development',
    'E-commerce Solutions (Shopify, WooCommerce)',
    'CMS Development (WordPress)',
    'Website Maintenance & Support',
  ];

  const appDevServices = [
    'Custom Mobile App Development (Android & iOS)',
    'E-commerce & On-Demand Mobile App Solutions',
    'Cross-Platform App Development (React Native, Flutter)',
    'App Maintenance, Updates & Performance Optimization'
  ];

  const graphicServices = [
    "UI/UX Design for Apps & Websites",
    "Logo Design & Brand Identity",
    "Business Cards, Letterheads & Stationery",
    "Brochures, Flyers & Posters",
    "Social Media Creatives & Ad Banners",
    "Product Packaging & Label Design",
    "Presentation Design",
  ];

  const industries = [
    { title: 'ECommerce', icon: 'https://cdn-icons-png.flaticon.com/512/4290/4290854.png' },
    { title: 'Construction', icon: 'https://cdn-icons-png.flaticon.com/512/139/139899.png' },
    { title: 'Healthcare', icon: 'https://cdn-icons-png.flaticon.com/512/2966/2966488.png' },
    { title: 'Social', icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png' },
    { title: 'Real Estate', icon: 'https://cdn-icons-png.flaticon.com/512/2356/2356781.png' },
    { title: 'Business', icon: 'https://cdn-icons-png.flaticon.com/512/1999/1999625.png' },
    { title: 'Education', icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135810.png' },
    { title: 'Transport', icon: 'https://cdn-icons-png.flaticon.com/512/3097/3097144.png' },
    { title: 'Grocery', icon: 'https://cdn-icons-png.flaticon.com/512/2331/2331970.png' },
  ];

  // Hero Animation
  useEffect(() => {
    const hero = heroRef.current;
    const tl = gsap.timeline();

    tl.fromTo(hero.querySelector('.breadcrumbs'),
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6 }
    )
      .fromTo(hero.querySelector('.hero-title'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.3"
      )
      .fromTo(hero.querySelector('.hero-subtitle'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.5"
      )
      .fromTo(hero.querySelector('.hero-description'),
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        "-=0.4"
      )
      .fromTo(hero.querySelector('.hero-button'),
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5 },
        "-=0.2"
      );
  }, []);

  // Feedback Carousel Animation
  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(feedbackRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        onComplete: () => {
          setCurrentIndex((prev) => (prev + 1) % feedbackData.length);
          gsap.to(feedbackRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5
          });
        }
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [feedbackData.length]);

  // Industries Animation
  useEffect(() => {
    const cards = industriesRef.current.querySelectorAll('.industry-card');
    gsap.fromTo(cards,
      { opacity: 0, y: 30, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: industriesRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <Box>
      <SEO
        title="Our Services | VSoft Solutions - Software Development Services"
        description="Explore our comprehensive software development services including web development, mobile app development, digital marketing, and UI/UX design. Transform your business with VSoft Solutions."
        keywords="web development services, mobile app development, digital marketing, UI/UX design, software development services"
        canonical="/servicespage"
      />
      {/* Hero Section */}
      <Box
        ref={heroRef}
        sx={{
          bgcolor: '#ffffff',
          py: { xs: 6, md: 10 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          {/* Breadcrumbs */}
          <Breadcrumbs
            className="breadcrumbs"
            separator={<NavigateNextIcon fontSize="small" sx={{ color: '#666' }} />}
            sx={{
              mb: 4,
              justifyContent: 'center',
              display: 'flex',
              flexWrap: 'wrap'
            }}
          >
            <Link
              href="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
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
              <BusinessCenterIcon sx={{ mr: 0.5 }} fontSize="small" />
              Services
            </Box>
          </Breadcrumbs>

          {/* Hero Content */}
          <Box sx={{ textAlign: 'center', px: { xs: 2, md: 0 } }}>
            <Typography
              className="hero-title"
              variant={isMobile ? 'h4' : 'h2'}
              fontWeight="700"
              sx={{
                mb: 2,
                color: '#000',
                lineHeight: 1.2
              }}
            >
              Innovative Services Designed for the
            </Typography>

            <Typography
              className="hero-subtitle"
              variant={isMobile ? 'h3' : 'h1'}
              fontWeight="700"
              sx={{
                mb: 3,
                color: '#ffbe01',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2
              }}
            >
              Digital Era
            </Typography>

            <Typography
              className="hero-description"
              variant="h6"
              sx={{
                mb: 2,
                maxWidth: '800px',
                mx: 'auto',
                color: '#555',
                fontSize: { xs: '1rem', md: '1.25rem' },
                fontWeight: 500,
                lineHeight: 1.7
              }}
            >
              From concept to completion - we deliver innovative solutions that drive growth .
            </Typography>

            <Typography
              className="hero-description"
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
              Partner with us to transform your digital presence. We combine creativity, technology,
              and strategy to deliver exceptional results that exceed expectations.
            </Typography>

            {/* Buttons */}
            <Box
              // ref={buttonsRef}
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
                href="/contact"
              >
                Get Started
              </Button>

              {/* <Button
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
                href="/pricing"
              >
                View Pricing
              </Button> */}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Services Sections */}
      <Box sx={{ bgcolor: '#ffffff', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 8, px: { xs: 2, md: 0 } }}>
            <Typography
              variant={isMobile ? 'h5' : 'h4'}
              fontWeight="700"
              sx={{ mb: 2, color: '#0a0505', lineHeight: 1.2 }}
            >
              What We Offer
            </Typography>
            <Typography
              variant={isMobile ? 'h3' : 'h2'}
              fontWeight="700"
              sx={{ mb: 3, fontSize: { xs: '2rem', md: '3rem' }, lineHeight: 1.2 }}
            >
              Innovative Digital Experiences
            </Typography>
          </Box>

          {/* Web Development */}
          <ServiceSection
            title="Web Development"
            description="We deliver high-quality, scalable, and custom-built web solutions to help businesses grow digitally. Our services are designed to provide seamless performance, strong branding, and user-friendly experiences."
            services={webDevServices}
            technologies={technologies}
            link="/website-development"
          />

          {/* App Development */}
          <ServiceSection
            title="App Development"
            description="We build high-performance, scalable, and user-centric mobile applications designed to enhance your digital presence. Our app solutions help businesses improve efficiency, engage customers, and stay ahead in a fast-growing digital world."
            services={appDevServices}
            technologies={appTechnologies}
            link="/app-development"
            reverse
          />

          {/* Digital Marketing */}
          <Box sx={{ mb: 10 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "stretch",
                gap: 4,
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  Digital Marketing
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: "#555", lineHeight: 1.8 }}>
                  We help businesses grow their online presence through strategic branding, social media management, performance marketing, SEO, and creative content. Our digital marketing solutions are designed to attract the right customers, build trust, and increase your conversions across all major platforms.
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "flex-start", mb: 1.5 }}>
                    <CheckCircleIcon sx={{ color: "#ffbe01", mr: 1, mt: "3px" }} />
                    <Typography variant="body1" sx={{ fontWeight: 500, color: "#333" }}>
                      Branding, Social Media, Ads & SEO Services
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-start", mb: 1.5 }}>
                    <CheckCircleIcon sx={{ color: "#ffbe01", mr: 1, mt: "3px" }} />
                    <Typography variant="body1" sx={{ fontWeight: 500, color: "#333" }}>
                      Lead Generation & Audience Growth
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-start", mb: 1.5 }}>
                    <CheckCircleIcon sx={{ color: "#ffbe01", mr: 1, mt: "3px" }} />
                    <Typography variant="body1" sx={{ fontWeight: 500, color: "#333" }}>
                      Creative Content & Campaign Strategy
                    </Typography>
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  href="/digital-marketing"
                  sx={{
                    bgcolor: "#ffbe01",
                    color: "#000",
                    borderRadius: "50px",
                    px: 3,
                    py: 1.2,
                    fontWeight: 600,
                    textTransform: "none",
                    "&:hover": {
                      bgcolor: "#e5ab01",
                      transform: "translateY(-2px)",
                      boxShadow: "0 6px 20px rgba(255, 190, 1, 0.3)"
                    },
                    transition: "all 0.3s ease"
                  }}
                >
                  View More Details →
                </Button>
              </Box>
              <MarketingSection marketingChannels={marketingChannels} />
            </Box>
          </Box>

          {/* Graphics Design */}
          <ServiceSection
            title="Graphics Designing"
            description="We create visually stunning designs that communicate your brand message with clarity and impact. Our creative team delivers modern, high-quality graphics that enhance your brand identity and attract your target audience."
            services={graphicServices}
            technologies={graphicsTools}
            link="/ui-ux-design"
          />
        </Container>
      </Box>

      {/* Industries Section */}
      <Box sx={{ py: 8, bgcolor: '#fefce8' }}>
        <Container maxWidth="xl">
          <Box textAlign="center" mb={6}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Industries We Serve
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: '900px', mx: 'auto', lineHeight: 1.8 }}>
              At <b>VSOFT SOLUTIONS</b>, we specialize in delivering industry-specific solutions that are meticulously crafted to address the unique challenges, demands, and opportunities of businesses across various sectors.
            </Typography>
          </Box>

          <Grid ref={industriesRef} container spacing={3} justifyContent="center">
            {industries.map((industry, index) => (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <Card
                  className="industry-card"
                  elevation={3}
                  sx={{
                    textAlign: 'center',
                    py: 3,
                    px: 2,
                    borderRadius: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px) scale(1.03)',
                      boxShadow: '0 12px 24px rgba(255, 190, 1, 0.2)',
                      bgcolor: '#fffef0'
                    },
                  }}
                >
                  <Avatar
                    src={industry.icon}
                    alt={industry.title}
                    variant="square"
                    sx={{ width: 64, height: 64, mb: 2 }}
                  />
                  <CardContent sx={{ p: 0 }}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {industry.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section - NEW DESIGN */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#ffffff' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h3"
              fontWeight="800"
              gutterBottom
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                background: 'linear-gradient(45deg, #333 0%, #666 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Client Testimonials
            </Typography>
            <Box
              sx={{
                width: 80,
                height: 4,
                background: 'linear-gradient(90deg, #ffbe01 0%, #f59e0b 100%)',
                mx: 'auto',
                borderRadius: 2,
                mb: 3
              }}
            />
            <Typography
              variant="body1"
              sx={{
                color: '#666',
                fontSize: { xs: '1rem', md: '1.1rem' }
              }}
            >
              What our clients say about us
            </Typography>
          </Box>

          <Box sx={{ maxWidth: 900, mx: "auto", position: 'relative' }}>
            <Card
              ref={feedbackRef}
              elevation={8}
              sx={{
                p: { xs: 4, md: 6 },
                borderRadius: 4,
                minHeight: { xs: 280, md: 300 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                bgcolor: 'linear-gradient(135deg, #FEF3C7 0%, #FEF9C3 50%, #FED7AA 100%)',
                // border: '3px solid #ffbe01',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 20px 40px rgba(255, 190, 1, 0.2)'
                }
              }}
            >
              {/* Quote Icon */}
              <FormatQuoteIcon
                sx={{
                  position: 'absolute',
                  top: -20,
                  left: 30,
                  fontSize: 80,
                  color: '#ffbe01',
                  opacity: 0.5,
                  transform: 'rotate(180deg)'
                }}
              />

              <CardContent sx={{ position: 'relative', zIndex: 1 }}>
                {/* Avatar and Info */}
                <Box sx={{ display: 'flex',  wordBreak: 'break-word',alignItems: 'center', mb: 3}}>
                  <Avatar
                    src={feedbackData[currentIndex]?.avatar || ''}
                    alt={feedbackData[currentIndex]?.name || ''}
                    sx={{
                      width: 70,
                      height: 70,
                      mr: 2,
                      // border: '3px solid #ffbe01',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Box sx={{ minWidth: 0 }}>
                    <Typography variant="h5" fontWeight="bold" sx={{ color: '#333', whiteSpace: 'normal',
        wordBreak: 'break-word',
        overflowWrap: 'anywhere', }}>
                      {feedbackData[currentIndex]?.name || ''}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {feedbackData[currentIndex]?.role || ''}
                    </Typography>
                    <Rating value={feedbackData[currentIndex]?.rating ?? 5} readOnly size="small" />
                  </Box>
                </Box>

                {/* Feedback Text */}
                <Typography
                  variant="body1"
                  sx={{
                    fontStyle: 'italic',
                    lineHeight: 1.8,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    color: '#444',
                    pl: { xs: 0, md: 2 }
                  }}
                >
                  "{feedbackData[currentIndex].feedback}"
                </Typography>
              </CardContent>

              {/* Quote Icon Bottom */}
              <FormatQuoteIcon
                sx={{
                  position: 'absolute',
                  bottom: -20,
                  right: 30,
                  fontSize: 80,
                  color: '#ffbe01',
                  opacity: 0.5
                }}
              />
            </Card>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ServicesPage;