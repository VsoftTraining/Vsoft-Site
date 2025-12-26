import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Chip,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SupportIcon from '@mui/icons-material/Support';
import VerifiedIcon from '@mui/icons-material/Verified';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SEO from '../components/SEO';

const StyledHeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  padding: theme.spacing(8, 0),
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    zIndex: 1,
  },
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: theme.spacing(2),
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  border: '2px solid transparent',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
    borderColor: theme.palette.primary.main,
  },
}));

const PriceSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.primary.main,
  height: 8,
  '& .MuiSlider-track': {
    height: 8,
    borderRadius: 4,
  },
  '& .MuiSlider-rail': {
    height: 8,
    borderRadius: 4,
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
  },
}));

const steps = ['Your Info', 'Select Services', 'Submit'];

const Pricing = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    callTime: '',
  });
  const [services, setServices] = useState({
    webDevelopment: { selected: false, price: 50000, min: 10000, max: 500000 },
    mobileApps: { selected: false, price: 75000, min: 25000, max: 1000000 },
    cloudSolutions: { selected: false, price: 40000, min: 15000, max: 750000 },
    aiMl: { selected: false, price: 100000, min: 50000, max: 2000000 },
    digitalMarketing: { selected: false, price: 20000, min: 5000, max: 500000 },
    cybersecurity: { selected: false, price: 30000, min: 10000, max: 500000 },
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFormChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleServiceToggle = (serviceKey) => {
    setServices({
      ...services,
      [serviceKey]: {
        ...services[serviceKey],
        selected: !services[serviceKey].selected,
      },
    });
  };

  const handlePriceChange = (serviceKey) => (event, newValue) => {
    setServices({
      ...services,
      [serviceKey]: {
        ...services[serviceKey],
        price: newValue,
      },
    });
  };

  const calculateTotal = () => {
    return Object.values(services)
      .filter(service => service.selected)
      .reduce((total, service) => total + service.price, 0);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 4, color: '#333', fontWeight: 'bold' }}>
              Let us know how to reach you
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Full Name"
                  required
                  value={formData.name}
                  onChange={handleFormChange('name')}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleFormChange('email')}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  required
                  value={formData.phone}
                  onChange={handleFormChange('phone')}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Preferred Call Time</InputLabel>
                  <Select
                    value={formData.callTime}
                    onChange={handleFormChange('callTime')}
                    label="Preferred Call Time"
                    sx={{
                      borderRadius: 2,
                    }}
                  >
                    <MenuItem value="morning">Morning (9 AM - 12 PM)</MenuItem>
                    <MenuItem value="afternoon">Afternoon (12 PM - 4 PM)</MenuItem>
                    <MenuItem value="evening">Evening (4 PM - 8 PM)</MenuItem>
                    <MenuItem value="anytime">Anytime</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
        );
      case 1:
        return (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 4, color: '#333', fontWeight: 'bold' }}>
              Choose services and adjust your investment range
            </Typography>
            <Grid container spacing={3}>
              {Object.entries(services).map(([key, service]) => (
                <Grid item xs={12} md={6} key={key}>
                  <ServiceCard
                    onClick={() => handleServiceToggle(key)}
                    sx={{
                      borderColor: service.selected ? theme.palette.primary.main : 'transparent',
                      backgroundColor: service.selected ? theme.palette.primary.light + '10' : 'white',
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                          {key === 'webDevelopment' && 'Web Development'}
                          {key === 'mobileApps' && 'Mobile Apps'}
                          {key === 'cloudSolutions' && 'Cloud Solutions'}
                          {key === 'aiMl' && 'AI & ML'}
                          {key === 'digitalMarketing' && 'Digital Marketing'}
                          {key === 'cybersecurity' && 'Cybersecurity'}
                        </Typography>
                        {service.selected && (
                          <CheckCircleIcon sx={{ color: theme.palette.primary.main }} />
                        )}
                      </Box>

                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {key === 'webDevelopment' && 'Responsive websites & apps'}
                        {key === 'mobileApps' && 'iOS & Android apps'}
                        {key === 'cloudSolutions' && 'AWS, Azure, GCP'}
                        {key === 'aiMl' && 'Smart solutions'}
                        {key === 'digitalMarketing' && 'SEO, PPC, Social'}
                        {key === 'cybersecurity' && 'Protection & audits'}
                      </Typography>

                      {service.selected && (
                        <Box sx={{ mt: 2 }}>
                          <PriceSlider
                            value={service.price}
                            onChange={handlePriceChange(key)}
                            min={service.min}
                            max={service.max}
                            step={service.min >= 10000 ? 5000 : 1000}
                            valueLabelDisplay="on"
                            valueLabelFormat={(value) => formatCurrency(value)}
                          />
                          <Typography variant="body2" sx={{ mt: 1, textAlign: 'center', fontWeight: 'bold' }}>
                            {formatCurrency(service.price)}
                            {key === 'digitalMarketing' && '/mo'}
                          </Typography>
                        </Box>
                      )}
                    </CardContent>
                  </ServiceCard>
                </Grid>
              ))}
            </Grid>

            {Object.values(services).some(s => s.selected) && (
              <Paper sx={{ mt: 4, p: 3, backgroundColor: '#f8f9fa', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#333' }}>
                  Total Investment
                </Typography>
                <Typography variant="h4" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>
                  {formatCurrency(calculateTotal())}
                </Typography>
              </Paper>
            )}
          </Box>
        );
      case 2:
        return (
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>
              Review Your Selection
            </Typography>

            <Paper sx={{ p: 3, mb: 3, backgroundColor: '#f8f9fa' }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Contact Information</Typography>
              <Typography><strong>Name:</strong> {formData.name}</Typography>
              <Typography><strong>Email:</strong> {formData.email}</Typography>
              <Typography><strong>Phone:</strong> {formData.phone}</Typography>
              <Typography><strong>Preferred Time:</strong> {formData.callTime}</Typography>
            </Paper>

            {Object.values(services).some(s => s.selected) && (
              <Paper sx={{ p: 3, mb: 3, backgroundColor: '#f8f9fa' }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Selected Services</Typography>
                {Object.entries(services)
                  .filter(([_, service]) => service.selected)
                  .map(([key, service]) => (
                    <Box key={key} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography>
                        {key === 'webDevelopment' && 'Web Development'}
                        {key === 'mobileApps' && 'Mobile Apps'}
                        {key === 'cloudSolutions' && 'Cloud Solutions'}
                        {key === 'aiMl' && 'AI & ML'}
                        {key === 'digitalMarketing' && 'Digital Marketing'}
                        {key === 'cybersecurity' && 'Cybersecurity'}
                      </Typography>
                      <Typography sx={{ fontWeight: 'bold' }}>
                        {formatCurrency(service.price)}
                        {key === 'digitalMarketing' && '/mo'}
                      </Typography>
                    </Box>
                  ))}
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Total Investment</Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
                    {formatCurrency(calculateTotal())}
                  </Typography>
                </Box>
              </Paper>
            )}

            <Typography variant="body1" sx={{ mb: 3, color: '#666' }}>
              💬 We'll respond within 24 hours with a detailed proposal
            </Typography>
          </Box>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <>
      <SEO
        title="Pricing Plans | VSoft Solutions - Transparent Pricing"
        description="Flexible pricing plans for web development, mobile apps, digital marketing, and more. No hidden fees, transparent pricing with VSoft Solutions."
        keywords="pricing plans, web development pricing, mobile app pricing, digital marketing pricing"
        canonical="/pricing"
      />

      {/* Hero Section */}
      <StyledHeroSection>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography
            variant={isMobile ? 'h4' : 'h2'}
            sx={{
              fontWeight: 'bold',
              mb: 3,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Flexible Pricing Plans
          </Typography>
          <Typography
            variant={isMobile ? 'h5' : 'h3'}
            sx={{
              fontWeight: 'bold',
              mb: 3,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Invest in Your Digital Future
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              opacity: 0.9,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Configure your custom package with transparent pricing. No hidden fees. No surprises. Just results.
          </Typography>
        </Container>
      </StyledHeroSection>

      {/* Benefits Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <SupportIcon sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                24/7 Support
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <VerifiedIcon sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Quality Assured
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <ScheduleIcon sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                On-Time Delivery
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Pricing Calculator */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ width: '100%', mb: 4 }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        <Paper sx={{ p: 4, borderRadius: 3, boxShadow: theme.shadows[4] }}>
          {getStepContent(activeStep)}

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 4 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {activeStep === steps.length - 1 ? (
              <Button
                variant="contained"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 'bold'
                }}
              >
                Get Custom Proposal
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                variant="contained"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 'bold'
                }}
              >
                Next
              </Button>
            )}
          </Box>
        </Paper>
      </Container>

      {/* Need Help Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 6 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', color: '#333' }}>
            Need Help Choosing?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, color: '#666' }}>
            Our experts are here to guide you through the perfect solution
          </Typography>
          <Button
            variant="outlined"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontWeight: 'bold',
              borderColor: theme.palette.primary.main,
              color: theme.palette.primary.main,
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
                color: 'white'
              }
            }}
          >
            Schedule Free Consultation
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default Pricing;