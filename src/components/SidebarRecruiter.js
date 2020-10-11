import React from 'react';
import Button from '@material-ui/core/Button';


function SidebarRecruiter({name, id}){
  return(
    <div className='Side-bar'>
    <Col xs={6} md={4}>
      <Image src="./assets/Recruiter_profile_pic.jpg" roundedCircle />
    </Col>
    <h3>{name}</h3>
    <p>{id}</p>
    <p>{id}</p>
    <p>Jobs</p>
    <p>Employees</p>
    <p>Settings</p>
    <Button variant="outlined" color="primary">Create new Job</Button>
    </div>

  );
}export default SidebarRecruiter;