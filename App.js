import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import NavBar from './componets/navBar';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Educations from './pages/Educations';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Testimony from './pages/Testimony';
import ProjectDescription from './componets/ProjectDescription'
import Footer from './componets/Footer'
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website 
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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


export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
       <NavBar />
      <main>
  
   
      <Switch>
        
      <Route exact path="/" component={Home}/>
      <Route exact path="/skills" component={Skills}/>
      
      <Route path="/educations" component={Educations}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/project/:id" component={ProjectDescription} />
      <Route path="/testimony" component={Testimony}/>
      <Route path="/contact" component={Contact}/>
      </Switch>
      </main>
      <Footer />
    </React.Fragment>

   
      
  );
}