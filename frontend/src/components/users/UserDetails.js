import React from 'react';
//This component shows the details of the selected user
const UserDetails = (props) => {
    return (
	 <>
         <h2 >{props.user.username} details</h2>
       
            <div >
			{/* <img src="soccer.jpeg" alt="Soccer player"/>*/}
                <p>Username: {props.user.username}</p>
                <p>First name: {props.user.first_name}</p>
                <p>Last name: {props.user.last_name}</p>
                <p>Email: {props.user.email}</p>
                <p>Address: {props.user.address}</p>
                <p>Password: {props.user.password}</p>
					{/*List of */}
				
					
				    {/* <ul className="list-group">
				       {props.user.users.map((item) => (
                        <li className="list-item" key={item}> 
					
                        {item}
				         </li>
                       ))}
					</ul>*/}
				
				
				
				    {/*List of roles*/}
				 <p>Roles: {props.user.roles}</p>
				 

            </div>
       
      </>
    );
}
 
export default UserDetails;