/* IMPORTS */
import React from 'react';

import { AppBar, Toolbar, Typography, Divider, } from '@material-ui/core';
import { makeStyles, } from '@material-ui/core/styles';
import { lightBlue, } from '@material-ui/core/colors';

/* STYLES */
const useStyles = makeStyles(theme => ({
    AppBar : {
        flexGrow: 1,
        background : lightBlue[400],
    },
    Title: {
        flexGrow: 1,
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
                <Typography  varient='h6' className={classes.Title}>Store Project</Typography>
            </Toolbar>
        </AppBar>
    );
};