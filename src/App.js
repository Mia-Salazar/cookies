import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';
import { Contact, Home, Intro, Portfolio, Activities, Articles } from './pages';
import { Suspense } from 'react';

function App() {
  return (
    <Suspense fallback="...">
      <BrowserRouter>
        <Routes>
          <Route exact path="/articles" element={<Articles />} />
          <Route exact path="/activities" element={<Activities />} />
          <Route exact path="/projects" element={<Portfolio />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/" element={<Intro />} />
        </Routes>
      </BrowserRouter>
    </Suspense>

  );
}

export default App;
