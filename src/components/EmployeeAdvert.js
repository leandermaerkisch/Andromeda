import React from 'react';
import Button from '@material-ui/core/Button';


function EmployeeAdvert(name, occupation, id, score){
  return(
    <div className="Employee-advert">
      <h3>{name}</h3>
      <p>{occupatoon}</p>
      <p>{id}</p>
      <h3>{score}</h3>
      <Button variant="outlined" color="primary">Contact</Button>
    </div>
  )
}

export default EmployeeAdvert;