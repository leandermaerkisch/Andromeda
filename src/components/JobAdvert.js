import React from 'react';
import Button from '@material-ui/core/Button';

function JobAdvert({name, company, location, score}) {
  return(
    <div className='Job-advert'>
      <h3>{name}</h3>
      <p>{company}</p>
      <p>{location}</p>
      <h3>{score}</h3>
      <Button variant="outlined" color="primary">Apply</Button>
    </div>

  );
}

export default JobAdvert;