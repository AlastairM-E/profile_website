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
    ExpansionPanel,
    ExpansionPanelSummary,
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
        padding : '0px',
    },
    expandButton : {
        marginLeft : '50px',
    },
    projectIcon : {
        background : lightBlue['A200'],
    },   
}));

/*COMPONENT*/
export default function Portfolio() {
    /* HOOKS */
    const classes = useStyles();

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
        <Grid container xs={12} className={classes.projectList}>
            <Typography>Portfolio</Typography>
                <Grid item xs={12} sm={12}>
                    <List>
                        {projects.map(({ icon, title, techUsed, }) => {
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
                                            <ListItemText primary={title} secondary={techUsed}  />
                                        </ListItem> 
                                    </ExpansionPanelSummary>
                                </ExpansionPanel>
                                
                            );
                        })}
                    </List>
 
                </Grid>
            </Grid>
    ); 

};