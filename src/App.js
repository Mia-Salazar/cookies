import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';
import { Contact, Home, Intro, Projects, Activities, Articles } from './pages';
import { Suspense } from 'react';
import Collaborations from './pages/Collaborations/Collaborations';

function App() {
  return (
    <Suspense
      fallback={
        <div role="status" aria-live="polite">
          ...
        </div>
      }
    >
      <BrowserRouter>
        <Routes>
          <Route exact path="/articles" element={<Articles />} />
          <Route exact path="/activities" element={<Activities />} />
          <Route exact path="/collaborations" element={<Collaborations />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/" element={<Intro />} />
        </Routes>
      </BrowserRouter>
    </Suspense>

  );
}

export default App;
