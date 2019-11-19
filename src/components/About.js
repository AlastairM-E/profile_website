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
        height : '290px',
        width: '90%',
        margin : '10px 0px'
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
        marginTop : '15%',
        textAlign : 'center',
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
        [['Material UI, ', 'Python, ', 'PHP, ', 'MYSQL, ', 'Webpack, ', 'Babel, ', 'React Router.']],
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
                            <ListItemText> Technologies I have used (to an extent) :</ListItemText>
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
                title : 'Me as a person',
                subheader : 'Who I actually am',
                content : <Typography className={classes.personSection}> 
                    Hello, I am Alastair Mottram Epson. I am web developer, keen runner and baker. 
                    I am looking for ambitious project and people to collbrate with, who truly want
                    to make a positive difference in this world.
                    
                </Typography>
                
            }
        },
        {
            icon : <WorkIcon />,
            section : {
                title : 'Work',
                subheader : 'Here my CV if your interested',
                content : <div className={classes.workSection}>
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
                            <Grid xs={12} sm={4} item ={4}>
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
                    <div id='About'></div>
            </Grid>
    ); 
};