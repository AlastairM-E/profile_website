/*IMPORTS*/
import React from 'react'; 
import { Typography, Button, Divider, } from '@material-ui/core';

import { makeStyles, } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';

/* STYLES */
const useStyles = makeStyles(theme => ({ 
    contact : {
        margin : '1% 43%',
        padding : '10px',
        border : '1px solid black',
        borderColor : lightBlue['A200'],
        textAlign : 'center',
    },
    textBox : {
        margin : '10px',
    },
    emailButton : {
        margin : '10px',
    }
}));

/*COMPONENT*/
export default function Contact() {
    const classes = useStyles();

    return (
        <div className={classes.contact}>
            <Typography className={classes.textBox}>Want to get in touch? - haven't got the CV to download yet</Typography>
            <Divider />
            <Button className={classes.emailButton} variant="contained" color="primary" href='mailto:alastair.me.work@gmail.com'>Email Me</Button>
            <div id="Contact"></div>
        </div>
    ); 

};