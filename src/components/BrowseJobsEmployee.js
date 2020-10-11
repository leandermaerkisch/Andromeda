import React from 'react';
import Button from '@material-ui/core/Button';
import JobAdvert from './JobAdvert';
import SidebarEmployee from './SidebarEmployee';


function BrowseJobsEmployee() {
  return(
    <div className='Browse-jobs-employee'>
      <Button variant="outlined" color="primary">Refresh</Button>
      <JobAdvert name= "UX Designer" company= "Google" location= "California" score= "95%" />
      <JobAdvert name= "UX Designer" company= "Google" location= "California" score= "95%" />
      <JobAdvert name= "UX Designer" company= "Google" location= "California" score= "95%" />
      <JobAdvert name= "UX Designer" company= "Google" location= "California" score= "95%" />
      <JobAdvert name= "UX Designer" company= "Google" location= "California" score= "95%" />
      <JobAdvert name= "UX Designer" company= "Google" location= "California" score= "95%" />
    </div>

  )
}

export default BrowseJobsEmployee;