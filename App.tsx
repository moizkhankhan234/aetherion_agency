import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import LoadingGateway from './components/LoadingGateway';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Process from './pages/Process';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Legal from './pages/Legal';
import Partners from './pages/Partners';
import Audit from './pages/Audit';

const App: React.FC = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      {!loadingComplete && <LoadingGateway onComplete={() => setLoadingComplete(true)} />}
      
      {loadingComplete && (
        <HashRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/audit" element={<Audit />} />
              <Route path="/process" element={<Process />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        </HashRouter>
      )}
    </>
  );
};

export default App;