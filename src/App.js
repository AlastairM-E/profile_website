/*IMPORTS*/
import React from 'react'; 

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


import { Navbar, Slider, About, Contact, Footer,} from './components';


/*COMPONENT*/
export default function App() {

    return (
        <Router>
            <div className="app">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Slider} />

                    <Route path="/About" component={About} />

                    <Route path="/Contact" component={Contact} />
                       
                </Switch>

                
                <Footer/>
            </div>
        </Router>
    ); 

};