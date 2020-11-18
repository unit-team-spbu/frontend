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
import IconButton from '@material-ui/core/IconButton';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';


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

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function Sidebar(props) {
  const classes = useStyles();
  const {date,time, format, where, price } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={3} className={classes.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom>
          {"Информация о событии"}
        </Typography>


      <List component="nav" aria-label="main mailbox folders">

        <ListItem >
          <ListItemIcon>
            <TodayIcon />
          </ListItemIcon>
          <ListItemText primary="Дата" secondary={date} />
        </ListItem>

        <ListItem >
          <ListItemIcon>
            <AccessTimeOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Время"  secondary={time} />
        </ListItem>

        <ListItem >
          <ListItemIcon>
            <RoomOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Место"  secondary={where} />
        </ListItem>

        <ListItem >
          <ListItemIcon>
            <MonetizationOnOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Стоимость"  secondary={price} />
        </ListItem>
      
      </List>
      <div className={classes.buttonsSide}>
        <Button variant="contained" color="secondary" component={Link} to="#">Зарегистрироваться</Button>
        
        <FormControlLabel
        control={<Checkbox icon={<ThumbUpAltOutlinedIcon />} checkedIcon={<ThumbUpAltOutlinedIcon />} name="checkedH" />}
      />
        
        <FormControlLabel
        control={<Checkbox icon={<ThumbDownAltOutlinedIcon />} checkedIcon={<ThumbDownAltOutlinedIcon />} name="checkedH" />}
      />
        </div>

      </Paper>  
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};
