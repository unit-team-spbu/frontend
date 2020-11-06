import React from 'react';

import Login from './Login';


class WelcomePage extends React.Component {
  state ={
    login: '',
    password: ''
  }
  onloginChange = (e) =>{
    this.setState({
        login: e.target.value
    })
  }  
  onPasswordChange = (e) =>{
    this.setState({
      password: e.target.value
    })
  }
  onSigninSubmit = (e) =>{
    e.preventDefault();
    console.log('login: ' + this.state.login + ', password: ' + this.state.password);
  }
  render() {
    return(
      <Login
        onSigninSubmit={this.onSigninSubmit} 
        onloginChange={this.onloginChange}
        login={this.state.login}
        password={this.state.password}
        onPasswordChange={this.onPasswordChange}
      />
    )
  }
}

export default WelcomePage;