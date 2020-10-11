import React from 'react';
import Button from '@material-ui/core/Button';


function SidebarEmployee({name, id}){
  return(
    <div className='Side-bar'>
    <Col xs={6} md={4}>
      <Image src="./assets/Employee_profile_pic.jpg" roundedCircle />
    </Col>
    <h3>{name}</h3>
    <p>{id}</p>
    <p>{id}</p>
    <p>Applications</p>
    <p>Skills</p>
    <p>Settings</p>
    </div>

  );
}

export default SidebarEmployee;