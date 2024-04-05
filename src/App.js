import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.scss';
import { Home } from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
