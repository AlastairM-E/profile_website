/*IMPORTS*/
import React from 'react'; 
import { 
    Grid,
    Typography,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,  
} from '@material-ui/core';

import { makeStyles, } from '@material-ui/core/styles';
import { lightBlue, } from '@material-ui/core/colors';

import CodeIcon from '@material-ui/icons/Code';
import GitHubIcon from '@material-ui/icons/GitHub';

/* STYLES */
const useStyles = makeStyles(theme => ({
    projectList : {
        margin : '10px',
    },
    projectIcon : {
        background : lightBlue['A200'],
    },   
}));

/*COMPONENT*/
export default function Portfolio() {

    const projects = [
        { icon : <CodeIcon />, 
            title : 'BlackJack Simulator', 
            techUsed : 'Tech used : HTML, CSS, SASS, JavaScript, React, Git.' 
        },
        { 
            icon : <GitHubIcon />, 
            title : 'PHP chat application', 
            techUsed : 'Tech used : HTML, CSS, JavaScript, PHP, MYSQL, Git.'
        },
        { 
            icon : <GitHubIcon />, 
            title : 'Python CLI planning tool (called Mirage Dragon)', 
            techUsed : 'Tech used : Python, Git.'
        },
        { 
            icon : <GitHubIcon />, 
            title : 'Profile webiste (aka, this site)', 
            techUsed : 'Tech used : HTML, CSS, Material-UI, JavaScript, React, Git.'
        },
    ];

    return (
        <Grid container xs={12}>
            <Typography>Portfolio</Typography>
                <Grid item xs={12} sm={4}>
                    <List>
                        {projects.map(({ icon, title, techUsed, }) => {
                            return (
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>{icon}</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={title} secondary={techUsed} />
                                </ListItem>
                            );
                        })}
                    </List>
 
                </Grid>
            </Grid>
    ); 

};