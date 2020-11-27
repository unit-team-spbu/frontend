import React from 'react';

//import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

import Copyright from './Copyright';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {setAuthorization} from './../reducers/userReducer'
import {Redirect} from 'react-router-dom'
import { LinkOffSharp } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random/?programming,it)',
    backgroundRepeat: 'no-repeat',
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
  button: {
    
    //marginTop: theme.spacing(1),
    //display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
   
  },
}));

const validate = values => {
  const errors = {}
 
  /*if (values.firstName.length > 12) {
    errors.firstName = 'Максимальная длина 12'
  }*/
  /*if (values.lastName.length > 15) {
    errors.lastName = 'Максимальная длина 15'
  }*/
  if (
    values.login &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.login)
  ) {
    errors.login = 'Неверный адрес почты'
  }
  
  /*if (values.password.length < 8) {
    errors.firstName = 'Минимальная длина 8'
  }*/

 /* const beginWithoutDigit = /^\D.*$/
  const withoutSpecialChars = /^[^-() /]*$/
  const containsLetters = /^.*[a-zA-Z]+.*$/
  const withoutSpaces = /^[\S]$/

if( beginWithoutDigit.test(values.password) &&
    withoutSpecialChars.test(values.password) &&
    containsLetters.test(values.password) ){
} else {
    errors.login = 'Необходимо наличие: цифор,спец.символов и латинских букв'
}

if( withoutSpaces.test(values.password)){
} else {
    errors.login = 'Пробелы недопустимы'
}
*/

  return errors
}

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

const AuthForm = reduxForm({form: "auth", validate}) ((props)=>{
    const classes = useStyles();
    const {  pristine, submitting} = props
    return(
      <form className={classes.form} onSubmit={props.handleSubmit}>
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
              disabled={ submitting}
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Войти
            </Button>
            
          </form>
    )
})




const Login = (props) => {
  const classes = useStyles();

const Submit = (app, currentUser) => (data) => {
  app(data.login, data.password, currentUser )
}

  if (props.isLog){
    debugger
  //alert(props.interests+props.currentUser+props.isGet+props.Ind[0])
  return <Redirect to="/Anketa"/>
  }


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
        

          <AuthForm onSubmit={Submit(props.setAuthorization, props.currentUser)}/>

         
          <Grid container className={classes.button}  justify="flex-end">
              <Grid item>
                <Button  size="small"  color="primary" component={Link} to="/Signup">
                  Нет учетной записи? Регистрация
                </Button>
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

const mapStateProps = (state) => ({
  isLog: state.user.isLog,
  message: state.user.message,
  currentUser: state.user.currentUser,
  interests: state.user.interests,
  isGet: state.user.isGet,
  Ind: state.user.Ind
})

export default connect(mapStateProps, {setAuthorization})(Login)