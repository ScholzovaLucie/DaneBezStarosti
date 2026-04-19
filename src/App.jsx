import ContactSection from './components/ContactSection';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import PackagesSection from './components/PackagesSection';
import ServicesSection from './components/ServicesSection';
import SiteFooter from './components/SiteFooter';
import WhistleblowingSection from './components/WhistleblowingSection';

function App() {
  return (
    <>
      <NavBar />
      <main id="top">
        <HeroSection />
        <ServicesSection />
        <PackagesSection />
        <WhistleblowingSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}

export default App;
