import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.scss';
import { Home, Intro } from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Intro />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
