import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import '../../App.css';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { Link } from 'react-router-dom';
import myTheme from './MyTheme';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import CardModal from './Modal';
import './form.css';

const ReportButton = () => {

    const [show, setShow] = useState(false);
    const handleClick = () => setShow(true);

    return (
        <div className="overlayHolder">

                <ThemeProvider theme={myTheme}>
                    <Button variant="contained" color="secondary" id="newIssueButton" onClick={handleClick} >
                        <Typography variant="h6" style={{fontFamily: 'Patua One'}}>
                                New Report
                        </Typography>
                        <CardModal show={show} setShow={setShow}/>
                    </Button>
                </ThemeProvider>


        </div>
    );
};


export default ReportButton;