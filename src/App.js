import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Button, AppBar } from '@material-ui/core'
import Nav from './components/Nav';
import sign_in_employee from './pages/sign_in_employee';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return(
  <Router>
    <div className = "App">
      <Nav />
      <h1>Welcome To Andromeda</h1>
      <Route path= "/sign_in_employee" components={sign_in_employee} />
  </div>
  </Router>
  );

}

ReactDOM.render(App, document.getElementById('root'));
/*
ReactDOM.render(
  <div className="App">
    <header className="App-header">
      <AppBar position="static"></AppBar>
      <img src="/logo.svg" className="App-logo" alt="logo" />
      <h3> React on Repl.it! </h3>
      <p>
        Edit <code>src/App.js</code> to get started!
      </p>
      <p>Welcome to Andromeda</p>
      <Button color="primary">Get Started</Button> 
    </header>
  </div>,
  document.getElementById('root')
);

*/

export default App;
