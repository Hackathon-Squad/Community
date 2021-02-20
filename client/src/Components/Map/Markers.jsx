import { Marker } from 'react-map-gl';
import axios from 'axios';
import React, { useState } from 'react';

const MarkerItem = (props) => {

    const [drag, setDrag] = useState({
        lat: 32.8801,
        lon: -117.234,
        move: true
      });
      // const markers = React.useMemo(() => data.map(
        //   city => (
        //     <Marker key={city.name} longitude={city.longitude} latitude={city.latitude} >
        //       <img src="redpin.png" />
        //     </Marker>
        //   )
        // ), [props.data]);
        // {markers}

        const handleDragEnd = async (event) => {
          const lng = event.lngLat[0];
          const lat = event.lngLat[1];

          const head = { 
            headers: {
            "Content-Type": "application/json",
            }
          };

          const body = {
            "longitude" : lng,
            "latitude" : lat,
          };

          const result = await axios.post("/api/create-event", body, head)
          console.log(result);
          setDrag({...drag, move:false, lat:lat, lon:lng})
        };

    return (
        <Marker latitude={drag.lat} longitude={drag.lon} 
          onDragEnd={(event) => handleDragEnd(event)} 
          onDrag={(event) => setDrag({...drag, lat:event.lngLat[1], lon:event.lngLat[0]})}  
          draggable={drag.move}>
             <img src="../../redpin.svg"/>
        </Marker>
    )
}

export default MarkerItem; 