import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';
import { Contact, Home, Intro, Portfolio } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<Intro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
