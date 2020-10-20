import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
//import Navbar from './NavBar';
import WelcomePage from './WelcomePage';
import Signup from './Signup';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/welcome' component={WelcomePage}/>
        <Route path='/Signup' component={Signup} />

      </Switch>
    </Router>
  );
}

export default App;
