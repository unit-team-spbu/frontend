import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MainFeaturedPost from './MainFeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Grid from '@material-ui/core/Grid';
import markdown from './text'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const posts = [markdown];

export default function Event(props) {
  const { event } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <MainFeaturedPost title={event.title} image_url={event.image_url} short_info={event.short_info} />

      <Grid container spacing={5} className={classes.mainGrid}>
        <Main posts={posts} />
        
        <Sidebar date={event.date} format={event.format} where={event.where} price={event.price} time={event.time} />
      </Grid>
    </React.Fragment>
  );
}

