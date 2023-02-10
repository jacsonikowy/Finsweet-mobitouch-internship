import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import ErrorPage from './pages/ErrorPage/ErrorPage'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/aboutus',
    element: <AboutUs />
  },
  {

  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
