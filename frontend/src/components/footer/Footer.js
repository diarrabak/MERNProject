import React from 'react';
import {Link} from 'react-router-dom';

/*Footer file with the copy right and social links.
This component is pasted on all the pages */

function Footer(){
	return(
		<footer>
			<div className="row">
				<ul className="col-12">
				   <li><Link to="" > LinkedIn</Link> </li>
					<li><Link to="" >GitHub</Link> </li>
				</ul>
				<p className="col-12">&copy; ReactMasters, {new Date().getFullYear()}</p>
			</div>
		</footer>
	);
}

export default Footer;