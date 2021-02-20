import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Map from './Components/Map/Map';
import Form from './Components/Report_Issue/Form';
import './App.css';
import IssuesDrawer from './Components/Issues_Drawer/IssuesDrawer';
import NewIssueButton from './Components/Report_Issue/NewIssueButton';
import { BrowserRouter, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
    <div className="root">
      <IssuesDrawer/>
      <Map/>
      <div className="content">
        <Route path="/" exact component={NewIssueButton} />
        <Route path="/form1" exact component={Form} />
      </div>
    </div>
    </BrowserRouter>
  );
}