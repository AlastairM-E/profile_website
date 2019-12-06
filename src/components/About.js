/*IMPORTS*/
import React from 'react'; 

import { 
    Grid, 
    Card, 
    CardHeader, 
    Avatar, 
    CardContent, 
    Typography, 
    List,
    ListItem,
    ListItemText,
    Divider, 
    Button,
} from '@material-ui/core';

import pdf from './../CV--19.11.18--v0.4.pdf';

import { makeStyles, } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';

import CodeIcon from '@material-ui/icons/Code';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';

/* STYLES */

const useStyles = makeStyles(theme => ({
    root : {
        width : '100%',
        display : 'flex',
        justifyContent : 'space-evenly',
        background : lightBlue['A200'],
        paddingLeft : '30px',
    },
    title : {
        fontSize : '3em',
        color : 'white',
        margin : '10px',
    },
    card : {
        heihgt : '290px',
        width: '90%',
        margin : '10px 0px',

        [theme.breakpoints.between('md', 'lg')]: {
            height : '290px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            height : '350px',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            height : '290px',
            marginLeft : '2.5%'
        },
    },
    cardIcon : {
        background : lightBlue['A200'],
        
    },
    list : {
        paddingTop : '0px',
        paddingBottom : '0px',
    },
    techList : {
        fontSize : '0.5em',
        padding: '0px',
    },
    techListText : {
        fontSize : '0.3em',
    },
    personSection : {
        marginTop : '10%',
    },
    workSection : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        textAlign : 'center',
        width : '100%',
        height : '70%',
    },
    cardContentNested : {
        paddingLeft: theme.spacing(4),
    },
    cardHeader : {
        paddingBottom : '0px',
    },
}));

/*COMPONENT*/
export default function About() {

    /* HOOKS */
    const classes = useStyles();
    const [techKnow, techExperienced] = [
        [['HTML, ', 'CSS, ', 'SASS, ', 'JavaScript, ', 'React, ', 'Git.']],
        [['Material UI, ', 'Python, ', 'PHP, ', 'MYSQL, ', 'Webpack, ', 'Babel.']],
    ];
    const sections = [
        {
            icon : <CodeIcon />,
            section : {
                title : 'Code',
                subheader : 'Quick summary of my skill set',
                content : 
                    <List className={classes.list}>
                        <Divider />
                        <ListItem>
                            <ListItemText> I develop with :</ListItemText>
                        </ListItem>
                        <Divider />
                            <List className={classes.cardContentNested}>
                                {techKnow.map(tech => {
                                    return (
                                        <ListItem className={classes.techList}>
                                            <ListItemText className={classes.techListText}> - {tech}</ListItemText>
                                        </ListItem>
                                    );
                                })}
                                
                            </List>
                        <Divider />
                        <ListItem>
                            <ListItemText> Technologies I have used :</ListItemText>
                        </ListItem>
                        <Divider />
                        <List className={classes.cardContentNested}>
                            {techExperienced.map(tech => {
                                return (
                                    <ListItem className={classes.techList}>
                                        <ListItemText className={classes.techListText}> - {tech}</ListItemText>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </List>,
            }
        },
        {
            icon : <PersonIcon />,
            section : {
                title : 'A bit about me...',
                subheader : '',
                content : <Typography className={classes.personSection}> 
                    Hello, I am Alastair Mottram-Epson. I am web developer, keen runner and baker. 
                    I want to work on challenging and interesting projects.
                </Typography>
                
            }
        },
        {
            icon : <WorkIcon />,
            section : {
                title : 'Work',
                subheader : '',
                content : 
                <div className={classes.workSection}>
                    <Button  variant="contained" color="primary" href={pdf}>
                        Download my CV
                    </Button>
                </div>
                
            }
        },
    ];

    /* RENDER */
    return (
       
            <Grid className={classes.root} container xs={12}>
                <Grid item xs={12}>
                    <Typography className={classes.title}>About</Typography>
                </Grid>
                    {sections.map(({ icon, section : { title, subheader, content, }, }) => {
                        return (
                            <Grid xs={12} sm={12} md={4}>
                                <Card className={classes.card}>
                                    <CardHeader
                                        title={title}
                                        subheader={subheader}
                                        avatar={<Avatar className={classes.cardIcon}>{icon}</Avatar>}
                                        className={classes.cardHeader}
                                    />
                                    <CardContent>{content}</CardContent>
                                </Card>
                            </Grid> 
                        );
                    })}
            </Grid>
    ); 
};