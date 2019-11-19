/*IMPORTS*/
import React from 'react'; 

import { NavLink, } from 'react-router-dom';

import { Table, Paper, TableHead, TableRow, TableCell, Link, Typography, } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { lightBlue, grey, } from '@material-ui/core/colors';

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
      minWidth: 650,
      background : lightBlue[400],
      padding : '100px',
      
    },
    Title : {
        color : grey[50],
        padding : '8px 10px 8px 10px',
    },
    tableCell : {
        color : grey[50],
        padding : '8px 10px 8px 10px',
        border : 'none',
    },
    tableTitle : {
        color : grey[50],
        
    },
    tableLinks : {
        color : grey[50],
        textDecoration: 'none',
        '&:hover' : {
            textDecoration: 'underline',
        }
    },
    icon : {
        marginUp : '10px',
    }
});

/*COMPONENT*/
export default function Footer() {

    const classes = useStyles();

    const footerRows = [
        { 
            linksToSite : 'Home', 
            socialMedia : [
                'https://github.com/AlastairM-E', 
                'Github',
            ], 
        },
        { 
            linksToSite : 'Portfolio',
             socialMedia : [
                'https://medium.com/@alastairunityemail',
                'Medium',
            ], 
        },
    ];

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow >
                    <Typography></Typography>
                        <Typography className={classes.Title}>AlastairM-E</Typography>
                        <TableCell className={classes.tableTitle}>Site Navigation</TableCell>
                        <TableCell className={classes.tableTitle}>Social Media</TableCell>
                    </TableRow>
                    {footerRows.map(({linksToSite, socialMedia : [href, title] }) => {
                        return (
                            <TableRow>
                                <TableCell className={classes.tableCell}></TableCell>
                                <TableCell className={classes.tableCell}>
                                    <NavLink to={linksToSite !== 'Home' ? linksToSite : ''} className={classes.tableLinks}>
                                        {linksToSite}
                                    </NavLink>
                                </TableCell>
                                <TableCell className={classes.tableCell}>
                                    <Link href={href} className={classes.tableLinks}>
                                        {title}
                                    </Link>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableHead>
            </Table>
        </Paper>
        
    ); 

};