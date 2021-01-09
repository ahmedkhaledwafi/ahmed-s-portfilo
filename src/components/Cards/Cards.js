import React, { useRef, useEffect } from 'react';
import CardItem from './CardItem/CardItem';
import './Cards.css';
import { gsap, Power3, } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Cards() {

    const cardsHeader = useRef(null);

    const list1 = useRef(null);
    const list2 = useRef(null);
    const list3 = useRef(null);

    useEffect(() => {

        gsap.from(cardsHeader.current, {
            scrollTrigger: cardsHeader.current,
            opacity: 0,
            duration: 2,
            y: 80,
            ease: Power3,
        })

        gsap.from(list1.current, {
            scrollTrigger: list1.current,
            opacity: 0,
            duration: 2,
            x: -60,
            ease: Power3,
        })

        gsap.from(list2.current, {
            scrollTrigger: list2.current,
            opacity: 0,
            duration: 2,
            x: 60,
            ease: Power3,
        })

        gsap.from(list3.current, {
            scrollTrigger: list3.current,
            opacity: 0,
            duration: 2,
            x: -60,
            ease: Power3,
        })

    }, [])

    return (
        <div className="cards">
            <h1 ref={cardsHeader}>Check out these Amazing Web Apps!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul ref={list1} className="cards__items">
                        <CardItem
                            src='images/E-Commerce.png'
                            text='E-Commerce website powerd by Commerce.js'
                            label='React/Material-ui'
                            path='https://ak-e-commerce.netlify.app/'
                        />
                        <CardItem
                            src='images/Front-End-Dev.png'
                            text='Example for Portfilo'
                            label='Html/CSS/JS/GSAP'
                            path='https://ahmed-elbedfy.netlify.app/'
                        />
                    </ul>
                    <ul ref={list2} className="cards__items">
                        <CardItem
                            src='images/TRVL.png'
                            text='TRVL Vacations offers website'
                            label='React'
                            path='https://react-trvl.netlify.app/'
                        />
                        <CardItem
                            src='images/Chat-App.png'
                            text='public chat app new messages pop up from top of the chat'
                            label='React/Firebase/Material-UI'
                            path='https://facebook-messenger-clone-s.web.app/'
                        />
                    </ul>

                    <ul ref={list3} className="cards__items">
                        <CardItem
                            src='images/Keeper-App.png'
                            text='Note Keeper Clone'
                            label='React'
                            path='https://react-notes-keeper.netlify.app/'
                        />
                        <CardItem
                            src='images/Manipulating-the-DOM.png'
                            text='I did make all functionality in this landing page for a Udacity Project'
                            label='Javascript'
                            path='https://js-landing-page2.netlify.app/'
                        />
                        <CardItem
                            src='images/Simon.png'
                            text='Simon is a game made with Html/CSS/jQuery'
                            label='html/css/jQuery'
                            path='https://js-simon-game.netlify.app/'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;