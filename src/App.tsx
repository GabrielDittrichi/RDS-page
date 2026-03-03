import { HelmetProvider, Helmet } from 'react-helmet-async';
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
  return (
    <HelmetProvider>
      <div className="App font-sans antialiased text-gray-900 bg-white">
        <Helmet>
          <title>Real Digital Society - Agência de Marketing Digital</title>
          <meta name="description" content="Transforme sua presença digital com estratégias inovadoras de marketing digital. Soluções personalizadas em SEO, Tráfego Pago e Redes Sociais para impulsionar seu negócio." />
          <link rel="canonical" href="https://realdigitalsociety.com" />
          <meta name="robots" content="index, follow" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://realdigitalsociety.com/" />
          <meta property="og:title" content="Real Digital Society - Transforme sua presença digital" />
          <meta property="og:description" content="Somos especialistas em marketing digital que impulsionam seu negócio com soluções personalizadas e resultados mensuráveis." />
          <meta property="og:image" content="https://realdigitalsociety.com/og-image.jpg" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://realdigitalsociety.com/" />
          <meta name="twitter:title" content="Real Digital Society - Transforme sua presença digital" />
          <meta name="twitter:description" content="Somos especialistas em marketing digital que impulsionam seu negócio com soluções personalizadas e resultados mensuráveis." />
          <meta name="twitter:image" content="https://realdigitalsociety.com/og-image.jpg" />

          {/* Fonts */}
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
