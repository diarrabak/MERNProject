import React from 'react';
//This component shows the details of the selected seminar
const SeminarDetails = (props) => {
    return (
	 <>
         <h2 >Details of {props.seminar.title} </h2>
       
            <div >
			{/* <img src="soccer.jpeg" alt="Soccer player"/>*/}
                <p>Content: {props.seminar.content}</p>
                <p>Date: {props.seminar.date}</p>
                <p>Location: {props.seminar.place}</p>
					{/*List of */}
					<h3>List of users</h3>
					
				     <ul className="list-group">
				       {props.users.map((item,id) => (
                        <li className="list-group-item" key={id}> 
					
					   {item.first_name} {item.last_name}
				         </li>
                       ))}
					</ul>
				
				
				
				    {/*List of topics
					<p>Topics: {props.seminar.topics}</p>*/}
				   <h3>List of topics</h3>
				   <ul className="list-group">
				       {props.topics.map((item,id) => (
                        <li className="list-group-item" key={id}> 
					
					   {item.topic_name}
				         </li>
                       ))}
					</ul>
					
				 
				    {/*List of reviews
					
					<p>Reviews: {props.seminar.reviews}</p>*/}
					<h3>List of reviews</h3>
					<ul className="list-group">
				       {props.reviews.map((item,id) => (
                        <li className="list-group-item" key={id}> 
					
					   Comments:{item.comment} <br/> Rating:{item.rating}
				         </li>
                       ))}
					</ul>
            </div>
       
      </>
    );
}
 
export default SeminarDetails;