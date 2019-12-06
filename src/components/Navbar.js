/* IMPORTS */
import React from 'react';

import { NavLink, } from 'react-router-dom';

import { AppBar, Toolbar, Typography, } from '@material-ui/core';
import { makeStyles, } from '@material-ui/core/styles';
import { lightBlue, } from '@material-ui/core/colors';

/* STYLES */
const useStyles = makeStyles(theme => ({
    AppBar : {
        background : lightBlue[400],
    },
    Title: {
        flexGrow: 1,
    },
    navLink : {
        color : 'white',
        textDecoration: 'none',
        margin : '0px 10px',
        '&:hover' : {
            textDecoration: 'underline',
        }
    },
}));

/* COMPONENT */
export default function Navbar() {
    
    /* HOOKS */
    const classes = useStyles();

    /* RENDER */
    return (
        <AppBar className={classes.AppBar} position='static'>
            <Toolbar>
                <Typography  varient='h6' className={classes.Title}>Alastair M-E</Typography>
                <Typography  varient='h6'><NavLink to='/' className={classes.navLink}>Home</NavLink></Typography>
                <Typography  varient='h6'><NavLink to='/CasinoJS' className={classes.navLink}>BlackJack Game</NavLink></Typography>
                <Typography  varient='h6'><NavLink to='/Portfolio' className={classes.navLink}>Portfolio</NavLink></Typography> 
                <Typography  varient='h6' onClick={() => window.scrollTo(1000, 355)} className={classes.navLink}>About</Typography>
                <Typography  varient='h6'onClick={() => window.scrollTo(1000, 600)}className={classes.navLink}>Contact</Typography>
            </Toolbar>
        </AppBar>
    );
};