import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import SeminarList from './SeminarList';
import SeminarDetails from './SeminarDetails';
import Header from '../header/Header';
import Footer from '../footer/Footer';

//Main component of seminar feature
class Seminar extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = {
      seminars: [],        //List of all seminars
      currentSeminar: {},  //Selected seminar
    }
    //Connect the selected element to the update function
    this.updateCurrentSeminar = this.updateCurrentSeminar.bind(this);
  }
  //When the component is active on the DOM
  componentDidMount() {
    const url = 'http://localhost:4000/seminars';  //Url of the controller 
	
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
    })
  }

 render () {
	return(
	 <>
	    <Header />
		<main>
		  <h1> Seminars list</h1>
		  
		  <div className="row">
		  {/*List of seminar from the state variable*/}
          <div className="col-12 col-sm-6"><SeminarList seminars={this.state.seminars}
            updateCurrentSeminar={this.updateCurrentSeminar}/>
          </div>
		  {/*Details of the selected seminar from state variable*/}
          <div className="col-12 col-sm-6"><SeminarDetails seminar={this.state.currentSeminar}/></div>
        </div>
		
		 <div className="row">
		 <div className="col-12 col-sm-4">
		 {/*Link to the page of new seminar creation. This must be created in routes in App component*/}
          <Link to="newSeminar" > Add new seminar </Link>
		  </div>
		  {/*Link to the page of seminar removal*/}
		  <div className="col-12 col-sm-4">
          <Link to="removeSeminar" > Remove a seminar </Link>
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