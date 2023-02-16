import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Pricing from "./pages/Pricing/Pricing";
import ContactUs from "./pages/ContactUs/ContactUs";

export interface RoutesProps {
  path: string;
  element: React.ReactNode;
  errorElement?: React.ReactNode;
  name: string;
}

export const routes: RoutesProps[] = [
  {
    path: "/",
    element: <Home />,
    name: "Home",
    errorElement: <ErrorPage />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
    name: "About Us",
  },
  {
    path: "/features",
    element: <></>,
    name: "Featues",
  },
  {
    path: "/pricing",
    element: <Pricing />,
    name: "Pricing",
  },
  {
    path: "/faq",
    element: <></>,
    name: "Blog",
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
    name: "Contact Us",
  },
];

export const router = createBrowserRouter(routes);
