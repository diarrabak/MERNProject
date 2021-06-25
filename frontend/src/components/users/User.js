import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import UserList from './UserList';
import UserDetails from './UserDetails';
import Header from '../header/Header';
import Footer from '../footer/Footer';

//Main component of User feature
class User extends React.Component {
	
  constructor(props) {
    super(props);

    this.state = {
      users: [],        //List of all Users
      currentUser: {},  //Selected User
    }
    //Connect the selected element to the update function
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }
  //When the component is active on the DOM
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

   //Selected User is affected to the current User with this function
  updateCurrentUser(item) {
    this.setState({
      currentUser: item,
    })
  }

 render () {
	return(
	 <>
	    <Header />
		<main>
		  <h1> Users list</h1>
		  
		  <div className="row">
		  {/*List of User from the state variable*/}
          <div className="col-12 col-sm-6"><UserList users={this.state.users}
            updateCurrentUser={this.updateCurrentUser}/>
          </div>
		  {/*Details of the selected User from state variable*/}
          <div className="col-12 col-sm-6"><UserDetails user={this.state.currentUser}/></div>
        </div>
		
		 <div className="row">
		 <div className="col-12 col-sm-4">
		 {/*Link to the page of new User creation. This must be created in routes in App component*/}
          <Link to="newUser" > Add new User </Link>
		  </div>
		  {/*Link to the page of User removal*/}
		  <div className="col-12 col-sm-4">
          <Link to="deleteUser" > Remove a User </Link>
		  </div>
		  
		  <div className="col-12 col-sm-4">
		   {/*Link to the page of updating a User */}
          <Link to="updateUser" > Update a User </Link>
		  </div>
		  
        </div>
     
		</main>
		<Footer />
	</>
		
	);
 }
}

export default User;