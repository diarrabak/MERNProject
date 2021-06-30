import React from 'react';
//Component used to display the list of all the Roles
const RoleList = (props) => {
	
    return ( 
    
        <ul className="list-group">
            <h2>Roles</h2>
			{/*Roles are defined as state variable in the Role component*/}
            {props.roles.map((item,id) => (
               <li className="list-item" key={id}> 
			   {/*Each time a Role is clicked, its details appears */}
			        <a href="#!" className="list-item" 
					
                    onClick={props.updateCurrentRole.bind(this,item)}>{item.role}</a>
				</li>
            ))}
        </ul>
   
    );
}
 
export default RoleList;
