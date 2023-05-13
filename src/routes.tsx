import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Work from './pages/Work';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'work', element: <Work /> },
    ],
  },
]);

export default router;
