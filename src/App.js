/*IMPORTS*/
import React from 'react'; 

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { Navbar, Slider, About, Contact, Footer,} from './components';

import { makeStyles, } from '@material-ui/core/styles';

/* STYLES */
const useStyles = makeStyles(theme => ({
    centerPiece : {
        flexGrow : 1,
       margin : '13px 0px',
       width: '100%',
       height : '50vh',
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
                        <Route path="/About"> 
                            <div className={classes.centerPiece}>
                                <About />
                            </div>
                        </Route>
                        <Route path="/Contact"> 
                            <div className={classes.centerPiece}>
                                <Contact />
                            </div>
                        </Route>
                    </Switch>
                <Footer/>
            </div>
        </Router>
    ); 

};