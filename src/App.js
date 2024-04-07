import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';
import { Home, Intro } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<Intro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
