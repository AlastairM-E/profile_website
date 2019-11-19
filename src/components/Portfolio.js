/*IMPORTS*/
import React, { Fragment } from 'react'; 
import { 
    Grid,
    Typography,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Link,
} from '@material-ui/core';

import { makeStyles, } from '@material-ui/core/styles';
import { lightBlue, } from '@material-ui/core/colors';

import CodeIcon from '@material-ui/icons/Code';
import GitHubIcon from '@material-ui/icons/GitHub';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

/* STYLES */
const useStyles = makeStyles(theme => ({
    projectList : {
        margin : '10px',
        width : '98%',
    },
    accordian : {
      padding : '0px',
    },
    panelSummary : {
        margin : '0px',
        paddingLeft : '100px',
    },
    projectIcon : {
        background : lightBlue['A200'],
        color : 'black',
        '&:hover' : {
            
            color : 'white',
        }
    },   
}));

/*COMPONENT*/
export default function Portfolio() {
    /* HOOKS */
    const classes = useStyles();

    const projects = [
        { 
            icon : <CodeIcon href='/CasinoJS'/>, 
            title : 'BlackJack Simulator', 
            techUsed : 'Tech used : HTML, CSS, SASS, JavaScript, React, Git ',
            linkToProject : <Link href='/CasinoJS'>Demo here</Link>,
            madeIn : 'September 2019 to current',
            description : `The user can play against (very basic) AI to play a dumbed down version of blackjack.`,
        },
        { 
            icon : <GitHubIcon href='https://github.com/AlastairM-E/profile_website/tree/PWv0.3' />, 
            title : 'Profile webiste (aka, this site)', 
            techUsed : 'Tech used : HTML, CSS, Material-UI, JavaScript, React, React-router-dom, Git ',
            linkToProject : <Link href='https://github.com/AlastairM-E/profile_website/tree/PWv0.3'>Vist GitHub page here</Link>,
            madeIn : 'July 2019 to current',
            description : 
                `A website that is able to show offer various project I 
                have developed for fun and show potential employers what 
                I do and whom I am.`
            ,
        },
        { 
            icon : <GitHubIcon href='https://github.com/AlastairM-E/Mirage_Dragon/tree/MDv0.5'/>, 
            title : 'Python CLI planning tool (called Mirage Dragon)', 
            techUsed : 'Tech used : Python, Git ',
            linkToProject : <Link href='https://github.com/AlastairM-E/Mirage_Dragon/tree/MDv0.5'>Vist GitHub here</Link>,
            madeIn : 'March 2019',
            description : 
                `Enables a user, using a terminal by executing the file in python, 
                to be prompt a series of questions by a CLI, whcich will lead to 
                the creation of a planning document (txt file)`
            ,
        },
        { 
            icon : <GitHubIcon href='https://github.com/AlastairM-E/chat-application-basic-/tree/PHPv0.1' />, 
            title : 'PHP chat application', 
            techUsed : 'Tech used : HTML, CSS, JavaScript, PHP, MYSQL, Git ',
            linkToProject : <Link href='https://github.com/AlastairM-E/chat-application-basic-/tree/PHPv0.1'>Vist GitHub page here</Link>,
            madeIn : 'June 2018 to October 2018',
            description : 
                `Enables a user to create an account, 
                sign in with said account to a posting page and then 
                post comments which others user of the website can 
                see (not from the same computer)`
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

                                <ExpansionPanel className={classes.accordian}>
                                    <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon className={classes.expandButton} />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        className={classes.panelSummary}
                                    >
                                    
                                        <ListItem >
                                            <ListItemAvatar>
                                                <Avatar className={classes.projectIcon}>{icon}</Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={title} 
                                            secondary={
                                                <Fragment>
                                                    {techUsed}| Made in : {madeIn}
                                                    <br />
                                                    {linkToProject}
                                                </Fragment>
                                            }  />
                                        </ListItem> 
                                    </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            {description}
                                        </ExpansionPanelDetails>
                                </ExpansionPanel>
                                
                            );
                        })}
                    </List>
 
                </Grid>
            </Grid>
    ); 

};