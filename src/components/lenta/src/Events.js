import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MainFeaturedPost from './MainFeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Grid from '@material-ui/core/Grid';

import CardEvent from './cardevent';

import {connect} from 'react-redux';

import {Redirect} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(2),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));



const Events = (props) => {
  //const { events } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={3} className={classes.mainGrid}>
          <Grid container item xs={9} spacing={3}>
            {props.lenta.map((event) => (

              <Grid item xs={3} sm={4} key={event._id}>
              <CardEvent title={event.title}  image_url={"https://source.unsplash.com/random/?programming,it,"+event.title}
              short_info= {event.startDate}  id={event._id}>
              </CardEvent>

              </Grid>
            ))}
          </Grid>

          <Grid container item xs={3} sm={3} md={3}>
            <Sidebar date={"fgf"} format={"fgbfn"} where={"mk"} price={"kjbjh"} time={"jhbjh"} />
          </Grid>

        </Grid>

    </React.Fragment>
  );
}

const mapLentaStateProps = (state) => ({
  message: state.user.message,
  currentUser: state.user.currentUser,
  lenta: state.user.lenta,
})

export default connect(mapLentaStateProps, {})(Events)

