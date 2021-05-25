import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Author from './components/authors/Author';
import Program from './components/program/Program';
import Registration from './components/registration/Registration';
import History from './components/history/History';
import Team from './components/team/Team';
import Contact from './components/contact/Contact';

function App() {
	
	return (
		<div className="App">
		
		<Routes>
		// <Route path="/" >
		// <Home />
		// </Route>
		
		// <Route path="/home">
		// <Home />
		// </Route>
		
		<Route path="/about">
		  <About /> 
		    <Route path="history">
			   <History />
			 </Route>
		       <Route path="team">
			 <Team />
			 </Route>
		</Route>

		<Route path="/author">
		<Author />
		</Route>
		
		<Route path="/program" >
		<Program />
		</Route>
		
		<Route path="/registration">
		 <Registration />
		 </Route>
		 
		<Route path="/contact">
		<Contact />
		</Route>
		
		</Routes>
		</div>
		
	);
}

export default App;
