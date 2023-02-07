import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import React from 'react';

import './Home.scss'
import Startpage from './Startpage/Startpage';

const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <Startpage />
            <Footer />
        </>
    )
}

export default Home;