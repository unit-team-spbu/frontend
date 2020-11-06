import React from 'react';

//import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

import Copyright from './Copyright';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {setAuthorization} from './../reducers/userReducer'
import {Redirect} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random/?programming,it)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },  paper: {
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

const renderTextField = ({
  label, input, 
  meta:{ touched, invalid, error},
    ...custom}) => (
      <TextField
      label={label}
      placeholder={label}
      error={touched && invalid} 
      helperText={touched && error}
      {...input}
      {...custom}/>
    )


const AuthForm = reduxForm({form: "auth"})((props)=>{
    const classes = useStyles();
    return(
      <form className={classes.form}onSubmit={props.handleSubmit}>
            <Field component={renderTextField}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="login"
              label="Электронная почта"
              name="login"
              autoComplete="login"
              autoFocus
            />
           <Field component={renderTextField}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Войти
            </Button>
            
          </form>
    )
})

const Submit = (app) => (data) => {
  app(data.login, data.password)
}


const Login = (props) => {
  const classes = useStyles();

  if (props.isLog)
  return <Redirect to="/Anketa"/>

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Заходите на сайт, всегда Вам рады!
          </Typography>
        

          <AuthForm onSubmit={Submit(props.setAuthorization)}/>

          <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Забыли пароль?
                </Link>
              </Grid>
              <Grid item>
                <Link href="Signup" variant="body2">
                  "Нет учетной записи? Регистрация"
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>


        </div>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  isLog: state.user.isLog,
  message: state.user.message,
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps, {setAuthorization})(Login)