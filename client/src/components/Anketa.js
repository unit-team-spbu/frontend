import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SaveIcon from '@material-ui/icons/Save';

import Copyright from './Copyright';

import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Link from '@material-ui/core/Link';


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
    width: '200%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (

      <React.Fragment>
      <Toolbar className={classes.toolbar}>

        <Button size="small" href="lenta">
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
         
        >
          IT Events
          </Typography>
          </Button>   {/* Вставить ссылку на главную страницу */}
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
        
        <Button variant="outlined" href="#" size="small" href="lenta">
          Выйти
        </Button>
      </Toolbar>
   


    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Анкета регистрации
        </Typography>
       
        <form className={classes.form} noValidate> 
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12}>
                    <Typography  align="left" component="h1" variant="h6">
                        1) Интересующии вас сферы IT
                    </Typography>         
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={<Checkbox value="WEB" color="secondary" />}
                        label="WEB"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={<Checkbox value="GD" color="secondary" />}
                        label="Gamedev"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={<Checkbox value="mobile" color="secondary" />}
                        label="Мобильная разработка"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={<Checkbox value="robot" color="secondary" />}
                        label="Робототехника"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={<Checkbox value="devops" color="secondary" />}
                        label="DevOps"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={<Checkbox value="qa" color="secondary" />}
                        label="QA"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={<Checkbox value="ds" color="secondary" />}
                        label="DataSciense"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={<Checkbox value="ui" color="secondary" />}
                        label="UI/UX"
                    />
                </Grid>
            </Grid>
        </form>

        <form className={classes.form} noValidate> 
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12}>
                    <Typography  align="left" component="h1" variant="h6" gutterBottom>
                        1) Интересующии вас языки программирования
                    </Typography>         
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={<Checkbox value="java" color="secondary" />}
                        label="Java"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={<Checkbox value="php" color="secondary" />}
                        label="PHP"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={<Checkbox value="python" color="secondary" />}
                        label="Python"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={<Checkbox value="ch" color="secondary" />}
                        label="C#"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={<Checkbox value="c" color="secondary" />}
                        label="C++"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={<Checkbox value="css" color="secondary" />}
                        label="CSS"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={<Checkbox value="html" color="secondary" />}
                        label="HTML"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={<Checkbox value="jvs" color="secondary" />}
                        label="JavaScript"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={<Checkbox value="react" color="secondary" />}
                        label="React"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={<Checkbox value="ang" color="secondary" />}
                        label="Angular"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={<Checkbox value="kotl" color="secondary" />}
                        label="Kotlin"
                    />
                </Grid>
            </Grid>
        </form>

        <form className={classes.form} noValidate> 
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12}>
                    <Typography  align="left" component="h1" variant="h6">
                        1) Интересующии вас мероприятия IT
                    </Typography>         
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={<Checkbox value="hak" color="secondary" />}
                        label="Хакатон"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={<Checkbox value="lek" color="secondary" />}
                        label="Лекция"
                    />
                </Grid>
                <Grid item xs={12}sm={4} >
                    <FormControlLabel
                        control={<Checkbox value="konf" color="secondary" />}
                        label="Конференция"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={<Checkbox value="onl" color="secondary" />}
                        label="Онлайн-курс"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={<Checkbox value="sta" color="secondary" />}
                        label="Стажировка"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={<Checkbox value="for" color="secondary" />}
                        label="Форум"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={<Checkbox value="tren" color="secondary" />}
                        label="Тренинг"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={<Checkbox value="webin" color="secondary" />}
                        label="Вебинар"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={<Checkbox value="semin" color="secondary" />}
                        label="Семинар"
                    />
                </Grid>
            </Grid>
        </form>

        <form className={classes.form} noValidate> 
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12}>
                    <Typography  align="left" component="h1" variant="h6" gutterBottom>
                        1) Предпочтительный формат
                    </Typography>         
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={<Checkbox value="ochno" color="secondary" />}
                        label="Очно"
                    />
                </Grid>
                <Grid item xs={12} sm={4} >
                    <FormControlLabel
                        control={<Checkbox value="zaochno" color="secondary" />}
                        label="Заочно"
                    />
                </Grid>
            </Grid>
        </form>
        <form className={classes.form} noValidate> 
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12}>
                    <Typography  align="left" component="h1" variant="h6" gutterBottom>
                        1) Предпочтительный город
                    </Typography>         
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={<Checkbox value="moscow" color="secondary" />}
                        label="Москва"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={<Checkbox value="saint" color="secondary" />}
                        label="Санк-Петербург"
                    />
                </Grid>
            </Grid>
        </form>

        <form className={classes.form} noValidate> 
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12}>
                    <Typography  align="left" component="h1" variant="h6" >
                        1) Интересует ли вас что-то новое?
                    </Typography>         
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={<Checkbox value="yes" color="secondary" />}
                        label="Да"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={<Checkbox value="no" color="secondary" />}
                        label="Нет"
                    />
                </Grid>    
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={<Checkbox value="fz" color="secondary" />}
                        label="Затрудняюсь ответить"
                    />
                </Grid>
            </Grid>
        </form>
     
                <Grid item xs={12} sm={12}>
                    <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    href="welcome"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                    href="lenta"
                    >
                    Сохранить       
                    </Button>
                </Grid>
       
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    </React.Fragment> 
  );
}