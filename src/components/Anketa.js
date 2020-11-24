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

import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {Anketa} from './../reducers/userReducer'
import {Redirect} from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
   toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        width: '100%',
        position: 'right',
        display: 'flex',
        alignItems: 'center',
        orientation: 'center',
        justifyContent: 'right',
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
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    //marginBottom: theme.spacing(1),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '200%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 3, 2),
  },
  button: {
    //margin: theme.spacing(1),
    align: 'justify'
  },
}));

const renderCheckbox = ({ input, label, znak }) => (
  <div>
  <FormControlLabel
    control={
      <Checkbox
        checked={znak ? true : input.value}
        onChange={input.onChange}
      />
    }
    label={label}
  />
</div>
)

const AnketaForm = reduxForm({form: "anketa"})((props)=>{
    const classes = useStyles();
    return(
        <form className={classes.form} onSubmit={props.handleSubmit}>
          
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12}>
                    <Typography  align="left" component="h1" variant="h6">
                        1) Интересующии вас сферы IT
                    </Typography>         
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field  component={renderCheckbox}
                        name={"Web"}
                        id="Web"
                        control={<Checkbox checked={props.Ind[0]} value={props.Ind[0]} color="secondary" />}
                        label="WEB" 
                        znak={props.Ind[0]}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field  component={renderCheckbox}
                        name={"Gamedev"}
                        id="Gamedev"
                        control={<Checkbox checked={props.Ind[1]} value="GD" color="secondary" />}
                        label="Gamedev"
                        znak={props.Ind[1]}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field  component={renderCheckbox}
                         name={"Mobile"}
                         id="Mobile"
                        control={<Checkbox value="mobile" checked={props.Ind[2]} color="secondary" />}
                        label="Мобильная разработка"
                        znak={props.Ind[2]}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field  component={renderCheckbox}
                        name={"Robot"}
                        id="Robot"
                        control={<Checkbox value="robot" color="secondary" checked={props.Ind[3]} />}
                        label="Робототехника"
                        znak={props.Ind[3]}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field  component={renderCheckbox}
                        name={"DevOps"}
                        id="DevOps"
                        control={<Checkbox value="devops" checked={props.Ind[4]} color="secondary" />}
                        label="DevOps"
                        znak={props.Ind[4]}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field  component={renderCheckbox}
                        name={"QA"}
                        id="QA"
                        control={<Checkbox value="qa" checked={props.Ind[5]} color="secondary" />}
                        label="QA"
                        znak={props.Ind[5]}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field  component={renderCheckbox}
                        name={"DataScience"}
                        id="DataScience"
                        control={<Checkbox value="ds" checked={props.Ind[6]} color="secondary" />}
                        label="DataScience"
                        znak={props.Ind[6]}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field  component={renderCheckbox}
                         name={"UI"}
                         id="UI"
                        control={<Checkbox value="ui" checked={props.Ind[7]}  color="secondary" />}
                        label="UI/UX"
                        znak={props.Ind[7]}
                    />
                </Grid>
            </Grid>
      

       
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12}>
                    <Typography  align="left" component="h1" variant="h6" gutterBottom>
                        1) Интересующии вас языки программирования
                    </Typography>         
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field  component={renderCheckbox}
                        name={"Java"}
                        id="Java"
                        control={<Checkbox value="java" checked={props.Ind[8]} color="secondary" />}
                        label="Java"
                        znak={props.Ind[8]}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field  component={renderCheckbox}
                        name={"PHP"}
                        id="PHP"
                        control={<Checkbox value="php" checked={props.Ind[9]} color="secondary" />}
                        label="PHP"
                        znak={props.Ind[9]}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field  component={renderCheckbox}
                        name={"Python"}
                        id="Python"
                        control={<Checkbox value="python" checked={props.Ind[10]} color="secondary" />}
                        label="Python"
                        znak={props.Ind[10]}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field  component={renderCheckbox}
                        name={"Csharp"}
                        id="Csharp"
                        control={<Checkbox value="ch" checked={props.Ind[11]} color="secondary" />}
                        label="C#"
                        znak={props.Ind[11]}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field  component={renderCheckbox}
                        name={"Cplus"}
                        id="Cplus"
                        control={<Checkbox value="c" checked={props.Ind[12]} color="secondary" />}
                        label="C++"
                        znak={props.Ind[12]}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field  component={renderCheckbox}
                        name={"CSS"}
                        id="CSS"
                        control={<Checkbox value="css" checked={props.Ind[13]} color="secondary" />}
                        label="CSS"
                        znak={props.Ind[13]}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field  component={renderCheckbox}
                        name={"HTML"}
                        id="HTML"
                        control={<Checkbox value="html" checked={props.Ind[14]} color="secondary" />}
                        label="HTML"
                        znak={props.Ind[14]}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field  component={renderCheckbox}
                        name={"JavaScript"}
                        id="JavaScript"
                        control={<Checkbox value="jvs" checked={props.Ind[15]} color="secondary" />}
                        label="JavaScript"
                        znak={props.Ind[15]}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field  component={renderCheckbox}
                        name={"React"}
                        id="React"
                        control={<Checkbox value="react" checked={props.Ind[16]} color="secondary" />}
                        label="React"
                        znak={props.Ind[16]}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field  component={renderCheckbox}
                        name={"Angular"}
                        id="Angular"
                        control={<Checkbox value="ang" checked={props.Ind[17]} color="secondary" />}
                        label="Angular"
                        znak={props.Ind[17]}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field  component={renderCheckbox}
                        name={"Kotlin"}
                        id="Kotlin"
                        control={<Checkbox value="kotl" checked={props.Ind[18]} color="secondary" />}
                        label="Kotlin"
                        znak={props.Ind[18]}
                    />
                </Grid>
            </Grid>
      
       
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12}>
                    <Typography  align="left" component="h1" variant="h6">
                        1) Интересующии вас мероприятия IT
                    </Typography>         
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field  component={renderCheckbox}
                        name={"hackathon"}
                        id="hackathon"
                        control={<Checkbox value="hak" checked={props.Ind[19]} color="secondary" />}
                        label="Хакатон"
                        znak={props.Ind[19]}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field  component={renderCheckbox}
                        name={"lecture"}
                        id="lecture"
                        control={<Checkbox value="lek" checked={props.Ind[20]} color="secondary" />}
                        label="Лекция"
                        znak={props.Ind[20]}
                    />
                </Grid>
                <Grid item xs={12}sm={4} >
                    <Field  component={renderCheckbox}
                        name={"conference"}
                        id="conference"
                        control={<Checkbox value="konf" checked={props.Ind[21]} color="secondary" />}
                        label="Конференция"
                        znak={props.Ind[21]}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field  component={renderCheckbox}
                        name={"onlinecourse"}
                        id="onlinecourse"
                        control={<Checkbox value="onl" checked={props.Ind[22]} color="secondary" />}
                        label="Онлайн-курс"
                        znak={props.Ind[22]}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field  component={renderCheckbox}
                        name={"traineeship"}
                        id="traineeship"
                        control={<Checkbox value="sta" checked={props.Ind[23]} color="secondary" />}
                        label="Стажировка"
                        znak={props.Ind[23]}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field  component={renderCheckbox}
                        name={"forum"}
                        id="forum"
                        control={<Checkbox value="for"checked={props.Ind[24]} color="secondary" />}
                        label="Форум"
                        znak={props.Ind[24]}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field  component={renderCheckbox}
                        name={"training"}
                        id="training"
                        control={<Checkbox value="tren" checked={props.Ind[25]} color="secondary" />}
                        label="Тренинг"
                        znak={props.Ind[25]}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field  component={renderCheckbox}
                        name={"webinar"}
                        id="webinar"
                        control={<Checkbox value="webin" checked={props.Ind[26]} color="secondary" />}
                        label="Вебинар"
                        znak={props.Ind[26]}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field  component={renderCheckbox}
                        name={"seminar"}
                        id="seminar"
                        control={<Checkbox value="semin" checked={props.Ind[27]} color="secondary" />}
                        label="Семинар"
                        znak={props.Ind[27]}
                    />
                </Grid>
            </Grid>
        

        
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12}>
                    <Typography  align="left" component="h1"  variant="h6" gutterBottom>
                        1) Предпочтительный формат
                    </Typography>         
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field  component={renderCheckbox}
                        name={"offline"}
                        id="offline"
                        control={<Checkbox value="ochno" checked={props.Ind[28]} color="secondary" />}
                        label="Очно"
                        znak={props.Ind[28]}
                    />
                </Grid>
                <Grid item xs={12} sm={4} >
                    <Field  component={renderCheckbox}
                        name={"online"}
                        id="online"
                        control={<Checkbox value="zaochno" checked={props.Ind[29]}  color="secondary" />}
                        label="Заочно"
                        znak={props.Ind[29]}
                    />
                </Grid>
            </Grid>
       
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12}>
                    <Typography  align="left" component="h1"  variant="h6" gutterBottom>
                        1) Предпочтительный город
                    </Typography>         
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field  component={renderCheckbox}
                         name={"moscow"}
                         id="moscow"
                        control={<Checkbox value="moscow" checked={props.Ind[30]} color="secondary" />}
                        label="Москва"
                        znak={props.Ind[30]}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field  component={renderCheckbox}
                        name={"petersburg"}
                        id="petersburg"
                        control={<Checkbox value="saint" checked={props.Ind[31]} color="secondary" />}
                        label="Санк-Петербург"
                        znak={props.Ind[31]}
                    />
                </Grid>
            </Grid>
       
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12}>
                    <Typography  align="left" component="h1" variant="h6" >
                        1) Интересует ли вас что-то новое?
                    </Typography>         
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field  component={renderCheckbox}
                        name={"Yes"}
                        id="Yes"
                        control={<Checkbox value="yes" checked={props.Ind[32]} color="secondary" />}
                        label="Да"
                        znak={props.Ind[32]}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field  component={renderCheckbox}
                        name={"No"}
                        id="No"
                        control={<Checkbox value="no" checked={props.Ind[33]} color="secondary" />}
                        label="Нет"
                        znak={props.Ind[33]}
                    />
                </Grid>    
                <Grid item xs={12} sm={4}>
                    <Field  component={renderCheckbox}
                        name={"YN"}
                        id="YN"
                        control={<Checkbox value="fz" checked={props.Ind[34]} color="secondary" />}
                        label="Затрудняюсь ответить"
                        znak={props.Ind[34]}
                    />
                </Grid>
            </Grid>
    
            <Grid  className={classes.paper}  alignItems="center" justify="center">
                    <Button
                    id="save"
                    variant="contained"
                    type="submit"
                    color="primary"
                    size="large"
                    startIcon={<SaveIcon />}
                    className={classes.button}
                    >
                    Сохранить       
                    </Button>
              </Grid>

        </form>
        )
    })

    const ButtonExit = reduxForm({form: "exit"})((props)=>{
      return(
        <form  onSubmit={props.handleSubmit}>
            <Button id="exit" name="exit"  color="default" type="submit"  variant="outlined"  size="medium" >
              Выйти
            </Button>
        </form>
        )
      })

      const ButtonClear = reduxForm({form: "clear"})((props)=>{
        const classes = useStyles();
        return(
          <form  onSubmit={props.handleSubmit}>
              <Button  id="save"
                    variant="contained"
                    type="submit"
                    //color="primary"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
        >
                Очистить
              </Button>
          </form>
          )
        })

      const ButtonExitEvent = reduxForm({form: "exit"})((props)=>{
        return(
          <form  onSubmit={props.handleSubmit}>
          <Button size="medium" color="default" id="itEvent"  name="itEvent" type="submit"  >
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            noWrap
          >
            IT Events
            </Typography>
            </Button> 

        </form>
        )
      })

      let inter;
      let inds;

      const Submit = (app,currentUser,Post,Get, tags) => (data) => {

        inter=[];
        inds=[];
    
        if (data.Web || tags[0]){
            inter.push('Web')
            inds.push(true);
        }
        else
          inds.push(false); 
    
        if (data.Gamedev===true || tags[1]){
            inter.push('Gamedev')
            inds.push(true);
        }
        else
          inds.push(false); 
    
        if (data.Mobile===true || tags[2]){
          inter.push('Mobile')
          inds.push(true);
        }
        else
          inds.push(false); 
    
        if (data.Robot===true || tags[3]){
          inter.push('Robot')
          inds.push(true);
        }
        else
          inds.push(false); 
    
        if (data.DevOps===true || tags[4]){
          inter.push('DevOps')
          inds.push(true);
        }
        else
          inds.push(false); 
    
        if (data.QA===true || tags[5]){
          inter.push('QA')
          inds.push(true);
        }
        else
          inds.push(false); 
    
        if (data.DataScience===true || tags[6]){
          debugger
          inter.push('DataScience')
          inds.push(true);
        }
        else{
        debugger
          inds.push(false); 
        }
        if (data.UI===true || tags[7]){
          inter.push('UI')
          inds.push(true);
        }
        else
          inds.push(false); 
    
        if (data.Java===true || tags[8]){
          inter.push('Java')
          inds.push(true);
        }
        else
          inds.push(false); 
    
        if (data.PHP===true || tags[9]){
          inter.push('PHP')
          inds.push(true);
        }
        else
          inds.push(false); 
    
        if (data.Python===true || tags[10]){
          inter.push('Python')
          inds.push(true);
        }
        else
          inds.push(false); 
    
        if (data.Csharp===true || tags[11]){
          inter.push('Csharp')
          inds.push(true);
        }
        else
          inds.push(false); 
    
        if (data.Cplus===true || tags[12]){
          inter.push('Cplus')
          inds.push(true);
        }
        else
          inds.push(false); 
        
        if (data.CSS===true || tags[13]){
          inter.push('CSS')
          inds.push(true);
        }
        else
          inds.push(false); 
    
        if (data.HTML===true || tags[14]){
          inter.push('HTML')
          inds.push(true);
        }
        else
          inds.push(false); 
    
        if (data.JavaScript===true || tags[15]){
          inter.push('JavaScript')
          inds.push(true);
        }
        else
          inds.push(false); 
    
        if (data.React===true || tags[16]){
          inter.push('React')
          inds.push(true);
        }
        else
          inds.push(false); 
    
    
        if (data.Angular===true || tags[17]){
          inter.push('Angular')
          inds.push(true);
        }
        else
          inds.push(false); 
    
        if (data.Kotlin===true || tags[18]){
          inter.push('Kotlin')
          inds.push(true);
        }
        else
          inds.push(false); 
    
        if (data.hackathon===true || tags[19]){
            inter.push('hackathon')
            inds.push(true);
        }
        else
            inds.push(false); 
      
        if (data.lecture===true || tags[20]){
            inter.push('lecture')
            inds.push(true);
        }
        else
            inds.push(false);
    
        if (data.conference===true || tags[21]){
              inter.push('conference')
              inds.push(true);
        }
        else
            inds.push(false); 
    
        if (data.onlinecourse===true || tags[22]){
              inter.push('onlinecourse')
              inds.push(true);
        }
        else
          inds.push(false);
          
          
        if (data.traineeship===true || tags[23]){
          inter.push('traineeship')
          inds.push(true);
        }
        else
          inds.push(false); 
          
        if (data.forum===true || tags[24]){
            inter.push('forum')
            inds.push(true);
        }
        else
          inds.push(false); 
    
          
        if (data.training===true || tags[25]){
          inter.push('training')
          inds.push(true);
        }
        else
          inds.push(false); 
    
        if (data.webinar===true || tags[26]){
            inter.push('webinar')
            inds.push(true);
        }
        else
            inds.push(false); 
      
        if (data.seminar===true || tags[27]){
            inter.push('seminar')
            inds.push(true);
        }
        else
            inds.push(false); 
       
    
        if (data.offline || tags[28]){
            inter.push('offline')
            inds.push(true);
        }
        else
          inds.push(false); 
    
        if (data.online===true || tags[29]){
            inter.push('online')
            inds.push(true);
        }
        else
          inds.push(false);   
          
          
        if (data.moscow===true || tags[30]){
          inter.push('moscow')
          inds.push(true);
        }
        else
          inds.push(false); 
    
        if (data.petersburg===true || tags[31]){
          inter.push('petersburg')
          inds.push(true);
        }
        else
          inds.push(false); 
    
          
        if (data.Yes===true || tags[32]){
          inter.push('Yes')
          inds.push(true);
        }
        else
          inds.push(false); 
    
        if (data.No===true || tags[33]){
          inter.push('No')
          inds.push(true);
        }
        else
          inds.push(false); 
    
        if (data.YN===true || tags[34]){
          inter.push('YN')
          inds.push(true);
        }
        else
          inds.push(false); 
    
          
        app(currentUser, inter, inds, Post,false, Get)
      }

const AnketaProps = (props) => {
  const classes = useStyles();


  const SubmitButton = (app) => (data) => {
    app(props.currentUser,[] ,[], false, true, false)
    debugger
  }

  const SubmitButtonEvent = (app) => (data) => {
    app(props.currentUser,[],[], false, false,false, true)
    
  }
  const SubmitButtonClear = (app) => (data) => {
    app(props.currentUser,[],[], false, false,false,false,true)
    
  }
  
  if (props.isEvent || props.isExit){
    //props.isEvent=false;
    //props.isExit=false;
    debugger
    return <Redirect to="/lenta"/>
  }

  if (props.Ind[35]){
    debugger
    props.Ind[35]=false;
    return <Redirect to="/Anketa"/>
    
  }

  return (

      <React.Fragment>

      <Toolbar className={classes.toolbar}>

      <ButtonExitEvent onSubmit={SubmitButtonEvent(props.Anketa)}/>

      <Typography
        component="h2"
        variant="h5"
        color="inherit"
        align="right"
        noWrap
        className={classes.toolbarTitle}
      >
      
      </Typography>

      <ButtonExit onSubmit={SubmitButton(props.Anketa)}/>

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
       
        <AnketaForm Ind={props.Ind} onSubmit={Submit(props.Anketa, props.currentUser, props.isPost, props.isGet, props.Ind)}/>
        <ButtonClear onSubmit={SubmitButtonClear(props.Anketa)}/>

       
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    </React.Fragment> 
  );

}
const mapAnketaStateProps = (state) => ({
    message: state.user.message,
    currentUser: state.user.currentUser,
    interests: state.user.interests,
    isPost: state.user.isPost,
    isGet: state.user.isGet,
    isExit: state.user.isExit,
    isEvent: state.user.isEvent,
    Ind: state.user.Ind
  })
  
  export default connect(mapAnketaStateProps, {Anketa})(AnketaProps)