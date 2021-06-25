import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import {Link} from 'react-router-dom';
import axios from 'axios';
//Component used to display the list of all the Roles
class DeleteRole extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = {
      roles: [],        //List of all Roles
      currentRoleId: '',  //Selected Role id
    };
	
	//Set the select value to the selected option value
    this.selectChange = this.selectChange.bind(this);
  }
  
  //Function to update the select value
  selectChange(e) {
    this.setState({ currentRoleId: e.target.value });
  }
  
  //When the component is active on the DOM
  //The values pulled from database to fill the dropdown menu
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
  

   //Remove the selected Role from the database
  removeCurrentRole() {
         
	//console.log('id='+this.state.currentRoleId);
    // Role removal enpoint from our controllers
   axios.delete('http://localhost:5000/roles/'+this.state.currentRoleId);
  }
	
 render () {
 
    return ( 
	
	<>
	 <Header />
		<main>
    
	        <form onSubmit={this.removeCurrentRole.bind(this)}>
			  
			  <div className="form-group row">
				   <label className="form-label  col-12 col-sm-2" htmlFor="role">Role list</label>
				   <div className="col-12 col-sm-6">
				   {/*Select menu filled with the Roles list from the database*/}
					  <select value={this.state.currentRoleId} onChange={this.selectChange} className="form-control" name="role" id="role">
					   <option value="">== Choose a Role == </option>
					   {/*Capitalize the first letter*/}
					  {this.state.roles.map((item) => (
						<option value={item._id} key={item._id}> {item.role.charAt(0).toUpperCase()+item.role.substring(1)} </option>  
						
						))}
					  </select>
				   </div>
				  
				  <div className="col-12 col-sm-4">
			
				  <input type="submit" className="btn btn-danger" value="Delete"/>
				  </div>
				  </div>
				  
				  <div className="form-group row">
				  {/*Link back to Role list*/}
				   <div className="offset-sm-6 col-12 col-sm-6">
					 <Link to="/Role" > Back to Role list </Link>
				 </div>
			  </div>
		    </form>
		 </main>
		<Footer />
	</>
    );
  }
}
 
export default DeleteRole;
