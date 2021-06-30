import React from 'react';

//Component used to display the list of all the Users
const UserList = (props) => {
	
    return ( 
    
        <ul className="list-group">
            <h2>Users</h2>
			{/*Users are defined as state variable in the User component*/}
            {props.users.map((item,id) => (
               <li className="list-item" key={id}> 
			   {/*Each time a User is clicked, its details appears */}
			<a href="#!" className="list-item"
					
                    onClick={props.updateCurrentUser.bind(this,item)}>{item.username}</a>
				</li>
            ))}
        </ul>
   
    );
}
 
export default UserList;
