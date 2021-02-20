// import React from 'react';
// import '../../App.css';
// import Card from '@material-ui/core/Card';
// import { Typography } from '@material-ui/core';
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import Box from "@material-ui/core/Box";
// import { ThemeProvider } from '@material-ui/core/styles';
// import myTheme from './MyTheme';
// import { Link } from 'react-router-dom';
// import {useHistory} from 'react-router-dom';

// export default function Form2() {
//     return (
//         <div className="overlayHolder">
//             <Card id="reportCard">
//                 <Typography variant="h6" style={{fontFamily: 'Patua One'}}>
//                     Drag pin to choose your issue's location:
//                 </Typography>
//             </Card>
//             <ThemeProvider theme={myTheme}>
//                 <Button variant="contained" color="secondary" id="doneReportingButton" component={Link} to={'/'}>
//                     <Typography variant="h6" style={{fontFamily: 'Patua One'}}>
//                             Done
//                     </Typography>
//                 </Button>
//             </ThemeProvider>
//         </div>
//     );
// }