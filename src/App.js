import './App.scss';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import PortfolioSection from './components/PortfolioSection/PortfolioSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import BenefitsSection from './components/BenefitsSection/BenefitsSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/*<img src={process.env.PUBLIC_URL + '/images/padrao-01.png'} alt="Padrão" className='pattern pattern-01'/>*/}
      <AboutSection />
      <div className="transition bottom--light-grey right--white" />
      <PortfolioSection />
      <div className="transition bottom--white left--light-grey" />
      <ServicesSection />
      <div className="transition bottom--light-grey right--white" />
      <BenefitsSection />
      <div className="transition bottom--white left--light-grey" />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
