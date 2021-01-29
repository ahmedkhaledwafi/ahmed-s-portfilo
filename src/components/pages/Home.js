import React from 'react';
import '../../App.css';
import Cards from '../Cards/Cards';
import HeroSection from '../HeroSection/HeroSection';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <AboutMe />
            <ContactMe />
        </>
    )
}

export default Home;