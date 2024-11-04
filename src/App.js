import Navbar from './Navbar/Navbar';
import LandingPage from './LandingPage/LandingPage';
import Partners from './LandingPage/Partners';
import './App.css';
import Features from './LandingPage/Features';
import Pricing from './LandingPage/Pricing';
import { BrowserRouter } from 'react-router-dom';
import FeaturesScreen from './LandingPage/FeaturesScreen';
import Footer from './LandingPage/Footer';

function App() {
  return (
    <>
       <BrowserRouter>
    <Navbar />
    <LandingPage />
    <Partners />
    <Features/>
    <FeaturesScreen />
    <Pricing/>
    <Footer />
       </BrowserRouter>
 
 
    </>
  );
}

export default App;
