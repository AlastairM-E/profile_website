
import React, { useState, useEffect, useRef, Fragment,  } from 'react';

import { Paper, Typography, Grid, Fab, Link, } from '@material-ui/core';
import { grey, lightBlue, } from '@material-ui/core/colors';
import { makeStyles, } from '@material-ui/core/styles';

/* COMPONENT */
export default function SlideShow() {

    /* STYLES */
    const useStyles = makeStyles(theme => ({
        Fab : {
            margin : '3.5% 1% 1% 1%',
            background : grey[300],
            height : '23px',
            width : '34px',
            '&:hover' : {
                background:lightBlue[500],
            },
        },
        FabActive : {
            background:lightBlue[500],
        },
        buttonArray : {
            marginLeft : '17.5%',
        },
        Grid : {
            flexGrow : 1,
            margin: '10px',
        },
        Slide : {
            height : '50vh',
        },
        SlideTitle : {
            fontSize: 36,
            margin: '5px',
            padding: '5px',
            borderBottom :'2.5px solid black',
        },
        SlideContent : {
            fontSize: 24,
            margin: '5%'
        },
        
    }));

    /* HOOKS */

    const slides = [
        { title : 'About me', content : <Typography>
            I am an up and coming web developer, specialising in HTML, CSS, SASS, JS and React
        </Typography>, },
        { title : 'What I strive for', content : <Typography>
            I aim to produce great user interfaces that help websites reach their full potential.
            </Typography>,},
        { 
            title : 'Portfolio Projects', content : <Typography>
                Here are some of my projects.
                <br />
                <Link href={'http://localhost:8080/'}>learn more</Link>
            </Typography>, 
            href : 'Portfolio',
        },
    ];

    // useContext & useState
    const [slideState, setSlideState] = useState(0);
    const [resetTime  , setResetTime] = useState(0);
    const [shouldReset, setShouldReset ] = useState(false);
    const classes = useStyles();

    const slideShowPace = 3000;

    // useInterval
    function useInterval(callback, delay) {
            const savedCallback = useRef();
        
            useEffect(() => {
                savedCallback.current = callback;
            });
        
            useEffect(() => {
                function tick() {
                    savedCallback.current() 
                };
        
                let id = setInterval(tick, delay);
                
                return () => clearInterval(id);
            }, [delay]);
    };

    useInterval(() => {
            if (!shouldReset) {
                slideState < slides.length -1 ? setSlideState(1 + slideState % slides.length) : setSlideState(0);
            }  else {
                setShouldReset(false);
                setResetTime(0);
            };
    }, !shouldReset ? slideShowPace : resetTime);

    /* onClickSlideButton EVENTLISTENER */
    const onClickSlideButton = (slideIndex) => {
        setSlideState(slideIndex);
        setResetTime(new Date().getMilliseconds());
        setShouldReset(true);
    };

    /* Slide COMPONENT */
    const Slide = () => {  
        if (Array.isArray(slides)) {
            const { title, content } = slides[slideState];

            return ( 
                <Grid xs={11} sm={10}>
                    <Paper className={classes.Slide}>
                        <Typography variant='h3' className={classes.SlideTitle}>
                            {`${title}`}
                        </Typography>
                        <br />
                        <Typography className={classes.SlideContent}>
                            {content}
                        </Typography>
                    </Paper>
                </Grid>
            );
        } else {
            return null;
        };
    };

    /* SlideButtons COMPOMENT */
   const SlideButtons = () => {
        if (Array.isArray(slides)) {
             let ButtonsArray = [];
             for (let index = 0; index < slides.length; index++) {

                let id = Math.random();
                ButtonsArray.push(
                    <Fab 
                        key={id}
                        className={[index === slideState ? classes.FabActive : '', classes.Fab]} 
                        onClick={() => onClickSlideButton(index)}
                    >
                    </Fab>
                );  
             };
             return <Grid className={classes.buttonArray} xs={8} sm={7} md={4} lg={3}>{ButtonsArray}</Grid>;
            
        } else {
            return null;
        };
    };

    /* RENDER */
    return (
        <Fragment>
            <br />
            <Grid container className={classes.Grid} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={2}>
                        <Slide />
                        <SlideButtons />
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    );
};