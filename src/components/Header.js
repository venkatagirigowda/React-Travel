import React, { useState } from "react";
import { Autocomplete} from "@react-google-maps/api";

const Header = ({setCoordinates}) => {
  const [autocomplete, setAutocomplete] = useState(null);
  const onLoad = (autoC) => setAutocomplete(autoC);
  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({lat, lng});
  };
  return (
    <div className="header">
      <h2>Traveler's Buddy</h2>
     
      <div className="headersearch">
        <label>
          <h4>Search New Places:</h4>
        </label>
        <Autocomplete
        onLoad={onLoad}
        onPlaceChanged={onPlaceChanged}
      >
        <>
          <input style={{width:'50%'}} type="text" placeholder="Search New Places.." />
          <button style={{width:'30%'}}>Search</button>
        </>
        </Autocomplete>
      </div>
      
    </div>
  );
};

export default Header;
