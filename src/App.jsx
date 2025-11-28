import './App.css';
import '@fontsource/poppins/600.css'; // For headings
import '@fontsource/poppins/700.css'; 
import '@fontsource/inter/400.css';   // For body
import '@fontsource/inter/500.css'; 
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import WebDevlop from './component/WebDevlop';
import ServicesPage from './component/ServicesPage';
import OurCulture from './component/OurCulture';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter here
import AboutUs from './component/AboutUs';
import Contact from './component/Contact';
import DigitalMarketing from './component/DigitalMarketing';
import WordPress from './component/WordPress';
import UiUx from './component/UiUx';
import StepUp from './component/StepUp';
import CareersPage from './component/CareersPage';
import JobSlide from './component/JobSlide';
import ScrollToTop from './component/ScrollToTop';
import ApplicationDevelopment from './component/ApplicationDevelopment';
import FloatingIcons from './Animations/FloatingIcons';
import Internship from './component/Internship';
import StepUpSAP from './component/StepUpSAP';
import StepUpCloud from './component/StepUpCloud'; 
// import PromotionalPopup from './Animations/PromotionalPopup';
import Product from './component/Product';
import Pricing from './component/Pricing';
import PageTitleUpdater from './component/PageTitleUpdater';
import HomeTvl from './component/HomeTvl';

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
        </Routes>
        <FloatingIcons />
        {/* <PromotionalPopup /> */}
        <Footer />
    </>
  );
}

export default App;
