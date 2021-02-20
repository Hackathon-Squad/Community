import React from 'react';
import '../../App.css';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {green, blue} from '@material-ui/core/colors';
import myTheme from './MyTheme';


export default function Form() {
    return (
        <div className="overlayHolder">
            <Card id="reportCard">
                <Typography variant="h4" style={{fontFamily: 'Patua One'}}>
                    Report An Issue:
                </Typography>
                <form noValidate autoComplete="off">
              <div id="form-inputs">
                <Box pb={1.87} width="100%">
                  <TextField
                    id="title"
                    required
                    label="Title"
                    variant="outlined"
                    fullWidth={true}
                  />
                </Box>
                <Box pb={1.87} width="100%">
                  <TextField
                    id="Type"
                    required
                    label="Type"
                    variant="outlined"
                    fullWidth={true}
                  />
                </Box>
                <Box pb={1.87} width="100%">
                  <TextField
                    id="Description"
                    required
                    label="Description"
                    variant="outlined"
                    fullWidth={true}
                  />
                </Box>

                <ThemeProvider theme={myTheme}>
                  <Button variant="contained" color="primary" type="submit" id="upload">
                    Upload Image
                  </Button>
                </ThemeProvider>

                {"              "}

                <ThemeProvider theme={myTheme}>
                  <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    id="next"
                  >
                    Next
                  </Button>
                </ThemeProvider>

              </div>
            </form>
            </Card>
        </div>
    );
}