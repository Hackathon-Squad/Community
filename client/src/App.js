import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Map from './Components/Map/Map';
import Form from './Components/Report_Issue/Form';
import Form2 from './Components/Report_Issue/Form2';
import './App.css';
import IssuesDrawer from './Components/Issues_Drawer/IssuesDrawer';
import NewReportButton from './Components/Report_Issue/NewIssueButton';
import { BrowserRouter, Route } from 'react-router-dom';
import ReportButton from './Components/Report_Issue/ReportButton';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function App() {
  return (
    <BrowserRouter>
    <div className="root">
      <CssBaseline/>
      <IssuesDrawer/>
      <Map/>
      <ReportButton />
    </div>
    </BrowserRouter>
  );
}