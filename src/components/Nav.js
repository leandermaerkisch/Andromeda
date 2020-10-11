  import React, { Component } from 'react';
  import { Button } from '@material-ui/core';
  import { Link } from 'react-router-dom';

  class Nav extends Component {
    render() {
      return (
        <div>
          <p>Logo </p>
          <ul className= "nav-links">
          <Link to '/sign-in-employee'>
            <li> Employee login</li>
          </Link>
          <Link>
            <li> Recruiter login</li>
          </Link>
        </div>
      );
    }
  }

export default Nav; 

