import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
//import Navbar from './NavBar';
import WelcomePage from './WelcomePage';
import SignUp from './Signup';
import Anketa from './Anketa';
import lenta from './lenta/src/index';
import event from './event/src/index';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/welcome' component={WelcomePage}/>
        <Route path='/Signup' component={SignUp} />
        <Route path='/Anketa' component={Anketa} />

        <Route path='/lenta' component={lenta} />
        <Route path='/event' component={event} />

        <Route path='/' component={lenta} />

      
        <Redirect to='/' component={lenta}/>

      </Switch>
    </Router>
  );
}


export default App;
