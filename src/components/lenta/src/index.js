import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Blog from './Blog';
import {setLenta} from './../../../reducers/userReducer'

class lenta extends React.Component{

  componentDidMount(){
    this.props.setLenta(this.props.currentUser, false);
  }
  render(){
  return (
    <Blog />
  );
  }
}

const mapStateProps = (state) => ({
  message: state.user.message,
  currentUser: state.user.currentUser,
  lenta: state.user.lenta,
  interests: state.user.interests
})

export default connect(mapStateProps, {setLenta})(lenta)
