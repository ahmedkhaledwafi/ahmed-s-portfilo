import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
function HeroSection() {
    return (
        <div className="hero-container">
            {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
            <h1 className="hero-container--header">Want to Meet Awesome Frontend Developer</h1>
            <p>Meet Ahmed Khaled</p>
            <div className="hero-btns">
                <Button className='btns'
                    buttonStyle="btn--outline"
                    buttonSize='btn--large'>
                    Download Resume
                </Button>
            </div>
            <div className="hero-btns">
                <Button className='btns'
                    buttonStyle="btn--primary"
                    buttonSize='btn--large'>
                    WATCH TRAILER <i className="far fa-play-circle" />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
