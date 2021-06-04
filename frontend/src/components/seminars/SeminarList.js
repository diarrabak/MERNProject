import React from 'react';
//Component used to display the list of all the seminars
const SeminarList = (props) => {
	
    return ( 
    
        <ul className="list-group">
            <h2>Seminars</h2>
			{/*seminars are defined as state variable in the seminar component*/}
            {props.seminars.map((item) => (
               <li className="list-item"> 
			   {/*Each time a seminar is clicked, its details appears */}
			        <a href="#" className="list-item" key={item._id}
					
                    onClick={props.updateCurrentSeminar.bind(this,item)}>{item.title}</a>
				</li>
            ))}
        </ul>
   
    );
}
 
export default SeminarList;
