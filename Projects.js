import React from 'react'

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Description } from '@material-ui/icons';
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
const projects =[
  {id:"1",title:"Abstract Art",img:"https://colibriwp.com/blog/wp-content/uploads/2018/07/banner-redimensionat.jpg",shortdescription:"Illustration . Art Direction",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
  {id:"2",title:"Web Site",img:"https://itnt.co.za/img/shared-banner-img/placo.webp",shortdescription:"Illustration . Art Direction",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
  {id:"3",title:"Application",img:"https://www.aeserver.com/assets/img/website-builder-bg.jpg",shortdescription:"Illustration . Art Direction",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}

]
const Projects = () => {
    const classes = useStyles();

    return (
        
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {projects.map((project,index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={project.img}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                    </Typography>
                    <Typography>
                    {project.shortdescription}
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Link to={`/project/${project.id}`}>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    )
}

export default Projects
