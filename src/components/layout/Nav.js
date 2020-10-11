import React from 'react';
import { Link } from 'react-router-dom';

function Nav () {
  return (
    <header style={navStyle}>
      <h1>Logo</h1>
      <Link to='/sign-in-employee'>
            <li> Employee login</li>
          </Link>
          <Link to='/sign-in-recruiter'>
            <li> Recruiter login</li>
          </Link>
    </header>
  )
}

const navStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

export default Nav;
