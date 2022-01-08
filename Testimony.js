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
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Liste from '../componets/liste';
import Add from '../componets/add';
import { useState } from 'react';



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
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
const Filter = (props) => {
  return (
    <div>
      <div className="searchMovie">
        <input
          onChange={props.handleSearch}
          type="text"
          placeholder="Recherche"
        />
      </div>
      
    </div>
  );
};
function Testimony() {
    const initialState =  {
        description: ""
    }
      const [task,setTask] = useState(initialState)
      const [searching, setSearching] = useState("");
      const classes = useStyles();
    return (
        <div>
              <Grid container component="main" className={classes.root}>
      <CssBaseline />
      
      <Grid item xs={12} sm={5} md={3} component={Paper} elevation={6} square>
      <Add setTask={setTask} description={task.description} />
      </Grid>
      <Grid item xs={false} sm={7} md={9} >
      <Filter
        handleSearch={(e) => setSearching(e.target.value)}
      />
        <Liste description={task.description} filter={searching.toLowerCase()}
        />
      </Grid>
    </Grid>
        </div>
    )
}

export default Testimony
