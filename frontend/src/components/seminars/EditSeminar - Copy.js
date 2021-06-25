

import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useHistory  } from "react-router-dom";
// import Header from '../header/Header';
// import Footer from '../footer/Footer';

 // This component is used to create a new seminar and save to the database
class EditSeminar extends React.Component {
	
	constructor(props) {
    super(props);
    this.state = {
      seminars: [],        //List of all seminars
      currentSeminarId: '',  //Selected seminar id
	  currentSeminar:{},
    };
   }
	//method appending the form data to the seminar fields
    submitSeminar(event) {
		 event.preventDefault();

        //Our controller endpoint to save data to the database
        axios.post('http://localhost:4000/seminars', {
            title: this.refs.title.value,
            content: this.refs.content.value,
            date: this.refs.date.value,
            place: this.refs.place.value,
        })
        .then((response) => {
            console.log(response);
        })
		//Error message in case saving does not work
        .catch((error) => {
            console.log(error);
        });
    }
	
	//redirect function to be included so that we go back to seminar list each time a new seminar is added
  
    render() { 
	
        return ( 
		<>
		{/*<Header />
		<main>
		<h1 >Update a new seminar</h1>*/}
			
				{/*Form used to fill the seminar component*/}			
				<form onSubmit={this.submitSeminar.bind(this)}>
			 <div className="form-group row">
		       <label className="form-label col-12 col-sm-2" htmlFor="title">Seminar title</label>
		       <div className="col-12 col-sm-10">
		          <input type="text" className="form-control" defaultValue={this.state.currentSeminar.content} name="title" id="title" ref="title"/>
		       </div>
			  </div>
			  
			  <div className="form-group row">
		       <label className="form-label  col-12 col-sm-2" htmlFor="content">Seminar content</label>
		       <div className="col-12 col-sm-10">
		          <input type="text" className="form-control"  name="content" id="content" ref="content"/>
		       </div>
			  </div>
			  
			  <div className="form-group row">
		       <label className="form-label  col-12 col-sm-2" htmlFor="date">Seminar date</label>
		       <div className="col-12 col-sm-10">
		          <input type="date" className="form-control" name="date" id="date" ref="date"/>
		       </div>
			  </div>
			  
			  <div className="form-group row">
		       <label className="form-label  col-12 col-sm-2" htmlFor="place">Seminar location</label>
		       <div className="col-12 col-sm-10">
		          <input type="text" className="form-control" name="place" id="place" ref="place" />
		       </div>
			  </div>
			  
			  {/*Since it is a many to many relationship, no need to include users and topics here*/}
			  
			  {/* <div className="form-group row">
		       <label className="form-label  col-12 col-sm-2" htmlFor="users">Seminar users</label>
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
		       <label className="form-label  col-12 col-sm-2" htmlFor="topics">Seminar topics</label>
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
			  <input type="submit" className="btn btn-success" value="Update" />
			  </div>
			  {/*Link back to seminar list
			   <div className="col-12 col-sm-6">
                 <Link to="/seminar" > Back to seminar list </Link>
			  </div>*/}
			 </div>
		    </form>
			{/*
            </main>
			
			<Footer />*/}
			 </>
        );
    }
}
 
export default EditSeminar;