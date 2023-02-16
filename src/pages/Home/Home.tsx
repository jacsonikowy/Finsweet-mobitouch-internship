import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import React from "react";

import "./Home.scss";
import Startpage from "./Startpage/Startpage";
import Work from "./Work/Work";
import Projects from "./Projects/Projects";
import Features from "./Features/Features";
import Reviews from "./Reviews/Reviews";
import FAQ from "./FAQ/FAQ";
import StellarForm from "./StellarForm/StellarForm";
import Blog from "./Blog/Blog";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Startpage />
      <Work />
      <Projects />
      <Features />
      <Reviews />
      <FAQ />
      <StellarForm />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
