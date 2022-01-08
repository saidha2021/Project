import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
     // backgroundImage: 'url(https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1576732289)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
function ProjectDescription({history,match}) {
    const data =[
        {id:1,title:"Abstract Art",img:"https://colibriwp.com/blog/wp-content/uploads/2018/07/banner-redimensionat.jpg",shortdescription:"Illustration . Art Direction",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {id:2,title:"Web Site",img:"https://itnt.co.za/img/shared-banner-img/placo.webp",shortdescription:"Illustration . Art Direction",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {id:3,title:"Application",img:"https://www.aeserver.com/assets/img/website-builder-bg.jpg",shortdescription:"Illustration . Art Direction",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
      
      ]
  const {id} = match.params;
  console.log(id)
    const classes = useStyles();
    return (
      <>
        { data.map(el => el.id === parseInt(id) ? (
             <Grid container component="main" className={classes.root}>
             <CssBaseline />
             <Grid item xs={false} sm={4} md={4} ><img src={el.img} alt="movie" /></Grid>
             <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square>
               <div className={classes.paper}>
               <Button onClick={() => history.goBack()} className="btn_back">go back</Button>
                 <Avatar className={classes.avatar}>
                   <LockOutlinedIcon />
                 </Avatar>
                 <Typography component="h1" variant="h5">
                 {el.title}
                 </Typography>
                 <p>
                 {el.description}
                 </p>
               </div>
             </Grid>
           </Grid>
        ) : "")}                        
     
      </>
    )
}

export default ProjectDescription
