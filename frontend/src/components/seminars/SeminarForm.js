import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
//import { useHistory  } from "react-router-dom";
import Header from '../header/Header';
import Footer from '../footer/Footer';

 // This component is used to create a new seminar and save to the database
class SeminarForm extends React.Component {
	
	constructor(props) {
    super(props);
    this.state = {
	  users: [],  //List of all users
	  selectedUsers:[],
	  topics: [],  //List of all seminars
	  selectedTopics:[],
	  reviews: [],  //List of all seminars
	  selectedReviews:[],
    }
    //Connect the selected element to the update function
    //this.getUserTopicRev = this.getUserTopicRev.bind(this);
	this.selectedUsersList = this.selectedUsersList.bind(this);
	this.selectedTopicsList = this.selectedTopicsList.bind(this);
	this.selectedReviewsList = this.selectedReviewsList.bind(this);
  }
	//method appending the form data to the seminar fields
    submitSeminar(event) {
		 event.preventDefault();

        //Our controller endpoint to save data to the database
        axios.post('http://localhost:5000/seminars', {
            title: this.refs.title.value,
            content: this.refs.content.value,
            date: this.refs.date.value,
            place: this.refs.place.value,
			users: this.refs.users.value,
            topics: this.refs.topics.value,
			reviews: this.refs.reviews.value,
        })
        .then((response) => {
            console.log(response);
        })
		//Error message in case saving does not work
        .catch((error) => {
            console.log(error);
        });
    }
	
	 //Function to update the select value
  selectedUsersList(e) {
 
    this.setState({ selectedUsers: Array.from(e.target.selectedOptions, item => item.value) });
	 e.preventDefault();
  }
  
  //Function to update the select value
  selectedTopicsList(e) {
 
    this.setState({ selectedTopics: Array.from(e.target.selectedOptions, item => item.value) });
	 e.preventDefault();
  }
  
  //Function to update the select value
  selectedReviewsList(e) {
 
    this.setState({ selectedReviews: Array.from(e.target.selectedOptions, item => item.value)});
	 e.preventDefault();
  }
  
  
  componentDidMount() {
	
	 //Selected seminar is affected to the current seminar with this function
  //getUserTopicRev() {
       
	      //if(mongoose.Types.ObjectId.isValid(item.topics[i])){
				 //console.log('id='+this.state.currentSeminarId);
			// Seminar removal enpoint from our controllers
		   axios.get('http://localhost:5000/users/')
		   .then((Response) => {
				this.setState({
				users: Response.data,
				 
				})
				 console.log('element='+Response.data);
			  })
			  .catch((error) => {
				console.log(error);
			  });
	  
			// Seminar removal enpoint from our controllers
		   axios.get('http://localhost:5000/topics/')
		   .then((Response) => {
				this.setState({
				topics:Response.data,
				 
				})
				 //console.log('element='+Response.data);
			  })
			  .catch((error) => {
				console.log(error);
			  });
   
			// Seminar removal enpoint from our controllers
		   axios.get('http://localhost:5000/reviews/')
		   .then((Response) => {
				this.setState({
				reviews: Response.data,
				 
				})
				 //console.log('element='+Response.data);
			  })
			  .catch((error) => {
				console.log(error);
			  });
   
  //}
  }
	
	//redirect function to be included so that we go back to seminar list each time a new seminar is added
  
    render() { 
	
        return ( 
		<>
		   <Header />
            <main>
                <h1 >Create a new seminar</h1>
				{/*Form used to fill the seminar component*/}			
				<form onSubmit={this.submitSeminar.bind(this)}>
			 <div className="form-group row">
		       <label className="form-label col-12 col-sm-2" htmlFor="title">Seminar title</label>
		       <div className="col-12 col-sm-10">
		          <input type="text" className="form-control"  name="title" id="title" ref="title" required/>
		       </div>
			  </div>
			  
			  <div className="form-group row">
		       <label className="form-label  col-12 col-sm-2" htmlFor="content">Seminar content</label>
		       <div className="col-12 col-sm-10">
		          <input type="text" className="form-control"  name="content" id="content" ref="content" required/>
		       </div>
			  </div>
			  
			  <div className="form-group row">
		       <label className="form-label  col-12 col-sm-2" htmlFor="date">Seminar date</label>
		       <div className="col-12 col-sm-10">
		          <input type="date" className="form-control"  name="date" id="date" ref="date" required/>
		       </div>
			  </div>
			  
			  <div className="form-group row">
		       <label className="form-label  col-12 col-sm-2" htmlFor="place">Seminar location</label>
		       <div className="col-12 col-sm-10">
		          <input type="text" className="form-control"  name="place" id="place" ref="place" required/>
		       </div>
			  </div>
			  
			  {/*Since it is a many to many relationship, no need to include users and topics here*/}
			  
			   <div className="form-group row">
		       <label className="form-label  col-12 col-sm-2" htmlFor="users">Seminar users</label>
		       <div className="col-12 col-sm-10">
				 <select multiple={true} value={this.state.selectedUsers} onChange={this.selectedUsersList} className="form-control" name="users" ref="users">
						   <option value="">== Choose users == </option>
						   {/*Capitalize the first letter*/}
						  {this.state.users.map((item) => (
							<option value={item._id} key={item._id}> {item.username.charAt(0).toUpperCase()+item.username.substring(1)} </option> 
							
							))}
				 </select>
		       </div> 
			  </div>
			   <div className="form-group row">
		       <label className="form-label  col-12 col-sm-2" htmlFor="topics">Seminar reviews</label>
		       <div className="col-12 col-sm-10">
		          <select multiple={true} value={this.state.selectedReviews} onChange={this.selectedReviewsList} className="form-control" name="reviews" ref="reviews">
						   <option value="">== Choose reviews == </option>
						   {/*Capitalize the first letter*/}
						  {this.state.reviews.map((item) => (
							<option value={item._id} key={item._id}> {item.comment.charAt(0).toUpperCase()+item.comment.substring(1)} </option> 
							
							))}
				   </select>
		       </div>
			  </div>
			  
			   <div className="form-group row">
		       <label className="form-label  col-12 col-sm-2" htmlFor="topics">Seminar topics</label>
		       <div className="col-12 col-sm-10">
		          <select multiple={true} value={this.state.selectedTopics} onChange={this.selectedTopicsList} className="form-control" name="topics" ref="topics">
						   <option value="">== Choose topics == </option>
						   {/*Capitalize the first letter*/}
						  {this.state.topics.map((item) => (
							<option value={item._id} key={item._id}> {item.topic_name.charAt(0).toUpperCase()+item.topic_name.substring(1)} </option> 
							
							))}
				   </select>
		       </div>
			  </div>
			  
			  
			  <div className="row">
			  <div className="offset-sm-2 col-12 col-sm-4">
			  <input onClick={event =>  window.location.href='/seminar'} type="submit" className="btn btn-success" />
			  </div>
			  {/*Link back to seminar list*/}
			   <div className="col-12 col-sm-6">
                 <Link to="/seminar" > Back to seminar list </Link>
		     </div>
			 </div>
		    </form>
			
            </main>
			
			 <Footer />
			 </>
        );
    }
}
 
export default SeminarForm;