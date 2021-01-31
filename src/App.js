import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";
import AboutMe from "./components/pages/AboutMe";
import ContactMe from "./components/pages/ContactMe";
import Footer from "./components/Footer/Footer";
import { CSSPlugin } from 'gsap/CSSPlugin';
import NotFound from "./components/pages/NotFound";
import ClipLoader from "react-spinners/ClipLoader";

const C = CSSPlugin; // eslint-disable-line

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // setLoading(false)
        setTimeout(() => {
            setLoading(false)
        }, 1000)

    }, [])
    return (
        <div className="App">
            {
                loading

                    ?
                    <div className="loader">
                        <ClipLoader
                            color="#9F1555"
                            loading={"loading"}
                            size="15vw"
                        />
                    </div>

                    :

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
            }
        </div>
    );
}

export default App;