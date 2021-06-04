import React from 'react';
//This component shows the details of the selected seminar
const SeminarDetails = (props) => {
    return (
	 <>
         <h2 >{props.seminar.title} details</h2>
       
            <div >
			{/* <img src="soccer.jpeg" alt="Soccer player"/>*/}
                <p>Content: {props.seminar.content}</p>
                <p>Date: {props.seminar.date}</p>
                <p>Location: {props.seminar.place}</p>
					{/*List of users*/}
				<p>Users: {props.seminar.users}</p>
				    {/*List of topics*/}
				 <p>Topics: {props.seminar.topics}</p>
                
            </div>
       
      </>
    );
}
 
export default SeminarDetails;