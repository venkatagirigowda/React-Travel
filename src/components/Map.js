import React from "react";
import GoogleMapReact from "google-map-react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
export default function Map(props) {
  
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key:process.env.REACT_APP_RAPID_MAPKEY}}
        defaultCenter={props.coordinates}
        center={props.coordinates}
        defaultZoom={10}
        onChange={(e) => {
          console.log(e);
          props.setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          props.setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      >
        
        {props.datas?.map((elem,i) => {
          console.log(elem.latitude)
          return <div className="marker" lat={Number(elem.latitude)} lng={Number(elem.longitude)} key={i}>
            <FontAwesomeIcon className="icon" icon={faLocationDot}  />
          </div>;
        
          
        })}
      </GoogleMapReact>
    </div>
  );
}
