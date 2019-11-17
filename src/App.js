/*IMPORTS*/
import React from 'react'; 

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { Navbar, Slider, About, Contact, Footer, Portfolio, } from './components';

import { makeStyles, } from '@material-ui/core/styles';

/* STYLES */
const useStyles = makeStyles(theme => ({
    centerPiece : {
        flexGrow : 1,
       margin : '13px 0px',
       width: '100%',
    }, 
}));


/*COMPONENT*/
export default function App() {
    /* HOOKS */
    const classes = useStyles();

    return (
        <Router>
            <div className="app">
                <Navbar />
                
                    <Switch>
                        <Route exact path="/" component={Slider} />
                        <Route path="/Portfolio"> 
                            <div className={classes.centerPiece}>
                                <Portfolio />
                            </div>
                        </Route>
                    </Switch>
                    <About />
                    <Contact />
                <Footer/>
            </div>
        </Router>
    ); 

};