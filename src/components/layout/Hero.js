import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
//import heroImage from '../heroImage.svg';

class Hero extends Component {
  render() {
    return (
      <div>
        <h1>Hire Faster With Internal Employees</h1>
        <p>"Andromeda empowers companies to fill vacant position by recommending internal employees using artificial intelligence.  Stop spending money on recruiting external candidates, use what you already have."</p>
        <Button variant="outlined" color="primary">Start Now</Button>
      </div>  
    );  
  }
}

const navStyle = {
  background: '#333',
}

export default Hero;