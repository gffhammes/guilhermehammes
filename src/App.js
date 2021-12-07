import './App.scss';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import PortfolioSection from './components/PortfolioSection/PortfolioSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import BenefitsSection from './components/BenefitsSection/BenefitsSection';
import ContactSection from './components/ContactSection/ContactSection';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <img src={process.env.PUBLIC_URL + '/images/padrao-01.png'} alt="Padrão" className='pattern pattern-01'/>
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <BenefitsSection />
      <ContactSection />
    </>
  );
}

export default App;
