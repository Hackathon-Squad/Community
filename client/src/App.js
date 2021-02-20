import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Map from './Components/Map/Map.jsx';
import Form from './Components/Report_Issue/Form.js';
import './App.css';
import IssuesDrawer from './Components/Issues_Drawer/IssuesDrawer.js';

export default function App() {
  return (
    <div className="root">
      <IssuesDrawer/>
      <Map/>
      <Form/>
    </div>
  );
}