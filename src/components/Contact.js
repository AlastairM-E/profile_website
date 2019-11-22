/*IMPORTS*/
import React from 'react'; 
import { Typography, Button, Divider, Grid, } from '@material-ui/core';

import { makeStyles, } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';

/* STYLES */
const useStyles = makeStyles(theme => ({ 
    contact : {
        margin : '1% 0%',
        padding : '10px',
        border : '1px solid black',
        borderColor : lightBlue['A200'],
        textAlign : 'center',
    },
    container : {
        display : 'flex',
        justifyContent : 'center',
        width: '100%',
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
        <Grid container>
            <div className={classes.container}>
                <Grid className={classes.contact} item xs={12} md={8} lg={4}  xl={2}>
                    <Typography className={classes.textBox}>Want to get in touch?</Typography>
                    <Divider />
                    <Button className={classes.emailButton} variant="contained" color="primary" href='mailto:alastair.me.work@gmail.com'>Email Me</Button>
                    <div id="Contact"></div>
                </Grid>
            </div>
        </Grid>
    ); 

};