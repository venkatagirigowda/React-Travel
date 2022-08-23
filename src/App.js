import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Map from "./components/Map";
const App = () => {
  const [datas, setData] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  console.log(bounds);
  console.log(datas);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((coords) => {
      const { latitude, longitude } = coords.coords;
      console.log(latitude, longitude);
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_KEY,
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };
  const getdata = async () => {
    const response = await fetch(
      `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary?bl_latitude=${bounds.sw.lat}&tr_latitude=${bounds.ne.lat}&bl_longitude=${bounds.sw.lng}&tr_longitude=${bounds.ne.lng}`,
      options
    );
    const data = await response.json();
    console.log(data.data);
    setData(data.data);
  };
  useEffect(() => {
    getdata();
  }, [coordinates, bounds]);
  return (
    <div>
      <Header setCoordinates={setCoordinates} />
      <div className="container">
        <List datas={datas} />
        <Map
          coordinates={coordinates}
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          datas={datas}
        />
      </div>
    </div>
  );
};

export default App;
