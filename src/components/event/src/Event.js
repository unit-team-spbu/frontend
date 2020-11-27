import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MainFeaturedPost from './MainFeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Grid from '@material-ui/core/Grid';
import Markdown from './text'
import { connect } from 'react-redux';
import { Card, CardContent, Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));



const Event= (props) => {
  const classes = useStyles();

//let posts = props.Card.description;
  return (
    <React.Fragment>
      <MainFeaturedPost title={props.Card.title} image_url={"https://source.unsplash.com/random/?programming,it,"+props.Card.title}  />

      <Grid container spacing={5} className={classes.mainGrid}>
          <Grid item xs={12} md={8}>
          <Divider />
          <Typography gutterBottom className={classes.markdown}  variant="overline" component="h2" >
                {props.Card.description}
              </Typography>
        </Grid>
       <Sidebar date={props.Card.startDate}  where={props.Card.tags[0]} price={props.Card.tags[2]} /> 
        
      </Grid>
    </React.Fragment>
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

export default connect(mapStateProps, {})(Event)