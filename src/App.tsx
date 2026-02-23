import { useEffect } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import './responsive.css';

// Componentes de layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Componentes de seções
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import AboutSection from './components/sections/AboutSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import VideoSection from './components/sections/VideoSection';
import ContactForm from './components/sections/ContactForm';

function App() {
  useEffect(() => {
    // Inicializa a biblioteca AOS para animações de scroll
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true
    });
  }, []);

  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>Real Digital Society - Agência de Marketing Digital</title>
          <meta name="description" content="Transforme sua presença digital com estratégias inovadoras de marketing digital. Soluções personalizadas para impulsionar seu negócio." />
          <meta name="keywords" content="marketing digital, agência de marketing, SEO, redes sociais, desenvolvimento web, marketing de performance" />
          <link rel="canonical" href="https://realdigitalsociety.com" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Real Digital Society - Transforme sua presença digital" />
          <meta property="og:description" content="Somos especialistas em marketing digital que impulsionam seu negócio com soluções personalizadas e resultados mensuráveis." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://realdigitalsociety.com" />
          <meta property="og:image" content="https://realdigitalsociety.comog-image.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Real Digital Society - Transforme sua presença digital" />
          <meta name="twitter:description" content="Somos especialistas em marketing digital que impulsionam seu negócio com soluções personalizadas e resultados mensuráveis." />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        </Helmet>
        
        <Navbar />
        <main>
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <TestimonialsSection />
          <VideoSection />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
