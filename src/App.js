import './App.scss';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import PortfolioSection from './components/PortfolioSection/PortfolioSection';
import ServicesSection from './components/ServicesSection/ServicesSection';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <img src={process.env.PUBLIC_URL + '/images/padrao-01.png'} alt="Padrão" className='pattern pattern-01'/>
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
    </>
  );
}

export default App;
