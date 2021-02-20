import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import axios from 'axios';
import img from '../../graphics/redpin.svg';

const Map = () => {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 32.8801,
    longitude: -117.234,
    zoom: 12,
  });

  useEffect(() => loadEvents(), [])

  const [markers, setMarkers] = useState(null)

  const loadEvents = async () => {
    const result = await axios.get("/api/posts");
    console.log(result.data);
    setMarkers(result.data);
  }


  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >

     {markers ? 
     ( 
      markers.map(
        city => (
          
        <Marker longitude={city.coordinates.longitude} latitude={city.coordinates.latitude}>
          <img src={img} />
        </Marker>
        
          )
        )
      ) 
      : null}

      
      </ReactMapGL>
  );
};

export default Map;
