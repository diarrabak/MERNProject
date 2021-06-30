import React from 'react';
import {Link} from 'react-router-dom';
//import Login from '../users/Login';

/*Header file with the navigation links.
This component is pasted on all the pages */
function Header(){
	// if (sessionStorage.getItem("username") === null) {
	// 	document.getElementById("username").innerHTML = "Login in";
	// } else {
//		document.getElementById("username").innerHTML = sessionStorage.getItem("username");
	// }
	return(

		<header>
			<div className="row">
			{/*The website logo */}
				<div className="col-12 col-sm-4" id="logo"><Link to="/" >React<span>Masters</span></Link>
				</div>
				{/*Navigation menu */}
				<nav className="col-12 col-sm-8">
					<ul>
					   <li><Link to="/" > Home</Link></li>
					   <li><Link to="/about" >About us</Link></li>
					   {/*<li><Link to="/author" >Author</Link></li>*/}
					   <li><Link to="/seminar" >Seminars</Link></li>
					   <li> <Link to="/user/newUser" >Registration</Link></li>
					   <li><Link to="/contact" >Contact</Link></li>
						 <li id="username"></li>
					</ul>
				</nav>
			</div>
		</header>
	);

}

export default Header;
