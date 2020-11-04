import React from 'react';
import SignUp from './Signup';

class registration extends React.Component {
    state ={
        email: '',
        password: ''
      }
  onEmailChange = (e) =>{
    this.setState({
        email: e.target.value
    })
  }  
  onPasswordChange = (e) =>{
    this.setState({
      password: e.target.value
    })
  }
  onSignupSubmit = (e) =>{
    e.preventDefault();
   console.log('email: ' + this.state.email + ', password: ' + this.state.password);
  }
  render() {
    return(
      <SignUp
        onSignupSubmit={this.onSignupSubmit} 
        onEmailChange={this.onEmailChange}
        email={this.state.email}
        password={this.state.password}
        onPasswordChange={this.onPasswordChange}
      />
    )
  }
}

export default registration;