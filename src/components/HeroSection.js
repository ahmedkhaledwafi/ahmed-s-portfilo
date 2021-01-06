import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
function HeroSection() {
    return (
        <>
            <div className="hero-padding" />
            <div className="hero-container">
                {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
                <h1 className="hero-container--header">Search for <span className="primay-color">Talented</span> Frontend Developer</h1>
                <p><span className="primay-color">Meet</span> Ahmed Khaled</p>
                <div className="hero-btns">
                    <Button className='btns'
                        buttonStyle="btn--outline"
                        buttonSize='btn--large'
                        buttonLink='/Resume-Ahmed-Khaled.pdf'
                    >
                        Download Resume
                </Button>
                </div>
                <div className="hero-btns">
                    {/* <Button className='btns'
                    buttonStyle="btn--primary"
                    buttonSize='btn--large'
                    buttonLink='/Resume-Ahmed-Khaled.pdf'
                >
                    WATCH TRAILER <i className="far fa-play-circle" />
                </Button> */}
                </div>
            </div>
        </>
    )
}

export default HeroSection
