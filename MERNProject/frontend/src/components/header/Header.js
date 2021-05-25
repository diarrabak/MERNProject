import React from 'react';
import {Link} from 'react-router-dom';
function Header(){
	return(
	<header>
	<div id="logo"><Link to="/" >React<span>Masters</span></Link></div>
		<nav>
		<ul>
		   <li><Link to="/" > Home</Link></li>
		   <li><Link to="/about" >About us</Link></li>
		   <li><Link to="/author" >Author</Link></li>
		   <li><Link to="/program" >Program</Link></li>
		   <li> <Link to="/registration" >Registration</Link></li>
		   <li><Link to="/contact" >Contact</Link></li>
		   </ul>
		</nav>
	</header>
	);
}

export default Header;
