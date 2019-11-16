/* IMPORTS */
import React from 'react';

import { NavLink, } from 'react-router-dom';

import { AppBar, Toolbar, Typography, Link, } from '@material-ui/core';
import { makeStyles, } from '@material-ui/core/styles';
import { lightBlue, grey, } from '@material-ui/core/colors';

/* STYLES */
const useStyles = makeStyles(theme => ({
    AppBar : {
        background : lightBlue[400],
    },
    Title: {
        flexGrow: 1,
    },
    navLink : {
        color : grey[50],
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
                    <NavLink to='/About' className={classes.navLink}>About</NavLink>
                    <NavLink to='/Contact' className={classes.navLink}>Contact</NavLink>
                    <Link href='https://medium.com/@alastairunityemail' className={classes.navLink}>Blog</Link>
                    <NavLink to='/Portfolio' className={classes.navLink}>Portfolio</NavLink>        
            </Toolbar>
        </AppBar>
    );
};