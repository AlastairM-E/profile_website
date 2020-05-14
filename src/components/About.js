/*IMPORTS*/
import React, { Fragment } from 'react';

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

import pdf from './../AlastairMottram-Epson--CV.pdf';

import { makeStyles, } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

import CodeIcon from '@material-ui/icons/Code';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';

/* STYLES */

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        background: blue[600],
        paddingLeft: '30px',
    },
    title: {
        fontSize: 42,
        color: 'white',
        margin: '10px',
    },
    card: {
        heihgt: '290px',
        width: '90%',
        margin: '10px 0px',

        [theme.breakpoints.between('md', 'lg')]: {
            height: '290px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            height: '350px',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            height: '290px',
            marginLeft: '2.5%'
        },
    },
    cardTitle: {
        fontSize: 20,
    },
    cardIcon: {
        background: blue[600],

    },
    list: {
        paddingTop: '0px',
        paddingBottom: '0px',
    },
    techList: {
        fontSize: '0.5em',
        padding: '0px',
    },
    techListText: {
        fontSize: '0.3em',
    },
    personSection: {
        marginTop: '5%',
    },
    workSection: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
        height: '70%',
    },
    cardContentNested: {
        paddingLeft: theme.spacing(4),
    },
    cardHeader: {
        paddingBottom: '0px',
    },
}));

/*COMPONENT*/
export default function About() {

    /* HOOKS */
    const classes = useStyles();
    const [techKnow, techExperienced] = [
        [['HTML, ', 'CSS, ', 'SASS, ', 'JavaScript, ', 'React, ', 'Git.']],
        [['Material UI, ', 'Python, ', 'PHP, ', 'MYSQL, ', 'Webpack, ', 'Babel, ', 'Jest.']],
    ];
    const sections = [
        {
            icon: <CodeIcon />,
            section: {
                title: 'Skill Set',
                subheader: '',
                content:
                    <Fragment>
                        <Divider />
                        <List className={classes.list}>
                            <ListItem>
                                <ListItemText> I develop with :</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText className={classes.techListText}> - {techKnow}</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText> Technologies I have used :</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText className={classes.techListText}> - {techExperienced}</ListItemText>
                            </ListItem>
                        </List>,
                    </Fragment>
            },
        },
        {
            icon: <PersonIcon />,
            section: {
                title: 'A bit about me...',
                subheader: '',
                content: <Typography className={classes.personSection}>
                    I am building my skills as a web developer and studying for my A levels in 2020.
                    <br />
                    <br />
                    I am also a keen runner, county level chess player and like to bake bread.
                </Typography>

            }
        },
        {
            icon: <WorkIcon />,
            section: {
                title: 'CV',
                subheader: '',
                content:
                    <div className={classes.workSection}>
                        <Button variant="contained" color="primary" href={pdf}>
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
            {sections.map(({ icon, section: { title, subheader, content, }, }) => {
                return (
                    <Grid xs={12} sm={12} md={4}>
                        <Card className={classes.card}>
                            <CardHeader
                                title={<Typography className={classes.cardTitle}>{title}</Typography>}
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