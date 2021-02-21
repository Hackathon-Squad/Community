import * as React from "react";
import { useState, useEffect } from "react";
import ReactMapGL, { Marker, FlyToInterpolator, Popup } from "react-map-gl";
import axios from "axios";
import img from "../../graphics/redpin.svg";
import * as d3 from "d3";
import "../../App.css";

const Map = () => {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 32.8801,
    longitude: -117.234,
    zoom: 12,
  });

  useEffect(() => loadEvents(), []);

  const [markers, setMarkers] = useState(null);
  const [displayPopup, setDisplayPopup] = useState({
    display: false,
    latitude: 32.8801,
    longitude: -117.234,
    imageURL: "",
    title: "",
    description: "",
  });

  const loadEvents = async () => {
    const result = await axios.get("/api/posts");
    setMarkers(result.data);
  };

  const handleClick = (e) => {
    setDisplayPopup(true);
    setDisplayPopup({
      display: true,
      latitude: e.coordinates.latitude,
      longitude: e.coordinates.longitude,
      imageURL: e.imageURL,
      title: e.title,
      description: e.description,
    });
    setViewport({
      ...viewport,
      longitude: e.coordinates.longitude,
      latitude: e.coordinates.latitude,
      zoom: 16,
      transitionDuration: 2000,
      transitionInterpolator: new FlyToInterpolator(),
      transitionEasing: d3.easeCubicInOut,
    });
  };

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {markers &&
        markers.map((city) => (
          <Marker
            longitude={city.coordinates.longitude}
            latitude={city.coordinates.latitude}
            onClick={() => handleClick(city)}
          >
            <img src={img} />
          </Marker>
        ))}
      {displayPopup.display && (
        <Popup
          latitude={displayPopup.latitude}
          longitude={displayPopup.longitude}
          closeButton
          closeOnClick
          onClose={() =>
            setDisplayPopup({
              display: false,
              latitude: 32.8801,
              longitude: -117.234,
              imageURL: "",
              title: "",
              description: "",
            })
          }
          anchor="bottom"
          offsetLeft={10}
          tipSize={10}
        >
          <div>{displayPopup.title}</div>
          <div>{displayPopup.description}</div>
          <img
            src="https://storage.googleapis.com/community-post-images/2a911e90-3580-4bd4-b050-25fd5f53d247"
            style={{ objectFit: "contain", width: 500 }}
            className="pin"
          />
        </Popup>
      )}
    </ReactMapGL>
  );
};

export default Map;
