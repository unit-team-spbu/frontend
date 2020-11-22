import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MainFeaturedPost from './MainFeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Grid from '@material-ui/core/Grid';
import markdown from './text'
import { connect } from 'react-redux';
import { Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const posts = [markdown];

const Event= (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <MainFeaturedPost title={props.Card.title} image_url={"https://source.unsplash.com/random/?programming,it"+props.Card.tags[0]}  />

      <Grid container spacing={5}  className={classes.mainGrid}>

          <Card sm={3} className={classes.root}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" >
                {props.Card.description}
              </Typography>
            </CardContent>
            </Card>

        <Sidebar date={props.Card.startDate}  where={props.Card.location} price={props.Card.tags[1]}   />
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