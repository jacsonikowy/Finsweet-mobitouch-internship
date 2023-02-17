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
  notRender?: boolean;
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
    errorElement: <ErrorPage />,
  },
  {
    path: "/features",
    element: <ErrorPage />,
    name: "Featues",
    errorElement: <ErrorPage />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
    name: "Pricing",
    errorElement: <ErrorPage />,
  },
  {
    path: "/faq",
    element: <ErrorPage />,
    name: "FAQ",
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
    name: "Contact Us",
    errorElement: <ErrorPage />,
    notRender: true,
  },
];

export const router = createBrowserRouter(routes);
