import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import SeminarList from './SeminarList';
import SeminarDetails from './SeminarDetails';
import Header from '../header/Header';
import Footer from '../footer/Footer';
//import mongoose from 'mongoose';

//Main component of seminar feature
class Seminar extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = {
      seminars: [],        //List of all seminars
      currentSeminar: {},  //Selected seminar
	  users: [],  
	  topics: [],  
	  reviews: [],  
    }
    //Connect the selected element to the update function
    this.updateCurrentSeminar = this.updateCurrentSeminar.bind(this);
  }
  //When the component is active on the DOM
  componentDidMount() {
    const url = 'http://localhost:5000/seminars';  //Url of the controller 
	
    // Use of the get controllers through the axios API
    axios.get(url)
      .then((Response) => {
        this.setState({
          seminars: Response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

   //Selected seminar is affected to the current seminar with this function
  updateCurrentSeminar(item) {
    this.setState({
      currentSeminar: item, 
	  //Initialize each variable each time the seminar changes
	  users:[],
	  topics:[],
	  reviews:[],
    })
	
	// Pull each user of the current seminar from the database
	let currentUsers=item.users;
    let nbUsers=currentUsers.length;
  
   if(nbUsers>0){ //If users variable is not empty
	   for(let i=0;i<nbUsers;i++){
	   
	      //if(mongoose.Types.ObjectId.isValid(item.topics[i])){
				 //console.log('id='+this.state.currentSeminarId);
			// Seminar removal enpoint from our controllers
		   axios.get('http://localhost:5000/user/'+item.users[i])
		   .then((Response) => {
				this.setState({
				  users: [...this.state.users,Response.data],
				 
				})
				 //console.log('element='+Response.data);
			  })
			  .catch((error) => {
				console.log(error);
			  });
	   //}
	   }
   }
   
   // Pull each topic of the current seminar from the database
   let currentTopics=item.topics;
    let nbTopics=currentTopics.length;
  
   if(nbTopics>0){  //If topics variable is not empty
       
	   for(let i=0;i<nbTopics;i++){
	   
	     //if(mongoose.Types.ObjectId.isValid(item.topics[i])){
				 //console.log('id='+this.state.currentSeminarId);
			// Seminar removal enpoint from our controllers
		   axios.get('http://localhost:5000/topics/'+item.topics[i])
		   .then((Response) => {
				this.setState({
				  topics:[...this.state.topics,Response.data],
				 
				})
				 //console.log('element='+Response.data);
			  })
			  .catch((error) => {
				console.log(error);
			  });
	   //}
	   }
   }
   
   // Pull each review of the current seminar from the database
   let currentReviews=item.reviews;
    let nbReviews=currentReviews.length;
  
   if(nbReviews>0){ //If reviews variable is not empty
      this.reviews='';
	   for(let i=0;i<nbReviews;i++){
	     // if(mongoose.Types.ObjectId.isValid(item.topics[i])){
				 //console.log('id='+this.state.currentSeminarId);
			// Seminar removal enpoint from our controllers
		   axios.get('http://localhost:5000/review/'+item.reviews[i])
		   .then((Response) => {
				this.setState({
				  reviews: [...this.state.reviews,Response.data],
				 
				})
				 //console.log('element='+Response.data);
			  })
			  .catch((error) => {
				console.log(error);
			  });
	   //}
	   }
   }
   
   
  }
  

 render () {
	return(
	 <>
	    <Header />
		<main>
		  <h1> Seminars list</h1>
		  
		  <div className="row">
		  {/*List of seminar from the state variable*/}
	        <div className="seminars col-12"><SeminarList seminars={this.state.seminars}
               updateCurrentSeminar={this.updateCurrentSeminar}/>
			    <div className="seminar-details col-12"><SeminarDetails seminar={this.state.currentSeminar}  users={this.state.users} topics={this.state.topics} reviews={this.state.reviews} />
			</div>
            </div>
		  {/*Details of the selected seminar from state variable*/}
           
         </div>
		
		 <div className="row">
		 <div className="col-12 col-sm-4">
		 {/*Link to the page of new seminar creation. This must be created in routes in App component*/}
          <Link to="newSeminar" > Add new seminar </Link>
		  </div>
		  {/*Link to the page of seminar removal*/}
		  <div className="col-12 col-sm-4">
          <Link to="deleteSeminar" > Remove a seminar </Link>
		  </div>
		  
		  <div className="col-12 col-sm-4">
		   {/*Link to the page of updating a seminar */}
          <Link to="updateSeminar" > Update a seminar </Link>
		  </div>
		  
        </div>
     
		</main>
		<Footer />
	</>
		
	);
 }
}

export default Seminar;