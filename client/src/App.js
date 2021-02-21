import React, {useState} from "react";
import Map from "./Components/Map/Map";
import "./App.css";
import IssuesDrawer from "./Components/Issues_Drawer/IssuesDrawer";
import { BrowserRouter, Route } from "react-router-dom";
import ReportButton from "./Components/Report_Issue/ReportButton";
import CssBaseline from "@material-ui/core/CssBaseline";
import { PinProvider } from './PinContext.js';

export default function App() {
  return (
    <PinProvider>
      <BrowserRouter>
        <div className="root">
          <CssBaseline />
          <IssuesDrawer />
          <Map />
          <ReportButton />
        </div>
      </BrowserRouter>
    </PinProvider>
  )
}
