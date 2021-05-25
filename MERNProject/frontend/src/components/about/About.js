import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function About(){
	return(
	<>
	   <Header />
	   <main>
		  <h1> About us</h1>
		  <Outlet/>
		</main>
		<Footer />
	</>
	);
}
export default About;
