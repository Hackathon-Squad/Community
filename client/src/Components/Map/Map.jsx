import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';  
import './index.css';

function Map() {
    console.log("TOKEN:");
    console.log(process.env.REACT_APP_MAPBOX_ACCESS_TOKEN);


    const [viewport, setViewport] = useState({
      width: '100vw',
      height: '100vh',
      latitude: 32.8801,
      longitude: -117.2340,
      zoom: 12
    });
  
    return (
      <ReactMapGL 
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle='mapbox://styles/mapbox/streets-v11'
        onViewportChange={nextViewport => setViewport(nextViewport)}
      />
    );
  }

  export default Map;