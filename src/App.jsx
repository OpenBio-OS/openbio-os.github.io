import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Download from './pages/Download';
import Trial from './pages/Trial';
import Licensing from './pages/Licensing';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/download" element={<Download />} />
          <Route path="/trial" element={<Trial />} />
          <Route path="/licensing" element={<Licensing />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
