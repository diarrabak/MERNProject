import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function Contact(){
	return(
	<>
	    <Header />
		<main>
		  <h1> Contact</h1>
		  <form  action="#" method="POST" name="contact">
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
		       <label className="form-label  col-12 col-sm-2" htmlFor="email">Email</label>
		       <div className="col-12 col-sm-10">
		          <input type="email" className="form-control" name="email" id="email" />
		       </div>
			  </div>
			  
			  <div className="form-group row">
		       <label className="form-label  col-12 col-sm-2" htmlFor="subject">Subject</label>
		       <div className="col-12 col-sm-10">
		          <select name="subject" className="form-control">
				    <option value="">Choose a subject</option>
					<option value="">Comments</option>
					<option value="">Employment</option>
					<option value="">Others</option>
				  </select>
		       </div>
			  </div>
			  
			  <div className="form-group row">
		       <label className="form-label  col-12 col-sm-2" htmlFor="message">Message</label>
		       <div className="col-12 col-sm-10">
		          <textarea name="message" id="message" defaultValue={"Your text here"} className="form-control"></textarea>
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

export default Contact;