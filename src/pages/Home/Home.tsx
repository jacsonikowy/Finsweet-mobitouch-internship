import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import React from 'react';

import './Home.scss'
import Startpage from './Startpage/Startpage';
import Work from './Work/Work';

const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <Startpage />
            <Work />
            <Footer />
        </>
    )
}

export default Home;