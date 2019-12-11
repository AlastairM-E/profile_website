/*IMPORTS*/
import React, { Fragment } from 'react'; 
import { 
    Grid,
    Typography,
    List,
    Avatar,
    Card,
    CardContent,
    CardHeader,
    Link,
} from '@material-ui/core';

import { NavLink, } from 'react-router-dom';

import { makeStyles, } from '@material-ui/core/styles';
import { lightBlue, } from '@material-ui/core/colors';

import CodeIcon from '@material-ui/icons/Code';
import GitHubIcon from '@material-ui/icons/GitHub';

/* STYLES */
const useStyles = makeStyles(theme => ({
    projectCard : {
        margin : '5px',
    },
    cardHeader : {
        paddingBottom : '0px',
    },
    projectLink : {
        textDecoration : 'none',
    },
    projectList : {
        margin : '10px',
        width : '98%',
    },
    projectIcon : {
        background : lightBlue['A200'],
        color : 'black',
        marginRight : '10px',
    },   
    projectDescription : {
        marginLeft : '67.5px',
    },
}));

/*COMPONENT*/
export default function Portfolio() {
    /* HOOKS */
    const classes = useStyles();

    const projects = [
        { 
            icon : <CodeIcon />, 
            title : <NavLink to='/CasinoJS' className={classes.projectLink}>Blackjack Game</NavLink>, 
            techUsed : 'Tech used : JavaScript, React, HTML, CSS, SASS, Git',
            linkToProject : 
                <Fragment>
                     <Link href='https://github.com/AlastairM-E/profile_website/tree/PWv1.3'>View code on Github</Link>
                </Fragment>,
            madeIn : 'September 2019 - ',
            description : <NavLink to='/CasinoJS' className={classes.projectLink}>Demo here</NavLink>,
        },
        { 
            icon : <GitHubIcon />,
            title : 'PHP Chat Application', 
            techUsed : 'Tech used : PHP, JavaScript, MYSQL, CSS, HTML, Git ',
            linkToProject : <Link href='https://github.com/AlastairM-E/chat-application-basic-/tree/PHPv0.1'>View code on Github</Link>,
            madeIn : 'June 2018 - January 2019',
            description : 
                `Enables a user to create an account, 
                login and then post comments which others 
                website users can view and respond to.`
            ,
        },
        { 
            icon : <GitHubIcon />, 
            title : 'Python Command Line Interface Planning Tool', 
            techUsed : 'Tech used : Python, Git ',
            linkToProject : <Link href='https://github.com/AlastairM-E/Mirage_Dragon/tree/MDv0.5'>View code on Github</Link>,
            madeIn : 'March 2019',
            description : 
                `CLI program executed in Python that gathers input from a user to create a planning document (txt file).`
            ,
        },
        { 
            icon : <GitHubIcon />, 
            title : 'Alastair Mottram-Epson Website', 
            techUsed : 'Tech used : HTML, CSS, Material-UI, JavaScript, React, React-router-dom, Git ',
            linkToProject : <Link href='https://github.com/AlastairM-E/profile_website/tree/PWv1.3'>View code on Github</Link>,
            madeIn : 'July 2019 - ',
            description : ``,
        },
    ];

    return (
        <Grid container xs={12} className={classes.projectList}>
            <Typography>Portfolio</Typography>
                <Grid item xs={12} sm={12}>
                    <List>
                        {projects.map(({ icon, title, techUsed, description, linkToProject, madeIn }) => {
                            return (
                                      
                                <Card className={classes.projectCard}>
                                    <CardHeader
                                        title={<Typography gutterBottom variant="h6" component="h5">{title} ({madeIn})</Typography>}
                                        subheader={<Fragment> {techUsed} | {linkToProject} </Fragment>}
                                        avatar={<Avatar className={classes.projectIcon}>{icon}</Avatar>}
                                        className={classes.cardHeader}
                                    />
                                        <CardContent>
                                            <Typography className={classes.projectDescription}>{description}</Typography>
                                        </CardContent>
                                </Card>
                                
                            );
                        })}
                    </List>
 
                </Grid>
            </Grid>
    ); 

};