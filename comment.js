import React,{useState} from 'react'
import {  useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Comment = (props) => {
    const dispatch = useDispatch();
   
    const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
      <>
     
         <Card style={{float: "left", textAlign:'center'}} className={classes.root} variant="outlined" spacing={2}>
      <CardContent>
        <img style={{width:"100px"}} src="https://www.pngarts.com/files/11/Avatar-PNG-Picture.png" alt="img" />
        <Typography variant="body2" component="p">
        {props.description}
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button  variant="outlined" color="secondary" size="small" onClick={handleClickOpen}>REMOVE</Button>
      </CardActions>
    </Card>
 
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <DialogContentText>
            YOU ARE SURE {props.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={()=> dispatch({type:"REMOVE",id:props.id})} color="primary" >
            YES
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus onClose={handleClose}>
            NO
          </Button>
        </DialogActions>
      </Dialog>
      </>
    )
}

export default Comment
