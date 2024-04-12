import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';
import { Contact, Home, Intro, Portfolio, Things } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/things" element={<Things />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<Intro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
