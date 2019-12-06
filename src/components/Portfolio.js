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
    projectList : {
        margin : '10px',
        width : '98%',
    },
    projectIcon : {
        background : lightBlue['A200'],
        color : 'black',
        marginRight : '10px',
    },   
}));

/*COMPONENT*/
export default function Portfolio() {
    /* HOOKS */
    const classes = useStyles();

    const projects = [
        { 
            icon : <CodeIcon />, 
            title : 'BlackJack Game', 
            techUsed : 'Tech used : HTML, CSS, SASS, JavaScript, React, Git ',
            linkToProject : 
                <Fragment>
                    <NavLink to='/CasinoJS'>Demo here</NavLink> | <Link href='https://github.com/AlastairM-E/profile_website/tree/PWv1.1'>Visit Github page here</Link>
                </Fragment>,
            madeIn : 'September 2019 to current',
            description : `A webpage in which a user can play blackjack against an AI.`,
        },
        { 
            icon : <GitHubIcon />, 
            title : 'Profile webiste (aka, this site)', 
            techUsed : 'Tech used : HTML, CSS, Material-UI, JavaScript, React, React-router-dom, Git ',
            linkToProject : <Link href='https://github.com/AlastairM-E/profile_website/tree/PWv1.1'>Vist GitHub page here</Link>,
            madeIn : 'July 2019 to current',
            description : 
                `A website that is able to show off various projects I 
                have developed for fun and show potential employers
                who I am and what I can do.`
            ,
        },
        { 
            icon : <GitHubIcon />, 
            title : 'Python CLI planning tool (called Mirage Dragon)', 
            techUsed : 'Tech used : Python, Git ',
            linkToProject : <Link href='https://github.com/AlastairM-E/Mirage_Dragon/tree/MDv0.5'>Vist GitHub page here</Link>,
            madeIn : 'March 2019',
            description : 
                `Enables a user, executing the file in python by a terminal, 
                to be prompt a series of questions by a CLI, which will lead to 
                the creation of a planning document (txt file).`
            ,
        },
        { 
            icon : <GitHubIcon />,
            title : 'PHP chat application', 
            techUsed : 'Tech used : HTML, CSS, JavaScript, PHP, MYSQL, Git ',
            linkToProject : <Link href='https://github.com/AlastairM-E/chat-application-basic-/tree/PHPv0.1'>Vist GitHub page here</Link>,
            madeIn : 'June 2018 to January 2019',
            description : 
                `Enables a user to create an account, 
                sign in with said account to a 'chat room' and then 
                post comments which others users of the website can 
                see (not from the same computer).`
            ,
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
                                        title={<Typography gutterBottom variant="h6" component="h5">{title}</Typography>}
                                        subheader={<Fragment>
                                            {linkToProject} 
                                            <br/> 
                                            {techUsed} | Made in {madeIn}
                                        </Fragment>}
                                        avatar={<Avatar className={classes.projectIcon}>{icon}</Avatar>}
                                        className={classes.cardHeader}
                                    />
                                        <CardContent>
                                            <Typography>{description}</Typography>
                                        </CardContent>
                                </Card>
                                
                            );
                        })}
                    </List>
 
                </Grid>
            </Grid>
    ); 

};