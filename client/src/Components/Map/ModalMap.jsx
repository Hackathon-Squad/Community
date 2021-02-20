import React, { useState } from "react";
import ReactMapGL from "react-map-gl";


const Map = () => {
    const [viewport, setViewport] = useState({
      width: "100vw",
      height: "100vh",
      latitude: 32.8801,
      longitude: -117.234,
      zoom: 12,
    });
  
    return (
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      />
    );
  };
  
  export default Map;