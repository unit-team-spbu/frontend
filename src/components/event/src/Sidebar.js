import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import TodayIcon from '@material-ui/icons/Today';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import Button from '@material-ui/core/Button';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import cardevent from '../../lenta/src/cardevent';
import { Card } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarAbout: {
    backgroundColor: theme.palette.grey[200],  
    paddingLeft: theme.spacing(2),
  },

  buttonsSide: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const Sidebar = (props) => {
  const classes = useStyles();


  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={3} className={classes.sidebarAboutBox}>
        <Typography variant="h6" className={classes.sidebarAbout} gutterBottom>
          {"Информация о событии"}
        </Typography>


      <List component="nav" aria-label="main mailbox folders">

        <ListItem >
          <ListItemIcon>
            <TodayIcon />
          </ListItemIcon>
          <ListItemText primary="Начало мероприятия" secondary={props.Card.startDate} />
        </ListItem>

        <ListItem >
          <ListItemIcon>
            <TodayIcon />
          </ListItemIcon>
          <ListItemText primary="Конец мероприятия" secondary={props.Card.endDate} />
        </ListItem>

       

        <ListItem >
          <ListItemIcon>
            <RoomOutlinedIcon />
          </ListItemIcon>
          { props.Card.tags[0]===('online') ? 
          <ListItemText primary="Место" secondary={props.Card.tags[0]} />
          :
          <ListItemText primary="Место" secondary={props.Card.location} /> 
          }
          </ListItem> 
        <ListItem >
          <ListItemIcon>
            <MonetizationOnOutlinedIcon />
          </ListItemIcon>
          { props.Card.tags[2]===('paid') ? 
          <ListItemText primary="Стоимость" secondary="Paid" />
          :
          <ListItemText primary="Стоимость" secondary="Free" /> 
          }
         
        </ListItem>

        
      
      </List>
      <div className={classes.buttonsSide}>
        {
          props.currentUser.length>3 ? <Button variant="contained" color="secondary">в избранное</Button> :
          <Button variant="contained" 
          onClick={() => {alert('Вам необходимо войти на сайт для добавления мероприятия в избранное') }}  
          color="secondary">Добавить в избранное</Button>

        }
        
        </div>

      </Paper>  
    </Grid>
  );
}

const mapbarStateProps = (state) => ({
  message: state.user.message,
  currentUser: state.user.currentUser,
  interests: state.user.interests,
  lenta: state.user.lenta,
  iscard: state.user.iscard,
  Card:  state.user.Card
})

export default connect(mapbarStateProps, {})(Sidebar)