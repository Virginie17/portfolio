import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Portfolio from '../components/Projects';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import ScrollToTop from '../components/ScrollToTop';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';


library.add(fas);


const App: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; 
  }

  return (
    <React.StrictMode>
      <Header />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <ScrollToTop />
      <Footer />
    </React.StrictMode>
  );
};

export default App;