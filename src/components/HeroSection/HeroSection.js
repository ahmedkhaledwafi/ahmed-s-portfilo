import React, { useRef, useEffect } from 'react';
import { Button } from '../Button/Button';
import './HeroSection.css';
import { TweenLite, Power3 } from 'gsap'

function HeroSection() {

    const hero = useRef([]);

    useEffect(() => {
        TweenLite.staggerFrom(hero.current, 1, {
            opacity: 0,
            duration: 2,
            y: 60,
            ease: Power3,
            stagger: "0.5"
        })
    }, [])

    return (
        <>
            <div className="hero-padding" />
            <div className="hero-container">
                {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
                <h1 ref={element => { hero.current[0] = element; }} className="hero-container--header">Search for <span className="primay-color">Talented</span> Frontend Developer</h1>
                <p ref={element => { hero.current[1] = element; }} ><span className="primay-color">Meet</span> Ahmed Khaled</p>
                <div ref={element => { hero.current[2] = element; }} className="hero-btns">
                    <Button className='btns'
                        buttonStyle="btn--outline"
                        buttonSize='btn--large'
                        buttonLink='/Resume-Ahmed-Khaled.pdf'
                    >
                        Download Resume
                </Button>
                </div>
                {/* <div className="hero-btns">
                    <Button className='btns'
                    buttonStyle="btn--primary"
                    buttonSize='btn--large'
                    buttonLink='/Resume-Ahmed-Khaled.pdf'
                >
                    WATCH TRAILER <i className="far fa-play-circle" />
                </Button>
                </div> */}
            </div>
        </>
    )
}

export default HeroSection
