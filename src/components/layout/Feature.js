import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
//import heroImage from '../heroImage.svg';

class Feature extends Component {
  render() {
    return (
      <div>
        <h2>Faster Hiring</h2>
        <p>It takes in average 43 days to fill a vacant positions. Every day conveys lost productivity that never can be recouped.</p> 
        <p>Fill an open position within days by promoting existing employees who have the skills to step up and are already familiar with your culture.</p>
        <Button variant="outlined" color="primary">Start Now</Button>
      </div>  
    );  
  }
}

export default Feature;