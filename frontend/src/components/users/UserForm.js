import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useHistory  } from "react-router-dom";
import Header from '../header/Header';
import Footer from '../footer/Footer';
//import md5 from 'js-md5';
//React.Component.prototype.$md5 = md5;


 // This component is used to create a new User and save to the database
class UserForm extends React.Component {
	
	//method appending the form data to the User fields
    submitUser(event) {
		 event.preventDefault();

		
        //Our controller endpoint to save data to the database
        axios.post('http://localhost:5000/users/', {

			username: this.refs.username.value,
            first_name: this.refs.first_name.value,
            last_name: this.refs.last_name.value,
            email: this.refs.email.value,
			address: this.refs.address.value,
			password: this.refs.password.value,
			
			
        })
        .then((response) => {
            console.log(response);
        })
		//Error message in case saving does not work
        .catch((error) => {
            console.log(error);
        });
    }
	
	//redirect function to be included so that we go back to User list each time a new User is added
  
    render() { 
	
        return ( 
		<>
		   <Header />
            <main>
                <h1 >Add a new User</h1>
				{/*Form used to fill the User component*/}			
				<form onSubmit={this.submitUser.bind(this)}>
				
			 <div className="form-group row">
		       <label className="form-label col-12 col-sm-2" htmlFor="username">Username</label>
		       <div className="col-12 col-sm-10">
		          <input type="text" className="form-control" name="username" id="username" ref="username"/>
		       </div>
			  </div>
			  
			  <div className="form-group row">
		       <label className="form-label  col-12 col-sm-2" htmlFor="first_name">User First name</label>
		       <div className="col-12 col-sm-10">
		          <input type="text" className="form-control" name="first_name" id="first_name" ref="first_name"/>
		       </div>
			  </div>

			  <div className="form-group row">
		       <label className="form-label  col-12 col-sm-2" htmlFor="last_name">User Last name</label>
		       <div className="col-12 col-sm-10">
		          <input type="text" className="form-control" name="last_name" id="last_name" ref="last_name"/>
		       </div>
			  </div>
			  
			  
		  
			  <div className="form-group row">
		       <label className="form-label  col-12 col-sm-2" htmlFor="email">User email</label>
		       <div className="col-12 col-sm-10">
		          <input type="text" className="form-control" name="email" id="email" ref="email" />
		       </div>
			  </div>

			  <div className="form-group row">
		       <label className="form-label  col-12 col-sm-2" htmlFor="address">User address</label>
		       <div className="col-12 col-sm-10">
		          <input type="text" className="form-control" name="address" id="address" ref="address"/>
		       </div>
			  </div>

			  <div className="form-group row">
		       <label className="form-label  col-12 col-sm-2" htmlFor="password">Password</label>
		       <div className="col-12 col-sm-10">
		          <input type="password" className="form-control" name="password" id="password" ref="password"/>
		       </div>
			  </div>
			  
			  <div className="row">
			  <div className="offset-sm-2 col-12 col-sm-4">
			  <input type="submit" onClick={event =>  window.location.href='/user'} className="btn btn-success" />
			  
			  </div>
			  </div>
			  
			  <div className="row">
			  
			  {/*Link back to User list*/}
			  <div className="offset-sm-2 col-12 col-sm-6">
                 <Link to="/Login" > Already registered? Sign In </Link>
		      </div>
			   <div className="col-12 col-sm-4">
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
 
export default UserForm;