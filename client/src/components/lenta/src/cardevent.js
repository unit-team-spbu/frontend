import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
import IconButton from '@material-ui/core/IconButton';
import { Check, CheckBox } from '@material-ui/icons';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {setCard} from './../../../reducers/userReducer'
import { Redirect } from 'react-router-dom';
import { Grid, Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 280,
    height: 300,

  },
  media: {
    height: 240,
    paddingTop: '56.25%', // 16:9
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    '& > *': {
    marginbottom: theme.spacing(3),
    }
  },
  buttonsSide: {
    '& > *': {
      margin: theme.spacing(2),
      alignItems: 'right',
      alignSelf: "end",
      textAlign: "right"
    }
  },
}));

const Cardform = reduxForm({form: "card"})((props)=>{
  const classes = useStyles();


  return(
      <form className={classes.form} onSubmit={props.handleSubmit}>

        <CardActionArea type="submit" >
            <CardMedia
              component="img"
              //alt="Contemplative Reptile"
              height="140"
              image={props.image_url}
              //title="Contemplative Reptile"
            />
            <CardContent>
              
              <Typography gutterBottom noWrap variant="h5" component="h2" >
                {props.title}
              </Typography>
        
              <Typography variant="body2" color="textSecondary" >
                {props.short_info}
              </Typography>
            </CardContent>
          </CardActionArea>


        </form>
        )
    })

  const Submit = (app, currentUser, id) => (data) => {
    app(currentUser, id)
    debugger
    
  }

const CardEvent = (props) => {
  const classes = useStyles();

  

  if (props.iscard){
    return <Redirect to="/event"/>
  }

  return (
    <Card className={classes.root}>

      <Cardform short_info={props.short_info} 
       image_url={props.image_url} 
       title={props.title} 
        onSubmit={Submit(props.setCard, props.currentUser, props.id)}/>

      <CardActions /*disableSpacing*/>
      <div  className={classes.controls}>
        <Button size="medium" color="primary"  >
          Зарегистрироваться
        </Button>
        <FormControlLabel
        control={<Checkbox icon={<GradeRoundedIcon />} checkedIcon={<GradeRoundedIcon />} name="checkedH" />}
      />
      </div>
      </CardActions>
     
    </Card>
  );
}

const mapCardStateProps = (state) => ({
  message: state.user.message,
  currentUser: state.user.currentUser,
  interests: state.user.interests,
  lenta: state.user.lenta,
  iscard: state.user.iscard,
})

export default connect(mapCardStateProps, {setCard})(CardEvent)
