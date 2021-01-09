import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";
import AboutMe from "./components/pages/AboutMe";
import ContactMe from "./components/pages/ContactMe";
import Footer from "./components/Footer/Footer";
import { CSSPlugin } from 'gsap/CSSPlugin';
import NotFound from "./components/pages/NotFound";

const C = CSSPlugin; // eslint-disable-line

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path='/about-me' component={AboutMe} />
                    <Route exact path='/contact-me' component={ContactMe} />
                    <Route path='/*' component={NotFound} />
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;