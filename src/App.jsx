import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import A11yWidget from './components/A11yWidget';

import Home from './pages/Home';
import Education from './pages/Education';
import Benevolat from './pages/Benevolat';
import Actualites from './pages/Actualites';
import Talents from './pages/Talents';
import Article from './pages/Article';

import AdminLayout from './components/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import NewsAdmin from './pages/admin/NewsAdmin';
import ProgramsAdmin from './pages/admin/ProgramsAdmin';
import TalentsAdmin from './pages/admin/TalentsAdmin';
import VolunteersAdmin from './pages/admin/VolunteersAdmin';

function PublicLayout({ highContrast, setHighContrast, largeText, setLargeText }) {
  return (
    <div className={`app-container ${highContrast ? 'high-contrast' : ''} ${largeText ? 'large-text' : ''}`}>
      <A11yWidget 
        highContrast={highContrast} setHighContrast={setHighContrast}
        largeText={largeText} setLargeText={setLargeText}
      />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Routes Publiques */}
        <Route path="/" element={<PublicLayout highContrast={highContrast} setHighContrast={setHighContrast} largeText={largeText} setLargeText={setLargeText} />}>
          <Route index element={<Home />} />
          <Route path="education" element={<Education />} />
          <Route path="benevolat" element={<Benevolat />} />
          <Route path="actualites" element={<Actualites />} />
          <Route path="talents" element={<Talents />} />
          <Route path="article/:id" element={<Article />} />
        </Route>

        {/* Routes Administration */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="news" element={<NewsAdmin />} />
          <Route path="programs" element={<ProgramsAdmin />} />
          <Route path="talents" element={<TalentsAdmin />} />
          <Route path="volunteers" element={<VolunteersAdmin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
