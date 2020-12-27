import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {

    return (
        <div className="cards">
            <h1>Check out these Amazing Web Apps!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src='images/TRVL.png'
                            text='TRVL Vacations offers website'
                            label='React'
                            path='https://react-trvl.netlify.app/'
                        />
                        <CardItem
                            src='images/Keeper-App.png'
                            text='Note Keeper Clone'
                            label='React'
                            path='https://react-notes-keeper.netlify.app/'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src='images/Chat-App.png'
                            text='public chat app new messages pop up from top of the chat'
                            label='React/Firebase/Material-UI'
                            path='https://facebook-messenger-clone-s.web.app/'
                        />
                        <CardItem
                            src='images/Simon.png'
                            text='Simon is a game made with Html/CSS/jQuery'
                            label='html/css/jQuery'
                            path='https://js-simon-game.netlify.app/'
                        />
                        <CardItem
                            src='images/Manipulating-the-DOM.png'
                            text='I did make all functionality in this landing page for a Udacity Project'
                            label='Javascript'
                            path='https://js-landing-page2.netlify.app/'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;