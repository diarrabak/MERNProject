import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Author from '../authors/Author';
import {Link} from 'react-router-dom';
import frontImage from '../images/conf-img1.jpg';
//Home page of the website
function Home(){
	return(
	<>
		<Header />
		<main className="home">
		 <img className="home-image" src={frontImage} alt={'front page image'} />
		 
		  <h1> Welcome to ReactMasters workshop</h1>
		  
		  <h2> 
			This series of seminars covers all the current progresses in web development industry.
		    </h2>
			
			<Author />
			
			<h3> <Link to="seminar">Discover the list of seminars </Link></h3>
			<h3><Link to="#"> Choose from the poposed topics </Link></h3>
			<h3><Link to="user"> See the list of attendees </Link></h3>
			<h3><Link to="user/newUser"> Register to attend</Link></h3>
			
		</main>
		<Footer />
	</>
	);
}

export default Home;