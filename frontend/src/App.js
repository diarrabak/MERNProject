import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Author from './components/authors/Author';
import Seminar from './components/seminars/Seminar';
import SeminarForm from './components/seminars/SeminarForm';
import DeleteSeminar from './components/seminars/DeleteSeminar';
import UpdateSeminar from './components/seminars/UpdateSeminar';
import Registration from './components/registration/Registration';
import History from './components/history/History';
import Team from './components/team/Team';
import User from './components/users/User';
import Login from './components/users/Login';
import UserForm from './components/users/UserForm';
import DeleteUser from './components/users/DeleteUser';
import UpdateUser from './components/users/UpdateUser';
import Role from './components/role/Role';
import RoleForm from './components/role/RoleForm';
import DeleteRole from './components/role/DeleteRole';
import UpdateRole from './components/role/UpdateRole';
import Contact from './components/contact/Contact';
import Error from './components/error/Error';
//main component managing the pages routing on the browser
function App (){

	return (
		<div className="App">
		{/*Home page is at the root*/}
		<Routes>
		<Route path="/" >
		<Home />
		</Route>

		<Route path="/home">
		<Home />
		</Route>
		{/*About page is at the root*/}
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


		<Route path="/seminar" >
		<Seminar />

		   <Route path="/newSeminar">
		    <SeminarForm />
		   </Route>

		    <Route path="/deleteSeminar">
		    <DeleteSeminar />
		   </Route>

		   <Route path="/updateSeminar">
		    <UpdateSeminar />
		   </Route>

		</Route>

		<Route path="/user" >
		<User />

		   <Route path="/newUser">
		    <UserForm />
		   </Route>

		    <Route path="/deleteUser">
		    <DeleteUser />
		   </Route>

		   <Route path="/updateUser">
		    <UpdateUser />
		   </Route>

		</Route>

		 <Route path="/Login"> 
			<Login /> 
		/</Route> 



		<Route path="/role" >
		<Role />

		   <Route path="/newRole">
		    <RoleForm />
		   </Route>

		    <Route path="/deleteRole">
		    <DeleteRole />
		   </Route>

		   <Route path="/updateRole">
		    <UpdateRole />
		   </Route>

		</Route>

		<Route path="/registration">
		 <Registration />


		 </Route>

		<Route path="/contact">
		<Contact />
		</Route>

		{/*Error page is at the root*/}
		<Route path="*">
		   <Error />
		</Route>

		</Routes>


		</div>

	);
 }


export default App;
