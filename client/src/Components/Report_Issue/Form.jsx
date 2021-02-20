import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { ThemeProvider } from '@material-ui/core/styles';
import myTheme from './MyTheme';
import {useHistory} from 'react-router-dom';
import { Email } from '@material-ui/icons';
import ReactMapGL from "react-map-gl";
import Paper from "@material-ui/core/Paper"
import './form.css';
import MarkerItem from '../Map/Markers';

const Form = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    triedTitle: false,
    triedDescription: false,
  });

  const [viewport, setViewport] = useState({
    width: "50vw",
    height: "50vh",
    latitude: 32.8801,
    longitude: -117.234,
    zoom: 12,
  });

  const {
    title,
    description,
    triedTitle,
    triedDescription,
  } = formData;

 
  const titleTried = () => {
    setFormData({ ...formData, triedTitle: true });
  };
  const descriptionTried = () => {
    setFormData({ ...formData, triedDescription: true });
  };
  const onChangeTitle = (e) => {
    setFormData({ ...formData, title: e.target.value });
  };
  const onChangeDescription = (e) => {
    setFormData({ ...formData, description: e.target.value });
  };
  const checkTitle = () => {
    return title.length > 0;
  };
  const checkDescription = () => {
    return description.length > 0;
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (checkTitle() && checkDescription()) {
      history.push("/form2");
    } else {
      setFormData({ ...formData, triedTitle: true, triedDescription: true });
    }

    // const lng = e.lngLat[0];
    //       const lat = e.lngLat[1];

    //       const head = { 
    //         headers: {
    //         "Content-Type": "application/json",
    //         }
    //       };

    //       const body = {
    //         "longitude" : lng,
    //         "latitude" : lat,
    //       };

    //       const result = await axios.post("/api/create-event", body, head)
    //       console.log(result);
    //       setDrag({...drag, move:false, lat:lat, lon:lng})


  }


    return (
        <div className="Modal">

            <Card id="reportCard" className="Form">
                <Typography variant="h4" style={{fontFamily: 'Patua One', marginBottom:15}}>
                    Report An Issue:
                </Typography>
                <form noValidate autoComplete="off" onSubmit={onSubmit}>
              <div id="form-inputs">
                <Box pb={1.87} width="100%">
                  <TextField
                    id="title"
                    required
                    label="Title"
                    variant="outlined"
                    onChange={onChangeTitle}
                    error={!checkTitle() && triedTitle}
                    onBlur={titleTried}
                    fullWidth={true}
                  />
                </Box>
                <Box pb={1.87} width="100%">
                  <TextField
                    id="Description"
                    required
                    label="Description"
                    variant="outlined"
                    onChange={onChangeDescription}
                    onBlur={descriptionTried}
                    error={!checkDescription() && triedDescription}
                    fullWidth={true}
                  />
                </Box>

              </div>
            </form>

            <div className="Map">
              <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                onViewportChange={(nextViewport) => setViewport(nextViewport)}
              > 
                <MarkerItem/>
              </ReactMapGL> 

            </div>

            <ThemeProvider theme={myTheme}>
              <span
                onClick={() => global.document.getElementById("input").click()}
              >
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  id="upload"
                >
                  Upload Image
                </Button>
              </span>
            </ThemeProvider>

            {"              "}
            <br/>
            
            <div classNasme="Buttons">

            <ThemeProvider theme={myTheme}>
                  <Button variant="contained" color="primary" type="submit" id="upload">
                    Upload Image
                  </Button>
                </ThemeProvider>

                {"     "}
                
              <ThemeProvider theme={myTheme}>
                    <Button
                      variant="contained"
                      color="secondary"
                      type="submit"
                      id="next"
               >
                 Submit
                </Button>
              </ThemeProvider>
            </div>
            </Card>
            
         
        </div>


    );
}

export default Form;


{/* <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
          /> */}
