import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import {Link} from 'react-router-dom';
import axios from 'axios';
//Component used to display the list of all the Users
class DeleteUser extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = {
      users: [],        //List of all Users
      currentUserId: '',  //Selected User id
    };
	
	//Set the select value to the selected option value
    this.selectChange = this.selectChange.bind(this);
  }
  
  //Function to update the select value
  selectChange(e) {
    this.setState({ currentUserId: e.target.value });
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
  

   //Remove the selected User from the database
  removeCurrentUser() {
         
	//console.log('id='+this.state.currentUserId);
    // User removal enpoint from our controllers
   axios.delete('http://localhost:5000/users/'+this.state.currentUserId);
  }
	
 render () {
 
    return ( 
	
	<>
	 <Header />
		<main>
    
	        <form onSubmit={this.removeCurrentUser.bind(this)}>
			  
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
				  
				  type="submit" className="btn btn-danger" value="Delete"/>
				  </div>
				  </div>
				  
				  <div className="form-group row">
				  {/*Link back to User list*/}
				   <div className="offset-sm-6 col-12 col-sm-6">
					 <Link to="/User" > Back to User list </Link>
				 </div>
			  </div>
		    </form>
		 </main>
		<Footer />
	</>
    );
  }
}
 
export default DeleteUser;
