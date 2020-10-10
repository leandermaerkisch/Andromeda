import React from 'react';
import SignIn from '../components/SignIn';

function sign_in_employee(){
  return(
    <div className = "sign_in_employee">
    <p>
    {SignIn()}
    </p>
    </div>
  );

}
export default sign_in_employee;