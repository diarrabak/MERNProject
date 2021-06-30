import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import {Link} from 'react-router-dom';
import axios from 'axios';
//Component used to display the list of all the seminars
class DeleteSeminar extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = {
      seminars: [],        //List of all seminars
      currentSeminarId: '',  //Selected seminar id
    };
	
	//Set the select value to the selected option value
    this.selectChange = this.selectChange.bind(this);
  }
  
  //Function to update the select value
  selectChange(e) {
    this.setState({ currentSeminarId: e.target.value });
  }
  
  //When the component is active on the DOM
  //The values pulled from database to fill the dropdown menu
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
  

   //Remove the selected seminar from the database
  removeCurrentSeminar() {
         
	//console.log('id='+this.state.currentSeminarId);
    // Seminar removal enpoint from our controllers
   axios.delete('http://localhost:5000/seminar/'+this.state.currentSeminarId);
  }
	
 render () {
 
    return ( 
	
	<>
	 <Header />
		<main>
            <h1>Delete a seminar </h1>
	        <form onSubmit={this.removeCurrentSeminar.bind(this)}>
			  
			  <div className="form-group row">
				   <label className="form-label  col-12 col-sm-2" htmlFor="seminar">Seminar list</label>
				   <div className="col-12 col-sm-6">
				   {/*Select menu filled with the seminars list from the database*/}
					  <select value={this.state.currentSeminarId} onChange={this.selectChange} className="form-control" name="seminar" id="seminar">
					   <option value="">== Choose a seminar == </option>
					   {/*Capitalize the first letter*/}
					  {this.state.seminars.map((item) => (
						<option value={item._id} key={item._id}> {item.title.charAt(0).toUpperCase()+item.title.substring(1)} </option>  
						
						))}
					  </select>
				   </div>
				  
				  <div className="col-12 col-sm-4">
			
				  <input 
				  
				  type="submit" onClick={event =>  window.location.href='/seminar'} className="btn btn-danger" value="Delete"/>
				  </div>
				  </div>
				  
				  <div className="form-group row">
				  {/*Link back to seminar list*/}
				   <div className="offset-sm-6 col-12 col-sm-6">
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
 
export default DeleteSeminar;
