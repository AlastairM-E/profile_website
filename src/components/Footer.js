/*IMPORTS*/
import React from 'react'; 

import { Table, Paper, TableHead, TableRow, TableCell, Link, } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { lightBlue, grey, } from '@material-ui/core/colors';

import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
      background : lightBlue[400],
    },

    tableCell : {
        color : grey[50],
        padding : '8px 10px',
    },
    tableLinks : {
        border : 'none',
        color : grey[50],
    },
    icon : {
        marginUp : '10px',
    }
});

/*COMPONENT*/
export default function Footer() {

    const classes = useStyles();

    const footerRows = [
        { linksToSite : 'Home', socialMedia : ['https://github.com/AlastairM-E', 'Github',  <GitHubIcon className={classes.icon} />], },
        { linksToSite : 'About', socialMedia : ['https://medium.com/@alastairunityemail', 'Medium', ''], },
        { linksToSite : 'Contact', socialMedia : [''], },
    ];

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow >
                        <TableCell className={classes.tableCell}>Site Navigation</TableCell>
                        <TableCell className={classes.tableCell}>Social Media</TableCell>
                    </TableRow>
                    {footerRows.map(({ linksToSite, socialMedia : [href, title, icon] }) => {
                        return (
                            <TableRow className={classes.tableLinks}>
                                <TableCell className={[ classes.tableCell, classes.tableLinks,]}>
                                    <Link href={`http://localhost:8080/${linksToSite}`} className={classes.tableLinks}>{linksToSite}</Link>
                                </TableCell>
                                <TableCell className={[classes.tableCell, classes.tableLinks,]}>
                                    <Link href={href} className={classes.tableLinks}> {title} {icon}</Link>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableHead>
            </Table>
        </Paper>
        
    ); 

};