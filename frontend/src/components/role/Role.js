import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import RoleList from './RoleList';
import RoleDetails from './RoleDetails';
import Header from '../header/Header';
import Footer from '../footer/Footer';

//Main component of Role feature
class Role extends React.Component {
	
  constructor(props) {
    super(props);

    this.state = {
      roles: [],        //List of all Roles
      currentRole: {},  //Selected Role
    }
    //Connect the selected element to the update function
    this.updateCurrentRole = this.updateCurrentRole.bind(this);
  }
  //When the component is active on the DOM
  componentDidMount() {
    const url = 'http://localhost:5000/roles/';  //Url of the controller 
	
    // Use of the get controllers through the axios API
    axios.get(url)
      .then((Response) => {
        this.setState({
          roles: Response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

   //Selected Role is affected to the current Role with this function
  updateCurrentRole(item) {
    this.setState({
      currentRole: item,
    })
  }

 render () {
	return(
	 <>
	    <Header />
		<main>
		  <h1> Roles list</h1>
		  
		  <div className="row">
		  {/*List of Role from the state variable*/}
          <div className="col-12 col-sm-6"><RoleList roles={this.state.roles}
            updateCurrentRole={this.updateCurrentRole}/>
          </div>
		  {/*Details of the selected Role from state variable*/}
          <div className="col-12 col-sm-6"><RoleDetails role={this.state.currentRole}/></div>
        </div>
		
		 <div className="row">
		 <div className="col-12 col-sm-4">
		 {/*Link to the page of new Role creation. This must be created in routes in App component*/}
          <Link to="newRole" > Add new Role </Link>
		  </div>
		  {/*Link to the page of Role removal*/}
		  <div className="col-12 col-sm-4">
          <Link to="deleteRole" > Remove a Role </Link>
		  </div>
		  
		  <div className="col-12 col-sm-4">
		   {/*Link to the page of updating a Role */}
          <Link to="updateRole" > Update a Role </Link>
		  </div>
		  
        </div>
     
		</main>
		<Footer />
	</>
		
	);
 }
}

export default Role;