import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useHistory  } from "react-router-dom";
import Header from '../header/Header';
import Footer from '../footer/Footer';

 // This component is used to create a new User and save to the database
class Login extends React.Component {

	//method appending the form data to the User fields
    loginUser(event) {
		 event.preventDefault();

        //Our controller endpoint to save data to the database
        axios.post('http://localhost:5000/login/', {
            username: this.refs.username.value,
			      password: this.refs.password.value,
        })
        .then((response) => {
						sessionStorage.setItem("username", response.data.username)
						document.body.innerHTML = sessionStorage.getItem("username");
            console.log(response.data);
						console.log("Reached!");

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
                <h1 >Login!</h1>
				{/*Form used to fill the User component*/}
				<form onSubmit={this.loginUser.bind(this)}>
			 <div className="form-group row">
		       <label className="form-label col-12 col-sm-2" htmlFor="username">Username</label>
		       <div className="col-12 col-sm-10">
		          <input type="text" className="form-control" name="username" id="username" ref="username"/>
		       </div>
			  </div>

			  <div className="form-group row">
		       <label className="form-label  col-12 col-sm-2" htmlFor="password">Password</label>
		       <div className="col-12 col-sm-10">
		          <input type="password" className="form-control" name="password" id="password" ref="password"/>
		       </div>
			  </div>

			  {/*Since it is a many to many relationship, no need to include users and topics here*/}

			  {/* <div className="form-group row">
		       <label className="form-label  col-12 col-sm-2" htmlFor="users">User users</label>
		       <div className="col-12 col-sm-10">
		          <select multiple className="form-control" name="users" id="users" ref="users">
				  <option value="">1</option>
				  <option value="">2</option>
				  <option value="">3</option>
				  <option value="">4</option>
				  </select>
		       </div>
			  </div>
			   <div className="form-group row">
		       <label className="form-label  col-12 col-sm-2" htmlFor="topics">User topics</label>
		       <div className="col-12 col-sm-10">
		          <select multiple className="form-control" name="topics" id="topics" ref="topics">
				  <option value="">1</option>
				  <option value="">2</option>
				  <option value="">3</option>
				  <option value="">4</option>
				  </select>
		       </div>
			  </div>*/}
			  <div className="row">
			  <div className="offset-sm-2 col-12 col-sm-4">
			  <input type="submit" className="btn btn-success" />
			  </div>
			  {/*Link back to User list*/}
			   <div className="col-12 col-sm-6">
            <Link to="/user/newUser" > Back to Registration </Link>
		     </div>
			 </div>
		    </form>

            </main>

			 <Footer />
			 </>
        );
    }
}

export default Login;