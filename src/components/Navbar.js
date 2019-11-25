/* IMPORTS */
import React from 'react';

import { NavLink, } from 'react-router-dom';

import { AppBar, Toolbar, Typography, Link, } from '@material-ui/core';
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
                    <NavLink to='/' className={classes.navLink}>Home</NavLink>
                    <NavLink to='/Portfolio' className={classes.navLink}>Portfolio</NavLink> 
                    <Link href='#About' className={classes.navLink}>About</Link>
                    <Link href='#Contact' className={classes.navLink}>Contact</Link>
            </Toolbar>
        </AppBar>
    );
};