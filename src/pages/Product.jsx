import { useRef, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  Breadcrumbs,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  Stack
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import HomeIcon from '@mui/icons-material/Home';
import WebIcon from '@mui/icons-material/Language';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PaymentIcon from '@mui/icons-material/Payment';

const Product = () => {
  const navigate = useNavigate();
  const headingRef = useRef();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
    );
  }, []);

  const products = [
    {
      title: "VConstech",
      description: "Smart Site Management for the Construction Industry",
      icon: <WebIcon sx={{ fontSize: { xs: 40, sm: 50, md: 60 }, color: '#FF6B35' }} />,
      bgColor: '#FFF4F0',
      accentColor: '#FF6B35',
      path: '/vconstech'
    },
    {
      title: "POS Billing Software",
      description: "Complete Point of Sale Solution for Your Business",
      icon: <PaymentIcon sx={{ fontSize: { xs: 40, sm: 50, md: 60 }, color: '#4ECDC4' }} />,
      bgColor: '#F0FDFC',
      accentColor: '#4ECDC4',
      path: '/pos-billing'
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', py: { xs: 3, sm: 5, md: 8 } }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Breadcrumbs */}
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" sx={{ color: '#666' }} />}
          aria-label="breadcrumb"
          sx={{ 
            mb: { xs: 3, sm: 4, md: 5 },
            display: 'flex',
            flexWrap: 'wrap',
            '& .MuiBreadcrumbs-ol': {
              flexWrap: 'wrap'
            }
          }}
        >
          <Link
            underline="hover"
            onClick={() => navigate('/')}
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              cursor: 'pointer', 
              color: '#333',
              fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
              transition: 'color 0.2s',
              '&:hover': {
                color: '#FF6B35'
              }
            }}
          >
            <HomeIcon sx={{ mr: { xs: 0.3, sm: 0.5 }, fontSize: { xs: 16, sm: 18, md: 20 } }} />
            Home
          </Link>
          <Typography
            color="#666"
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }
            }}
          >
            <WebIcon sx={{ mr: { xs: 0.3, sm: 0.5 }, fontSize: { xs: 16, sm: 18, md: 20 } }} />
            Our Products
          </Typography>
        </Breadcrumbs>

        {/* Main Content Grid */}
        <Grid 
          container 
          spacing={{ xs: 3, sm: 4, md: 6, lg: 8 }} 
          alignItems="stretch"
          sx={{ minHeight: { md: '60vh' } }}
        >
          {/* Left Side - Content */}
          <Grid item xs={12} md={6} lg={5}>
            <Box 
              ref={headingRef}
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                pr: { md: 2, lg: 4 }
              }}
            >
              <Typography 
                variant="h3"
                component="h1"
                fontWeight="bold"
                sx={{ 
                  mb: { xs: 2, sm: 2.5, md: 3 },
                  color: '#1a1a1a',
                  fontSize: { 
                    xs: '1.75rem', 
                    sm: '2.25rem', 
                    md: '2.75rem',
                    lg: '3rem'
                  },
                  lineHeight: 1.2
                }}
              >
                Our Products
              </Typography>
              
              <Typography 
                variant="h5"
                component="h2"
                sx={{ 
                  mb: { xs: 2, sm: 2.5, md: 3 },
                  color: '#FF6B35',
                  fontWeight: 600,
                  fontSize: { 
                    xs: '1.1rem', 
                    sm: '1.3rem', 
                    md: '1.5rem',
                    lg: '1.75rem'
                  },
                  lineHeight: 1.4
                }}
              >
                Innovative Solutions for Modern Businesses
              </Typography>
              
              <Typography 
                variant="body1"
                sx={{ 
                  mb: { xs: 2, sm: 2.5, md: 3 },
                  color: '#555',
                  lineHeight: { xs: 1.6, sm: 1.7, md: 1.8 },
                  fontSize: { 
                    xs: '0.95rem', 
                    sm: '1rem', 
                    md: '1.05rem',
                    lg: '1.1rem'
                  }
                }}
              >
                We deliver cutting-edge software solutions designed to streamline your business operations. From construction management to retail billing, our products are built with efficiency and user experience in mind.
              </Typography>
              
              <Typography 
                variant="body1"
                sx={{ 
                  color: '#666',
                  lineHeight: { xs: 1.6, sm: 1.7, md: 1.8 },
                  fontSize: { 
                    xs: '0.9rem', 
                    sm: '0.95rem', 
                    md: '1rem',
                    lg: '1.05rem'
                  }
                }}
              >
                Choose the product that best fits your business needs and discover how our technology can transform your workflow.
              </Typography>

              {/* Optional decorative element for larger screens */}
              <Box 
                sx={{ 
                  display: { xs: 'none', lg: 'block' },
                  mt: 4,
                  pt: 3,
                  borderTop: '3px solid #FF6B35',
                  maxWidth: '200px'
                }}
              >
                <Typography variant="caption" color="#999" sx={{ fontSize: '0.85rem' }}>
                  Click on a product to learn more
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right Side - Product Cards */}
          <Grid item xs={12} md={6} lg={7}>
            <Stack 
              spacing={{ xs: 2, sm: 2.5, md: 3, lg: 4 }}
              sx={{ 
                height: '100%',
                justifyContent: 'center'
              }}
            >
              {products.map((product, index) => (
                <Card
                  key={index}
                  elevation={2}
                  sx={{
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: '2px solid transparent',
                    '&:hover': {
                      transform: { 
                        xs: 'translateY(-4px)', 
                        sm: 'translateY(-6px)',
                        md: 'translateY(-8px)'
                      },
                      boxShadow: { 
                        xs: 4, 
                        sm: 6,
                        md: 8
                      },
                      borderColor: product.accentColor,
                      '& .product-icon-box': {
                        transform: 'scale(1.05)',
                        boxShadow: `0 4px 12px ${product.accentColor}40`
                      }
                    }
                  }}
                  onClick={() => navigate(product.path)}
                >
                  <CardContent 
                    sx={{ 
                      p: { xs: 2, sm: 3, md: 3.5, lg: 4 },
                      '&:last-child': {
                        pb: { xs: 2, sm: 3, md: 3.5, lg: 4 }
                      }
                    }}
                  >
                    <Stack 
                      direction={{ xs: 'column', sm: 'row' }} 
                      spacing={{ xs: 2, sm: 2.5, md: 3 }} 
                      alignItems={{ xs: 'center', sm: 'flex-start' }}
                    >
                      <Box
                        className="product-icon-box"
                        sx={{
                          p: { xs: 1.5, sm: 2, md: 2.5 },
                          borderRadius: { xs: 2, md: 2.5 },
                          bgcolor: product.bgColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          minWidth: { xs: '70px', sm: '80px', md: '90px', lg: '100px' },
                          height: { xs: '70px', sm: '80px', md: '90px', lg: '100px' },
                          flexShrink: 0,
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {product.icon}
                      </Box>
                      
                      <Box sx={{ flex: 1, textAlign: { xs: 'center', sm: 'left' } }}>
                        <Typography 
                          variant="h5"
                          component="h3"
                          fontWeight="bold"
                          sx={{ 
                            mb: { xs: 1, sm: 1.5 },
                            color: '#1a1a1a',
                            fontSize: { 
                              xs: '1.15rem', 
                              sm: '1.35rem', 
                              md: '1.5rem',
                              lg: '1.65rem'
                            },
                            lineHeight: 1.3
                          }}
                        >
                          {product.title}
                        </Typography>
                        
                        <Typography 
                          variant="body2"
                          sx={{ 
                            color: '#666',
                            lineHeight: { xs: 1.5, sm: 1.6, md: 1.7 },
                            fontSize: { 
                              xs: '0.875rem', 
                              sm: '0.925rem', 
                              md: '1rem',
                              lg: '1.05rem'
                            }
                          }}
                        >
                          {product.description}
                        </Typography>

                        {/* Click indicator for mobile */}
                        <Typography 
                          variant="caption" 
                          sx={{ 
                            display: { xs: 'block', sm: 'none' },
                            mt: 1.5,
                            color: product.accentColor,
                            fontWeight: 600,
                            fontSize: '0.8rem'
                          }}
                        >
                          Tap to learn more →
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Grid>
        </Grid>

        {/* Optional bottom hint for larger screens */}
        <Box 
          sx={{ 
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            mt: { md: 6, lg: 8 },
            pt: { md: 4, lg: 5 },
            borderTop: '1px solid #e0e0e0'
          }}
        >
          <Typography 
            variant="body2" 
            color="#999"
            sx={{ fontSize: { md: '0.9rem', lg: '0.95rem' } }}
          >
            Select a product above to explore its features and benefits
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Product;