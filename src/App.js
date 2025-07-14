import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/pages/header';
import Homepage from './components/pages/homepage';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Project from './components/pages/project';
import Services from './components/pages/services';
import Gallery from './components/pages/gallery';  // ensure correct filename

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/pages/footer';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
