import React from 'react';
import '../../App.css';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

export default function Form() {
    return (
        <div id="formHolder">
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
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  id="next"
                >
                  Next
                </Button>
              </div>
            </form>
            </Card>
        </div>
    );
}