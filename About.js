import React from 'react'

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
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
  
const About = () => {
    const classes = useStyles();

    return (
        <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
         Hello,I'm Halleb Said 
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Competent, dynamic and versatile to integrate or redesign a website, I have developed more than 250 showcase websites, I have a good command of the cutting and integration of psd models, as well as all the production processes that lead to the project when a site is put online. I also have a little experience in Freelance (websites in PHP language).
Passionate about the Web and new technologies, my goal is to grow within a dynamic, ambitious and successful team.
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
               
                
                <Link variant="button" color="textPrimary" to="/Educations" className={classes.link}>
                <Button variant="contained" color="primary"> See my CV</Button>
            </Link>
              </Grid>
              
            </Grid>
          </div>
        </Container>
      </div>
    )
}

export default About
