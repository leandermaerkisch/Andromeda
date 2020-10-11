import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Button, AppBar } from '@material-ui/core'
import Nav from './components/layout/Nav';
import Hero from './components/layout/Hero';
import SignInRecruiter from './components/SignInRecruiter';
import SignInEmployee from './components/SignInEmployee'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BrowseJobsEmployee from './components/BrowseJobsEmployee'
//import './app.css'


class App extends Component {
 /* state = */
  render(){
    return(
      <Router>
        <div className = "App">
          <Nav />
          <Hero />
          <h3>Welcome To Andromeda</h3>
          <Switch>
            <Route path ='/sign-in-employee' components= {SignInEmployee} />
            <Route path ='/sign-in-recruiter' components= {SignInRecruiter} />
            <Route path ='/browse-jobs-employee' components= {BrowseJobsEmployee} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;


/*
function App(){
  return(
  <Router>
    <div className = "App">
      <Nav />
      <h1>Welcome To Andromeda</h1>
      <a>{SignIn()}</a>
      <Route path= "/sign_in_employee" components={sign_in_employee} />
  </div>
  </Router>
  
  );

}


ReactDOM.render(App, document.getElementById('root'));


export default App;


ReactDOM.render(
  
  <Router>
   <div className = "App">
      <Nav />
      <h1>Welcome To Andromeda</h1>
      <a>{SignIn()}</a>
      <Route path= "/sign_in_employee" components={sign_in_employee} />
  </div>
  </Router>
  document.getElementById('root')
);
*/