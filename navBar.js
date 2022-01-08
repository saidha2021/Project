import React from 'react'

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom"
const useStyles = makeStyles((theme) => ({
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    icon: {
      marginRight: theme.spacing(2),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));
  
function NavBar() {
    const classes = useStyles();

    return (
        <div>
                 <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          <Link variant="button" color="textPrimary" to="/" className={classes.link}>
            MY PORTFOLIO
            </Link>
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" to="/Educations" className={classes.link}>
              Educations
            </Link>
            <Link variant="button" color="textPrimary" to="/projects" className={classes.link}>
            projects
            </Link>
            <Link variant="button" color="textPrimary" to="/skills" className={classes.link}>
              Skills
            </Link>
            <Link variant="button" color="textPrimary" to="/testimony" className={classes.link}>
            Testimony
            </Link>
            <Link variant="button" color="textPrimary" to="/contact" className={classes.link}>
        Contact
            </Link>
            
          </nav>
        </Toolbar>
      </AppBar>
        </div>
    )
}

export default NavBar
