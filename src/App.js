import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.scss';
import { Intro } from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Intro />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
