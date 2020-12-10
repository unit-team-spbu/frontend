import React from 'react';
import { connect } from 'react-redux';
import Blogs from './Blogs';
import {setCard} from './../../../reducers/userReducer'

class event extends React.Component{

   componentDidMount(){
    //super(props);
    //let id=window.location.pathname.slice(7);
    //let m=localStorage.getItem('token');
   this.props.setCard(localStorage.getItem('token'), window.location.pathname.slice(7));
    
  }
    
  render(){
  
        return (
        <Blogs /> 
        );
    
  }
}

const mapStateProps = (state) => ({
  message: state.user.message,
  currentUser: state.user.currentUser,
  lenta: state.user.lenta,
  interests: state.user.interests,
  Card: state.user.Card,
  iscard: state.user.iscard,
})

export default connect(mapStateProps, {setCard})(event)