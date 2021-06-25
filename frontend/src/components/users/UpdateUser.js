import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import EditUser from './EditUser';
import {Link} from 'react-router-dom';
import axios from 'axios';
//Component used to display the list of all the Users
class UpdateUser extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = {
      users: [],        //List of all Users
      currentUserId: '',  //Selected User id
	  currentUser:{},
    };
	
	//Set the select value to the selected option value
    this.selectChange = this.selectChange.bind(this);
	//this.getCurrentUser = this.getCurrentUser.bind(this);
  }
  
  //Function to update the select value
  selectChange(e) {
 
    this.setState({ currentUserId: e.target.value });
	 e.preventDefault();
  }
  
  //When the component is active on the DOM
  //The values pulled from database to fill the dropdown menu
  componentDidMount() {
    const url = 'http://localhost:5000/users/';  //Url of the controller 
	
    // Use of the get controllers through the axios API
    axios.get(url)
      .then((Response) => {
        this.setState({
          users: Response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
	  
  };
   

   //Get the selected User from the database
  getCurrentUser(event) {
  event.preventDefault();
         //console.log('id='+this.state.currentUserId);
    // User removal enpoint from our controllers
   axios.get('http://localhost:5000/user/'+this.state.currentUserId)
   .then((Response) => {
        this.setState({
          currentUser: Response.data
		 
        })
		 //console.log('element='+this.state.currentUser);
      })
      .catch((error) => {
        console.log(error);
      });
	  
  }
  
	
 render () {
 
    return ( 
	
	<>
        <Header />
            <main>
				<form onSubmit={this.getCurrentUser.bind(this)}>
				  
				  <div className="form-group row">
					   <label className="form-label  col-12 col-sm-2" htmlFor="user">User list</label>
					   <div className="col-12 col-sm-6">
					   {/*Select menu filled with the Users list from the database*/}
						  <select value={this.state.currentUserId} onChange={this.selectChange} className="form-control" name="user" id="user">
						   <option value="">== Choose a User == </option>
						   {/*Capitalize the first letter*/}
						  {this.state.users.map((item) => (
							<option value={item._id} key={item._id}> {item.username.charAt(0).toUpperCase()+item.username.substring(1)} </option> 
							
							))}
						  </select>
					   </div>
					  
					  <div className="col-12 col-sm-4">
				
					  <input 
					  
					  type="submit" className="btn btn-success" value="Edit"/>
					  </div>
					  </div>
					 
					 
				</form>
				 <EditUser currentUser={this.state.currentUser} currentUserId={this.state.currentUserId} />
				  <div className="form-group row">
					  
					   <div className="offset-sm-6 col-12 col-sm-6">
						 <Link to="/User" > Back to User list </Link>
					  </div>
					  </div>
			</main>
			
		<Footer />
	</>
    );
  }
}
 
export default UpdateUser;




















