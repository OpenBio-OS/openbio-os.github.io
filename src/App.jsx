import React from 'react';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Download from './pages/Download';
import Trial from './pages/Trial';
import Licensing from './pages/Licensing';

function App() {
  return (
    // using HashRouter for GitHub Pages compatibility without extensive server config
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/download" element={<Download />} />
          <Route path="/trial" element={<Trial />} />
          <Route path="/licensing" element={<Licensing />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
