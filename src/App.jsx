import './App.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css'; 
import '@fontsource/inter/400.css';  
import '@fontsource/inter/500.css'; 
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './pages/Home'
import WebDevlop from './pages/WebDevlop';
import ServicesPage from './pages/ServicesPage';
import OurCulture from './pages/OurCulture';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter here
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import DigitalMarketing from './pages/DigitalMarketing';
import WordPress from './pages/WordPress';
import UiUx from './pages/UiUx';
import StepUp from './pages/StepUp';
import CareersPage from './pages/CareersPage';
import JobSlide from './pages/JobSlide';
import ScrollToTop from './pages/ScrollToTop';
import ApplicationDevelopment from './pages/ApplicationDevelopment';
import FloatingIcons from './Animations/FloatingIcons';
import Internship from './pages/Internship';
import StepUpSAP from './pages/StepUpSAP';
import StepUpCloud from './pages/StepUpCloud'; 
// import PromotionalPopup from './Animations/PromotionalPopup';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import PageTitleUpdater from './pages/PageTitleUpdater';
import HomeTvl from './pages/HomeTvl';
import TermsAndConditions from './pages/TermsAndConditions';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7a337a', // Purple color from your design
    },
    secondary: {
      main: '#000000', // Black for buttons
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          },
        },
      },
    },
  },
});
function App() {
  return (
    <>
      
        <Header />
        <ScrollToTop />
        <PageTitleUpdater />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/servicespage" element={<ServicesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/website-development" element={<WebDevlop />} />
          <Route path="/app-development" element={<ApplicationDevelopment />} />
          <Route path="digital-marketing" element={<DigitalMarketing />} />
          <Route path="wordpress-development" element={<WordPress />} />
          <Route path='/ui-ux-design' element={<UiUx />} ></Route>
          <Route path='/career' element={<CareersPage />} ></Route>
          <Route path="/culture" element={<OurCulture />} > </Route>
          <Route path="/jobportal" element={< JobSlide/>}> </Route>
          <Route path="/internship" element={< Internship/>}></Route>
          <Route path="/vstepup" element={< StepUp/>}></Route>
          <Route path="/stepupsap" element={< StepUpSAP/>}></Route>
          <Route path="/stepupcloud" element={< StepUpCloud/>}></Route>
          <Route path='/pricing' element={<Pricing/>}></Route>
          <Route path="/software-company-in-tirunelveli" element={<HomeTvl />} />
          <Route path="/product" element={<Product />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
        <FloatingIcons />
        {/* <PromotionalPopup /> */}
        <Footer />
    </>
  );
}

export default App;
