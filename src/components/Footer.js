/*IMPORTS*/
import React from 'react'; 

import { NavLink, } from 'react-router-dom';

import { Table,  Paper, TableHead, TableRow, TableCell, Link, Typography, } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { blue, grey, } from '@material-ui/core/colors';

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
      minWidth: 450,
      background : blue[600],
      padding : '100px',
      
    },
    Title : {
        color : 'white',
        padding : '8px 10px 8px 10px',
        fontSize:'2em',
    },
    tableCell : {
        color : grey[50],
        padding : '8px 10px 8px 10px',
        border : 'none',
        fontSize:'1.5em',
    },
    tableTitle : {
        color : grey[50],
        fontSize:'1.5em',
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
        fontSize:'1em',
    }
});

/*COMPONENT*/
export default function Footer() {

    const classes = useStyles();

    const footerRows = [
        { 
            linksToSite : 'Home', 
            linkTitle : 'Home',
            socialMedia : [
                'https://github.com/AlastairM-E', 
                'Github',
            ], 
        },
        { 
            linksToSite : 'CasinoJS',
            linkTitle : 'Blackjack Game',
            socialMedia : [
                'https://www.linkedin.com/in/alastair-mottram-epson-b5841119a/',
                'Linkedin'
            ], 
        },
        { 
            linksToSite : 'Portfolio',
            linkTitle : 'Portfolio',
            socialMedia : [
                
            ], 
        },
    ];

    return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                    
                            <TableRow>
                                    
                                    <Typography></Typography>
                                    <Typography className={classes.Title}>Alastair Mottram-Epson</Typography>
                                    <TableCell className={classes.tableTitle}>Site Navigation</TableCell>
                                    <TableCell className={classes.tableTitle}>Social Media</TableCell>
                                
                            </TableRow>
                            {footerRows.map(({linksToSite, linkTitle, socialMedia : [href, title] }) => {
                                return (
                                    <TableRow>
                                        <TableCell className={classes.tableCell}></TableCell>
                                        <TableCell className={classes.tableCell}>
                                            <NavLink 
                                                to={linksToSite !== 'Home' ? linksToSite : ''}
                                                className={classes.tableLinks} 
                                                onClick={() => window.scrollTo(1000, 0)}
                                            >
                                                {linkTitle}
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