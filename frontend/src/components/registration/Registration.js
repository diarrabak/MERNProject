import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

//This fonction allows registering a new presenter. it will saved the presenter to the database. 
function Registration(){
	return(
	<>
	    <Header />
		<main>
		  <h1> Register to attend</h1>
		 
		    <form  action="" method="POST" name="registration">
			 <div className="form-group row">
		       <label className="form-label col-12 col-sm-2" htmlFor="fname">First name</label>
		       <div className="col-12 col-sm-10">
		          <input type="text" className="form-control" name="fname" id="fname" />
		       </div>
			  </div>
			  
			  <div className="form-group row">
		       <label className="form-label  col-12 col-sm-2" htmlFor="lname">Last name</label>
		       <div className="col-12 col-sm-10">
		          <input type="text" className="form-control" name="lname" id="lname" />
		       </div>
			  </div>
			  
			  <div className="form-group row">
		       <label className="form-label  col-12 col-sm-2" htmlFor="experience">Experience</label>
		       <div className="col-12 col-sm-10">
		          <input type="text" className="form-control" name="experience" id="experience" />
		       </div>
			  </div>
			  
			  <div className="form-group row">
		       <label className="form-label  col-12 col-sm-2" htmlFor="speciality">Speciality</label>
		       <div className="col-12 col-sm-10">
		          <input type="text" className="form-control" name="speciality" id="speciality" />
		       </div>
			  </div>
			  
			  <div className="form-group row">
		       <label className="form-label  col-12 col-sm-2" htmlFor="picture">Picture</label>
		       <div className="col-12 col-sm-10">
		          <input type="file" className="form-control" name="picture" id="picture" />
		       </div>
			  </div>
			   <div className="row">
			   <div className="col-12 offset-sm-2">
			  <input type="submit" className="btn btn-success" name="submit" />
			  </div>
			  </div>
		    </form>
		
		  
		</main>
		<Footer />
	</>
	);
}

export default Registration;