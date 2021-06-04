import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import picture from '../images/staff1.jpg';
import picture1 from '../images/staff2.jpg';
import picture2 from '../images/staff3.jpg';
import picture3 from '../images/staff4.jpg';
import picture4 from '../images/staff5.jpg';
import picture5 from '../images/staff6.jpg';

//This function is used to create an other with basic information
function SingleAuthor({firstName, lastName,experience, speciality, picture})
{
	/*Using Bootstrap  for responsiveness*/
	return(
	
	< div className="author col-12 col-sm-6">
	<img src={picture} alt={"Picture of author "+ firstName} />
	<div> First name: {firstName} </div>
	<div> Last name: {lastName} </div>
	<div> Experience: {experience} years</div>
	<div> Speciality: {speciality} </div>
	
	</div>
	);
}
function Author(){
	
	  /*Using Bootstrap for responsiveness*/
	return(
	<>
	    <Header />
		<main>
		  <h1> Workshop Presenters</h1>
		
		  <div className="row">
		  
		    <SingleAuthor firstName="John" lastName="Mandela" experience="6" speciality="Backend expert"  picture={picture}/>
		    <SingleAuthor firstName="Ohuru" lastName="Obama" experience="3" speciality="Frontend expert"  picture={picture1}/>
		    <SingleAuthor firstName="Paulina" lastName="Wright" experience="4" speciality="Designer"  picture={picture3}/>
		    <SingleAuthor firstName="Michelle" lastName="Will" experience="5" speciality="UX expert"  picture={picture2}/>
			<SingleAuthor firstName="Amanda" lastName="Diop" experience="6" speciality="Full stack"  picture={picture4}/>
		    <SingleAuthor firstName="Fanta" lastName="Trudeau" experience="8" speciality="Manager"  picture={picture5}/>
			
			 </div>
		</main>
		<Footer />
	</>
	);
}

export default Author;