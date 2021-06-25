import React from 'react';
//Component used to display the list of all the seminars
const SeminarList = (props) => {
	
    return ( 
    
        <ul className="list-group">
            <h2>Current Seminars</h2>
			{/*seminars are defined as state variable in the seminar component*/}
            {props.seminars.map((item,id) => (
               <li className="list-item" key={id}> 
			   {/*Each time a seminar is clicked, its details appears */}
			        <a href="#!" className="list-group-item" 
					
                    onClick={props.updateCurrentSeminar.bind(this,item)} >{item.title}</a>
				</li>
            ))}
        </ul>
   
    );
}
 
export default SeminarList;
