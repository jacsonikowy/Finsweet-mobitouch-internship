import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Pricing from './pages/Pricing/Pricing'
import ContactUs from './pages/ContactUs/ContactUs'

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
    element: <AboutUs />,
  },
  {
    path: '/pricing',
    element: <Pricing />,
  },
  {
    path: '/contactus',
    element: <ContactUs />
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
