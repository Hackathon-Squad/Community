import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL, { Marker, FlyToInterpolator } from "react-map-gl";
import axios from 'axios';
import img from '../../graphics/redpin.svg';
import * as d3 from "d3";

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

  const handleClick = (e) => {
    setViewport({
      ...viewport,
      longitude: e.longitude,
      latitude: e.latitude,
      zoom: 16,
      transitionDuration: 2000,
      transitionInterpolator: new FlyToInterpolator(),
      transitionEasing: d3.easeCubicInOut
    });
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
          
        <Marker longitude={city.coordinates.longitude} latitude={city.coordinates.latitude} onClick={() => handleClick(city.coordinates)}>
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
