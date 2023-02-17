import { createBrowserRouter, Outlet } from "react-router-dom";

import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Pricing from "./pages/Pricing/Pricing";
import ContactUs from "./pages/ContactUs/ContactUs";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

export interface ElementsProps {
  path: string;
  element: React.ReactNode;
  name: string;
  notRender?: boolean;
}

export interface RoutesProps {
  element: React.ReactNode;
  errorElement?: React.ReactNode;
  name?: string;
  children: ElementsProps[];
}

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export const routes: RoutesProps[] = [
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        name: "Home",
      },
      {
        path: "/about-us",
        element: <AboutUs />,
        name: "About Us",
      },
      {
        path: "/features",
        element: <ErrorPage />,
        name: "Featues",
      },
      {
        path: "/pricing",
        element: <Pricing />,
        name: "Pricing",
      },
      {
        path: "/faq",
        element: <ErrorPage />,
        name: "FAQ",
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
        name: "Contact Us",
        notRender: true,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
