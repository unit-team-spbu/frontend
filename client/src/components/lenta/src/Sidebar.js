import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import TodayIcon from '@material-ui/icons/Today';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {setLenta} from './../../../reducers/userReducer'
import {Redirect} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  buttonsSide: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

/*function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}*/
const renderCheckbox = ({ input, label }) => (
  <div>
    <FormControlLabel
      control={
        <Checkbox
          checked={input.value ? true : false}
          onChange={input.onChange}
        />
      }
      label={label}
    />
  </div>
)

const Filter = reduxForm({ form: "filter" }) ((props) => {
  const classes = useStyles();

  return (
    <form className={classes.form} onSubmit={props.handleSubmit}>
      <Grid item xs={12} md={12}>
        <Paper elevation={4} className={classes.sidebarAboutBox}>
         
            <Grid container spacing={0}>
              <Grid item xs={12} sm={12}>
                <Typography align="left" component="h1" variant="h6">
                  Формат мероприятия
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Field
                  name={"offline"}
                  id="offline"
                  component={renderCheckbox}
                  control={<Checkbox value="hak" size="small" color="secondary" />}
                  label="Очное"
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <Field
                  name={"online"}
                  id="online"
                  component={renderCheckbox}
                  control={<Checkbox value="hak" size="small" color="secondary" />}
                  label="Дистанционное"
                />
              </Grid>
            </Grid>
        


         
            <Grid container spacing={0}>
              <Grid item xs={12} sm={12}>
                <Typography align="left" component="h1" variant="h6">
                  Цена
        </Typography>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Field
                  name={"free"}
                  id="free"
                  component={renderCheckbox}
                  control={<Checkbox value="hak" size="small" color="secondary" />}
                  label="Бесплатные"
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <Field
                   name={"paid"}
                   id="paid"
                  component={renderCheckbox}
                  control={<Checkbox value="hak" size="small" color="secondary" />}
                  label="Платные"
                />
              </Grid>
            </Grid>
         


         
            <Grid container spacing={0}>
              <Grid item xs={12} sm={12}>
                <Typography align="left" component="h1" variant="h6">
                  Город
        </Typography>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Field
                   name={"petersburg"}
                   id="petersburg"
                  component={renderCheckbox}
                  control={<Checkbox value="hak" size="small" color="secondary" />}
                  label="Санкт-Петербург"
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <Field
                  name={"moscow"}
                  id="moscow"
                  component={renderCheckbox}
                  control={<Checkbox value="hak" size="small" color="secondary" />}
                  label="Москва"
                />
              </Grid>
            </Grid>
       

         
            <Grid container spacing={0}>
              <Grid item xs={12} sm={12}>
                <Typography align="left" component="h1" variant="h6">
                  Вид мероприятия
        </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Field
                 name={"hackathon"}
                 id="hackathon"
                  component={renderCheckbox}
                  control={<Checkbox value="hak" size="small" color="secondary" />}
                  label="Хакатон"
                />

              </Grid>
              <Grid item xs={10} sm={6}>
                <Field
                  name={"lecture"}
                  id="lecture"
                  component={renderCheckbox}
                  control={<Checkbox value="lek" size="small" color="secondary" />}
                  label="Лекция"
                />
              </Grid>

              <Grid item xs={10} sm={6} >
                <Field
                  name={"training"}
                  id="training"
                  component={renderCheckbox}
                  control={<Checkbox value="konf" size="small" color="secondary" />}
                  label="Тренинг"
                />
              </Grid>
              <Grid item xs={10} sm={6}>
                <Field
                  name={"webinar"}
                  id="webinar"
                  component={renderCheckbox}
                  control={<Checkbox value="onl" size="small" color="secondary" />}
                  label="Вебинар"
                />
              </Grid>
              <Grid item xs={10} sm={6}>
                <Field
                  name={"traineeship"}
                  id="traineeship"
                  component={renderCheckbox}
                  control={<Checkbox value="sta" size="small" color="secondary" />}
                  label="Стажировка"
                />
              </Grid>
              <Grid item xs={10} sm={6}>
                <Field
                  name={"forum"}
                  component={renderCheckbox}
                  control={<Checkbox value="for" size="small" color="secondary" />}
                  label="Форум"
                  id="forum"
                />
              </Grid>
              <Grid item xs={10} sm={6}>
                <Field
                  name={"seminar"}
                  id="seminar"
                  component={renderCheckbox}
                  control={<Checkbox value="tren" size="small" color="secondary" />}
                  label="Семинар"
                />
              </Grid>
              <Grid item xs={10} sm={6}>
                <Field
                  name={"onlinecourse"}
                  id="onlinecourse"
                  component={renderCheckbox}
                  control={<Checkbox value="webin" size="small" color="secondary" />}
                  label="Онлайн-курс"
                />
              </Grid>
              <Grid item xs={10} sm={6}>
                <Field
                  name={"conference"}
                  id="conference"
                  component={renderCheckbox}
                  control={<Checkbox value="semin" size="small" color="secondary" />}
                  label="Конференция"
                />
              </Grid>
            </Grid>
     


         
            <Grid container spacing={0}>
              <Grid item xs={12} sm={12}>
                <Typography align="left" component="h1" variant="h6">
                  Когда
        </Typography>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Field
                  name={"today"}
                  id="today"
                  component={renderCheckbox}
                  control={<Checkbox value="hak" size="small" color="secondary" />}
                  label="Сегодня"
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <Field
                  name={"tomorrow"}
                  id="tomorrow"
                  component={renderCheckbox}
                  control={<Checkbox value="hak" size="small" color="secondary" />}
                  label="Завтра"
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <Field
                  name={"week"}
                  id="week"
                  component={renderCheckbox}
                  control={<Checkbox value="hak" size="small" color="secondary" />}
                  label="На этой недели"
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <Field
                  name={"month"}
                  id="month"
                  component={renderCheckbox}
                  control={<Checkbox value="hak" size="small" color="secondary" />}
                  label="В этом месяце"
                />
              </Grid>
            </Grid>
         


          <div className={classes.buttonsSide}>
            <Typography
              align="left">
              <Button variant="contained" color="secondary" type="submit" >Применить</Button>
            </Typography>
          </div>

        </Paper>
      </Grid>
    </form>
  );
})

 let list=[];

const  Sidebar = (props) => {

  const Submit = (app) => (data) => {

    let list=[];

    if (data.offline===true)
      list.push('offline')

    if (data.online===true)
      list.push('online')
    
    if (data.free===true)
      list.push('free')

    if (data.paid===true)
      list.push('paid')

    if (data.petersburg===true)
      list.push('petersburg')

    if (data.moscow===true)
      list.push('moscow')

    if (data.hackathon===true)
      list.push('hackathon')

    if (data.lecture===true)
      list.push('lecture')

    if (data.training===true)
      list.push('training')
    
    if (data.webinar===true)
      list.push('webinar')

    if (data.traineeship===true)
      list.push('traineeship')

    if (data.forum===true)
      list.push('forum')

    if (data.seminar===true)
      list.push('seminar')

    if (data.onlinecourse===true)
      list.push('onlinecourse')

    if (data.conference===true)
      list.push('conference')

    if (data.today===true)
      list.push('today')

    if (data.tomorrow===true)
      list.push('tomorrow')

    if (data.week===true)
      list.push('week')

    if (data.month===true)
      list.push('month')
      
    app(props.currentUser, list)
  }

  return(

    <Filter onSubmit={Submit(props.setLenta)}/>
  );
}

const lentaStateProps = (state) => ({
  message: state.user.message,
  currentUser: state.user.currentUser
})


export default connect(lentaStateProps, {setLenta})(Sidebar)