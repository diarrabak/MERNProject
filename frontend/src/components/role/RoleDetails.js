import React from 'react';
//This component shows the details of the selected Role
const RoleDetails = (props) => {
    return (
	 <>
         <h2 >{props.role.role} details</h2>
       
            <div >
                <p>role: {props.role.role}</p>
		
            </div>
       
      </>
    );
}
 
export default RoleDetails;