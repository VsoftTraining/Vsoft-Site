// import { useRef, useEffect } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Link,
//   Breadcrumbs,
//   Grid,
//   Card,
//   CardContent,
//   Stack
// } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { gsap } from 'gsap';
// import HomeIcon from '@mui/icons-material/Home';
// import WebIcon from '@mui/icons-material/Language';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import BusinessIcon from '@mui/icons-material/Business';
// import PointOfSaleIcon from '@mui/icons-material/PointOfSale';

// const Product = () => {
// const navigate = useNavigate();
// const headingRef = useRef();

// useEffect(() => {
//   gsap.fromTo(
//     headingRef.current,
//     { opacity: 0, y: 50 },
//     { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
//   );
// }, []);

// const products = [
//   {
//     id: 1,
//     title: "Vconstech",
//     description: "Smart Site Management for the Construction Industry",
//     features: [
//       "Digital Document Vault for project management",
//       "Material Management & Inventory Tracking",
//       "Task Board for workflow organization",
//       "Automated Payslip Generation"
//     ],
//     icon: <BusinessIcon sx={{ fontSize: { xs: 40, sm: 50, md: 60 }, color: '#ffbe01' }} />,
//     bgColor: '#000',
//     accentColor: '#ffbe01',
//     path: '/vconstech'
//   },
//   {
//     id: 2,
//     title: "POS Billing Software",
//     description: "Complete Point of Sale Solution for Your Business",
//     features: [
//       "Real-time inventory management",
//       "Automated billing and invoicing",
//       "Sales analytics and reporting",
//       "Multi-payment gateway integration"
//     ],
//     icon: <PointOfSaleIcon sx={{ fontSize: { xs: 40, sm: 50, md: 60 }, color: '#ffbe01' }} />,
//     bgColor: '#000',
//     accentColor: '#ffbe01',
//     path: '/pos-billing'
//   }
// ];

// return (
//   <Box sx={{ 
//     minHeight: '100vh', 
//     py: { xs: 3, sm: 5, md: 8 }, 
//     backgroundColor: '#000',
//     color: '#fff'
//   }}>
//     <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
//       {/* Breadcrumbs */}
//       <Breadcrumbs
//         separator={<NavigateNextIcon fontSize="small" sx={{ color: '#ffbe01' }} />}
//         aria-label="breadcrumb"
//         sx={{
//           mb: { xs: 3, sm: 4, md: 5 },
//           display: 'flex',
//           flexWrap: 'wrap'
//         }}
//       >
//         <Link
//           underline="hover"
//           onClick={() => navigate('/')}
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             cursor: 'pointer',
//             color: '#fff',
//             fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
//             transition: 'color 0.2s',
//             '&:hover': {
//               color: '#ffbe01'
//             }
//           }}
//         >
//           <HomeIcon sx={{ mr: { xs: 0.3, sm: 0.5 }, fontSize: { xs: 16, sm: 18, md: 20 } }} />
//           Home
//         </Link>
//         <Typography
//           color="#fff"
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }
//           }}
//         >
//           <WebIcon sx={{ mr: { xs: 0.3, sm: 0.5 }, fontSize: { xs: 16, sm: 18, md: 20 } }} />
//           Our Products
//         </Typography>
//       </Breadcrumbs>

//       {/* Hero Section */}
//       <Box sx={{ textAlign: 'center', mb: { xs: 6, sm: 8, md: 10 } }}>
//         <Typography
//           ref={headingRef}
//           variant="h2"
//           component="h1"
//           sx={{
//             mb: 3,
//             color: '#fff',
//             fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
//             fontWeight: 'bold',
//             textShadow: '0 2px 4px rgba(255, 190, 1, 0.3)'
//           }}
//         >
//           Our Product Portfolio
//         </Typography>
//         <Typography
//           variant="h5"
//           sx={{
//             mb: 4,
//             color: '#ffbe01',
//             fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
//             fontWeight: 600
//           }}
//         >
//           Innovative Solutions for Modern Businesses
//         </Typography>
//         <Typography
//           variant="body1"
//           sx={{
//             maxWidth: '800px',
//             mx: 'auto',
//             color: '#fff',
//             fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
//             lineHeight: 1.6,
//             opacity: 0.9
//           }}
//         >
//           Discover our comprehensive suite of software solutions designed to streamline operations across construction and retail industries.
//         </Typography>
//       </Box>

//       {/* Products Grid */}
//       <Grid container spacing={{ xs: 3, sm: 4, md: 6 }}>
//         {products.map((product) => (
//           <Grid item xs={12} md={6} key={product.id}>
//             <Card
//               sx={{
//                 height: '100%',
//                 cursor: 'pointer',
//                 transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//                 border: `2px solid ${product.accentColor}`,
//                 backgroundColor: '#111',
//                 color: '#fff',
//                 position: 'relative',
//                 overflow: 'hidden',
//                 '&::before': {
//                   content: '""',
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   height: '4px',
//                   backgroundColor: product.accentColor,
//                   transition: 'height 0.3s ease'
//                 },
//                 '&:hover': {
//                   transform: 'translateY(-12px)',
//                   boxShadow: `0 20px 40px rgba(255, 190, 1, 0.2)`,
//                   borderColor: product.accentColor,
//                   backgroundColor: '#1a1a1a',
//                   '&::before': {
//                     height: '6px'
//                   }
//                 }
//               }}
//               onClick={() => navigate(product.path)}
//             >
//               <CardContent sx={{ p: { xs: 3, sm: 4 }, position: 'relative', zIndex: 1 }}>
//                 <Stack spacing={3}>
//                   {/* Icon and Title */}
//                   <Stack direction="row" spacing={3} alignItems="center">
//                     <Box
//                       sx={{
//                         width: { xs: 70, sm: 80, md: 90 },
//                         height: { xs: 70, sm: 80, md: 90 },
//                         borderRadius: 3,
//                         bgcolor: product.bgColor,
//                         border: `3px solid ${product.accentColor}`,
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         boxShadow: `0 4px 12px rgba(255, 190, 1, 0.2)`,
//                         transition: 'all 0.3s ease',
//                         '&:hover': {
//                           transform: 'scale(1.1)',
//                           boxShadow: `0 8px 20px rgba(255, 190, 1, 0.4)`
//                         }
//                       }}
//                     >
//                       {product.icon}
//                     </Box>
//                     <Box sx={{ flex: 1 }}>
//                       <Typography
//                         variant="h4"
//                         component="h3"
//                         sx={{
//                           mb: 1,
//                           fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
//                           fontWeight: 'bold',
//                           color: '#fff'
//                         }}
//                       >
//                         {product.title}
//                       </Typography>
//                       <Typography
//                         variant="body1"
//                         sx={{
//                           color: '#ffbe01',
//                           fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
//                           fontWeight: 500
//                         }}
//                       >
//                         {product.description}
//                       </Typography>
//                     </Box>
//                   </Stack>

//                   {/* Features */}
//                   <Box>
//                     <Typography
//                       variant="h6"
//                       sx={{
//                         mb: 2.5,
//                         fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
//                         fontWeight: 600,
//                         color: '#ffbe01'
//                       }}
//                     >
//                       Key Features:
//                     </Typography>
//                     {product.features.map((feature, i) => (
//                       <Stack key={i} direction="row" spacing={1.5} sx={{ mb: 1.5, alignItems: 'flex-start' }}>
//                         <CheckCircleIcon sx={{ 
//                           color: '#ffbe01', 
//                           fontSize: '1.2rem',
//                           mt: 0.2,
//                           minWidth: '20px'
//                         }} />
//                         <Typography
//                           variant="body2"
//                           sx={{
//                             color: '#fff',
//                             fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
//                             lineHeight: 1.4,
//                             opacity: 0.9
//                           }}
//                         >
//                           {feature}
//                         </Typography>
//                       </Stack>
//                     ))}
//                   </Box>

//                   {/* CTA */}
//                   <Box sx={{ 
//                     textAlign: 'center', 
//                     mt: 2,
//                     pt: 2,
//                     borderTop: '1px solid #ffbe01'
//                   }}>
//                     <Typography
//                       sx={{
//                         color: '#ffbe01',
//                         fontWeight: 600,
//                         fontSize: { xs: '0.9rem', sm: '1rem' },
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         gap: 1
//                       }}
//                     >
//                       Click to learn more →
//                     </Typography>
//                   </Box>
//                 </Stack>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Bottom CTA */}
//       <Box
//         sx={{
//           textAlign: 'center',
//           mt: { xs: 6, sm: 8, md: 10 },
//           p: { xs: 4, sm: 6 },
//           backgroundColor: '#111',
//           border: `3px solid #ffbe01`,
//           borderRadius: 3,
//           position: 'relative',
//           overflow: 'hidden',
//           '&::before': {
//             content: '""',
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             background: 'linear-gradient(135deg, rgba(255, 190, 1, 0.1) 0%, transparent 100%)',
//             pointerEvents: 'none'
//           }
//         }}
//       >
//         <Typography
//           variant="h4"
//           sx={{
//             mb: 3,
//             fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
//             color: '#fff',
//             fontWeight: 'bold',
//             position: 'relative',
//             zIndex: 1
//           }}
//         >
//           Ready to Get Started?
//         </Typography>
//         <Typography
//           variant="body1"
//           sx={{
//             mb: 4,
//             color: '#ffbe01',
//             fontSize: { xs: '1rem', sm: '1.1rem' },
//             position: 'relative',
//             zIndex: 1
//           }}
//         >
//           Contact us today to learn more about our products and how they can benefit your business.
//         </Typography>
//         <Box
//           sx={{
//             display: 'inline-block',
//             px: 5,
//             py: 2.5,
//             backgroundColor: '#ffbe01',
//             color: '#000',
//             borderRadius: 3,
//             cursor: 'pointer',
//             fontWeight: 'bold',
//             fontSize: '1.1rem',
//             transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//             position: 'relative',
//             zIndex: 1,
//             boxShadow: '0 4px 12px rgba(255, 190, 1, 0.3)',
//             '&:hover': {
//               backgroundColor: '#e6a800',
//               transform: 'translateY(-2px) scale(1.05)',
//               boxShadow: '0 8px 20px rgba(255, 190, 1, 0.4)'
//             }
//           }}
//           onClick={() => navigate('/contact')}
//         >
//           Contact Us
//         </Box>
//       </Box>
//     </Container>
//   </Box>
// );
// };

// export default Product;