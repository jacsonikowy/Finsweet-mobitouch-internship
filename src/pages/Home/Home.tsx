import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import React from 'react';

import './Home.scss'
import Startpage from './Startpage/Startpage';
import Work from './Work/Work';
import Projects from './Projects/Projects';
import Features from './Features/Features';
import Reviews from './Reviews/Reviews';

const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <Startpage />
            <Work />
            <Projects />
            <Features />
            <Reviews />
            <Footer />
        </>
    )
}

export default Home;