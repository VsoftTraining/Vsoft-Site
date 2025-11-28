import React, { useLayoutEffect, useRef } from 'react';
import { Helmet } from "react-helmet-async";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  useMediaQuery,
  useTheme,
  Paper,
  styled
} from '@mui/material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { AutoAwesome, LockPerson, SupportAgent, ThumbUp, DesignServices, RocketLaunch } from '@mui/icons-material';
import ConstructionIcon from '@mui/icons-material/Construction';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroLaptopImage from '../assets/The.png';
import MobHero from '../assets/The.png';
import teamImage from '../assets/teamImage.webp';
import ServiceOne from '../assets/service1.avif';
import ServiceTwo from '../assets/service2.avif';
import ServiceThree from '../assets/service3.avif';
import ServiceFour from '../assets/webdev.webp';
import ServiceBck from '../assets/service-bck.avif';
import WeOffer from '../assets/weOfferbck.webp';
import ClientLogoSlider from '../Animations/ClientLogoSlider';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HeroSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#ffffff',
  position: 'relative',
  overflow: 'hidden',

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
    backgroundImage: `url(${MobHero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: '#ffffff',

    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(13, 92, 30, 0.54)',
      zIndex: 0,
    },
  },
}));

const AboutSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: 'linear-gradient(135deg, #FEF3C7 0%, #FEF9C3 50%, #FED7AA 100%)',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },
}));

const PurpleText = styled('span')({
  color: '#ffbe01',
  fontWeight: 900,
  fontSize: '2.6rem',
});

const ServiceCard = styled(Card)(({ theme }) => ({
  background: 'white',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 16px 32px rgba(0,0,0,0.2)',
  },
}));

const IconContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
});

const ReadMoreButton = styled(Button)(({ theme }) => ({
  color: '#000',
  fontWeight: 600,
  textTransform: 'none',
  padding: theme.spacing(0.5, 0),
  '&:hover': {
    backgroundColor: 'transparent',
    color: '#ffbe01',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#ffbe01',
  color: '#000',
  padding: theme.spacing(1, 3),
  borderRadius: '5px',
  textTransform: 'uppercase',
  fontWeight: 600,
  '&:hover': {
    backgroundColor: '#000',
    color: '#fff',
  },
}));

const HomeTvl = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Consolidated refs
  const animationRefs = {
    heroHeading: useRef(),
    aboutTitle: useRef(),
    aboutHeading: useRef(),
    serviceHeading: useRef(),
    whatWeDoHeading: useRef(),
    industriesHeading: useRef(),
    excellenceHeading: useRef(),
    uniqueHeading: useRef(),
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation - immediate animation, no scroll trigger
      gsap.fromTo(animationRefs.heroHeading.current,
        {
          opacity: 0,
          y: isMobile ? 50 : 80,
          scale: isMobile ? 0.9 : 0.8,
          rotationX: isMobile ? 20 : 45,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 2,
          ease: 'power3.out',
          delay: 0.3,
        }
      );

      // Scroll-triggered animations configuration
      const scrollAnimations = [
        {
          ref: animationRefs.aboutTitle,
          from: { opacity: 0, x: isMobile ? -50 : -120, rotation: isMobile ? -5 : -10 },
          to: { opacity: 1, x: 0, rotation: 0, duration: 1.4, ease: 'back.out(1.7)' },
          start: 'top 85%',
        },
        {
          ref: animationRefs.aboutHeading,
          from: { opacity: 0, y: isMobile ? 40 : 60, scale: 0.9, rotationY: isMobile ? 10 : 25 },
          to: { opacity: 1, y: 0, scale: 1, rotationY: 0, duration: 1.6, ease: 'power2.out' },
          start: 'top 80%',
        },
        {
          ref: animationRefs.serviceHeading,
          from: { opacity: 0, y: isMobile ? -30 : -50, scale: isMobile ? 1.1 : 1.2, rotation: isMobile ? 2 : 5 },
          to: { opacity: 1, y: 0, scale: 1, rotation: 0, duration: 1.8, ease: 'elastic.out(1, 0.6)' },
          start: 'top 95%',
        },
        {
          ref: animationRefs.whatWeDoHeading,
          from: { opacity: 0, x: isMobile ? 50 : 100, rotationZ: isMobile ? 8 : 15, scale: isMobile ? 0.85 : 0.7 },
          to: { opacity: 1, x: 0, rotationZ: 0, scale: 1, duration: 1.5, ease: 'power3.out' },
          start: 'top 80%',
        },
        {
          ref: animationRefs.industriesHeading,
          from: { opacity: 0, y: isMobile ? 50 : 70, rotationX: isMobile ? -15 : -30, scale: isMobile ? 0.9 : 0.8 },
          to: { opacity: 1, y: 0, rotationX: 0, scale: 1, duration: 1.7, ease: 'back.out(1.5)' },
          start: 'top 85%',
        },
        {
          ref: animationRefs.excellenceHeading,
          from: { opacity: 0, x: isMobile ? -40 : -80, y: isMobile ? -20 : -40, rotation: isMobile ? -4 : -8, scale: isMobile ? 1.05 : 1.1 },
          to: { opacity: 1, x: 0, y: 0, rotation: 0, scale: 1, duration: 1.6, ease: 'power2.out' },
          start: 'top 80%',
        },
        {
          ref: animationRefs.uniqueHeading,
          from: { opacity: 0, y: isMobile ? 60 : 90, rotationY: isMobile ? -20 : -45, scale: isMobile ? 0.8 : 0.6 },
          to: { opacity: 1, y: 0, rotationY: 0, scale: 1, duration: 2, ease: 'elastic.out(1, 0.4)' },
          start: 'top 85%',
        },
      ];

      // Apply scroll-triggered animations
      scrollAnimations.forEach(({ ref, from, to, start }) => {
        if (ref.current) {
          gsap.fromTo(ref.current, from, {
            ...to,
            scrollTrigger: {
              trigger: ref.current,
              start,
              toggleActions: 'play none none reverse',
            },
          });
        }
      });
    });

    return () => ctx.revert(); // Clean up animations
  }, [isMobile]);


  const processes = [
    {
      number: "01",
      title: "Discovery & Requirement Understanding",
      description: " We discuss your goals, challenges, and target audience."
    },
    {
      number: "02",
      title: "Strategy & Roadmap Planning",
      description: "We create a clear action plan with timelines and deliverables."
    },
    {
      number: "03",
      title: "Design & Concept Finalization",
      description: "We prepare visual and functional designs and refine them with your feedback."
    },
    {
      number: "04",
      title: "Execution & Implementation",
      description: "We develop and launch the project based on the approved plan."
    },
    {
      number: "05",
      title: "Quality Check & Feedback Loop",
      description: "We test, review, and make real-time improvements for accuracy."
    }
  ];

  // Data arrays (moved outside component to prevent recreating on each render)
  const services = [
    {
      title: 'WEB DEVELOPMENT',
      icon: ServiceFour,
      description: 'We build fast, responsive websites that strengthen your online presence.',
      link: '/services/website-development'
    },
    {
      title: 'APP DEVELOPMENT',
      icon: ServiceTwo,
      description: 'We create high-performance Android & iOS apps to boost business engagement.',
      link: '/services/app-development'
    },
    {
      title: 'UI/UX DESIGN',
      icon: ServiceThree,
      description: 'We design clean, user-friendly interfaces that enhance user experience.',
      link: '/services/ui-ux-design'
    },
    {
      title: 'DIGITAL MARKETING',
      icon: ServiceOne,
      description: 'We run SEO, social media, and ads to increase visibility and conversions.',
      link: '/services/digital-marketing'
    }
  ];

  return (
    <>
      <Helmet>
  <title>Vsoft Solutions | Software Company in Tirunelveli</title>

  <meta
    name="description"
    content="Looking for the best software company in Tirunelveli? Vsoft offers custom software, web apps, mobile apps, and IT services."
  />

  <meta
    name="keywords"
    content="software company in tirunelveli, it company in tirunelveli, software development company tirunelveli"
  />
</Helmet> 

      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, overflow: 'hidden' }}>
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            alignItems: 'center',
            gap: 3,
          }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" gutterBottom>
                We are a creative
              </Typography>
              <Typography
                variant="h1"
                gutterBottom
                fontWeight="bold"
                ref={animationRefs.heroHeading}
                sx={{ fontSize: '3.8rem' }}
              >
                A Trusted Software Company in <PurpleText>Tirunelveli</PurpleText>
              </Typography>
              <Typography variant="body1" paragraph>
                We are a leading <b>software company in Tirunelveli</b> offering end-to-end IT and digital solutions.
              </Typography>
              <Box mt={3}>
                <StyledButton component={Link} to="/contact" variant="contained" size="large">
                  GET IN TOUCH
                </StyledButton>
              </Box>
            </Box>

            {!isMobile && (
              <Box
                component="img"
                src={heroLaptopImage}
                alt="Hero interface"
                fetchPriority='high'
                decoding='async'
                sx={{
                  width: '100%',
                  maxWidth: '600px',
                  borderRadius: 3,
                  height: 'auto',
                  flex: 1,
                }}
              />
            )}
          </Box>
        </Container>
      </HeroSection>

      {/* About Us Section */}
      <AboutSection>
        <Container maxWidth="xl">
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 8,
          }}>

            {/* LEFT SIDE */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h2"
                component="h2"
                gutterBottom
                fontWeight="bold"
                ref={animationRefs.aboutTitle}
                sx={{ display: 'flex', alignItems: 'center', mb: 4 }}
              >
                Who We Are <ArrowForwardIcon sx={{ ml: 1, color: '#ffbe01' }} />
              </Typography>

              {/* ⭐ REPLACED IMAGE WITH THIS STATS SECTION ⭐ */}
              <Box
                sx={{
                  width: '85%',
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
                  gap: 4,
                  textAlign: "center",
                  mt: 3
                }}
              >
                {/* Years of Experience */}
                <Box>
                  <Typography
                    variant="h3"
                    fontWeight={700}
                    color="#ffbe01"
                    sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
                  >
                    5+
                  </Typography>
                  <Typography variant="h5" sx={{ mt: 1 }}>
                    Years of Experience
                  </Typography>
                </Box>

                {/* Projects */}
                <Box>
                  <Typography
                    variant="h3"
                    fontWeight={700}
                    color="#ffbe01"
                    sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
                  >
                    120+
                  </Typography>
                  <Typography variant="h5" sx={{ mt: 1 }}>
                    Projects Delivered
                  </Typography>
                </Box>

                {/* Clients */}
                <Box>
                  <Typography
                    variant="h3"
                    fontWeight={700}
                    color="#ffbe01"
                    sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
                  >
                    40+
                  </Typography>
                  <Typography variant="h5" sx={{ mt: 1 }}>
                    Happy Clients
                  </Typography>
                </Box>
              </Box>
              {/* ⭐ END STATS SECTION ⭐ */}
            </Box>

            {/* RIGHT SIDE */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h1"
                component="h3"
                ref={animationRefs.aboutHeading}
                gutterBottom
                fontWeight="bold"
                sx={{ fontSize: '3rem' }}
              >
                Best Software Company in Tirunelveli
              </Typography>

              <Typography variant="body1" paragraph sx={{ pt: '10px' }}>
                VSoft Solutions is a trusted <b>IT company in Tirunelveli</b>.
                We help businesses grow by creating simple and useful software, websites,
                and mobile apps. We also offer digital marketing services so more people
                can find your business online.
              </Typography>

              <Typography variant="body1" paragraph>
                We started with one simple idea — technology should be easy for everyone.
                Today, we work with all types of businesses, from small startups to local stores.
                Our team is small but skilled. We believe in honest work, clear communication,
                and building long-term trust with every client we work with.
              </Typography>

              <Box mt={3}>
                <StyledButton
                  component={Link}
                  to="/about"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                >
                  Explore More
                </StyledButton>
              </Box>
            </Box>
          </Box>
        </Container>
      </AboutSection>

      {/* Services Section */}
      <Box sx={{
        py: 4,
        // backgroundImage: `url(${ServiceBck})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'black',
        overflow: 'hidden'
      }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography variant="h3" fontWeight="bold" ref={animationRefs.serviceHeading} gutterBottom>
              Explore Our Services
            </Typography>
            <Typography variant="h5" mb={2}>
              <b>Services We Provide at VSoft Solutions</b>
            </Typography>
            <Typography variant="body1" maxWidth="sm" mx="auto">
              We offer <b>website development, mobile apps, UI/UX design and digital marketing services</b> to grow your business.
              We start by understanding your goals, then build custom solutions for you. Our team works with you every step of the way,
              clear communication and real results. When you work with us, we focus on your growth, not just the service.
            </Typography>
          </Box>

          <Box sx={{
            display: 'grid',
            gap: 4,
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}>
            {services.map((service, index) => (
              <Box key={index}>
                <ServiceCard>
                  <IconContainer>
                    <Box
                      component="img"
                      src={service.icon}
                      alt={service.title}
                      sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </IconContainer>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom align="center">
                      {service.title}
                    </Typography>
                    <Typography variant="body2" align="center">
                      {service.description}
                    </Typography>
                  </CardContent>
                  <Box sx={{ textAlign: 'center', pb: 2 }}>
                    <ReadMoreButton
                      component={Link}
                      to={service.link}
                      endIcon={<ArrowRight size={16} />}
                    >
                      Read More
                    </ReadMoreButton>
                  </Box>
                </ServiceCard>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* What We Do Section */}
      {/*   */}

      {/* Excellence Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          // background: 'linear-gradient(135deg, #FEF3C7 0%, #FEF9C3 50%, #FED7AA 100%)',
          textAlign: 'center'
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: '1.75rem', sm: '2rem', md: '2.3rem' },
            fontWeight: 700,
            color: '#111827',
            lineHeight: 1.3,
            mb: 12
          }}
        >
          Our Client-Centric Approach{' '}
          <Box component="span" sx={{ color: '#D97706' }}>
            Value First Delivery
          </Box>
        </Typography>

        <Container maxWidth="xl">
          <Grid
            container
            spacing={{ xs: 5, md: 6 }}
            alignItems="center"
            justifyContent="center"
          >
            {/* Left Column */}
            <Grid item xs={12} lg={5}>
              <Box sx={{ mb: 25, background: 'linear-gradient(135deg, #FEF3C7 0%, #FEF9C3 50%, #FED7AA 100%)', p: 4, borderRadius: 3 }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '0.95rem', md: '1.05rem' },
                    color: '#374151',
                    lineHeight: 1.8,
                    maxWidth: 450,
                    mx: 'auto',
                    mb: 0
                  }}
                >
                  We take time to understand your business, plan the right strategy, and deliver solutions that show real results.
                  Every step is focused on adding value and matching your goals.
                </Typography>

                <Box
                  sx={{
                    borderLeft: '4px solid #F59E0B',
                    pl: 3,
                    py: 1,
                    mx: 'auto',
                    maxWidth: 420
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { xs: '1rem', md: '1.15rem' },
                      fontStyle: 'italic',
                      color: '#4B5563',
                      fontWeight: 700,
                      mt: 5
                    }}
                  >
                    “We turn ideas into real outcomes with clarity, teamwork, and consistency.”
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Right Column */}
            <Grid item xs={12} lg={7}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                  alignItems: 'center'
                }}
              >
                {processes.map((process, index) => (
                  <Box key={process.number} sx={{ width: '100%', maxWidth: 600 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>

                      {/* Number */}
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #FBBF24 0%, #EAB308 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <Typography
                          sx={{
                            color: 'white',
                            fontWeight: 700,
                            fontSize: '1rem'
                          }}
                        >
                          {process.number}
                        </Typography>
                      </Box>

                      {/* Card */}
                      <Paper
                        elevation={2}
                        sx={{
                          flex: 1,
                          borderRadius: 3,
                          p: 2.5,
                          border: '1px solid #F3F4F6',
                          background: 'linear-gradient(135deg, #FEF3C7 0%, #FEF9C3 50%, #FED7AA 100%)',
                          textAlign: 'left'
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: { xs: '1rem', md: '1.15rem' },
                            fontWeight: 700,
                            color: '#111827',
                            mb: 1
                          }}
                        >
                          {process.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#4B5563',
                            lineHeight: 1.6,
                            fontSize: { xs: '0.85rem', md: '0.95rem' }
                          }}
                        >
                          {process.description}
                        </Typography>
                      </Paper>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Unique Section */}
      {/* <Box sx={{ py: 8, backgroundColor: '#f9f9f9', overflow: 'hidden' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={4}>
            <Typography variant="h4" fontWeight="bold" ref={animationRefs.uniqueHeading} gutterBottom>
              That Makes Us Unique
            </Typography>
            <Typography variant="body1">
              <b>VSOFT SOLUTIONS</b>, we stand apart through our unwavering commitment to innovation, quality, and customer success. Our unique approach combines cutting-edge technology, industry expertise, and a client-first mindset, ensuring that every solution we deliver is tailored, effective, and future-ready.
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {unique.map((uniq, index) => (
              <Grid item xs={12} sm={6} md={2} key={index}>
                <Card elevation={4} sx={{
                  height: '100%',
                  textAlign: 'center',
                  borderRadius: 2,
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  '&:hover': { boxShadow: 6 },
                }}>
                  <Avatar
                    src={uniq.icon}
                    alt={uniq.title}
                    sx={{ width: 60, height: 60, mb: 2, borderRadius: '50%' }}
                  />
                  <Typography variant="h6" fontWeight="bold">
                    {uniq.title}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box> */}

      <ClientLogoSlider />
    </>
  );
};

export default HomeTvl;