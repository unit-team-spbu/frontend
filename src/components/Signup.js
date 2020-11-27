import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


import Copyright from './Copyright';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {setRegistration} from './../reducers/userReducer'
import {Redirect} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  button: {
    //marginTop: theme.spacing(8),
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

 /* if (values.password.length < 8) {
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

const RegForm = reduxForm({form: "reg", validate})((props)=>{
  const classes = useStyles();
  const {  pristine, submitting} = props
  return(
    <form className={classes.form} onSubmit={props.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
              <Field component={renderTextField}
                    autoComplete="firstName"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="Ваше имя"
                    autoFocus
              />
        
            </Grid>
            <Grid item xs={12} sm={7}>
              <Field component={renderTextField}
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Ваша фамилия"
                    name="lastName"
                    autoComplete="lname"/>
              
            </Grid>
            <Grid item xs={12}>
              <Field component={renderTextField}
                variant="outlined"
                required
                fullWidth
                id="login"
                label="Электронная почта"
                name="login"
                autoComplete="login"
              />
            </Grid>
            <Grid item xs={12}>
              <Field component={renderTextField}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <Field 
                name={"checkbox"}
                component ={FormControlLabel}
                control={<Checkbox value="allowExtralogins" color="primary" />}
                label="Я хочу получать различные предложения и уведомления по электронной почте."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={submitting}
            color="primary"
            className={classes.submit}>
            Начать
          </Button>
        
        </form>
  )
})

const Submit = (app) => (data) => {
  app(data.login, data.password)
}


const SignUp = (props) => {
  const classes = useStyles();
 
  if (props.isAuth){
  return <Redirect to="/welcome"/>
  }

  else return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Регистрация
        </Typography>
 
        <RegForm onSubmit={Submit(props.setRegistration)}/>

        <Grid container className={classes.button} justify="flex-end">
          <Grid item>
            <Button  size="small" color="primary" component={Link} to="/welcome">
              Уже зарегистрированы? Войти
            </Button>
          </Grid>
        </Grid>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

const mapStateToProps = (state) => ({
    isAuth: state.user.isAuth,
    message: state.user.message
})

export default connect(mapStateToProps, {setRegistration })(SignUp)