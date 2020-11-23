import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import {Link, Redirect} from 'react-router-dom';
import { TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import {setlk} from './../../../reducers/userReducer'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,

  },
  button: {
    margin: theme.spacing(1),
  },
}));

const ButtonLK = reduxForm({form: "lk"})((props)=>{
  const classes = useStyles();
  return(
    <form  onSubmit={props.handleSubmit}>
    <Button variant="outlined" type="submit" className={classes.button} size="small" >
          Личный кабинет   
    </Button>
  </form>
  )
})

const Header = (props) => {
  const classes = useStyles();
  
    const SubmitButtonLK = (app) => (data) => {
      app(false, props.currentUser)}

    if (props.LK){
        debugger
        //props.LK=false;
        return <Redirect to="/Anketa"/>
    }
    debugger
    return (
      <React.Fragment>
        <Toolbar className={classes.toolbar}>

          <Button size="small" component={Link} to="/lenta" > 
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            IT Events
          </Typography>
          </Button>   
        
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="right"
            noWrap
            className={classes.toolbarTitle}
          >
            <TextField id="outlined-basic" lineDirection="center"  variant="outlined" size="small" />
            <IconButton>
            <SearchIcon />
            </IconButton>
          </Typography>
        
        {
          props.isLog ? <ButtonLK onSubmit={SubmitButtonLK(props.setlk)}/> : 
          <Button variant="outlined" size="small"  component={Link} to="/welcome">
          Войти
          </Button>
        }
         

         

        </Toolbar>
        
      </React.Fragment>
    );
}


const maplkStateProps = (state) => ({
  message: state.user.message,
  currentUser: state.user.currentUser,
  isPost: state.user.isPost,
  isGet: state.user.isGet,
  isExit: state.user.isExit,
  isEvent: state.user.isEvent,
  Ind: state.user.Ind,
  LK: state.user.LK,
  isLog: state.user.isLog,
})

export default connect(maplkStateProps, {setlk})(Header)