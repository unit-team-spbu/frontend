import React from 'react';
import { connect } from 'react-redux';
import AnketaProps from './Anketa';
import {setlk} from './../reducers/userReducer'

class anketa extends React.Component{

  componentDidMount(){

    this.props.setlk(false, localStorage.getItem('token'));
    
   
  }

  render(){
    //if (this.props.Ind[35] ) this.props.Ind[35]=false;
    //debugger
  return (
    <AnketaProps />
  );
  }
}

const mapStateProps = (state) => ({
  message: state.user.message,
  currentUser: state.user.currentUser,
  lenta: state.user.lenta,
  interests: state.user.interests,
  Card: state.user.Card,
  isPost: state.user.isPost,
    isGet: state.user.isGet,
    isExit: state.user.isExit,
    isEvent: state.user.isEvent,
    Ind: state.user.Ind,
    isLog: state.user.isLog, 
})

export default connect(mapStateProps, {setlk})(anketa)