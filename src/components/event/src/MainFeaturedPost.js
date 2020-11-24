import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
import StarBorderTwoToneIcon from '@material-ui/icons/StarBorderTwoTone';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';
import { Card } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 40,
    height: 40,
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      alignItems: 'right',
      alignSelf: "end",
      textAlign: "center"
      
      
    },
    margin: theme.spacing(1),
    alignItems: 'right',
    alignSelf: "end",
    Align: "right",
    position: 'right',


  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  buttonsSide: {
    '& > *': {
      margin: theme.spacing(1),
      alignItems: 'right',
      alignSelf: "end",
      textAlign: "right"
      
    },
  },
}));
const MainFeaturedPost= (props) => {
  const classes = useStyles();
 
  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${props.image_url})` }}>
      {<img style={{ display: 'none' }} src={props.image_url} />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h4" color="inherit" >
              {props.title}
            </Typography>
            <Typography variant="h6" color="inherit" paragraph>
              {props.short_info}
            </Typography>
          </div>
        </Grid>
        <Grid item md={6} className={classes.buttonsSide}>
          <div className={classes.buttonsSide}>
      

            
          </div>
        </Grid>
      </Grid>
    </Paper>

  );
}

const mapStateProps = (state) => ({
  message: state.user.message,
  currentUser: state.user.currentUser,
  interests: state.user.interests,
  lenta: state.user.lenta,
  iscard: state.user.iscard,
  Card:  state.user.Card
})

export default connect(mapStateProps, {})(MainFeaturedPost)
