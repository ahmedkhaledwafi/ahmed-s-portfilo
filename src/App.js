import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import AboutMe from "./components/pages/AboutMe";
import ContactMe from "./components/pages/ContactMe";
import Footer from "./components/Footer"

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path='/about-me' component={AboutMe} />
                    <Route path='/contact-me' component={ContactMe} />
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;