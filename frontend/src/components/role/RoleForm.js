import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useHistory  } from "react-router-dom";
import Header from '../header/Header';
import Footer from '../footer/Footer';

 // This component is used to create a new Role and save to the database
class RoleForm extends React.Component {
	
	//method appending the form data to the Role fields
    submitRole(event) {
		 event.preventDefault();

        //Our controller endpoint to save data to the database
        axios.post('http://localhost:5000/roles/', {
            role: this.refs.role.value,
            
        })
        .then((response) => {
            console.log(response);
        })
		//Error message in case saving does not work
        .catch((error) => {
            console.log(error);
        });
    }
	
	//redirect function to be included so that we go back to Role list each time a new Role is added
  
    render() { 
	
        return ( 
		<>
		   <Header />
            <main>
                <h1 >Create a new Role</h1>
				{/*Form used to fill the Role component*/}			
				<form onSubmit={this.submitRole.bind(this)}>
			 <div className="form-group row">
		       <label className="form-label col-12 col-sm-2" htmlFor="role">role</label>
		       <div className="col-12 col-sm-10">
		          <input type="text" className="form-control" name="role" id="role" ref="role"/>
		       </div>
			  </div>
			  
			  
			 
			  <div className="row">
			  <div className="offset-sm-2 col-12 col-sm-4">
			  <input type="submit" className="btn btn-success" />
			  </div>
			  {/*Link back to Role list*/}
			   <div className="col-12 col-sm-6">
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
 
export default RoleForm;