/*IMPORTS*/
import React, { Suspense } from 'react'; 

import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { Navbar, Slider, About, Contact, Footer, } from './components';

import { makeStyles, } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

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

    /* LAZY LOAD COMPONENTS */
    const LazyPortfolio = React.lazy(() => import('./components/Portfolio'));
    const LazyBoard = React.lazy(() => import('./components/Board'));

    /* RENDER */
    return (
        <Router>
            <div className="app">
                <Navbar />
                
                    <Switch>
                        <Route exact path="/" component={Slider} />
                        <Route path="/Portfolio"> 
                            <div className={classes.centerPiece}>
                            <Suspense fallback={<Typography>Loading, Loading, Loading...</Typography>}>
                                    <LazyPortfolio />
                                </Suspense>
                            </div>
                        </Route>
                        <Route path="/CasinoJS"> 
                            <div className={classes.centerPiece}>
                            <Suspense fallback={<Typography>Loading, Loading, Loading...</Typography>}>
                                    <LazyBoard />
                                </Suspense>
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