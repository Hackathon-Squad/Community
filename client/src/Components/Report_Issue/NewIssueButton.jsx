import React from 'react';
import Button from '@material-ui/core/Button';
import '../../App.css';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { Link } from 'react-router-dom';
import myTheme from './MyTheme';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';

export default function NewIssueButton({title,location, likes}) {
    return (
        <div className="overlayHolder">


                <ThemeProvider theme={myTheme}>
                    <Button variant="contained" color="secondary" id="newIssueButton" component={Link} to={'/form1'}>
                        <Typography variant="h6" style={{fontFamily: 'Patua One'}}>
                                New Issue
                        </Typography>
                    </Button>
                </ThemeProvider>


        </div>
    );
}