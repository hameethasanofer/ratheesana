import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

import FieldVisits from './components/FieldVisits';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-100 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <FieldVisits />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
