import React,{useState} from 'react';
import {Outlet} from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';


import GoogleMapReact from 'google-map-react';

import './CustomMarker.css';

const CustomMarker = (props: any) => {
    const { color, name, id } = props;
    return (
      <div className="marker"
        style={{ backgroundColor: color, cursor: 'pointer'}}
        title={name}
      />
    );
  };
  
  
  
  const SimpleMap = (props: any) => {
    const [center, setCenter] = useState({lat: 43.651070, lng: -79.347015 });
    const [zoom, setZoom] = useState(8);
    return (
        <div style={{ height: '600px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'Your API key here' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <CustomMarker
            lat={43.651070}
            lng={-79.347015}
            name="ReactMasters office"
            color="red"
          />
        </GoogleMapReact>
      </div>
    );
}
 

function About(){
	return(
	<>
	   <Header />
	   <main>
	   <Outlet/>
		  <h1> About us</h1>
		  <div classname="row">
			  <p className="col-12"> 
				  We are a group of junior web programmers specilaized in MERN stack and we provide support for any inductrial or personal project in this domain.
				  We are located in the center of Toronto ciy, Ontario, Canada.
				  Our office is open from Monday to tuesday from 8am to 6pm.
			  </p>
			  <div className="col-12">
			     < SimpleMap />
			  </div>
		  </div>
		</main>
		<Footer />
	</>
	);
}
export default About;

//Sources: This API code comes from this website: https://levelup.gitconnected.com/reactjs-google-maps-with-custom-marker-ece0c7d184c4