import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

//Home page of the website
function Home(){
	return(
	<>
		<Header />
		<main>
		  <h1> Welcome to the home page of our workshop</h1>
		</main>
		<Footer />
	</>
	);
}

export default Home;